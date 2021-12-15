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
        var obj = this.deepCopy(srcObj);
        if (obj == null) return obj;
        return Object.assign(dstObj, srcObj)
    }
}

export default Util;