import firebase from "../firebase";

const db = firebase.collection("/UV-Ventas");

class UvVentasDataService {
  getAll() {
    return db;
  }

  create(uvventas) {
    return db.add(uvventas);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new UvVentasDataService();