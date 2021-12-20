const Util = {
    deepCopy: function (srcObj) {
        try {
            return JSON.parse(JSON.stringify(srcObj));
        } catch (ex) {
            console.log('Deep Copy Failed:' + ex.toString());
            return null;
        }

    },

    deepMerge: function (srcObj, dstObj) {
        var srcObjCopy = this.deepCopy(srcObj);
        var dstObjCopy = this.deepCopy(dstObj);
        if (srcObjCopy == null || dstObjCopy == null) return null;
        return Object.assign(dstObjCopy, srcObjCopy)
    }
}

export default Util;