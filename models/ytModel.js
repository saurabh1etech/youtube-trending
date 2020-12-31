const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const Q = require('q');
let db = "";

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'youtube';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    console.log("Connected successfully to server");

    db = client.db(dbName);

    //client.close();
});

exports.updateVideos = async (getParams) => {

    let deferred = Q.defer();

    await getParams.map(function (element) {
        console.log(element.id);
        if (element.id) {
            db.collection("videos").findOne({ id: element.id }, function (err, data) {
                if (err)
                    deferred.reject(err.name + ': ' + err.message);
                if (data != null) {
                    db.collection("videos").updateOne({ id: element.id }, { $set: element });
                    console.log("Video updated");
                } else {
                    db.collection("videos").insertOne(element);
                    console.log("Video inserted");
                }
            });
        }
    })
    deferred.resolve('true');
    return deferred.promise;
}

exports.getVideosList = () => {
    var deferred = Q.defer();

    db.collection("videos").find({}).toArray(function (err, data) {
        if (err)
            deferred.reject(err.name + ': ' + err.message);
        if (data != null) {
            deferred.resolve(data);
        } else {
            deferred.resolve('');
        }

    });
    return deferred.promise;
}

exports.getVideo = (getParams) => {
    var deferred = Q.defer();

    db.collection("videos").findOne({ id: getParams.id }, function (err, data) {
        if (err)
            deferred.reject(err.name + ': ' + err.message);
        if (data != null) {
            deferred.resolve(data);
        } else {
            deferred.resolve('');
        }

    });
    return deferred.promise;
}

