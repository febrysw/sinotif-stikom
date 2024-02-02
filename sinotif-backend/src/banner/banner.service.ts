import { Injectable } from '@nestjs/common';
// import { CreateBannerDto } from './dto/create-banner.dto';
// import { UpdateBannerDto } from './dto/update-banner.dto';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';

@Injectable()
export class BannerService {
  constructor(
    @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin,
  ) {}

  collections = 'banners';
  db = this.firebase.firestore;

  async getBanner(status: string) {
    try {
      let snapshot: any;
      if (status) {
        snapshot = await this.db
          .collection(this.collections)
          .where('status', '==', status)
          .orderBy('urut')
          .get();
      } else {
        snapshot = await this.db
          .collection(this.collections)
          .orderBy('status', 'desc')
          .orderBy('urut')
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
            title: item.data.title,
            urut: item.data.urut,
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

  async getBannerByDocId(id: string) {
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

  async createBanner(data: any) {
    const snapshot = this.db.collection(this.collections);
    try {
      console.log('add:', snapshot);
      return await snapshot.add(data);
    } catch (error) {
      console.log('Error info:', error.errorInfo);
      throw error;
    }
  }

  async updateBanner(id: string, data: any) {
    const snapshot = this.db.collection(this.collections).doc(id);
    try {
      console.log('update:', snapshot);
      return await snapshot.update(data);
    } catch (error) {
      console.log('Error info:', error.errorInfo);
      throw error;
    }
  }

  async removeBanner(id: string) {
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
