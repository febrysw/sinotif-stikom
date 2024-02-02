import { Injectable } from '@nestjs/common';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';

@Injectable()
export class PostsService {
  constructor(
    @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin,
  ) {}

  async sendNotif(message) {
    try {
      const response = await this.firebase.messaging.send(message);
      console.log('Successfully sent message:', response);
      return response;
    } catch (error) {
      console.log('Error sending message:', error);
      console.log('Error info:', error.errorInfo);
      throw error; // Re-throw the error to propagate it to the calling function
    }
  }
}
