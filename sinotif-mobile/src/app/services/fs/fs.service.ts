import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: "root",
})
export class FsService {
  constructor(private fs: AngularFirestore) {}

  async setDocument(collection: string, uid: string, data: any) {
    await this.fs.collection(collection).doc(uid).set(data);
  }
}
