"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BannerService", {
    enumerable: true,
    get: function() {
        return BannerService;
    }
});
const _common = require("@nestjs/common");
const _nestjsfirebase = require("nestjs-firebase");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let BannerService = class BannerService {
    async getBanner(status) {
        try {
            let snapshot;
            if (status) {
                snapshot = await this.db.collection(this.collections).where('status', '==', status).orderBy('urut').get();
            } else {
                snapshot = await this.db.collection(this.collections).orderBy('status', 'desc').orderBy('urut').get();
            }
            if (!snapshot.empty) {
                const data = snapshot.docs.map((doc)=>({
                        id: doc.id,
                        data: doc.data()
                    }));
                const newData = [];
                data.forEach((item)=>{
                    newData.push({
                        id: item.id,
                        status: item.data.status,
                        title: item.data.title,
                        urut: item.data.urut,
                        image: item.data.image
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
    async getBannerByDocId(id) {
        try {
            const snapshot = await this.db.collection(this.collections).doc(id).get();
            if (snapshot.exists) {
                const documentData = snapshot.data();
                console.log('Document data:', documentData);
                return {
                    data: documentData
                };
            } else {
                console.log('Document does not exist.');
                return null;
            }
        } catch (error) {
            console.log('Error info:', error.errorInfo);
            throw error;
        }
    }
    async createBanner(data) {
        const snapshot = this.db.collection(this.collections);
        try {
            console.log('add:', snapshot);
            return await snapshot.add(data);
        } catch (error) {
            console.log('Error info:', error.errorInfo);
            throw error;
        }
    }
    async updateBanner(id, data) {
        const snapshot = this.db.collection(this.collections).doc(id);
        try {
            console.log('update:', snapshot);
            return await snapshot.update(data);
        } catch (error) {
            console.log('Error info:', error.errorInfo);
            throw error;
        }
    }
    async removeBanner(id) {
        const snapshot = this.db.collection(this.collections).doc(id);
        try {
            console.log('delete:', snapshot);
            return await snapshot.delete();
        } catch (error) {
            console.log('Error info:', error.errorInfo);
            throw error;
        }
    }
    constructor(firebase){
        this.firebase = firebase;
        this.collections = 'banners';
        this.db = this.firebase.firestore;
    }
};
BannerService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _nestjsfirebase.InjectFirebaseAdmin)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _nestjsfirebase.FirebaseAdmin === "undefined" ? Object : _nestjsfirebase.FirebaseAdmin
    ])
], BannerService);
