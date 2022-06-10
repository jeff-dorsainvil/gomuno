module.exports = async function (model, query, multiple = false) {
    /**
     * @description This function finds element(s) from the db and returns them
     * @param {Object} model - the db model
     * @param {Object | String | Number} query - the document(s) you want to update
     * @param {Boolean} multiple - whether we should update multiple documents or not
     */

    if (!multiple) {
        return await model.findOne(query);
    }
};
