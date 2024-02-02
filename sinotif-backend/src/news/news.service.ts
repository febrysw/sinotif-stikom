import { Injectable } from '@nestjs/common';
// import { CreateNewsDto } from './dto/create-news.dto';
// import { UpdateNewsDto } from './dto/update-news.dto';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';

@Injectable()
export class NewsService {
  constructor(
    @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin,
  ) {}

  collections = 'news';
  db = this.firebase.firestore;

  async getNews(status: string) {
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
            status: item.data.status,
            date: item.data.date,
            slug: item.data.slug,
            title: item.data.title,
            body: item.data.body,
            image: item.data.image,
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

  async getNewsByDocId(id: string) {
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

  async createNews(data: any) {
    const snapshot = this.db.collection(this.collections);
    try {
      console.log('add:', snapshot);
      return await snapshot.add(data);
    } catch (error) {
      console.log('Error info:', error.errorInfo);
      throw error;
    }
  }

  async updateNews(id: string, data: any) {
    const snapshot = this.db.collection(this.collections).doc(id);
    try {
      console.log('update:', snapshot);
      return await snapshot.update(data);
    } catch (error) {
      console.log('Error info:', error.errorInfo);
      throw error;
    }
  }

  async removeNews(id: string) {
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
