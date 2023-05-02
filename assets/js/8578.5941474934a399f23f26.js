(self.webpackChunk_plhvc_entrypoint = self.webpackChunk_plhvc_entrypoint || []).push([[8578], {
    77825: (R,O,e)=>{
        "use strict";
        e.d(O, {
            T: ()=>c
        });
        var f = e(50402)
          , g = e(50764)
          , h = e(37040)
          , E = e(2784);
        const y = {
            loadingSpinnerContainer: "LACU2ejUKiJW4Zu9o3SBIQ=="
        };
        var p = Object.defineProperty
          , m = Object.defineProperties
          , d = Object.getOwnPropertyDescriptors
          , D = Object.getOwnPropertySymbols
          , A = Object.prototype.hasOwnProperty
          , a = Object.prototype.propertyIsEnumerable
          , o = (n,u,v)=>u in n ? p(n, u, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: v
        }) : n[u] = v
          , r = (n,u)=>{
            for (var v in u || (u = {}))
                A.call(u, v) && o(n, v, u[v]);
            if (D)
                for (var v of D(u))
                    a.call(u, v) && o(n, v, u[v]);
            return n
        }
          , t = (n,u)=>m(n, d(u));
        const c = E.memo(({size: n=f.E.medium})=>{
            const u = {
                horizontalAlign: "center",
                verticalAlign: "center"
            };
            return E.createElement(h.K, t(r({}, u), {
                className: y.loadingSpinnerContainer
            }), E.createElement(g.$, {
                size: n
            }))
        }
        )
    }
    ,
    93250: (R,O,e)=>{
        "use strict";
        e.d(O, {
            s: ()=>E
        });
        var f = e(2784)
          , g = e(76699)
          , h = e(86814);
        const E = f.memo(({i18nKey: y, values: p, namespace: m, t: d, className: D})=>(d || (d = (0,
        g.$)(typeof m == "string" ? [m] : m).t),
        f.createElement(h.c, {
            i18nKey: y,
            t: d,
            values: p,
            className: D
        })))
    }
    ,
    55147: (R,O,e)=>{
        "use strict";
        e.r(O),
        e.d(O, {
            commonDeeplinkNavigationAddon: ()=>ae
        });
        var f = e(17221)
          , g = e(24502)
          , h = e(31529)
          , E = e(45251)
          , y = e(48596)
          , p = e(32631)
          , m = e(77825)
          , d = e(7334)
          , D = e(2260)
          , A = e(53562);
        const a = ()=>window.matchMedia("(prefers-color-scheme: dark)").matches;
        var o = e(92526)
          , r = e(34126)
          , t = e(2784)
          , c = e(12451);
        const n = new c.r$("targetUrlFacet");
        var u = Object.defineProperty
          , v = Object.getOwnPropertySymbols
          , I = Object.prototype.hasOwnProperty
          , N = Object.prototype.propertyIsEnumerable
          , L = (i,s,l)=>s in i ? u(i, s, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: l
        }) : i[s] = l
          , S = (i,s)=>{
            for (var l in s || (s = {}))
                I.call(s, l) && L(i, l, s[l]);
            if (v)
                for (var l of v(s))
                    N.call(s, l) && L(i, l, s[l]);
            return i
        }
          , w = (i,s,l)=>new Promise((W,F)=>{
            var _ = M=>{
                try {
                    j(l.next(M))
                } catch (B) {
                    F(B)
                }
            }
              , H = M=>{
                try {
                    j(l.throw(M))
                } catch (B) {
                    F(B)
                }
            }
              , j = M=>M.done ? W(M.value) : Promise.resolve(M.value).then(_, H);
            j((l = l.apply(i, s)).next())
        }
        );
        const x = i=>{
            var s;
            return ((s = i == null ? void 0 : i.targetUrl) == null ? void 0 : s.toString()) || void 0
        }
          , C = ()=>t.createElement(m.T, null);
        function T(i) {
            return {
                onExecute: ()=>s=>w(this, null, function*() {
                    const l = (0,
                    r.parse)(location.search)
                      , W = x(l);
                    s((0,
                    y.L)(d.C, S({}, n.pack(W)))),
                    s((0,
                    y.L)(d.C, S({}, D.g.pack(navigator.language)))),
                    a() && s((0,
                    y.L)(d.C, S({}, A.mQ.pack(o.THEME_DARK))))
                }),
                placeholderView: t.createElement(C, null)
            }
        }
        var P = e(93250)
          , U = e(44610)
          , Z = e(51367);
        const Q = i=>{
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", s=>{
                s.matches ? i(!0) : i(!1)
            }
            )
        }
        ;
        var J = e(553)
          , z = e(73054)
          , k = e(76699);
        const G = e.p + "images/guide-b2556b48b875114c25ef.svg"
          , X = e.p + "images/guide_dark-342a0436191fcf86acab.svg"
          , b = "addon-common-deeplink-navigation"
          , K = {
            contentWrapper: "_3UDmytZJVz-MPPDoaNplZg==",
            contentDiv: "kCDLu+JAS6LsPxSULVudKA==",
            image: "-tWU8TJp+ww-aB+WJZ6n8w==",
            docDiv: "aD6n8+od1T8JcZZL4vXkfg==",
            accessLabel: "Tm1L7AB0Jzm2jtFNnwrBdA==",
            clickLabel: "K3xfGMZABI4tyhf7eyUI+Q==",
            button: "xBTNS8o6uC2iG4MD2dqdFA=="
        };
        var Y = Object.defineProperty
          , V = Object.getOwnPropertySymbols
          , q = Object.prototype.hasOwnProperty
          , ee = Object.prototype.propertyIsEnumerable
          , $ = (i,s,l)=>s in i ? Y(i, s, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: l
        }) : i[s] = l
          , te = (i,s)=>{
            for (var l in s || (s = {}))
                q.call(s, l) && $(i, l, s[l]);
            if (V)
                for (var l of V(s))
                    ee.call(s, l) && $(i, l, s[l]);
            return i
        }
        ;
        const re = [{
            path: "/",
            exact: !0,
            component: ()=>{
                const {t: i} = (0,
                k.$)(b)
                  , s = (0,
                U.I)()
                  , {targetUrl: l, themeName: W} = s((0,
                Z.r)(d.C, {
                    targetUrl: n,
                    themeName: A.mQ
                }));
                return l ? ((0,
                t.useEffect)(()=>{
                    Q(()=>{
                        s((0,
                        y.L)(d.C, te({}, A.mQ.pack(a() ? o.THEME_DARK : o.THEME_LIGHT))))
                    }
                    )
                }
                , []),
                t.createElement("div", {
                    className: K.contentWrapper
                }, t.createElement("div", {
                    className: K.contentDiv
                }, W === o.THEME_DARK ? t.createElement("img", {
                    src: X,
                    alt: "",
                    className: K.image,
                    "data-testid": "guide",
                    "aria-hidden": "true"
                }) : t.createElement("img", {
                    src: G,
                    alt: "",
                    className: K.image,
                    "data-testid": "guide",
                    "aria-hidden": "true"
                }), t.createElement("div", {
                    className: K.docDiv
                }, t.createElement(J._, {
                    className: K.accessLabel
                }, t.createElement(P.s, {
                    namespace: b,
                    i18nKey: "title.accessPhone"
                })), t.createElement(J._, {
                    className: K.clickLabel
                }, t.createElement(P.s, {
                    namespace: b,
                    i18nKey: "description.clickButton"
                })), t.createElement(z.K, {
                    "aria-label": i("button.continueLabel"),
                    className: K.button,
                    onClick: ()=>{
                        window.location.href = l
                    }
                }, t.createElement(P.s, {
                    namespace: b,
                    i18nKey: "button.continue"
                })))))) : t.createElement("div", null, t.createElement(P.s, {
                    namespace: b,
                    i18nKey: "guidance.noTargetUrl"
                }))
            }
        }];
        var ne = (i,s,l)=>new Promise((W,F)=>{
            var _ = M=>{
                try {
                    j(l.next(M))
                } catch (B) {
                    F(B)
                }
            }
              , H = M=>{
                try {
                    j(l.throw(M))
                } catch (B) {
                    F(B)
                }
            }
              , j = M=>M.done ? W(M.value) : Promise.resolve(M.value).then(_, H);
            j((l = l.apply(i, s)).next())
        }
        );
        const ae = (0,
        E.B)(()=>i=>ne(void 0, null, function*() {
            i((0,
            y.L)(f.X, g.p.pack(!0))),
            i((0,
            p.registerControlHandler)(p.beforeRenderControl, T)),
            i((0,
            h.W)(re))
        }))
    }
    ,
    31529: (R,O,e)=>{
        "use strict";
        e.d(O, {
            W: ()=>o
        });
        var f = e(51367)
          , g = e(42085)
          , h = e(77206)
          , E = e(58158)
          , y = e(97945)
          , p = Object.defineProperty
          , m = Object.getOwnPropertySymbols
          , d = Object.prototype.hasOwnProperty
          , D = Object.prototype.propertyIsEnumerable
          , A = (r,t,c)=>t in r ? p(r, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: c
        }) : r[t] = c
          , a = (r,t)=>{
            for (var c in t || (t = {}))
                d.call(t, c) && A(r, c, t[c]);
            if (m)
                for (var c of m(t))
                    D.call(t, c) && A(r, c, t[c]);
            return r
        }
        ;
        function o(r) {
            return t=>{
                var c, n, u;
                const v = ((c = t((0,
                f.r)(E.k, {
                    routes: y.i
                }))) == null ? void 0 : c.routes) || []
                  , I = ((n = t((0,
                f.r)(E.k, {
                    routeMapping: g.C
                }))) == null ? void 0 : n.routeMapping) || {}
                  , N = ((u = t((0,
                f.r)(E.k, {
                    routeReverseMapping: g.w
                }))) == null ? void 0 : u.routeReverseMapping) || {}
                  , L = C=>{
                    const T = {};
                    return C.forEach(P=>{
                        P.key && (T[P.key] = P.path)
                    }
                    ),
                    T
                }
                  , S = C=>{
                    const T = {};
                    return C.forEach(P=>{
                        var U;
                        const Z = ((U = P.path) == null ? void 0 : U.toString()) || "";
                        Z && (T[Z] = P.key)
                    }
                    ),
                    T
                }
                  , w = L(r)
                  , x = S(r);
                t((0,
                h.U)({
                    items: {
                        [E.k]: a(a(a({}, y.i.pack([...r, ...v])), g.C.pack(a(a({}, I), w))), g.w.pack(a(a({}, N), x)))
                    }
                }))
            }
        }
    }
    ,
    45251: (R,O,e)=>{
        "use strict";
        e.d(O, {
            B: ()=>f
        });
        function f(g) {
            return g()
        }
    }
    ,
    42085: (R,O,e)=>{
        "use strict";
        e.d(O, {
            C: ()=>g,
            w: ()=>h
        });
        var f = e(12451);
        const g = new f.r$("routeMappingFacet")
          , h = new f.r$("routeReverseMappingFacet")
    }
    ,
    21725: (R,O,e)=>{
        "use strict";
        e.d(O, {
            Z: ()=>A
        });
        var f = e(64896)
          , g = e.n(f)
          , h = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
        function E(a) {
            var o = {
                type: "tag",
                name: "",
                voidElement: !1,
                attrs: {},
                children: []
            }
              , r = a.match(/<\/?([^\s]+?)[/\s>]/);
            if (r && (o.name = r[1],
            (g()[r[1]] || a.charAt(a.length - 2) === "/") && (o.voidElement = !0),
            o.name.startsWith("!--"))) {
                var t = a.indexOf("-->");
                return {
                    type: "comment",
                    comment: t !== -1 ? a.slice(4, t) : ""
                }
            }
            for (var c = new RegExp(h), n = null; (n = c.exec(a)) !== null; )
                if (n[0].trim())
                    if (n[1]) {
                        var u = n[1].trim()
                          , v = [u, ""];
                        u.indexOf("=") > -1 && (v = u.split("=")),
                        o.attrs[v[0]] = v[1],
                        c.lastIndex--
                    } else
                        n[2] && (o.attrs[n[2]] = n[3].trim().substring(1, n[3].length - 1));
            return o
        }
        var y = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g
          , p = /^\s*$/
          , m = Object.create(null);
        function d(a, o) {
            switch (o.type) {
            case "text":
                return a + o.content;
            case "tag":
                return a += "<" + o.name + (o.attrs ? function(r) {
                    var t = [];
                    for (var c in r)
                        t.push(c + '="' + r[c] + '"');
                    return t.length ? " " + t.join(" ") : ""
                }(o.attrs) : "") + (o.voidElement ? "/>" : ">"),
                o.voidElement ? a : a + o.children.reduce(d, "") + "</" + o.name + ">";
            case "comment":
                return a + "<!--" + o.comment + "-->"
            }
        }
        var D = {
            parse: function(a, o) {
                o || (o = {}),
                o.components || (o.components = m);
                var r, t = [], c = [], n = -1, u = !1;
                if (a.indexOf("<") !== 0) {
                    var v = a.indexOf("<");
                    t.push({
                        type: "text",
                        content: v === -1 ? a : a.substring(0, v)
                    })
                }
                return a.replace(y, function(I, N) {
                    if (u) {
                        if (I !== "</" + r.name + ">")
                            return;
                        u = !1
                    }
                    var L, S = I.charAt(1) !== "/", w = I.startsWith("<!--"), x = N + I.length, C = a.charAt(x);
                    if (w) {
                        var T = E(I);
                        return n < 0 ? (t.push(T),
                        t) : ((L = c[n]).children.push(T),
                        t)
                    }
                    if (S && (n++,
                    (r = E(I)).type === "tag" && o.components[r.name] && (r.type = "component",
                    u = !0),
                    r.voidElement || u || !C || C === "<" || r.children.push({
                        type: "text",
                        content: a.slice(x, a.indexOf("<", x))
                    }),
                    n === 0 && t.push(r),
                    (L = c[n - 1]) && L.children.push(r),
                    c[n] = r),
                    (!S || r.voidElement) && (n > -1 && (r.voidElement || r.name === I.slice(2, -1)) && (n--,
                    r = n === -1 ? t : c[n]),
                    !u && C !== "<" && C)) {
                        L = n === -1 ? t : c[n].children;
                        var P = a.indexOf("<", x)
                          , U = a.slice(x, P === -1 ? void 0 : P);
                        p.test(U) && (U = " "),
                        (P > -1 && n + L.length >= 0 || U !== " ") && L.push({
                            type: "text",
                            content: U
                        })
                    }
                }),
                t
            },
            stringify: function(a) {
                return a.reduce(function(o, r) {
                    return o + d("", r)
                }, "")
            }
        };
        const A = D
    }
    ,
    64896: R=>{
        R.exports = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }
    }
    ,
    59740: (R,O,e)=>{
        "use strict";
        e.d(O, {
            Z: ()=>g
        });
        var f = e(31461);
        function g(h, E) {
            if (h == null)
                return {};
            var y = (0,
            f.Z)(h, E), p, m;
            if (Object.getOwnPropertySymbols) {
                var d = Object.getOwnPropertySymbols(h);
                for (m = 0; m < d.length; m++)
                    p = d[m],
                    !(E.indexOf(p) >= 0) && (!Object.prototype.propertyIsEnumerable.call(h, p) || (y[p] = h[p]))
            }
            return y
        }
    }
    ,
    96234: (R,O,e)=>{
        "use strict";
        e.d(O, {
            Z: ()=>y
        });
        var f = e(39868);
        function g(p, m) {
            var d = p == null ? null : typeof Symbol != "undefined" && p[Symbol.iterator] || p["@@iterator"];
            if (d != null) {
                var D, A, a, o, r = [], t = !0, c = !1;
                try {
                    if (a = (d = d.call(p)).next,
                    m === 0) {
                        if (Object(d) !== d)
                            return;
                        t = !1
                    } else
                        for (; !(t = (D = a.call(d)).done) && (r.push(D.value),
                        r.length !== m); t = !0)
                            ;
                } catch (n) {
                    c = !0,
                    A = n
                } finally {
                    try {
                        if (!t && d.return != null && (o = d.return(),
                        Object(o) !== o))
                            return
                    } finally {
                        if (c)
                            throw A
                    }
                }
                return r
            }
        }
        var h = e(63145)
          , E = e(34434);
        function y(p, m) {
            return (0,
            f.Z)(p) || g(p, m) || (0,
            h.Z)(p, m) || (0,
            E.Z)()
        }
    }
}]);
