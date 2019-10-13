Object.prototype.clone = function () {
    var copy = this.constructor === Array ? [] : {}; //#1

    for (var e in this) {
        if (typeof this[e] === "object") { //#2
            copy[e] = this[e].clone();
        } else if (typeof this[e] === "function") { //#3
            copy[e] = this[e].bind(copy); //#5
        } else { //#4
            copy[e] = this[e];
        }
    }

    return copy;
};
