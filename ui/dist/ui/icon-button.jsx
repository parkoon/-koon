var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Loader2 } from 'lucide-react';
import React from 'react';
import { Button } from './button';
var IconButton = function (_a) {
    var icon = _a.icon, _b = _a.variant, variant = _b === void 0 ? 'outlined' : _b, loading = _a.loading, props = __rest(_a, ["icon", "variant", "loading"]);
    return (<Button size="icon" variant={variant} {...props}>
      {loading ? <Loader2 className="h-4 w-4 animate-spin"/> : icon}
    </Button>);
};
export default IconButton;
