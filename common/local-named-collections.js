import {Mongo} from 'meteor/mongo';

Mongo.createUnmanagedCollection = function (name) {
    return new Mongo.Collection(name, {connection: null, defineMutationMethods: false})
};
