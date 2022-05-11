module.exports = async function (model, query, data, multiple = false) {
    /**
     * @description This function finds element(s) from the db and update them
     * @param {Model} model - the db model
     * @param {Object | String | Number} query - the document(s) you want to update
     * @param {Object} data - the data you want to save to the db
     * @param {Boolean} multiple - whether we should update multiple documents or not
     */

    if (!multiple)
        return await model.findByIdAndUpdate(query, data, { new: true });
};
