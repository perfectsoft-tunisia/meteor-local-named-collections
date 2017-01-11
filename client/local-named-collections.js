import {Mongo} from 'meteor/mongo';

Mongo.createSynchronisedNonRemoteCollection = function (name) {
    let collection = new Mongo.Collection(name, {defineMutationMethods: false});

    collection._isRemoteCollection = function () {
        return false;
    };

    return collection;
};
