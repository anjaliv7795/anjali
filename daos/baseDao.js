var mongodb = require('./MongodDbUtil');

function create(record, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.insert(record, function (err, result) {
        if (!err) {
            callback(null, result.ops[0]);
        } else {
            callback(err, null);
        }
    });
}

function createMany(records, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.insertMany(records, function (err, result) {
        if (!err) {
            callback(null, result.ops[0]);
        } else {
            callback(err, null);
        }
    });
}

function getAll(callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.find({}).toArray(function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getAllDistinct(query, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.distinct(query, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getQuerySingleField(query, skipVal, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    var query1 = {"studentEmail" : ''};
    
    cursor = coll.find(query, query1).sort({'studentEmail' : 1}).skip(skipVal).limit(200);
  
         cursor.toArray(function (err, result) {
            if (!err) {
                callback(null, result);
            } else {
                callback(err, null);
            }
        });
  
}

function getByName(query, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.findOne(query, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getData(query, query1, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.findOne(query, query1, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getById(id, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.findOne({ _id: mongodb.ObjectID(id) }, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });

}

function getByQuery(query, projection, callback) {
    if (typeof projection == "function") {
        callback = projection;
        projection = null;
    }
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());

    var cursor;
    if (projection) {
        var projectionObj = {};
        projection.forEach(function(p) {
            projectionObj[p] = 1;
        });
        cursor = coll.find(query, projectionObj);
    } else {
        cursor = coll.find(query);
        
    }
    
    cursor.toArray(function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });

}

function update(query, detailsToUpdate, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.update(query, { $set: detailsToUpdate }, {multi:false}, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });

}

function updateMultiple(query, detailsToUpdate, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.update(query, { $set: detailsToUpdate }, {multi:true}, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });

}

function updateUnset(query, detailsToUpdate, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.update(query, { $unset: detailsToUpdate }, {multi:false}, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });

}

function updateSetUnset(query, detailsToUpdate, detailsToUnset, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.update(query, { $set: detailsToUpdate, $unset: detailsToUnset }, {multi:false}, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });

}

function updateArrayById(id, elementsToPush, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());

    coll.update({_id: mongodb.ObjectID(id)}, { $push: elementsToPush }, { multi: false }, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}


function updateArrayByQuery(query, elementsToPush, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());

    coll.update(query, { $push: elementsToPush }, { multi: false }, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function removeItemInArrayByQuery(query, elementToDelete, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());

    coll.update(query, { $pull: elementToDelete }, { multi: false }, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function updateById(id, detailsToUpdate, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());

    var deletedId;
    if (detailsToUpdate._id) {
        deletedId = detailsToUpdate._id;
        delete detailsToUpdate._id;
    }

    coll.update({_id: mongodb.ObjectID(id)}, { $set: detailsToUpdate }, {multi:false}, function (err, result) {
        if (deletedId) {
            detailsToUpdate._id = deletedId;
        }
        
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });

}

function updateMany(query, detailsToUpdate, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.updateMany(query, { $set: detailsToUpdate }, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });

}

function remove(id, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.remove({_id: mongodb.ObjectID(id)} , function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function removeByQuery(query, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.remove(query, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

function getMongoDb() {
    return mongodb;
}

function bulkWrite(bulk, callback) {
    var db = mongodb.getDb();

    var coll = db.collection(this.getCollectionName());

    coll.bulkWrite(bulk, function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });    
};

function getDb() {
    return monogdb.getDb();
}

module.exports = function BaseDao(collectionName) {
    return {
        create: create,
        createMany: createMany,
        getAll: getAll,
        getById: getById, 
        getQuerySingleField: getQuerySingleField, 
        getAllDistinct: getAllDistinct,
        getByName: getByName,
        getData: getData,
        getByQuery: getByQuery,
        update: update,
        updateMultiple : updateMultiple,
        updateById: updateById,
        updateMany: updateMany,
        updateUnset: updateUnset,
        updateSetUnset: updateSetUnset,
        updateArrayById: updateArrayById,
        updateArrayByQuery: updateArrayByQuery,
        removeItemInArrayByQuery: removeItemInArrayByQuery,
        remove: remove,
        removeByQuery: removeByQuery,
        bulkWrite: bulkWrite,
        getDb : getDb,
        getCollectionName: function () {
            return collectionName;
        },
    };
};
  