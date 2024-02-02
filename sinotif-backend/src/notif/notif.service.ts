import { Injectable } from '@nestjs/common';
import { CreateNotifDto } from './dto/create-notif.dto';
import { UpdateNotifDto } from './dto/update-notif.dto';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class NotifService {
  constructor(
    @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin,
    private postsService: PostsService,
  ) {}

  collections = 'notifications';
  db = this.firebase.firestore;

  async getNotif(status: string) {
    try {
      let snapshot: any;
      if (status) {
        snapshot = await this.db
          .collection(this.collections)
          .where('status', '==', status)
          .orderBy('date', 'desc')
          .get();
      } else {
        snapshot = await this.db
          .collection(this.collections)
          .orderBy('status', 'desc')
          .orderBy('date', 'desc')
          .get();
      }

      if (!snapshot.empty) {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        const newData = [];
        data.forEach((item) => {
          newData.push({
            id: item.id,
            date: item.data.date,
            status: item.data.status,
            title: item.data.notification.title,
            body: item.data.notification.body,
            image: item.data.notification.image,
          });
        });

        return newData;
      } else {
        console.log('Document does not exist.');
        return null;
      }
    } catch (error) {
      console.log('Error info:', error.errorInfo);
      throw error;
    }
  }

  async getNotifByDocId(id: string) {
    try {
      const snapshot = await this.db.collection(this.collections).doc(id).get();
      if (snapshot.exists) {
        const documentData = snapshot.data();
        console.log('Document data:', documentData);

        return { data: documentData };
      } else {
        console.log('Document does not exist.');
        return null;
      }
    } catch (error) {
      console.log('Error info:', error.errorInfo);
      throw error;
    }
  }

  async createNotif(data: any) {
    const snapshot = this.db.collection(this.collections);
    try {
      const notifs = await snapshot.add(data);
      const newDocumentId = notifs.id;
      console.log('createNotif => ', newDocumentId);

      const newData = {
        type: 'internal',
        link: `/app/tabs/info/${newDocumentId}`,
      };

      const dataNotif = {
        topic: data.topic,
        data: newData,
        notification: data.notification,
      };
      return await this.postsService.sendNotif(dataNotif);
    } catch (error) {
      console.log('Error info:', error.errorInfo);
      throw error;
    }
  }

  async updateNotif(id: string, data: any) {
    const snapshot = this.db.collection(this.collections).doc(id);
    try {
      // console.log('update:', snapshot);
      const newData = {
        data: {
          type: 'internal',
          link: `/app/tabs/info/${id}`,
        },
      };

      await snapshot.update(data);

      const dataNotif = {
        topic: data.topic,
        data: newData,
        notification: data.notification,
      };
      return await this.postsService.sendNotif(dataNotif);
    } catch (error) {
      console.log('Error info:', error.errorInfo);
      throw error;
    }
  }

  async removeNotif(id: string) {
    const snapshot = this.db.collection(this.collections).doc(id);
    try {
      console.log('delete:', snapshot);
      return await snapshot.delete();
    } catch (error) {
      console.log('Error info:', error.errorInfo);
      throw error;
    }
  }
}
