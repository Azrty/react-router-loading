import $, { createContext as Oe, useMemo as U, useContext as re, useState as oe, useRef as Pe, useEffect as W, useCallback as te } from "react";
import Ge from "topbar";
import { Route as qe, matchRoutes as Je, useRoutes as Ve, UNSAFE_LocationContext as ze, useLocation as He, useNavigationType as Xe } from "react-router";
const F = Oe({
  start: () => {
  },
  done: () => {
  },
  restart: () => {
  }
});
F.displayName = "LoadingContext";
const ae = Oe(!1);
ae.displayName = "LoadingGetterContext";
var M = { exports: {} }, k = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function Be() {
  if (je) return k;
  je = 1;
  var i = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function a(c, u, f) {
    var E = null;
    if (f !== void 0 && (E = "" + f), u.key !== void 0 && (E = "" + u.key), "key" in u) {
      f = {};
      for (var m in u)
        m !== "key" && (f[m] = u[m]);
    } else f = u;
    return u = f.ref, {
      $$typeof: i,
      type: c,
      key: E,
      ref: u !== void 0 ? u : null,
      props: f
    };
  }
  return k.Fragment = n, k.jsx = a, k.jsxs = a, k;
}
var A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function Ie() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === We ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case z:
          return "Fragment";
        case Le:
          return "Portal";
        case le:
          return "Profiler";
        case ce:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case fe:
            return (e.displayName || "Context") + ".Provider";
          case ue:
            return (e._context.displayName || "Context") + ".Consumer";
          case H:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case I:
            return t = e.displayName || null, t !== null ? t : i(e.type) || "Memo";
          case Z:
            t = e._payload, e = e._init;
            try {
              return i(e(t));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function a(e) {
      try {
        n(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var r = t.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), n(e);
      }
    }
    function c() {
    }
    function u() {
      if (S === 0) {
        Ee = console.log, ge = console.info, be = console.warn, me = console.error, pe = console.group, he = console.groupCollapsed, xe = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: c,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      S++;
    }
    function f() {
      if (S--, S === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: _({}, e, { value: Ee }),
          info: _({}, e, { value: ge }),
          warn: _({}, e, { value: be }),
          error: _({}, e, { value: me }),
          group: _({}, e, { value: pe }),
          groupCollapsed: _({}, e, { value: he }),
          groupEnd: _({}, e, { value: xe })
        });
      }
      0 > S && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function E(e) {
      if (K === void 0)
        try {
          throw Error();
        } catch (r) {
          var t = r.stack.trim().match(/\n( *(at )?)/);
          K = t && t[1] || "", ye = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + K + e + ye;
    }
    function m(e, t) {
      if (!e || D) return "";
      var r = ee.get(e);
      if (r !== void 0) return r;
      D = !0, r = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var s = null;
      s = T.H, T.H = null, u();
      try {
        var v = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var y = function() {
                  throw Error();
                };
                if (Object.defineProperty(y.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(y, []);
                  } catch (x) {
                    var P = x;
                  }
                  Reflect.construct(e, [], y);
                } else {
                  try {
                    y.call();
                  } catch (x) {
                    P = x;
                  }
                  e.call(y.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  P = x;
                }
                (y = e()) && typeof y.catch == "function" && y.catch(function() {
                });
              }
            } catch (x) {
              if (x && P && typeof x.stack == "string")
                return [x.stack, P.stack];
            }
            return [null, null];
          }
        };
        v.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var l = Object.getOwnPropertyDescriptor(
          v.DetermineComponentFrameRoot,
          "name"
        );
        l && l.configurable && Object.defineProperty(
          v.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = v.DetermineComponentFrameRoot(), h = o[0], w = o[1];
        if (h && w) {
          var g = h.split(`
`), C = w.split(`
`);
          for (o = l = 0; l < g.length && !g[l].includes(
            "DetermineComponentFrameRoot"
          ); )
            l++;
          for (; o < C.length && !C[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (l === g.length || o === C.length)
            for (l = g.length - 1, o = C.length - 1; 1 <= l && 0 <= o && g[l] !== C[o]; )
              o--;
          for (; 1 <= l && 0 <= o; l--, o--)
            if (g[l] !== C[o]) {
              if (l !== 1 || o !== 1)
                do
                  if (l--, o--, 0 > o || g[l] !== C[o]) {
                    var N = `
` + g[l].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && ee.set(e, N), N;
                  }
                while (1 <= l && 0 <= o);
              break;
            }
        }
      } finally {
        D = !1, T.H = s, f(), Error.prepareStackTrace = r;
      }
      return g = (g = e ? e.displayName || e.name : "") ? E(g) : "", typeof e == "function" && ee.set(e, g), g;
    }
    function d(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var t = e.prototype;
        return m(
          e,
          !(!t || !t.isReactComponent)
        );
      }
      if (typeof e == "string") return E(e);
      switch (e) {
        case X:
          return E("Suspense");
        case B:
          return E("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case H:
            return e = m(e.render, !1), e;
          case I:
            return d(e.type);
          case Z:
            t = e._payload, e = e._init;
            try {
              return d(e(t));
            } catch {
            }
        }
      return "";
    }
    function R() {
      var e = T.A;
      return e === null ? null : e.getOwner();
    }
    function p(e) {
      if (ve.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function G(e, t) {
      function r() {
        Re || (Re = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      r.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: r,
        configurable: !0
      });
    }
    function j() {
      var e = i(this.type);
      return Te[e] || (Te[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function O(e, t, r, s, v, l) {
      return r = l.ref, e = {
        $$typeof: V,
        type: e,
        key: t,
        props: l,
        _owner: v
      }, (r !== void 0 ? r : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: j
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function q(e, t, r, s, v, l) {
      if (typeof e == "string" || typeof e == "function" || e === z || e === le || e === ce || e === X || e === B || e === $e || typeof e == "object" && e !== null && (e.$$typeof === Z || e.$$typeof === I || e.$$typeof === fe || e.$$typeof === ue || e.$$typeof === H || e.$$typeof === Ue || e.getModuleId !== void 0)) {
        var o = t.children;
        if (o !== void 0)
          if (s)
            if (Q(o)) {
              for (s = 0; s < o.length; s++)
                se(o[s], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else se(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? s = "null" : Q(e) ? s = "array" : e !== void 0 && e.$$typeof === V ? (s = "<" + (i(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          s,
          o
        );
      if (ve.call(t, "key")) {
        o = i(e);
        var h = Object.keys(t).filter(function(g) {
          return g !== "key";
        });
        s = 0 < h.length ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}", _e[o + s] || (h = 0 < h.length ? "{" + h.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          o,
          h,
          o
        ), _e[o + s] = !0);
      }
      if (o = null, r !== void 0 && (a(r), o = "" + r), p(t) && (a(t.key), o = "" + t.key), "key" in t) {
        r = {};
        for (var w in t)
          w !== "key" && (r[w] = t[w]);
      } else r = t;
      return o && G(
        r,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), O(e, o, l, v, R(), r);
    }
    function se(e, t) {
      if (typeof e == "object" && e && e.$$typeof !== Fe) {
        if (Q(e))
          for (var r = 0; r < e.length; r++) {
            var s = e[r];
            J(s) && ie(s, t);
          }
        else if (J(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? r = null : (r = de && e[de] || e["@@iterator"], r = typeof r == "function" ? r : null), typeof r == "function" && r !== e.entries && (r = r.call(e), r !== e))
          for (; !(e = r.next()).done; )
            J(e.value) && ie(e.value, t);
      }
    }
    function J(e) {
      return typeof e == "object" && e !== null && e.$$typeof === V;
    }
    function ie(e, t) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, t = Me(t), !Ce[t])) {
        Ce[t] = !0;
        var r = "";
        e && e._owner != null && e._owner !== R() && (r = null, typeof e._owner.tag == "number" ? r = i(e._owner.type) : typeof e._owner.name == "string" && (r = e._owner.name), r = " It was passed a child from " + r + ".");
        var s = T.getCurrentStack;
        T.getCurrentStack = function() {
          var v = d(e.type);
          return s && (v += s() || ""), v;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          t,
          r
        ), T.getCurrentStack = s;
      }
    }
    function Me(e) {
      var t = "", r = R();
      return r && (r = i(r.type)) && (t = `

Check the render method of \`` + r + "`."), t || (e = i(e)) && (t = `

Check the top-level render call using <` + e + ">."), t;
    }
    var Ye = $, V = Symbol.for("react.transitional.element"), Le = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), ce = Symbol.for("react.strict_mode"), le = Symbol.for("react.profiler"), ue = Symbol.for("react.consumer"), fe = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), $e = Symbol.for("react.offscreen"), de = Symbol.iterator, We = Symbol.for("react.client.reference"), T = Ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ve = Object.prototype.hasOwnProperty, _ = Object.assign, Ue = Symbol.for("react.client.reference"), Q = Array.isArray, S = 0, Ee, ge, be, me, pe, he, xe;
    c.__reactDisabledLog = !0;
    var K, ye, D = !1, ee = new (typeof WeakMap == "function" ? WeakMap : Map)(), Fe = Symbol.for("react.client.reference"), Re, Te = {}, _e = {}, Ce = {};
    A.Fragment = z, A.jsx = function(e, t, r, s, v) {
      return q(e, t, r, !1, s, v);
    }, A.jsxs = function(e, t, r, s, v) {
      return q(e, t, r, !0, s, v);
    };
  }()), A;
}
var Se;
function Ze() {
  return Se || (Se = 1, process.env.NODE_ENV === "production" ? M.exports = Be() : M.exports = Ie()), M.exports;
}
var b = Ze();
const at = ({ loading: i, ...n }) => /* @__PURE__ */ b.jsx(qe, { ...n }), Qe = () => /* @__PURE__ */ b.jsx(
  "div",
  {
    style: {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "white"
    }
  }
);
function ne(i) {
  const n = [];
  return $.Children.forEach(i, (a) => {
    if (!$.isValidElement(a))
      return;
    if (a.type === $.Fragment) {
      n.push.apply(n, ne(a.props.children));
      return;
    }
    const c = {
      caseSensitive: a.props.caseSensitive,
      element: a.props.element,
      index: a.props.index,
      path: a.props.path,
      loading: a.props.loading
    };
    a.props.children && (c.children = ne(a.props.children)), n.push(c);
  }), n;
}
const Y = (i, n) => i.pathname !== n.pathname, Ke = (i, n) => i.pathname === n.pathname, De = (i, n) => i.search !== n.search, Ne = (i, n) => {
  const a = Je(n, i);
  return !a || a.length === 0 ? !1 : a[a.length - 1].route.loading;
}, ke = ({ routes: i, location: n, navigationType: a, hidden: c }) => {
  const u = Ve(i, n);
  return /* @__PURE__ */ b.jsx("div", { style: c ? { display: "none" } : void 0, children: U(
    () => /* @__PURE__ */ b.jsx(ze.Provider, { value: { location: n, navigationType: a }, children: u }),
    [n]
  ) });
}, Ae = "__loading", et = ({
  children: i,
  loadingScreen: n,
  maxLoadingTime: a = 0
}) => {
  const c = He(), u = Xe(), f = re(F), E = re(ae), m = U(
    () => ne(i),
    [i]
  ), [d, R] = oe(() => ({
    location: Ne(c, m) ? { ...c, pathname: Ae } : c,
    navigationType: u
  })), [p, G] = oe(d), j = Pe(void 0);
  return W(() => {
    if (Y(c, p.location)) {
      const O = Ne(c, m);
      G({
        location: { ...c },
        navigationType: u
      }), O ? E ? f.restart() : f.start() : (f.done(), R({
        location: { ...c },
        navigationType: u
      }));
    }
    Ke(c, d.location) && (f.done(), De(c, d.location) && R({
      location: { ...c },
      navigationType: u
    }));
  }, [c]), W(() => {
    !E && Y(d.location, p.location) && R(p);
  }, [E]), W(() => {
    a > 0 && (j.current && (clearTimeout(j.current), j.current = void 0), Y(d.location, p.location) && (j.current = setTimeout(() => {
      f.done();
    }, a)));
  }, [d, p]), U(
    () => /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      d.location.pathname !== Ae ? /* @__PURE__ */ b.jsx(
        ke,
        {
          routes: m,
          location: d.location,
          navigationType: d.navigationType
        },
        d.location.pathname
      ) : n ? /* @__PURE__ */ b.jsx(n, {}) : /* @__PURE__ */ b.jsx(Qe, {}),
      Y(d.location, p.location) && /* @__PURE__ */ b.jsx(
        ke,
        {
          routes: m,
          location: p.location,
          navigationType: p.navigationType,
          hidden: !0
        },
        p.location.pathname
      )
    ] }),
    [d, p]
  );
}, tt = ({ children: i, isLoading: n = !1 }) => {
  const [a, c] = oe(n), u = Pe(!0), f = te(() => {
    L.show(), c(!0);
  }, []), E = te(() => {
    L.hide(), c(!1);
  }, []), m = te(() => {
    L.hide(), L.show();
  }, []);
  W(() => {
    u.current ? u.current = !1 : n && !a ? f() : a && E();
  }, [n]);
  const d = U(
    () => /* @__PURE__ */ b.jsx(F.Provider, { value: { start: f, done: E, restart: m }, children: i }),
    []
  );
  return /* @__PURE__ */ b.jsx(ae.Provider, { value: a, children: d });
}, st = ({ children: i, loadingScreen: n, maxLoadingTime: a, isLoading: c }) => /* @__PURE__ */ b.jsx(tt, { isLoading: c, children: /* @__PURE__ */ b.jsx(et, { loadingScreen: n, maxLoadingTime: a, children: i }) }), L = Ge, it = () => re(F);
export {
  F as LoadingContext,
  ae as LoadingGetterContext,
  at as Route,
  st as Routes,
  L as topbar,
  it as useLoadingContext
};
//# sourceMappingURL=react-router-loading.es.js.map
