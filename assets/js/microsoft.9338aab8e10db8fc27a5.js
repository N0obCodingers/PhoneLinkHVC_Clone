(self.webpackChunk_plhvc_entrypoint = self.webpackChunk_plhvc_entrypoint || []).push([[37730], {
    39806: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            K: ()=>Ra
        });
        var C = A(43298)
          , y = A(42314)
          , N = A(22753)
          , o = A(43161)
          , T = A(94300)
          , v = A(41167)
          , a = A(51175)
          , J = A(4150)
          , ft = A(94077)
          , gt = A(84691)
          , ht = A(40821)
          , yt = A(98589)
          , Dt = ["c:", "i:", "w:"]
          , St = {
            "microsoft.com": "c1.microsoft.com",
            "xbox.com": "c.xbox.com",
            "live.com": "c.live.com",
            "microsoftstore.com": "c.microsoftstore.com",
            "msn.com": "c.msn.com",
            "windows.com": "c.windows.com",
            "office.com": "c.office.com"
        }
          , L = function() {
            function n(e) {
                this.core = e;
                var i = (0,
                a.cm)(), s = (0,
                ht.DO)(), d = null, S = !1, G, lt = (0,
                yt.JP)(e);
                (0,
                y.Z)(n, this, function(et) {
                    et.getTraceId = function() {
                        return e && e.getTraceCtx && e.getTraceCtx().getTraceId() || s
                    }
                    ,
                    et.getLastPageViewId = function() {
                        return i
                    }
                    ,
                    et.initializeIds = function() {
                        S ? i = (0,
                        a.cm)() : S = !0
                    }
                    ,
                    et.getMuidUserId = function() {
                        var Tt = (0,
                        a.Do)(lt, "MUID");
                        return Tt && Tt.length ? "t:" + Tt : Tt
                    }
                    ,
                    et.setAppUserId = function(Tt) {
                        if (d = null,
                        !!Tt) {
                            for (var Mt = 0; Mt < Dt.length; Mt++)
                                if (Dt[Mt] === Tt.substring(0, 2)) {
                                    d = Tt;
                                    break
                                }
                        }
                    }
                    ,
                    et.setDeviceClass = function(Tt) {
                        Tt && (G = Tt)
                    }
                    ,
                    et.getDeviceClass = function() {
                        return G
                    }
                    ,
                    et.getAppUserId = function() {
                        return d
                    }
                    ,
                    et.syncMuid = function(Tt) {
                        var Mt = (0,
                        v.k$)();
                        if (Mt && Tt) {
                            var en = (Mt.protocol || "http:") + "//" + Tt + "/c.gif?DI=4050&did=1&t="
                              , yn = (0,
                            v.Me)();
                            if (yn) {
                                var rn = yn.createElement("IMG");
                                rn.style.display = "none",
                                rn.src = en,
                                rn.hidden = "",
                                rn["aria-hidden"] = "true",
                                rn.role = "presentation"
                            }
                            return !0
                        }
                        return !1
                    }
                    ,
                    et.getMuidHost = function(Tt) {
                        return St[Tt]
                    }
                })
            }
            return n.visitorId = function() {
                var e = (0,
                a.Do)((0,
                yt.JP)(null), "MUID");
                return e
            }
            ,
            n
        }();
        const V = L;
        var x = function() {
            function n() {
                this._timers = []
            }
            return n.prototype._recordTimeSpan = function(e, i) {
                var s = new Date().getTime();
                if (!i)
                    this._timers[e] = s;
                else
                    return s - this._timers[e]
            }
            ,
            n
        }();
        const _t = x;
        var H = "split"
          , g = "length"
          , X = "toLowerCase"
          , bt = "ingestionendpoint"
          , B = "toString"
          , Pt = "removeItem"
          , U = "name"
          , F = "message"
          , Et = "count"
          , P = "preTriggerDate"
          , pt = "disabled"
          , l = "interval"
          , sn = "daysOfMonth"
          , b = "date"
          , M = "getUTCDate"
          , D = "stringify"
          , K = "pathname"
          , tt = "correlationHeaderExcludePatterns"
          , R = "indexOf"
          , Gt = "extensionConfig"
          , cn = "exceptions"
          , Yt = "parsedStack"
          , st = "properties"
          , z = "measurements"
          , it = "sizeInBytes"
          , k = "typeName"
          , $ = "severityLevel"
          , Ot = "problemGroup"
          , Ut = "isManual"
          , Q = "CreateFromInterface"
          , Z = "hasFullStack"
          , nt = "level"
          , mt = "method"
          , Lt = "assembly"
          , At = "fileName"
          , Sn = "line"
          , Nn = "duration"
          , $t = "receivedResponse"
          , f = "substring"
          , Gn = "sanitizeKeyAndAddUniqueness"
          , Zn = "sanitizeException"
          , xe = "sanitizeProperties"
          , Le = "sanitizeMeasurements"
          , un = "";
        function Ie(n, e) {
            return e === void 0 && (e = !1),
            n == null ? e : n.toString()[X]() === "true"
        }
        function Vt(n) {
            (isNaN(n) || n < 0) && (n = 0),
            n = Math.round(n);
            var e = un + n % 1e3
              , i = un + Math.floor(n / 1e3) % 60
              , s = un + Math.floor(n / (1e3 * 60)) % 60
              , d = un + Math.floor(n / (1e3 * 60 * 60)) % 24
              , S = Math.floor(n / (1e3 * 60 * 60 * 24));
            return e = e[g] === 1 ? "00" + e : e[g] === 2 ? "0" + e : e,
            i = i[g] < 2 ? "0" + i : i,
            s = s[g] < 2 ? "0" + s : s,
            d = d[g] < 2 ? "0" + d : d,
            (S > 0 ? S + "." : un) + d + ":" + s + ":" + i + "." + e
        }
        function Yn(n, e) {
            var i = null;
            return (0,
            o.tO)(n, function(s) {
                if (s.identifier === e)
                    return i = s,
                    -1
            }),
            i
        }
        function be(n, e, i, s, d) {
            return !d && (0,
            o.HD)(n) && (n === "Script error." || n === "Script error")
        }
        var he = A(28785)
          , Te = A(1785)
          , ue = (0,
        Te.By)({
            LocalStorage: 0,
            SessionStorage: 1
        })
          , Se = (0,
        Te.By)({
            AI: 0,
            AI_AND_W3C: 1,
            W3C: 2
        })
          , ee = void 0
          , Jn = void 0;
        function we() {
            return _() ? Fe(ue.LocalStorage) : null
        }
        function Fe(n) {
            try {
                if ((0,
                o.le)((0,
                he.Rd)()))
                    return null;
                var e = new Date()[B]()
                  , i = (0,
                v.a8)(n === ue.LocalStorage ? "localStorage" : "sessionStorage");
                i.setItem(e, e);
                var s = i.getItem(e) !== e;
                if (i[Pt](e),
                !s)
                    return i
            } catch (d) {}
            return null
        }
        function le() {
            return _e() ? Fe(ue.SessionStorage) : null
        }
        function Jt() {
            ee = !1,
            Jn = !1
        }
        function Dn() {
            ee = _(!0),
            Jn = _e(!0)
        }
        function _(n) {
            return (n || ee === void 0) && (ee = !!Fe(ue.LocalStorage)),
            ee
        }
        function bn(n, e) {
            var i = we();
            if (i !== null)
                try {
                    return i.getItem(e)
                } catch (s) {
                    ee = !1,
                    (0,
                    T.kP)(n, 2, 1, "Browser failed read of local storage. " + (0,
                    o.jj)(s), {
                        exception: (0,
                        v.eU)(s)
                    })
                }
            return null
        }
        function re(n, e, i) {
            var s = we();
            if (s !== null)
                try {
                    return s.setItem(e, i),
                    !0
                } catch (d) {
                    ee = !1,
                    (0,
                    T.kP)(n, 2, 3, "Browser failed write to local storage. " + (0,
                    o.jj)(d), {
                        exception: (0,
                        v.eU)(d)
                    })
                }
            return !1
        }
        function ve(n, e) {
            var i = we();
            if (i !== null)
                try {
                    return i[Pt](e),
                    !0
                } catch (s) {
                    ee = !1,
                    (0,
                    T.kP)(n, 2, 5, "Browser failed removal of local storage item. " + (0,
                    o.jj)(s), {
                        exception: (0,
                        v.eU)(s)
                    })
                }
            return !1
        }
        function _e(n) {
            return (n || Jn === void 0) && (Jn = !!Fe(ue.SessionStorage)),
            Jn
        }
        function Oe() {
            var n = [];
            return _e() && (0,
            o.rW)((0,
            v.a8)("sessionStorage"), function(e) {
                n.push(e)
            }),
            n
        }
        function Ae(n, e) {
            var i = le();
            if (i !== null)
                try {
                    return i.getItem(e)
                } catch (s) {
                    Jn = !1,
                    (0,
                    T.kP)(n, 2, 2, "Browser failed read of session storage. " + (0,
                    o.jj)(s), {
                        exception: (0,
                        v.eU)(s)
                    })
                }
            return null
        }
        function He(n, e, i) {
            var s = le();
            if (s !== null)
                try {
                    return s.setItem(e, i),
                    !0
                } catch (d) {
                    Jn = !1,
                    (0,
                    T.kP)(n, 2, 4, "Browser failed write to session storage. " + (0,
                    o.jj)(d), {
                        exception: (0,
                        v.eU)(d)
                    })
                }
            return !1
        }
        function Xe(n, e) {
            var i = le();
            if (i !== null)
                try {
                    return i[Pt](e),
                    !0
                } catch (s) {
                    Jn = !1,
                    (0,
                    T.kP)(n, 2, 6, "Browser failed removal of session storage item. " + (0,
                    o.jj)(s), {
                        exception: (0,
                        v.eU)(s)
                    })
                }
            return !1
        }
        var Ee = "AppInsightsPropertiesPlugin", ar = "AppInsightsChannelPlugin", rr = "ApplicationInsightsAnalytics", W = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation", Ct = "sampleRate", Ht = "ProcessLegacy", pn = "http.method", Pn = "https://dc.services.visualstudio.com", An = "/v2/track", $n = "not_specified", Re = "iKey", Ne;
        function vn(n, e, i) {
            var s = e[g]
              , d = Tn(n, e);
            if (d[g] !== s) {
                for (var S = 0, G = d; i[G] !== void 0; )
                    S++,
                    G = d[f](0, 150 - 3) + Vn(S);
                d = G
            }
            return d
        }
        function Tn(n, e) {
            var i;
            return e && (e = (0,
            o.nd)(e[B]()),
            e[g] > 150 && (i = e[f](0, 150),
            (0,
            T.kP)(n, 2, 57, "name is too long.  It has been truncated to " + 150 + " characters.", {
                name: e
            }, !0))),
            i || e
        }
        function w(n, e, i) {
            i === void 0 && (i = 1024);
            var s;
            return e && (i = i || 1024,
            e = (0,
            o.nd)(e),
            e.toString()[g] > i && (s = e[B]()[f](0, i),
            (0,
            T.kP)(n, 2, 61, "string value is too long. It has been truncated to " + i + " characters.", {
                value: e
            }, !0))),
            s || e
        }
        function I(n, e) {
            return Kt(n, e, 2048, 66)
        }
        function h(n, e) {
            var i;
            return e && e[g] > 32768 && (i = e[f](0, 32768),
            (0,
            T.kP)(n, 2, 56, "message is too long, it has been truncated to " + 32768 + " characters.", {
                message: e
            }, !0)),
            i || e
        }
        function j(n, e) {
            var i;
            if (e) {
                var s = "" + e;
                s[g] > 32768 && (i = s[f](0, 32768),
                (0,
                T.kP)(n, 2, 52, "exception is too long, it has been truncated to " + 32768 + " characters.", {
                    exception: e
                }, !0))
            }
            return i || e
        }
        function q(n, e) {
            if (e) {
                var i = {};
                (0,
                o.rW)(e, function(s, d) {
                    if ((0,
                    o.Kn)(d) && (0,
                    v.nS)())
                        try {
                            d = (0,
                            v.xA)()[D](d)
                        } catch (S) {
                            (0,
                            T.kP)(n, 2, 49, "custom property is not valid", {
                                exception: S
                            }, !0)
                        }
                    d = w(n, d, 8192),
                    s = vn(n, s, i),
                    i[s] = d
                }),
                e = i
            }
            return e
        }
        function ut(n, e) {
            if (e) {
                var i = {};
                (0,
                o.rW)(e, function(s, d) {
                    s = vn(n, s, i),
                    i[s] = d
                }),
                e = i
            }
            return e
        }
        function Wt(n, e) {
            return e && Kt(n, e, 128, 69)[B]()
        }
        function Kt(n, e, i, s) {
            var d;
            return e && (e = (0,
            o.nd)(e),
            e[g] > i && (d = e[f](0, i),
            (0,
            T.kP)(n, 2, s, "input is too long, it has been truncated to " + i + " characters.", {
                data: e
            }, !0))),
            d || e
        }
        function Vn(n) {
            var e = "00" + n;
            return e.substr(e[g] - 3)
        }
        var qt = (Ne = {
            MAX_NAME_LENGTH: 150,
            MAX_ID_LENGTH: 128,
            MAX_PROPERTY_LENGTH: 8192,
            MAX_STRING_LENGTH: 1024,
            MAX_URL_LENGTH: 2048,
            MAX_MESSAGE_LENGTH: 32768,
            MAX_EXCEPTION_LENGTH: 32768
        },
        Ne[Gn] = vn,
        Ne.sanitizeKey = Tn,
        Ne.sanitizeString = w,
        Ne.sanitizeUrl = I,
        Ne.sanitizeMessage = h,
        Ne[Zn] = j,
        Ne[xe] = q,
        Ne[Le] = ut,
        Ne.sanitizeId = Wt,
        Ne.sanitizeInput = Kt,
        Ne.padNumber = Vn,
        Ne.trim = o.nd,
        Ne);
        function En(n, e, i, s, d, S) {
            var G;
            i = w(s, i) || $n,
            ((0,
            o.le)(n) || (0,
            o.le)(e) || (0,
            o.le)(i)) && (0,
            o._y)("Input doesn't contain all required fields");
            var lt = "";
            n[Re] && (lt = n[Re],
            delete n[Re]);
            var et = (G = {},
            G[U] = i,
            G.time = (0,
            o.Y6)(new Date),
            G.iKey = lt,
            G.ext = S || {},
            G.tags = [],
            G.data = {},
            G.baseType = e,
            G.baseData = n,
            G);
            return (0,
            o.le)(d) || (0,
            o.rW)(d, function(Tt, Mt) {
                et.data[Tt] = Mt
            }),
            et
        }
        var at = function() {
            function n() {}
            return n.create = En,
            n
        }()
          , m = function() {
            function n(e, i, s, d) {
                this.aiDataContract = {
                    ver: 1,
                    name: 1,
                    properties: 0,
                    measurements: 0
                };
                var S = this;
                S.ver = 2,
                S[U] = w(e, i) || $n,
                S[st] = q(e, s),
                S[z] = ut(e, d)
            }
            return n.envelopeType = "Microsoft.ApplicationInsights.{0}.Event",
            n.dataType = "EventData",
            n
        }()
          , Y = function() {
            function n(e, i, s, d, S) {
                this.aiDataContract = {
                    ver: 1,
                    message: 1,
                    severityLevel: 0,
                    properties: 0
                };
                var G = this;
                G.ver = 2,
                i = i || $n,
                G[F] = h(e, i),
                G[st] = q(e, d),
                G[z] = ut(e, S),
                s && (G[$] = s)
            }
            return n.envelopeType = "Microsoft.ApplicationInsights.{0}.Message",
            n.dataType = "MessageData",
            n
        }()
          , ct = function() {
            function n() {
                this.aiDataContract = {
                    name: 1,
                    kind: 0,
                    value: 1,
                    count: 0,
                    min: 0,
                    max: 0,
                    stdDev: 0
                },
                this.kind = 0
            }
            return n
        }()
          , vt = function() {
            function n(e, i, s, d, S, G, lt, et, Tt) {
                this.aiDataContract = {
                    ver: 1,
                    metrics: 1,
                    properties: 0
                };
                var Mt = this;
                Mt.ver = 2;
                var en = new ct;
                en[Et] = d > 0 ? d : void 0,
                en.max = isNaN(G) || G === null ? void 0 : G,
                en.min = isNaN(S) || S === null ? void 0 : S,
                en[U] = w(e, i) || $n,
                en.value = s,
                en.stdDev = isNaN(lt) || lt === null ? void 0 : lt,
                Mt.metrics = [en],
                Mt[st] = q(e, et),
                Mt[z] = ut(e, Tt)
            }
            return n.envelopeType = "Microsoft.ApplicationInsights.{0}.Metric",
            n.dataType = "MetricData",
            n
        }()
          , zt = function() {
            function n(e, i, s, d, S, G, lt) {
                this.aiDataContract = {
                    ver: 1,
                    name: 0,
                    url: 0,
                    duration: 0,
                    properties: 0,
                    measurements: 0,
                    id: 0
                };
                var et = this;
                et.ver = 2,
                et.id = Wt(e, lt),
                et.url = I(e, s),
                et[U] = w(e, i) || $n,
                isNaN(d) || (et[Nn] = Vt(d)),
                et[st] = q(e, S),
                et[z] = ut(e, G)
            }
            return n.envelopeType = "Microsoft.ApplicationInsights.{0}.Pageview",
            n.dataType = "PageviewData",
            n
        }()
          , xt = function() {
            function n(e, i, s, d, S, G, lt) {
                this.aiDataContract = {
                    ver: 1,
                    name: 0,
                    url: 0,
                    duration: 0,
                    perfTotal: 0,
                    networkConnect: 0,
                    sentRequest: 0,
                    receivedResponse: 0,
                    domProcessing: 0,
                    properties: 0,
                    measurements: 0
                };
                var et = this;
                et.ver = 2,
                et.url = I(e, s),
                et[U] = w(e, i) || $n,
                et[st] = q(e, S),
                et[z] = ut(e, G),
                lt && (et.domProcessing = lt.domProcessing,
                et[Nn] = lt[Nn],
                et.networkConnect = lt.networkConnect,
                et.perfTotal = lt.perfTotal,
                et[$t] = lt[$t],
                et.sentRequest = lt.sentRequest)
            }
            return n.envelopeType = "Microsoft.ApplicationInsights.{0}.PageviewPerformance",
            n.dataType = "PageviewPerformanceData",
            n
        }()
          , nn = "<no_method>"
          , _n = "error"
          , Mn = "stack"
          , Qt = "stackDetails"
          , Ln = "errorSrc"
          , xn = "message"
          , tn = "description";
        function Rt(n, e) {
            var i = n;
            return i && !(0,
            o.HD)(i) && (JSON && JSON[D] ? (i = JSON[D](n),
            e && (!i || i === "{}") && ((0,
            o.mf)(n[B]) ? i = n[B]() : i = "" + n)) : i = "" + n + " - (Missing JSON.stringify)"),
            i || ""
        }
        function Nt(n, e) {
            var i = n;
            return n && (i && !(0,
            o.HD)(i) && (i = n[xn] || n[tn] || i),
            i && !(0,
            o.HD)(i) && (i = Rt(i, !0)),
            n.filename && (i = i + " @" + (n.filename || "") + ":" + (n.lineno || "?") + ":" + (n.colno || "?"))),
            e && e !== "String" && e !== "Object" && e !== "Error" && (i || "")[R](e) === -1 && (i = e + ": " + i),
            i || ""
        }
        function Un(n) {
            try {
                if ((0,
                o.Kn)(n))
                    return "hasFullStack"in n && "typeName"in n
            } catch (e) {}
            return !1
        }
        function fn(n) {
            try {
                if ((0,
                o.Kn)(n))
                    return "ver"in n && "exceptions"in n && "properties"in n
            } catch (e) {}
            return !1
        }
        function wn(n) {
            return n && n.src && (0,
            o.HD)(n.src) && n.obj && (0,
            o.kJ)(n.obj)
        }
        function qn(n) {
            var e = n || "";
            (0,
            o.HD)(e) || ((0,
            o.HD)(e[Mn]) ? e = e[Mn] : e = "" + e);
            var i = e[H](`
`);
            return {
                src: e,
                obj: i
            }
        }
        function Ue(n) {
            for (var e = [], i = n[H](`
`), s = 0; s < i[g]; s++) {
                var d = i[s];
                i[s + 1] && (d += "@" + i[s + 1],
                s++),
                e.push(d)
            }
            return {
                src: n,
                obj: e
            }
        }
        function We(n) {
            var e = null;
            if (n)
                try {
                    if (n[Mn])
                        e = qn(n[Mn]);
                    else if (n[_n] && n[_n][Mn])
                        e = qn(n[_n][Mn]);
                    else if (n.exception && n.exception[Mn])
                        e = qn(n.exception[Mn]);
                    else if (wn(n))
                        e = n;
                    else if (wn(n[Qt]))
                        e = n[Qt];
                    else if (window && window.opera && n[xn])
                        e = Ue(n[F]);
                    else if (n.reason && n.reason[Mn])
                        e = qn(n.reason[Mn]);
                    else if ((0,
                    o.HD)(n))
                        e = qn(n);
                    else {
                        var i = n[xn] || n[tn] || "";
                        (0,
                        o.HD)(n[Ln]) && (i && (i += `
`),
                        i += " from " + n[Ln]),
                        i && (e = qn(i))
                    }
                } catch (s) {
                    e = qn(s)
                }
            return e || {
                src: "",
                obj: null
            }
        }
        function ke(n) {
            var e = "";
            return n && (n.obj ? (0,
            o.tO)(n.obj, function(i) {
                e += i + `
`
            }) : e = n.src || ""),
            e
        }
        function Ke(n) {
            var e, i = n.obj;
            if (i && i[g] > 0) {
                e = [];
                var s = 0
                  , d = 0;
                (0,
                o.tO)(i, function(Kn) {
                    var oe = Kn[B]();
                    if ($e.regex.test(oe)) {
                        var Xt = new $e(oe,s++);
                        d += Xt[it],
                        e.push(Xt)
                    }
                });
                var S = 32 * 1024;
                if (d > S)
                    for (var G = 0, lt = e[g] - 1, et = 0, Tt = G, Mt = lt; G < lt; ) {
                        var en = e[G][it]
                          , yn = e[lt][it];
                        if (et += en + yn,
                        et > S) {
                            var rn = Mt - Tt + 1;
                            e.splice(Tt, rn);
                            break
                        }
                        Tt = G,
                        Mt = lt,
                        G++,
                        lt--
                    }
            }
            return e
        }
        function Qe(n) {
            var e = "";
            if (n && (e = n.typeName || n[U] || "",
            !e))
                try {
                    var i = /function (.{1,200})\(/
                      , s = i.exec(n.constructor[B]());
                    e = s && s[g] > 1 ? s[1] : ""
                } catch (d) {}
            return e
        }
        function qe(n) {
            if (n)
                try {
                    if (!(0,
                    o.HD)(n)) {
                        var e = Qe(n)
                          , i = Rt(n, !1);
                        return (!i || i === "{}") && (n[_n] && (n = n[_n],
                        e = Qe(n)),
                        i = Rt(n, !0)),
                        i[R](e) !== 0 && e !== "String" ? e + ":" + i : i
                    }
                } catch (s) {}
            return "" + (n || "")
        }
        var ye = function() {
            function n(e, i, s, d, S, G) {
                this.aiDataContract = {
                    ver: 1,
                    exceptions: 1,
                    severityLevel: 0,
                    properties: 0,
                    measurements: 0
                };
                var lt = this;
                lt.ver = 2,
                fn(i) ? (lt[cn] = i[cn] || [],
                lt[st] = i[st],
                lt[z] = i[z],
                i[$] && (lt[$] = i[$]),
                i.id && (lt.id = i.id),
                i[Ot] && (lt[Ot] = i[Ot]),
                (0,
                o.le)(i[Ut]) || (lt[Ut] = i[Ut])) : (s || (s = {}),
                lt[cn] = [new gr(e,i,s)],
                lt[st] = q(e, s),
                lt[z] = ut(e, d),
                S && (lt[$] = S),
                G && (lt.id = G))
            }
            return n.CreateAutoException = function(e, i, s, d, S, G, lt, et) {
                var Tt, Mt = Qe(S || G || e);
                return Tt = {},
                Tt[F] = Nt(e, Mt),
                Tt.url = i,
                Tt.lineNumber = s,
                Tt.columnNumber = d,
                Tt.error = qe(S || G || e),
                Tt.evt = qe(G || e),
                Tt[k] = Mt,
                Tt.stackDetails = We(lt || S || G),
                Tt.errorSrc = et,
                Tt
            }
            ,
            n.CreateFromInterface = function(e, i, s, d) {
                var S = i[cn] && (0,
                o.Mr)(i[cn], function(lt) {
                    return gr[Q](e, lt)
                })
                  , G = new n(e,(0,
                C.uc)((0,
                C.uc)({}, i), {
                    exceptions: S
                }),s,d);
                return G
            }
            ,
            n.prototype.toInterface = function() {
                var e, i = this, s = i.exceptions, d = i.properties, S = i.measurements, G = i.severityLevel, lt = i.problemGroup, et = i.id, Tt = i.isManual, Mt = s instanceof Array && (0,
                o.Mr)(s, function(en) {
                    return en.toInterface()
                }) || void 0;
                return e = {
                    ver: "4.0"
                },
                e[cn] = Mt,
                e.severityLevel = G,
                e.properties = d,
                e.measurements = S,
                e.problemGroup = lt,
                e.id = et,
                e.isManual = Tt,
                e
            }
            ,
            n.CreateSimpleException = function(e, i, s, d, S, G) {
                var lt;
                return {
                    exceptions: [(lt = {},
                    lt[Z] = !0,
                    lt.message = e,
                    lt.stack = S,
                    lt.typeName = i,
                    lt)]
                }
            }
            ,
            n.envelopeType = "Microsoft.ApplicationInsights.{0}.Exception",
            n.dataType = "ExceptionData",
            n.formatError = qe,
            n
        }()
          , gr = function() {
            function n(e, i, s) {
                this.aiDataContract = {
                    id: 0,
                    outerId: 0,
                    typeName: 1,
                    message: 1,
                    hasFullStack: 0,
                    stack: 0,
                    parsedStack: 2
                };
                var d = this;
                if (Un(i))
                    d[k] = i[k],
                    d[F] = i[F],
                    d[Mn] = i[Mn],
                    d[Yt] = i[Yt] || [],
                    d[Z] = i[Z];
                else {
                    var S = i
                      , G = S && S.evt;
                    (0,
                    o.VZ)(S) || (S = S[_n] || G || S),
                    d[k] = w(e, Qe(S)) || $n,
                    d[F] = h(e, Nt(i || S, d[k])) || $n;
                    var lt = i[Qt] || We(i);
                    d[Yt] = Ke(lt),
                    d[Mn] = j(e, ke(lt)),
                    d.hasFullStack = (0,
                    o.kJ)(d.parsedStack) && d.parsedStack[g] > 0,
                    s && (s[k] = s[k] || d[k])
                }
            }
            return n.prototype.toInterface = function() {
                var e, i = this, s = i[Yt]instanceof Array && (0,
                o.Mr)(i[Yt], function(S) {
                    return S.toInterface()
                }), d = (e = {
                    id: i.id,
                    outerId: i.outerId,
                    typeName: i[k],
                    message: i[F],
                    hasFullStack: i[Z],
                    stack: i[Mn]
                },
                e[Yt] = s || void 0,
                e);
                return d
            }
            ,
            n.CreateFromInterface = function(e, i) {
                var s = i[Yt]instanceof Array && (0,
                o.Mr)(i[Yt], function(S) {
                    return $e[Q](S)
                }) || i[Yt]
                  , d = new n(e,(0,
                C.uc)((0,
                C.uc)({}, i), {
                    parsedStack: s
                }));
                return d
            }
            ,
            n
        }()
          , $e = function() {
            function n(e, i) {
                this.aiDataContract = {
                    level: 1,
                    method: 1,
                    assembly: 0,
                    fileName: 0,
                    line: 0
                };
                var s = this;
                if (s[it] = 0,
                typeof e == "string") {
                    var d = e;
                    s[nt] = i,
                    s[mt] = nn,
                    s[Lt] = (0,
                    o.nd)(d),
                    s[At] = "",
                    s[Sn] = 0;
                    var S = d.match(n.regex);
                    S && S[g] >= 5 && (s[mt] = (0,
                    o.nd)(S[2]) || s[mt],
                    s[At] = (0,
                    o.nd)(S[4]),
                    s[Sn] = parseInt(S[5]) || 0)
                } else
                    s[nt] = e[nt],
                    s[mt] = e[mt],
                    s[Lt] = e[Lt],
                    s[At] = e[At],
                    s[Sn] = e[Sn],
                    s[it] = 0;
                s.sizeInBytes += s.method[g],
                s.sizeInBytes += s.fileName[g],
                s.sizeInBytes += s.assembly[g],
                s[it] += n.baseSize,
                s.sizeInBytes += s.level.toString()[g],
                s.sizeInBytes += s.line.toString()[g]
            }
            return n.CreateFromInterface = function(e) {
                return new n(e,null)
            }
            ,
            n.prototype.toInterface = function() {
                var e = this;
                return {
                    level: e[nt],
                    method: e[mt],
                    assembly: e[Lt],
                    fileName: e[At],
                    line: e[Sn]
                }
            }
            ,
            n.regex = /^([\s]+at)?[\s]{0,50}([^\@\()]+?)[\s]{0,50}(\@|\()([^\(\n]+):([0-9]+):([0-9]+)(\)?)$/,
            n.baseSize = 58,
            n
        }()
          , ze = A(70395)
          , fe = A(51318)
          , or = A(21579);
        function Je(n) {
            var e = null;
            if ((0,
            o.mf)(Event))
                e = new Event(n);
            else {
                var i = (0,
                v.Me)();
                i && i.createEvent && (e = i.createEvent("Event"),
                e.initEvent(n, !0, !0))
            }
            return e
        }
        var sr = (0,
        Te.cc)({
            requestContextHeader: [0, "Request-Context"],
            requestContextTargetKey: [1, "appId"],
            requestContextAppIdFormat: [2, "appId=cid-v1:"],
            requestIdHeader: [3, "Request-Id"],
            traceParentHeader: [4, "traceparent"],
            traceStateHeader: [5, "tracestate"],
            sdkContextHeader: [6, "Sdk-Context"],
            sdkContextHeaderAppIdRequest: [7, "appId"],
            requestContextHeaderLowerCase: [8, "request-context"]
        })
          , ur = (0,
        v.Me)() || {}
          , Ir = 0
          , Pr = [null, null, null, null, null];
        function tr(n) {
            var e = Ir
              , i = Pr
              , s = i[e];
            return ur.createElement ? i[e] || (s = i[e] = ur.createElement("a")) : s = {
                host: Cr(n, !0)
            },
            s.href = n,
            e++,
            e >= i[g] && (e = 0),
            Ir = e,
            s
        }
        function Dr(n) {
            var e, i = tr(n);
            return i && (e = i.href),
            e
        }
        function Er(n) {
            var e, i = tr(n);
            return i && (e = i[K]),
            e
        }
        function Fr(n, e) {
            return n ? n.toUpperCase() + " " + e : e
        }
        function Cr(n, e) {
            var i = cr(n, e) || "";
            if (i) {
                var s = i.match(/(www\d{0,5}\.)?([^\/:]{1,256})(:\d{1,20})?/i);
                if (s != null && s[g] > 3 && (0,
                o.HD)(s[2]) && s[2][g] > 0)
                    return s[2] + (s[3] || "")
            }
            return i
        }
        function cr(n, e) {
            var i = null;
            if (n) {
                var s = n.match(/(\w{1,150}):\/\/([^\/:]{1,256})(:\d{1,20})?/i);
                if (s != null && s[g] > 2 && (0,
                o.HD)(s[2]) && s[2][g] > 0 && (i = s[2] || "",
                e && s[g] > 2)) {
                    var d = (s[1] || "")[X]()
                      , S = s[3] || "";
                    (d === "http" && S === ":80" || d === "https" && S === ":443") && (S = ""),
                    i += S
                }
            }
            return i
        }
        var Be = [Pn + An, "https://breeze.aimon.applicationinsights.io" + An, "https://dc-int.services.visualstudio.com" + An];
        function pr(n) {
            return (0,
            o.UA)(Be, n[X]()) !== -1
        }
        var ot = {
            NotSpecified: $n,
            createDomEvent: Je,
            disableStorage: Jt,
            isInternalApplicationInsightsEndpoint: pr,
            canUseLocalStorage: _,
            getStorage: bn,
            setStorage: re,
            removeStorage: ve,
            canUseSessionStorage: _e,
            getSessionStorageKeys: Oe,
            getSessionStorage: Ae,
            setSessionStorage: He,
            removeSessionStorage: Xe,
            disableCookies: ht.oF,
            canUseCookies: ht.vn,
            disallowsSameSiteNone: yt.UY,
            setCookie: ht.d8,
            stringToBoolOrDefault: Ie,
            getCookie: ht.ej,
            deleteCookie: ht.kT,
            trim: o.nd,
            newId: ze.pZ,
            random32: function() {
                return (0,
                ze._l)(!0)
            },
            generateW3CId: ht.DO,
            isArray: o.kJ,
            isError: o.VZ,
            isDate: o.J_,
            toISOStringForIE8: o.Y6,
            getIEVersion: v.sA,
            msToTimeSpan: Vt,
            isCrossOriginError: be,
            dump: v.eU,
            getExceptionName: o.jj,
            addEventHandler: fe.pZ,
            IsBeaconApiSupported: v.MF,
            getExtension: Yn
        }
          , Bt = {
            parseUrl: tr,
            getAbsoluteUrl: Dr,
            getPathName: Er,
            getCompleteUrl: Fr,
            parseHost: Cr,
            parseFullHost: cr
        }
          , Zt = {
            correlationIdPrefix: "cid-v1:",
            canIncludeCorrelationHeader: function(n, e, i) {
                if (!e || n && n.disableCorrelationHeaders)
                    return !1;
                if (n && n[tt]) {
                    for (var s = 0; s < n.correlationHeaderExcludePatterns[g]; s++)
                        if (n[tt][s].test(e))
                            return !1
                }
                var d = tr(e).host[X]();
                if (d && (d[R](":443") !== -1 || d[R](":80") !== -1) && (d = (cr(e, !0) || "")[X]()),
                (!n || !n.enableCorsCorrelation) && d && d !== i)
                    return !1;
                var S = n && n.correlationHeaderDomains;
                if (S) {
                    var G;
                    if ((0,
                    o.tO)(S, function(Tt) {
                        var Mt = new RegExp(Tt.toLowerCase().replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\*/g, ".*"));
                        G = G || Mt.test(d)
                    }),
                    !G)
                        return !1
                }
                var lt = n && n.correlationHeaderExcludedDomains;
                if (!lt || lt[g] === 0)
                    return !0;
                for (var s = 0; s < lt[g]; s++) {
                    var et = new RegExp(lt[s].toLowerCase().replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\*/g, ".*"));
                    if (et.test(d))
                        return !1
                }
                return d && d[g] > 0
            },
            getCorrelationContext: function(n) {
                if (n) {
                    var e = Zt.getCorrelationContextValue(n, sr[1]);
                    if (e && e !== Zt.correlationIdPrefix)
                        return e
                }
            },
            getCorrelationContextValue: function(n, e) {
                if (n)
                    for (var i = n[H](","), s = 0; s < i[g]; ++s) {
                        var d = i[s][H]("=");
                        if (d[g] === 2 && d[0] === e)
                            return d[1]
                    }
            }
        };
        function an(n, e, i, s) {
            var d, S = s, G = s;
            if (e && e[g] > 0) {
                var lt = tr(e);
                if (d = lt.host,
                !S)
                    if (lt[K] != null) {
                        var et = lt.pathname[g] === 0 ? "/" : lt[K];
                        et.charAt(0) !== "/" && (et = "/" + et),
                        G = lt[K],
                        S = w(n, i ? i + " " + et : et)
                    } else
                        S = w(n, e)
            } else
                d = s,
                S = s;
            return {
                target: d,
                name: S,
                data: G
            }
        }
        function In() {
            var n = (0,
            v.r)();
            if (n && n.now && n.timing) {
                var e = n.now() + n.timing.navigationStart;
                if (e > 0)
                    return e
            }
            return (0,
            o.m6)()
        }
        function Hn(n, e) {
            var i = null;
            return n !== 0 && e !== 0 && !(0,
            o.le)(n) && !(0,
            o.le)(e) && (i = e - n),
            i
        }
        var jn = {
            Now: In,
            GetDuration: Hn
        };
        function rt(n, e) {
            var i = n || {};
            return {
                getName: function() {
                    return i[U]
                },
                setName: function(s) {
                    e && e.setName(s),
                    i[U] = s
                },
                getTraceId: function() {
                    return i.traceID
                },
                setTraceId: function(s) {
                    e && e.setTraceId(s),
                    (0,
                    or.jN)(s) && (i.traceID = s)
                },
                getSpanId: function() {
                    return i.parentID
                },
                setSpanId: function(s) {
                    e && e.setSpanId(s),
                    (0,
                    or.Lc)(s) && (i.parentID = s)
                },
                getTraceFlags: function() {
                    return i.traceFlags
                },
                setTraceFlags: function(s) {
                    e && e.setTraceFlags(s),
                    i.traceFlags = s
                }
            }
        }
        var wt = function() {
            function n(e, i, s, d, S, G, lt, et, Tt, Mt, en, yn) {
                Tt === void 0 && (Tt = "Ajax"),
                this.aiDataContract = {
                    id: 1,
                    ver: 1,
                    name: 0,
                    resultCode: 0,
                    duration: 0,
                    success: 0,
                    data: 0,
                    target: 0,
                    type: 0,
                    properties: 0,
                    measurements: 0,
                    kind: 0,
                    value: 0,
                    count: 0,
                    min: 0,
                    max: 0,
                    stdDev: 0,
                    dependencyKind: 0,
                    dependencySource: 0,
                    commandName: 0,
                    dependencyTypeName: 0
                };
                var rn = this;
                rn.ver = 2,
                rn.id = i,
                rn[Nn] = Vt(S),
                rn.success = G,
                rn.resultCode = lt + "",
                rn.type = w(e, Tt);
                var Kn = an(e, s, et, d);
                rn.data = I(e, d) || Kn.data,
                rn.target = w(e, Kn.target),
                Mt && (rn.target = "".concat(rn.target, " | ").concat(Mt)),
                rn[U] = w(e, Kn[U]),
                rn[st] = q(e, en),
                rn[z] = ut(e, yn)
            }
            return n.envelopeType = "Microsoft.ApplicationInsights.{0}.RemoteDependency",
            n.dataType = "RemoteDependencyData",
            n
        }()
          , It = A(98530)
          , on = A(80877)
          , mn = A(86474)
          , Wn = "_aiHooks"
          , ne = ["req", "rsp", "hkErr", "fnErr"];
        function ie(n, e) {
            if (n)
                for (var i = 0; i < n[mn.R5] && !e(n[i], i); i++)
                    ;
        }
        function ge(n, e, i, s, d) {
            d >= 0 && d <= 2 && ie(n, function(S, G) {
                var lt = S.cbks
                  , et = lt[ne[d]];
                if (et) {
                    e.ctx = function() {
                        var en = s[G] = s[G] || {};
                        return en
                    }
                    ;
                    try {
                        et[mn.ZV](e.inst, i)
                    } catch (en) {
                        var Tt = e.err;
                        try {
                            var Mt = lt[ne[2]];
                            Mt && (e.err = en,
                            Mt[mn.ZV](e.inst, i))
                        } catch (yn) {} finally {
                            e.err = Tt
                        }
                    }
                }
            })
        }
        function Tr(n) {
            return function() {
                var e, i = this, s = arguments, d = n.h, S = (e = {},
                e[mn.I] = n.n,
                e.inst = i,
                e.ctx = null,
                e.set = Tt,
                e), G = [], lt = et([S], s);
                S.evt = (0,
                v.a8)("event");
                function et(en, yn) {
                    return ie(yn, function(rn) {
                        en[mn.MW](rn)
                    }),
                    en
                }
                function Tt(en, yn) {
                    s = et([], s),
                    s[en] = yn,
                    lt = et([S], s)
                }
                ge(d, S, lt, G, 0);
                var Mt = n.f;
                if (Mt)
                    try {
                        S.rslt = Mt[mn.ZV](i, s)
                    } catch (en) {
                        throw S.err = en,
                        ge(d, S, lt, G, 3),
                        en
                    }
                return ge(d, S, lt, G, 1),
                S.rslt
            }
        }
        function mr(n, e, i) {
            var s = null;
            return n && ((0,
            o.nr)(n, e) ? s = n : i && (s = mr((0,
            o.Hb)(n), e, !1))),
            s
        }
        function wr(n, e, i) {
            return n ? Ur(n[strShimPrototype], e, i, !1) : null
        }
        function nr(n, e, i) {
            return n ? ki(n[strShimPrototype], e, i, !1) : null
        }
        function Or(n, e, i, s) {
            var d = i && i[Wn];
            if (!d) {
                d = {
                    i: 0,
                    n: e,
                    f: i,
                    h: []
                };
                var S = Tr(d);
                S[Wn] = d,
                n[e] = S
            }
            var G = {
                id: d.i,
                cbks: s,
                rm: function() {
                    var lt = this.id;
                    ie(d.h, function(et, Tt) {
                        if (et.id === lt)
                            return d.h[mn.cb](Tt, 1),
                            1
                    })
                }
            };
            return d.i++,
            d.h[mn.MW](G),
            G
        }
        function Ur(n, e, i, s) {
            if (s === void 0 && (s = !0),
            n && e && i) {
                var d = mr(n, e, s);
                if (d) {
                    var S = d[e];
                    if (typeof S === strShimFunction)
                        return Or(d, e, S, i)
                }
            }
            return null
        }
        function ki(n, e, i, s) {
            s === void 0 && (s = !0);
            var d = null;
            return ie(e, function(S) {
                var G = Ur(n, S, i, s);
                G && (d || (d = []),
                d[_DYN_PUSH](G))
            }),
            d
        }
        function Zr(n, e, i, s) {
            if (n && e && i) {
                var d = mr(n, e, s) || n;
                if (d)
                    return Or(d, e, d[e], i)
            }
            return null
        }
        var ai = A(32589)
          , yi = A(31549)
          , Xr = "toString"
          , kr = "disableExceptionTracking"
          , Nr = "autoTrackPageVisitTime"
          , xr = "overridePageViewDuration"
          , Hr = "enableUnhandledPromiseRejectionTracking"
          , br = "samplingPercentage"
          , Ar = "isStorageUseDisabled"
          , lr = "isBrowserLinkTrackingEnabled"
          , Wr = "enableAutoRouteTracking"
          , Vr = "namePrefix"
          , jr = "disableFlushOnBeforeUnload"
          , Ii = "disableFlushOnUnload"
          , Ve = "core"
          , ir = "dataType"
          , fr = "envelopeType"
          , Ze = "diagLog"
          , Sr = "track"
          , Qr = "trackPageView"
          , oi = "trackPreviousPageVisit"
          , _r = "sendPageViewInternal"
          , si = "sendPageViewPerformanceInternal"
          , ui = "populatePageViewPerformanceEvent"
          , Rr = "href"
          , Pi = "sendExceptionInternal"
          , ci = "exception"
          , Yr = "error"
          , li = "_onerror"
          , fi = "errorSrc"
          , di = "lineNumber"
          , vi = "columnNumber"
          , Di = "message"
          , gi = "CreateAutoException"
          , $r = "addTelemetryInitializer"
          , hr = "duration"
          , Kr = "length"
          , wi = "isPerformanceTimingSupported"
          , Oi = "getPerformanceTiming"
          , qr = "navigationStart"
          , pi = "shouldCollectDuration"
          , Ni = "isPerformanceTimingDataReady"
          , xi = "getEntriesByType"
          , Gr = "responseStart"
          , Hi = "requestStart"
          , Mr = "loadEventEnd"
          , zr = "responseEnd"
          , Lr = "connectEnd"
          , bi = "pageVisitStartTime"
          , mi = function() {
            function n(e, i, s, d) {
                (0,
                y.Z)(n, this, function(S) {
                    var G = null, lt = [], et = !1, Tt;
                    s && (Tt = s.logger);
                    function Mt(yn) {
                        s && s.flush(yn)
                    }
                    function en(yn) {
                        lt.push(yn),
                        G || (G = setInterval(function() {
                            var rn = lt.slice(0)
                              , Kn = !1;
                            lt = [],
                            (0,
                            o.tO)(rn, function(oe) {
                                oe() ? Kn = !0 : lt.push(oe)
                            }),
                            lt[Kr] === 0 && (clearInterval(G),
                            G = null),
                            Kn && Mt(!0)
                        }, 100))
                    }
                    S[Qr] = function(yn, rn) {
                        var Kn = yn.name;
                        if ((0,
                        o.le)(Kn) || typeof Kn != "string") {
                            var oe = (0,
                            v.Me)();
                            Kn = yn.name = oe && oe.title || ""
                        }
                        var Xt = yn.uri;
                        if ((0,
                        o.le)(Xt) || typeof Xt != "string") {
                            var ae = (0,
                            v.k$)();
                            Xt = yn.uri = ae && ae[Rr] || ""
                        }
                        if (!d[wi]()) {
                            e[_r](yn, rn),
                            Mt(!0),
                            (0,
                            T.kP)(Tt, 2, 25, "trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info.");
                            return
                        }
                        var Me = !1, pe, Pe = d[Oi]()[qr];
                        Pe > 0 && (pe = Hn(Pe, +new Date),
                        d[pi](pe) || (pe = void 0));
                        var ln;
                        !(0,
                        o.le)(rn) && !(0,
                        o.le)(rn[hr]) && (ln = rn[hr]),
                        (i || !isNaN(ln)) && (isNaN(ln) && (rn || (rn = {}),
                        rn[hr] = pe),
                        e[_r](yn, rn),
                        Mt(!0),
                        Me = !0);
                        var dn = 6e4;
                        rn || (rn = {}),
                        en(function() {
                            var zn = !1;
                            try {
                                if (d[Ni]()) {
                                    zn = !0;
                                    var me = {
                                        name: Kn,
                                        uri: Xt
                                    };
                                    d[ui](me),
                                    !me.isValid && !Me ? (rn[hr] = pe,
                                    e[_r](yn, rn)) : (Me || (rn[hr] = me.durationMs,
                                    e[_r](yn, rn)),
                                    et || (e[si](me, rn),
                                    et = !0))
                                } else
                                    Pe > 0 && Hn(Pe, +new Date) > dn && (zn = !0,
                                    Me || (rn[hr] = dn,
                                    e[_r](yn, rn)))
                            } catch (je) {
                                (0,
                                T.kP)(Tt, 1, 38, "trackPageView failed on page load calculation: " + (0,
                                o.jj)(je), {
                                    exception: (0,
                                    v.eU)(je)
                                })
                            }
                            return zn
                        })
                    }
                    ,
                    S.teardown = function(yn, rn) {
                        if (G) {
                            clearInterval(G),
                            G = null;
                            var Kn = lt.slice(0)
                              , oe = !1;
                            lt = [],
                            (0,
                            o.tO)(Kn, function(Xt) {
                                Xt() && (oe = !0)
                            })
                        }
                    }
                })
            }
            return n.__ieDyn = 1,
            n
        }()
          , hi = 36e5
          , ti = ["googlebot", "adsbot-google", "apis-google", "mediapartners-google"];
        function ni() {
            var n = (0,
            v.r)();
            return n && !!n.timing
        }
        function Ei() {
            var n = (0,
            v.r)();
            return n && n.getEntriesByType && n.getEntriesByType("navigation")[Kr] > 0
        }
        function Ci() {
            var n = (0,
            v.r)()
              , e = n ? n.timing : 0;
            return e && e.domainLookupStart > 0 && e[qr] > 0 && e[Gr] > 0 && e[Hi] > 0 && e[Mr] > 0 && e[zr] > 0 && e[Lr] > 0 && e.domLoading > 0
        }
        function ei() {
            return ni() ? (0,
            v.r)().timing : null
        }
        function Wi() {
            return Ei() ? (0,
            v.r)()[xi]("navigation")[0] : null
        }
        function t() {
            for (var n = [], e = 0; e < arguments.length; e++)
                n[e] = arguments[e];
            var i = (0,
            v.jW)() || {}
              , s = i.userAgent
              , d = !1;
            if (s)
                for (var S = 0; S < ti[Kr]; S++)
                    d = d || s.toLowerCase().indexOf(ti[S]) !== -1;
            if (d)
                return !1;
            for (var S = 0; S < n[Kr]; S++)
                if (n[S] < 0 || n[S] >= hi)
                    return !1;
            return !0
        }
        var u = function() {
            function n(e) {
                var i = this
                  , s = (0,
                T.vH)(e);
                (0,
                y.Z)(n, this, function(d) {
                    d[ui] = function(S) {
                        S.isValid = !1;
                        var G = Wi()
                          , lt = ei()
                          , et = 0
                          , Tt = 0
                          , Mt = 0
                          , en = 0
                          , yn = 0;
                        (G || lt) && (G ? (et = G[hr],
                        Tt = G.startTime === 0 ? G[Lr] : Hn(G.startTime, G[Lr]),
                        Mt = Hn(G.requestStart, G[Gr]),
                        en = Hn(G[Gr], G[zr]),
                        yn = Hn(G.responseEnd, G[Mr])) : (et = Hn(lt[qr], lt[Mr]),
                        Tt = Hn(lt[qr], lt[Lr]),
                        Mt = Hn(lt.requestStart, lt[Gr]),
                        en = Hn(lt[Gr], lt[zr]),
                        yn = Hn(lt.responseEnd, lt[Mr])),
                        et === 0 ? (0,
                        T.kP)(s, 2, 10, "error calculating page view performance.", {
                            total: et,
                            network: Tt,
                            request: Mt,
                            response: en,
                            dom: yn
                        }) : i[pi](et, Tt, Mt, en, yn) ? et < Math.floor(Tt) + Math.floor(Mt) + Math.floor(en) + Math.floor(yn) ? (0,
                        T.kP)(s, 2, 8, "client performance math error.", {
                            total: et,
                            network: Tt,
                            request: Mt,
                            response: en,
                            dom: yn
                        }) : (S.durationMs = et,
                        S.perfTotal = S[hr] = Vt(et),
                        S.networkConnect = Vt(Tt),
                        S.sentRequest = Vt(Mt),
                        S.receivedResponse = Vt(en),
                        S.domProcessing = Vt(yn),
                        S.isValid = !0) : (0,
                        T.kP)(s, 2, 45, "Invalid page load duration value. Browser perf data won't be sent.", {
                            total: et,
                            network: Tt,
                            request: Mt,
                            response: en,
                            dom: yn
                        }))
                    }
                    ,
                    d[Oi] = ei,
                    d[wi] = ni,
                    d[Ni] = Ci,
                    d[pi] = t
                })
            }
            return n.__ieDyn = 1,
            n
        }()
          , r = function() {
            function n(e, i) {
                var s = "prevPageVisitData";
                (0,
                y.Z)(n, this, function(d) {
                    d[oi] = function(et, Tt) {
                        try {
                            var Mt = S(et, Tt);
                            Mt && i(Mt.pageName, Mt.pageUrl, Mt.pageVisitTime)
                        } catch (en) {
                            (0,
                            T.jV)(e, "Auto track page visit time failed, metric will not be collected: " + (0,
                            v.eU)(en))
                        }
                    }
                    ;
                    function S(et, Tt) {
                        var Mt = null;
                        try {
                            Mt = lt(),
                            G(et, Tt)
                        } catch (en) {
                            (0,
                            T.jV)(e, "Call to restart failed: " + (0,
                            v.eU)(en)),
                            Mt = null
                        }
                        return Mt
                    }
                    function G(et, Tt) {
                        try {
                            if (_e()) {
                                Ae(e, s) != null && (0,
                                o._y)("Cannot call startPageVisit consecutively without first calling stopPageVisit");
                                var Mt = new c(et,Tt)
                                  , en = (0,
                                v.xA)().stringify(Mt);
                                He(e, s, en)
                            }
                        } catch (yn) {
                            (0,
                            T.jV)(e, "Call to start failed: " + (0,
                            v.eU)(yn))
                        }
                    }
                    function lt() {
                        var et = null;
                        try {
                            if (_e()) {
                                var Tt = (0,
                                o.m6)()
                                  , Mt = Ae(e, s);
                                Mt && (0,
                                v.nS)() && (et = (0,
                                v.xA)().parse(Mt),
                                et.pageVisitTime = Tt - et[bi],
                                Xe(e, s))
                            }
                        } catch (en) {
                            (0,
                            T.jV)(e, "Stop page visit timer failed: " + (0,
                            v.eU)(en)),
                            et = null
                        }
                        return et
                    }
                    (0,
                    o.l_)(d, "_logger", function() {
                        return e
                    }),
                    (0,
                    o.l_)(d, "pageVisitTimeTrackingHandler", function() {
                        return i
                    })
                })
            }
            return n.__ieDyn = 1,
            n
        }()
          , c = function() {
            function n(e, i) {
                this[bi] = (0,
                o.m6)(),
                this.pageName = e,
                this.pageUrl = i
            }
            return n
        }()
          , p = function() {
            function n(e, i) {
                var s = this
                  , d = {};
                s.start = function(S) {
                    typeof d[S] != "undefined" && (0,
                    T.kP)(e, 2, 62, "start was called more than once for this event without calling stop.", {
                        name: S,
                        key: S
                    }, !0),
                    d[S] = +new Date
                }
                ,
                s.stop = function(S, G, lt, et) {
                    var Tt = d[S];
                    if (isNaN(Tt))
                        (0,
                        T.kP)(e, 2, 63, "stop was called without a corresponding start.", {
                            name: S,
                            key: S
                        }, !0);
                    else {
                        var Mt = +new Date
                          , en = Hn(Tt, Mt);
                        s.action(S, G, en, lt, et)
                    }
                    delete d[S],
                    d[S] = void 0
                }
            }
            return n
        }()
          , E = "event";
        function O(n, e) {
            n && n.dispatchEvent && e && n.dispatchEvent(e)
        }
        function dt(n) {
            if (n && n.reason) {
                var e = n.reason;
                return !(0,
                o.HD)(e) && (0,
                o.mf)(e[Xr]) ? e[Xr]() : (0,
                v.eU)(e)
            }
            return n || ""
        }
        var jt = 6e4;
        function kt(n, e) {
            return n = n || e,
            n < jt && (n = jt),
            n
        }
        function On(n) {
            return n || (n = {}),
            n.sessionRenewalMs = kt(n.sessionRenewalMs, 30 * 60 * 1e3),
            n.sessionExpirationMs = kt(n.sessionExpirationMs, 24 * 60 * 60 * 1e3),
            n[kr] = Ie(n[kr]),
            n[Nr] = Ie(n[Nr]),
            n[xr] = Ie(n[xr]),
            n[Hr] = Ie(n[Hr]),
            (isNaN(n[br]) || n[br] <= 0 || n[br] >= 100) && (n[br] = 100),
            n[Ar] = Ie(n[Ar]),
            n[lr] = Ie(n[lr]),
            n[Wr] = Ie(n[Wr]),
            n[Vr] = n[Vr] || "",
            n.enableDebug = Ie(n.enableDebug),
            n[jr] = Ie(n[jr]),
            n.disableFlushOnUnload = Ie(n.disableFlushOnUnload, n[jr]),
            n
        }
        function se(n) {
            (0,
            o.o8)(n[Ar]) || (n[Ar] ? Jt() : Dn())
        }
        var Ce = function(n) {
            (0,
            C.ne)(e, n);
            function e() {
                var i = n.call(this) || this;
                i.identifier = rr,
                i.priority = 180,
                i.autoRoutePVDelay = 500;
                var s, d, S, G, lt, et, Tt, Mt, en, yn, rn, Kn, oe, Xt, ae = 0, Me, pe, Pe;
                return (0,
                y.Z)(e, i, function(ln, dn) {
                    var zn = dn._addHook;
                    ta(),
                    ln.getCookieMgr = function() {
                        return (0,
                        yt.JP)(ln[Ve])
                    }
                    ,
                    ln.processTelemetry = function(Ft, gn) {
                        ln.processNext(Ft, gn)
                    }
                    ,
                    ln.trackEvent = function(Ft, gn) {
                        try {
                            var Rn = En(Ft, m[ir], m[fr], ln[Ze](), gn);
                            ln[Ve][Sr](Rn)
                        } catch (Fn) {
                            vr(2, 39, "trackTrace failed, trace will not be collected: " + (0,
                            o.jj)(Fn), {
                                exception: (0,
                                v.eU)(Fn)
                            })
                        }
                    }
                    ,
                    ln.startTrackEvent = function(Ft) {
                        try {
                            s.start(Ft)
                        } catch (gn) {
                            vr(1, 29, "startTrackEvent failed, event will not be collected: " + (0,
                            o.jj)(gn), {
                                exception: (0,
                                v.eU)(gn)
                            })
                        }
                    }
                    ,
                    ln.stopTrackEvent = function(Ft, gn, Rn) {
                        try {
                            s.stop(Ft, void 0, gn, Rn)
                        } catch (Fn) {
                            vr(1, 30, "stopTrackEvent failed, event will not be collected: " + (0,
                            o.jj)(Fn), {
                                exception: (0,
                                v.eU)(Fn)
                            })
                        }
                    }
                    ,
                    ln.trackTrace = function(Ft, gn) {
                        try {
                            var Rn = En(Ft, Y[ir], Y[fr], ln[Ze](), gn);
                            ln[Ve][Sr](Rn)
                        } catch (Fn) {
                            vr(2, 39, "trackTrace failed, trace will not be collected: " + (0,
                            o.jj)(Fn), {
                                exception: (0,
                                v.eU)(Fn)
                            })
                        }
                    }
                    ,
                    ln.trackMetric = function(Ft, gn) {
                        try {
                            var Rn = En(Ft, vt[ir], vt[fr], ln[Ze](), gn);
                            ln[Ve][Sr](Rn)
                        } catch (Fn) {
                            vr(1, 36, "trackMetric failed, metric will not be collected: " + (0,
                            o.jj)(Fn), {
                                exception: (0,
                                v.eU)(Fn)
                            })
                        }
                    }
                    ,
                    ln[Qr] = function(Ft, gn) {
                        try {
                            var Rn = Ft || {};
                            S[Qr](Rn, (0,
                            C.uc)((0,
                            C.uc)((0,
                            C.uc)({}, Rn.properties), Rn.measurements), gn)),
                            ln.config[Nr] && lt[oi](Rn.name, Rn.uri)
                        } catch (Fn) {
                            vr(1, 37, "trackPageView failed, page view will not be collected: " + (0,
                            o.jj)(Fn), {
                                exception: (0,
                                v.eU)(Fn)
                            })
                        }
                    }
                    ,
                    ln[_r] = function(Ft, gn, Rn) {
                        var Fn = (0,
                        v.Me)();
                        Fn && (Ft.refUri = Ft.refUri === void 0 ? Fn.referrer : Ft.refUri);
                        var Qn = En(Ft, zt[ir], zt[fr], ln[Ze](), gn, Rn);
                        ln[Ve][Sr](Qn),
                        ae = 0
                    }
                    ,
                    ln[si] = function(Ft, gn, Rn) {
                        var Fn = En(Ft, xt[ir], xt[fr], ln[Ze](), gn, Rn);
                        ln[Ve][Sr](Fn)
                    }
                    ,
                    ln.trackPageViewPerformance = function(Ft, gn) {
                        var Rn = Ft || {};
                        try {
                            G[ui](Rn),
                            ln[si](Rn, gn)
                        } catch (Fn) {
                            vr(1, 37, "trackPageViewPerformance failed, page view will not be collected: " + (0,
                            o.jj)(Fn), {
                                exception: (0,
                                v.eU)(Fn)
                            })
                        }
                    }
                    ,
                    ln.startTrackPage = function(Ft) {
                        try {
                            if (typeof Ft != "string") {
                                var gn = (0,
                                v.Me)();
                                Ft = gn && gn.title || ""
                            }
                            d.start(Ft)
                        } catch (Rn) {
                            vr(1, 31, "startTrackPage failed, page view may not be collected: " + (0,
                            o.jj)(Rn), {
                                exception: (0,
                                v.eU)(Rn)
                            })
                        }
                    }
                    ,
                    ln.stopTrackPage = function(Ft, gn, Rn, Fn) {
                        try {
                            if (typeof Ft != "string") {
                                var Qn = (0,
                                v.Me)();
                                Ft = Qn && Qn.title || ""
                            }
                            if (typeof gn != "string") {
                                var De = (0,
                                v.k$)();
                                gn = De && De[Rr] || ""
                            }
                            d.stop(Ft, gn, Rn, Fn),
                            ln.config[Nr] && lt[oi](Ft, gn)
                        } catch (Ge) {
                            vr(1, 32, "stopTrackPage failed, page view will not be collected: " + (0,
                            o.jj)(Ge), {
                                exception: (0,
                                v.eU)(Ge)
                            })
                        }
                    }
                    ,
                    ln[Pi] = function(Ft, gn, Rn) {
                        var Fn = Ft && (Ft[ci] || Ft[Yr]) || (0,
                        o.VZ)(Ft) && Ft || {
                            name: Ft && typeof Ft,
                            message: Ft || $n
                        };
                        Ft = Ft || {};
                        var Qn = new ye(ln[Ze](),Fn,Ft.properties || gn,Ft.measurements,Ft.severityLevel,Ft.id).toInterface()
                          , De = En(Qn, ye[ir], ye[fr], ln[Ze](), gn, Rn);
                        ln[Ve][Sr](De)
                    }
                    ,
                    ln.trackException = function(Ft, gn) {
                        Ft && !Ft[ci] && Ft[Yr] && (Ft[ci] = Ft[Yr]);
                        try {
                            ln[Pi](Ft, gn)
                        } catch (Rn) {
                            vr(1, 35, "trackException failed, exception will not be collected: " + (0,
                            o.jj)(Rn), {
                                exception: (0,
                                v.eU)(Rn)
                            })
                        }
                    }
                    ,
                    ln[li] = function(Ft) {
                        var gn = Ft && Ft[Yr]
                          , Rn = Ft && Ft.evt;
                        try {
                            if (!Rn) {
                                var Fn = (0,
                                v.Jj)();
                                Fn && (Rn = Fn[E])
                            }
                            var Qn = Ft && Ft.url || ((0,
                            v.Me)() || {}).URL
                              , De = Ft[fi] || "window.onerror@" + Qn + ":" + (Ft[di] || 0) + ":" + (Ft[vi] || 0)
                              , Ge = {
                                errorSrc: De,
                                url: Qn,
                                lineNumber: Ft[di] || 0,
                                columnNumber: Ft[vi] || 0,
                                message: Ft[Di]
                            };
                            be(Ft.message, Ft.url, Ft.lineNumber, Ft.columnNumber, Ft[Yr]) ? ii(ye[gi]("Script error: The browser's same-origin policy prevents us from getting the details of this exception. Consider using the 'crossorigin' attribute.", Qn, Ft[di] || 0, Ft[vi] || 0, gn, Rn, null, De), Ge) : (Ft[fi] || (Ft[fi] = De),
                            ln.trackException({
                                exception: Ft,
                                severityLevel: 3
                            }, Ge))
                        } catch (Ye) {
                            var er = gn ? gn.name + ", " + gn[Di] : "null";
                            vr(1, 11, "_onError threw exception while logging error, error will not be collected: " + (0,
                            o.jj)(Ye), {
                                exception: (0,
                                v.eU)(Ye),
                                errorString: er
                            })
                        }
                    }
                    ,
                    ln[$r] = function(Ft) {
                        if (ln[Ve])
                            return ln[Ve][$r](Ft);
                        et || (et = []),
                        et.push(Ft)
                    }
                    ,
                    ln.initialize = function(Ft, gn, Rn, Fn) {
                        if (!ln.isInitialized()) {
                            (0,
                            o.le)(gn) && (0,
                            o._y)("Error initializing"),
                            dn.initialize(Ft, gn, Rn, Fn);
                            try {
                                Pe = (0,
                                fe.jU)((0,
                                It.J)(ln.identifier), gn.evtNamespace && gn.evtNamespace()),
                                et && ((0,
                                o.tO)(et, function(De) {
                                    gn[$r](De)
                                }),
                                et = null);
                                var Qn = me(Ft);
                                se(Qn),
                                G = new u(ln[Ve]),
                                S = new mi(i,Qn[xr],ln[Ve],G),
                                lt = new r(ln[Ze](),function(De, Ge, er) {
                                    return Yi(De, Ge, er)
                                }
                                ),
                                je(Qn, Ft),
                                s = new p(ln[Ze](),"trackEvent"),
                                s.action = function(De, Ge, er, Ye, Jr) {
                                    Ye || (Ye = {}),
                                    Jr || (Jr = {}),
                                    Ye.duration = er[Xr](),
                                    ln.trackEvent({
                                        name: De,
                                        properties: Ye,
                                        measurements: Jr
                                    })
                                }
                                ,
                                d = new p(ln[Ze](),"trackPageView"),
                                d.action = function(De, Ge, er, Ye, Jr) {
                                    (0,
                                    o.le)(Ye) && (Ye = {}),
                                    Ye.duration = er[Xr]();
                                    var ka = {
                                        name: De,
                                        uri: Ge,
                                        properties: Ye,
                                        measurements: Jr
                                    };
                                    ln[_r](ka, Ye)
                                }
                                ,
                                (0,
                                v.Ym)() && (Br(Qn),
                                Ma(Qn))
                            } catch (De) {
                                throw ln.setInitialized(!1),
                                De
                            }
                        }
                    }
                    ,
                    ln._doTeardown = function(Ft, gn) {
                        S && S.teardown(Ft, gn),
                        (0,
                        fe.QY)(window, null, null, Pe),
                        ta()
                    }
                    ;
                    function me(Ft) {
                        var gn = (0,
                        on.CD)(null, Ft, ln[Ve])
                          , Rn = ln.identifier
                          , Fn = On(Ft)
                          , Qn = ln.config = gn.getExtCfg(Rn);
                        return Fn !== void 0 && (0,
                        o.rW)(Fn, function(De, Ge) {
                            Qn[De] = gn.getConfig(Rn, De, Ge),
                            Qn[De] === void 0 && (Qn = Ge)
                        }),
                        Qn
                    }
                    function je(Ft, gn) {
                        Tt = Ft[lr] || gn[lr],
                        ri()
                    }
                    function Yi(Ft, gn, Rn) {
                        var Fn = {
                            PageName: Ft,
                            PageUrl: gn
                        };
                        ln.trackMetric({
                            name: "PageVisitTime",
                            average: Rn,
                            max: Rn,
                            min: Rn,
                            sampleCount: 1
                        }, Fn)
                    }
                    function ri() {
                        if (!Mt && Tt) {
                            var Ft = ["/browserLinkSignalR/", "/__browserLink/"]
                              , gn = function(Rn) {
                                if (Tt && Rn.baseType === wt[ir]) {
                                    var Fn = Rn.baseData;
                                    if (Fn) {
                                        for (var Qn = 0; Qn < Ft[Kr]; Qn++)
                                            if (Fn.target && Fn.target.indexOf(Ft[Qn]) >= 0)
                                                return !1
                                    }
                                }
                                return !0
                            };
                            ln[$r](gn),
                            Mt = !0
                        }
                    }
                    function ii(Ft, gn) {
                        var Rn = En(Ft, ye[ir], ye[fr], ln[Ze](), gn);
                        ln[Ve][Sr](Rn)
                    }
                    function Br(Ft) {
                        var gn = (0,
                        v.Jj)()
                          , Rn = (0,
                        v.k$)(!0);
                        rn = Ft[kr],
                        !rn && !Kn && !Ft.autoExceptionInstrumented && (zn(Zr(gn, "onerror", {
                            ns: Pe,
                            rsp: function(Fn, Qn, De, Ge, er, Ye) {
                                !rn && Fn.rslt !== !0 && ln[li](ye[gi](Qn, De, Ge, er, Ye, Fn.evt))
                            }
                        }, !1)),
                        Kn = !0),
                        Ua(Ft, gn, Rn)
                    }
                    function Ma(Ft) {
                        var gn = (0,
                        v.Jj)()
                          , Rn = (0,
                        v.k$)(!0);
                        if (en = Ft[Wr] === !0,
                        gn && en && (0,
                        v.fE)()) {
                            var Fn = (0,
                            v.s1)();
                            (0,
                            o.mf)(Fn.pushState) && (0,
                            o.mf)(Fn.replaceState) && typeof Event !== ai.jA && Fa(Ft, gn, Fn, Rn)
                        }
                    }
                    function La() {
                        var Ft = null;
                        if (ln[Ve] && ln[Ve].getTraceCtx && (Ft = ln[Ve].getTraceCtx(!1)),
                        !Ft) {
                            var gn = ln[Ve].getPlugin(Ee);
                            if (gn) {
                                var Rn = gn.plugin.context;
                                Rn && (Ft = rt(Rn.telemetryTrace))
                            }
                        }
                        return Ft
                    }
                    function Fa(Ft, gn, Rn, Fn) {
                        var Qn = Ft[Vr] || "";
                        function De() {
                            en && O(gn, Je(Qn + "locationchange"))
                        }
                        function Ge() {
                            if (pe && (Me = pe),
                            pe = Fn && Fn[Rr] || "",
                            en) {
                                var er = La();
                                if (er) {
                                    er.setTraceId((0,
                                    ht.DO)());
                                    var Ye = "_unknown_";
                                    Fn && Fn.pathname && (Ye = Fn.pathname + (Fn.hash || "")),
                                    er.setName(w(ln[Ze](), Ye))
                                }
                                setTimeout(function(Jr) {
                                    ln[Qr]({
                                        refUri: Jr,
                                        properties: {
                                            duration: 0
                                        }
                                    })
                                }
                                .bind(this, Me), ln.autoRoutePVDelay)
                            }
                        }
                        yn || (zn(Zr(Rn, "pushState", {
                            ns: Pe,
                            rsp: function() {
                                en && (O(gn, Je(Qn + "pushState")),
                                O(gn, Je(Qn + "locationchange")))
                            }
                        }, !0)),
                        zn(Zr(Rn, "replaceState", {
                            ns: Pe,
                            rsp: function() {
                                en && (O(gn, Je(Qn + "replaceState")),
                                O(gn, Je(Qn + "locationchange")))
                            }
                        }, !0)),
                        (0,
                        fe.XO)(gn, Qn + "popstate", De, Pe),
                        (0,
                        fe.XO)(gn, Qn + "locationchange", Ge, Pe),
                        yn = !0)
                    }
                    function Ua(Ft, gn, Rn) {
                        oe = Ft[Hr] === !0,
                        oe && !Xt && (zn(Zr(gn, "onunhandledrejection", {
                            ns: Pe,
                            rsp: function(Fn, Qn) {
                                oe && Fn.rslt !== !0 && ln[li](ye[gi](dt(Qn), Rn ? Rn[Rr] : "", 0, 0, Qn, Fn.evt))
                            }
                        }, !1)),
                        Xt = !0,
                        Ft.autoUnhandledPromiseInstrumented = Xt)
                    }
                    function vr(Ft, gn, Rn, Fn, Qn) {
                        ln[Ze]().throwInternal(Ft, gn, Rn, Fn, Qn)
                    }
                    function ta() {
                        s = null,
                        d = null,
                        S = null,
                        G = null,
                        lt = null,
                        et = null,
                        Tt = !1,
                        Mt = !1,
                        en = !1,
                        yn = !1,
                        rn = !1,
                        Kn = !1,
                        oe = !1,
                        Xt = !1,
                        ae = 0;
                        var Ft = (0,
                        v.k$)(!0);
                        Me = Ft && Ft[Rr] || "",
                        pe = null,
                        Pe = null
                    }
                    (0,
                    o.l_)(ln, "_pageViewManager", function() {
                        return S
                    }),
                    (0,
                    o.l_)(ln, "_pageViewPerformanceManager", function() {
                        return G
                    }),
                    (0,
                    o.l_)(ln, "_pageVisitTimeManager", function() {
                        return lt
                    }),
                    (0,
                    o.l_)(ln, "_evtNamespace", function() {
                        return "." + Pe
                    })
                }),
                i
            }
            return e.Version = "2.8.10",
            e.getDefaultConfig = On,
            e
        }(yi.i)
          , kn = "data-bi-dnt"
          , Xn = "data-bi-mto";
        function Cn(n) {
            var e;
            if (n) {
                var i = n.split(":");
                e = i.length > 1 && i[0].toLowerCase() === "js" ? n : APPID_PREFIX + n
            }
            return e
        }
        function Bn(n, e) {
            de(n),
            (0,
            o.tO)(e, function(i, s) {
                (0,
                o.Kn)(n[i]) ? de(n[i]) : delete n[i]
            })
        }
        function de(n) {
            (0,
            o.rW)(n, function(e, i) {
                (!(0,
                a.Sn)(i) || JSON.stringify(i) === "{}" && e !== "callback") && delete n[e]
            })
        }
        function ce(n, e) {
            var i = n.left
              , s = n.top
              , d = n.right
              , S = n.bottom
              , G = e.left
              , lt = e.top
              , et = e.right
              , Tt = e.bottom
              , Mt = Math.max(0, Math.min(d, et) - Math.max(i, G))
              , en = Math.max(0, Math.min(S, Tt) - Math.max(s, lt));
            return Mt * en
        }
        function dr(n) {
            return Ri(n, na)
        }
        function Ti(n, e) {
            if (e)
                try {
                    var i = JSON.stringify(e);
                    return i === "{}" && n === "timing" ? Ai() : i
                } catch (S) {
                    var s = "{'error': 'ERROR: could not stringify {0} {1}'}"
                      , d = typeof e == "string" ? e : "";
                    return s.replace("{0}", n).replace("{1}", d)
                }
            return ""
        }
        function Ai() {
            var n = "{";
            if (isWindowObjectAvailable)
                for (var e = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"], i = getPerformance(), s = i ? i.timing : {}, d = 0; d < e.length; d++) {
                    var S = s[e[d]];
                    isValueAssigned(S) && (n += "'" + e[d] + "':" + S,
                    d < e.length - 1 && (n += ","))
                }
            return n += "}",
            n
        }
        function Ri(n, e, i) {
            var s = n;
            if (s) {
                for (s = s; !e(s, i); )
                    if (s = s.parentNode,
                    s = s,
                    !s || !s.getAttribute)
                        return null;
                return s
            }
        }
        function na(n) {
            return n.nodeName === "A"
        }
        function xa(n) {
            return n
        }
        function ea(n, e) {
            n = n;
            var i = n.getBoundingClientRect()
              , s = ce(i, e);
            return s > 0
        }
        function ra(n, e) {
            var i;
            return n && n[e] && (i = n[e],
            delete n[e]),
            i
        }
        function ia(n) {
            if ("which"in n)
                return n.which === 3;
            if ("button"in n)
                return n.button === 2
        }
        function aa(n) {
            if ("which"in n)
                return n.which === 1;
            if ("button"in n)
                return n.button === 1
        }
        function oa(n) {
            if ("which"in n)
                return n.which === 2;
            if ("button"in n)
                return n.button === 4
        }
        function sa(n) {
            if ("keyCode"in n)
                return n.keyCode === 13
        }
        function ua(n) {
            if ("keyCode"in n)
                return n.keyCode === 32
        }
        function Ki(n, e) {
            var i = Mi(n, kn);
            return !!(0,
            a.Sn)(i)
        }
        function ca(n, e) {
            return !(e && e.isAuto && (0,
            a.Sn)(Mi(n, Xn)) || Ki(n))
        }
        function Mi(n, e) {
            return Ri(n, la, e)
        }
        function la(n, e) {
            var i = n.getAttribute(e);
            return (0,
            a.Sn)(i) || i === ""
        }
        function Li(n) {
            return "[" + n + "]"
        }
        function Gi(n, e, i, s) {
            var d;
            return function() {
                var S = arguments
                  , G = function() {
                    d = 0,
                    e && e.apply(s, S)
                }
                  , lt = !d;
                clearTimeout(d),
                d = setTimeout(G, i),
                lt && n && n.apply(s, S)
            }
        }
        function zi() {
            var n = {
                h: 0,
                v: 0
            }
              , e = (0,
            v.Jj)()
              , i = (0,
            v.Me)();
            return i && e && (n = {
                h: parseInt(i.body.scrollLeft || i.documentElement.scrollLeft || e.pageXOffset, 10),
                v: parseInt(i.body.scrollTop || i.documentElement.scrollTop || e.pageYOffset, 10)
            }),
            n
        }
        function Vi() {
            var n = {
                h: 0,
                w: 0
            }
              , e = (0,
            v.Jj)()
              , i = (0,
            v.Me)();
            if (e && i && e.screen) {
                var s = i.body || {}
                  , d = i.documentElement || {};
                n.h = e.innerHeight || s.clientHeight || d.clientHeight,
                n.w = e.innerWidth || s.clientWidth || d.clientWidth
            }
            return n
        }
        function fa(n) {
            var e = {
                top: 0,
                bottom: n.h,
                left: 0,
                right: n.w
            };
            return e
        }
        var da = {
            BUTTON: !0,
            CHECKBOX: !0,
            RADIO: !0,
            RESET: !0,
            SUBMIT: !0
        };
        function va(n) {
            var e = n;
            if (e) {
                var i = dr(e);
                if (i && i.length === 1) {
                    if (i[0].href)
                        return i[0].href;
                    if (i[0].src)
                        return i[0].src
                }
            }
            return ""
        }
        function Bi(n) {
            if (!n || !n.attributes)
                return !1;
            try {
                var e = n.getAttribute("data-dc");
                return (0,
                a.Sn)(e) ? e.toLowerCase() === "pii" : !1
            } catch (i) {
                return !1
            }
        }
        function ga(n, e) {
            return n.coreData && n.coreData.requestUri && n.coreData.requestUri !== "" ? n.coreData.requestUri : pa(n, e)
        }
        function pa(n, e) {
            if (!e)
                return null;
            var i = e.protocol + "//" + (e.hostname || e.host) + ((0,
            a.Sn)(e.port) ? ":" + e.port : "") + e.pathname;
            if (n.urlCollectQuery) {
                var s = e.search;
                if (!s) {
                    var d = e.hash || ""
                      , S = d.indexOf("?");
                    S !== -1 && (s = d.slice(S))
                }
                i += s
            }
            return n.urlCollectHash && (i += e.hash || ""),
            i
        }
        function ma(n, e) {
            if (e && e.pageName)
                return e.pageName;
            if (n.callback && typeof n.callback.pageName == "function")
                return n.callback.pageName();
            if (n.coreData && n.coreData.pageName)
                return n.coreData.pageName;
            var i = (0,
            v.k$)() || {}
              , s = i.pathname || ""
              , d = s.replace(/(^\/+|\/+$)/g, "").split("/");
            return d && d[d.length - 1] ? s = d[d.length - 1] : s = "Home",
            s
        }
        function Ha() {
            return isDocumentObjectAvailable ? document.title.substring(0, 150) : ""
        }
        function ha(n) {
            var e = n.callback && typeof n.callback.signedinStatus == "function" ? n.callback.signedinStatus() : n.isLoggedIn;
            return e
        }
        function Ji(n, e) {
            var i = ""
              , s = {}
              , d = []
              , S = n.cookiesToCollect;
            n.shareAuthStatus === !1 ? d = S : (0,
            o.tO)(S, function(et) {
                et !== "ANON" && d.push(et)
            });
            var G, lt;
            try {
                try {
                    a.dH && window.varCustomerCookies && window.varCustomerCookies.length > 0 && (d = d.concat(window.varCustomerCookies))
                } catch (et) {
                    (0,
                    T.kP)(e, 1, 512, "Failed to get cookies ")
                }
                (0,
                o.tO)(d, function(et) {
                    s.hasOwnProperty(et) || (s[et] = "",
                    a.x9 && (lt = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(et).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")),
                    lt !== "" && (i += et + "=" + lt + ";")))
                })
            } catch (et) {
                (0,
                T.kP)(e, 1, 512, "Failed to get cookies ")
            }
            return i
        }
        function Ea(n) {
            var e = "";
            switch (n.tagName) {
            case "A":
            case "AREA":
                e = n.href || "";
                break;
            case "IMG":
                e = va(n);
                break;
            case "INPUT":
                var i = n.type;
                if (i && da[i.toUpperCase()]) {
                    var s = (0,
                    v.k$)() || {};
                    n.form ? e = n.form.action || s.pathname || "" : e = s.pathname || ""
                }
                break;
            default:
                break
            }
            return e
        }
        function Zi(n, e) {
            var i = (0,
            fe.jU)((0,
            It.J)("onDomLoaded"), e);
            Xi(function() {
                if (a.x9 && document.readyState === "complete")
                    n();
                else {
                    var s = (0,
                    v.Jj)();
                    s && (0,
                    fe.XO)(s, "load", function() {
                        n && n(),
                        n = null,
                        (0,
                        fe.QY)(s, null, null, i)
                    }, i)
                }
            })
        }
        function Xi(n) {
            var e = (0,
            v.Me)() || {};
            /in/.test(e.readyState) ? setTimeout(function() {
                Xi(n)
            }, 100) : n.call()
        }
        var Wa = "2.1", Ca = "1.0", Qi = "2.0", Ta = 200, Va = 524288, ja = "JS:", Fi;
        (function(n) {
            n[n.UNDEFINED = 0] = "UNDEFINED",
            n[n.NAVIGATIONBACK = 1] = "NAVIGATIONBACK",
            n[n.NAVIGATION = 2] = "NAVIGATION",
            n[n.NAVIGATIONFORWARD = 3] = "NAVIGATIONFORWARD",
            n[n.APPLY = 4] = "APPLY",
            n[n.REMOVE = 5] = "REMOVE",
            n[n.SORT = 6] = "SORT",
            n[n.EXPAND = 7] = "EXPAND",
            n[n.REDUCE = 8] = "REDUCE",
            n[n.CONTEXTMENU = 9] = "CONTEXTMENU",
            n[n.TAB = 10] = "TAB",
            n[n.COPY = 11] = "COPY",
            n[n.EXPERIMENTATION = 12] = "EXPERIMENTATION",
            n[n.PRINT = 13] = "PRINT",
            n[n.SHOW = 14] = "SHOW",
            n[n.HIDE = 15] = "HIDE",
            n[n.MAXIMIZE = 16] = "MAXIMIZE",
            n[n.MINIMIZE = 17] = "MINIMIZE",
            n[n.BACKBUTTON = 18] = "BACKBUTTON",
            n[n.STARTPROCESS = 20] = "STARTPROCESS",
            n[n.PROCESSCHECKPOINT = 21] = "PROCESSCHECKPOINT",
            n[n.COMPLETEPROCESS = 22] = "COMPLETEPROCESS",
            n[n.SCENARIOCANCEL = 23] = "SCENARIOCANCEL",
            n[n.DOWNLOADCOMMIT = 40] = "DOWNLOADCOMMIT",
            n[n.DOWNLOAD = 41] = "DOWNLOAD",
            n[n.SEARCHAUTOCOMPLETE = 60] = "SEARCHAUTOCOMPLETE",
            n[n.SEARCH = 61] = "SEARCH",
            n[n.SEARCHINITIATE = 62] = "SEARCHINITIATE",
            n[n.TEXTBOXINPUT = 63] = "TEXTBOXINPUT",
            n[n.PURCHASE = 80] = "PURCHASE",
            n[n.ADDTOCART = 81] = "ADDTOCART",
            n[n.VIEWCART = 82] = "VIEWCART",
            n[n.ADDWISHLIST = 83] = "ADDWISHLIST",
            n[n.FINDSTORE = 84] = "FINDSTORE",
            n[n.CHECKOUT = 85] = "CHECKOUT",
            n[n.REMOVEFROMCART = 86] = "REMOVEFROMCART",
            n[n.PURCHASECOMPLETE = 87] = "PURCHASECOMPLETE",
            n[n.VIEWCHECKOUTPAGE = 88] = "VIEWCHECKOUTPAGE",
            n[n.VIEWCARTPAGE = 89] = "VIEWCARTPAGE",
            n[n.VIEWPDP = 90] = "VIEWPDP",
            n[n.UPDATEITEMQUANTITY = 91] = "UPDATEITEMQUANTITY",
            n[n.INTENTTOBUY = 92] = "INTENTTOBUY",
            n[n.PUSHTOINSTALL = 93] = "PUSHTOINSTALL",
            n[n.SIGNIN = 100] = "SIGNIN",
            n[n.SIGNOUT = 101] = "SIGNOUT",
            n[n.SOCIALSHARE = 120] = "SOCIALSHARE",
            n[n.SOCIALLIKE = 121] = "SOCIALLIKE",
            n[n.SOCIALREPLY = 122] = "SOCIALREPLY",
            n[n.CALL = 123] = "CALL",
            n[n.EMAIL = 124] = "EMAIL",
            n[n.COMMUNITY = 125] = "COMMUNITY",
            n[n.SOCIALFOLLOW = 126] = "SOCIALFOLLOW",
            n[n.VOTE = 140] = "VOTE",
            n[n.SURVEYINITIATE = 141] = "SURVEYINITIATE",
            n[n.SURVEYCOMPLETE = 142] = "SURVEYCOMPLETE",
            n[n.REPORTAPPLICATION = 143] = "REPORTAPPLICATION",
            n[n.REPORTREVIEW = 144] = "REPORTREVIEW",
            n[n.SURVEYCHECKPOINT = 145] = "SURVEYCHECKPOINT",
            n[n.CONTACT = 160] = "CONTACT",
            n[n.REGISTRATIONINITIATE = 161] = "REGISTRATIONINITIATE",
            n[n.REGISTRATIONCOMPLETE = 162] = "REGISTRATIONCOMPLETE",
            n[n.CANCELSUBSCRIPTION = 163] = "CANCELSUBSCRIPTION",
            n[n.RENEWSUBSCRIPTION = 164] = "RENEWSUBSCRIPTION",
            n[n.CHANGESUBSCRIPTION = 165] = "CHANGESUBSCRIPTION",
            n[n.REGISTRATIONCHECKPOINT = 166] = "REGISTRATIONCHECKPOINT",
            n[n.CHATINITIATE = 180] = "CHATINITIATE",
            n[n.CHATEND = 181] = "CHATEND",
            n[n.TRIALSIGNUP = 200] = "TRIALSIGNUP",
            n[n.TRIALINITIATE = 201] = "TRIALINITIATE",
            n[n.SIGNUP = 210] = "SIGNUP",
            n[n.FREESIGNUP = 211] = "FREESIGNUP",
            n[n.PARTNERREFERRAL = 220] = "PARTNERREFERRAL",
            n[n.LEARNLOWFUNNEL = 230] = "LEARNLOWFUNNEL",
            n[n.LEARNHIGHFUNNEL = 231] = "LEARNHIGHFUNNEL",
            n[n.SHOPPINGINTENT = 232] = "SHOPPINGINTENT",
            n[n.VIDEOSTART = 240] = "VIDEOSTART",
            n[n.VIDEOPAUSE = 241] = "VIDEOPAUSE",
            n[n.VIDEOCONTINUE = 242] = "VIDEOCONTINUE",
            n[n.VIDEOCHECKPOINT = 243] = "VIDEOCHECKPOINT",
            n[n.VIDEOJUMP = 244] = "VIDEOJUMP",
            n[n.VIDEOCOMPLETE = 245] = "VIDEOCOMPLETE",
            n[n.VIDEOBUFFERING = 246] = "VIDEOBUFFERING",
            n[n.VIDEOERROR = 247] = "VIDEOERROR",
            n[n.VIDEOMUTE = 248] = "VIDEOMUTE",
            n[n.VIDEOUNMUTE = 249] = "VIDEOUNMUTE",
            n[n.VIDEOFULLSCREEN = 250] = "VIDEOFULLSCREEN",
            n[n.VIDEOUNFULLSCREEN = 251] = "VIDEOUNFULLSCREEN",
            n[n.VIDEOREPLAY = 252] = "VIDEOREPLAY",
            n[n.VIDEOPLAYERLOAD = 253] = "VIDEOPLAYERLOAD",
            n[n.VIDEOPLAYERCLICK = 254] = "VIDEOPLAYERCLICK",
            n[n.VIDEOVOLUMECONTROL = 255] = "VIDEOVOLUMECONTROL",
            n[n.VIDEOAUDIOTRACKCONTROL = 256] = "VIDEOAUDIOTRACKCONTROL",
            n[n.VIDEOCLOSEDCAPTIONCONTROL = 257] = "VIDEOCLOSEDCAPTIONCONTROL",
            n[n.VIDEOCLOSEDCAPTIONSTYLE = 258] = "VIDEOCLOSEDCAPTIONSTYLE",
            n[n.VIDEORESOLUTIONCONTROL = 259] = "VIDEORESOLUTIONCONTROL",
            n[n.VIRTUALEVENTJOIN = 260] = "VIRTUALEVENTJOIN",
            n[n.VIRTUALEVENTEND = 261] = "VIRTUALEVENTEND",
            n[n.JOINTEAMSMEETINGEVENT = 262] = "JOINTEAMSMEETINGEVENT",
            n[n.IMPRESSION = 280] = "IMPRESSION",
            n[n.CLICK = 281] = "CLICK",
            n[n.RICHMEDIACOMPLETE = 282] = "RICHMEDIACOMPLETE",
            n[n.ADBUFFERING = 283] = "ADBUFFERING",
            n[n.ADERROR = 284] = "ADERROR",
            n[n.ADSTART = 285] = "ADSTART",
            n[n.ADCOMPLETE = 286] = "ADCOMPLETE",
            n[n.ADSKIP = 287] = "ADSKIP",
            n[n.ADTIMEOUT = 288] = "ADTIMEOUT",
            n[n.OTHER = 300] = "OTHER"
        }
        )(Fi || (Fi = {}));
        function ji(n, e, i) {
            var s = "";
            return e && e[i] ? s = e[i] : n && (s = n[i]),
            s
        }
        var Si = function() {
            function n(e, i, s, d, S, G, lt) {
                this._webAnalyticsPlugin = e,
                this._config = i,
                this._contentHandler = s,
                this._id = d,
                this._pageTagsCallback = S,
                this.metaTags = G,
                this._traceLogger = lt,
                this._pageTags = {}
            }
            return n.prototype._setBasicProperties = function(e, i) {
                e.ver = Ca,
                e.id = this._id.getLastPageViewId(),
                (0,
                a.Sn)(e.name) || (e.name = ma(this._config, i)),
                !(0,
                a.Sn)(e.uri) && a.dH && (e.uri = ga(this._config, (0,
                v.k$)()))
            }
            ,
            n.prototype._setCommonProperties = function(e, i, s) {
                var d = this;
                d._setBasicProperties(e, s),
                d._setPageTags(e, s),
                d._pageTypeMetaTag = ji(d.metaTags, d._config.coreData, "pageType"),
                d._marketMetaTag = ji(d.metaTags, d._config.coreData, "market"),
                d._behaviorMetaTag = ji(d.metaTags, d._config.coreData, "behavior"),
                (0,
                a.Sn)(s.pageType) && (e.pageType = s.pageType),
                (0,
                a.Sn)(d._pageTypeMetaTag) && !(0,
                a.Sn)(e.pageType) && (e.pageType = d._pageTypeMetaTag),
                (0,
                a.Sn)(d._marketMetaTag) && (e.market = d._marketMetaTag),
                e.isLoggedIn = ha(d._config),
                i.cookieEnabled = (0,
                yt.p7)()
            }
            ,
            n.prototype._setPageTags = function(e, i) {
                var s = this;
                s._pageTags = {},
                s.metaTags && (s._pageTags.metaTags = s._pageTags.metaTags || {},
                (0,
                o.rW)(s.metaTags, function(d, S) {
                    d !== "behavior" && d !== "market" && d !== "pageType" && (s._pageTags.metaTags[d] = S)
                })),
                s._config.coreData && s._config.coreData.pageTags && (s._pageTags = (0,
                a.l7)(!0, s._pageTags, s._config.coreData.pageTags)),
                s._pageTagsCallback && (s._pageTags = (0,
                a.l7)(!0, s._pageTags, s._pageTagsCallback())),
                (0,
                a.Sn)(i.pageTags) && (s._pageTags = (0,
                a.l7)(!0, s._pageTags, i.pageTags)),
                e.properties = e.properties || {},
                e.properties.pageTags = s._pageTags
            }
            ,
            n.prototype._getBehavior = function(e) {
                var i;
                return e && (0,
                a.Sn)(e.behavior) ? i = e.behavior : (0,
                a.Sn)(this._behaviorMetaTag) && (i = this._behaviorMetaTag),
                this._getValidBehavior(i)
            }
            ,
            n.prototype._getValidBehavior = function(e) {
                if ((0,
                a.Sn)(e)) {
                    var i = void 0
                      , s = parseInt(e);
                    if (isNaN(s) ? i = Fi[e] : i = s,
                    i in Fi)
                        return i
                }
                return 0
            }
            ,
            n.prototype._getContentFormatted = function(e) {
                if ((0,
                a.Sn)(e))
                    return (0,
                    o.kJ)(e) ? JSON.stringify(e) : Li(JSON.stringify(e))
            }
            ,
            n
        }(), Sa = function(n) {
            (0,
            C.ne)(e, n);
            function e() {
                return n !== null && n.apply(this, arguments) || this
            }
            return e.prototype.trackContentUpdate = function(i, s) {
                var d = {};
                d.web = {},
                d.web.isManual = i.isManual;
                var S = {
                    name: "Ms.Web.ContentUpdate",
                    baseType: "ContentUpdateData",
                    ext: d,
                    data: {},
                    baseData: {},
                    latency: 3
                };
                (0,
                o.tO)(["name", "uri", "market", "pageType", "isLoggedIn", "id", "properties", "ver", "actionType", "behavior", "pageHeight", "content", "contentVer", "vpHeight", "vpWidth", "vScrollOffset", "hScrollOffset"], function(G) {
                    S.baseData[G] = i[G]
                }),
                (0,
                o.rW)(s, function(G, lt) {
                    S.data[G] || (S.data[G] = lt)
                }),
                this._webAnalyticsPlugin.core.track(S)
            }
            ,
            e.prototype.captureContentUpdate = function(i, s) {
                i = (0,
                a.Sn)(i) ? i : {};
                var d = {}
                  , S = (0,
                a.Sn)(s) ? s : {};
                this._setCommonProperties(d, S, i),
                d.behavior = this._getBehavior(i),
                (0,
                a.Sn)(i.actionType) && (d.actionType = i.actionType);
                var G = Vi()
                  , lt = zi();
                d.pageHeight = a.x9 ? document.body.scrollHeight : null,
                d.vpHeight = G.h,
                d.vpWidth = G.w,
                d.vScrollOffset = lt.v,
                d.hScrollOffset = lt.h,
                d.contentVer = Qi,
                d.isManual = !i.isAuto;
                var et = this._getContentFormatted(i.content) || JSON.stringify(this._contentHandler.getVisibleContent());
                et && (d.content = et),
                (0,
                a.Sn)(i.isDomComplete) ? S.isDomComplete = i.isDomComplete : S.isDomComplete = !1,
                this.trackContentUpdate(d, S)
            }
            ,
            e
        }(Si), yr = {
            CLICKLEFT: "CL",
            CLICKRIGHT: "CR",
            CLICKMIDDLE: "CM",
            SCROLL: "S",
            ZOOM: "Z",
            RESIZE: "R",
            KEYBOARDENTER: "KE",
            KEYBOARDSPACE: "KS",
            OTHER: "O"
        }, _i;
        (function(n) {
            n[n.PAGE_ACTION = 0] = "PAGE_ACTION",
            n[n.CONTENT_UPDATE = 1] = "CONTENT_UPDATE"
        }
        )(_i || (_i = {}));
        var _a = function(n) {
            (0,
            C.ne)(e, n);
            function e() {
                return n !== null && n.apply(this, arguments) || this
            }
            return e.prototype.trackPageAction = function(i, s) {
                var d = {};
                d.web = {},
                d.web.isManual = i.isManual;
                var S = {
                    name: "Ms.Web.PageAction",
                    baseType: "PageActionData",
                    ext: d,
                    data: {},
                    baseData: {},
                    latency: 1
                };
                (0,
                o.o8)(i.sync) || (S.sync = i.sync),
                S.baseData.name = i.name,
                S.baseData.uri = i.uri,
                S.baseData.market = i.market,
                S.baseData.pageType = i.pageType,
                S.baseData.isLoggedIn = i.isLoggedIn,
                S.baseData.id = i.id,
                S.baseData.properties = i.properties,
                S.baseData.ver = i.ver,
                S.baseData.actionType = i.actionType,
                S.baseData.behavior = i.behavior,
                S.baseData.clickCoordinates = i.clickCoordinates,
                S.baseData.content = i.content,
                S.baseData.contentVer = i.contentVer,
                S.baseData.targetUri = i.targetUri,
                (0,
                o.rW)(s, function(G, lt) {
                    S.data[G] || (S.data[G] = lt)
                }),
                this._webAnalyticsPlugin.core.track(S)
            }
            ,
            e.prototype.capturePageAction = function(i, s, d, S) {
                s = (0,
                a.Sn)(s) ? s : {};
                var G = {}
                  , lt = (0,
                a.Sn)(d) ? d : {};
                this._setCommonProperties(G, lt, s),
                G.isManual = !s.isAuto,
                G.behavior = this._getBehavior(s);
                var et = {};
                if (i = i,
                S)
                    G.behavior = 9;
                else {
                    var Tt = this._config || {};
                    if ((i && (0,
                    o.o8)(Tt.syncPageActionNavClick) || Tt.syncPageActionNavClick) && (s.actionType === yr.CLICKLEFT || s.actionType === yr.KEYBOARDENTER) && i.tagName.toLowerCase() === "a") {
                        var Mt = (i.getAttribute("href") || "").toLowerCase();
                        Mt && ((0,
                        o.xe)(Mt, "https:") || (0,
                        o.xe)(Mt, "http:") || (0,
                        o.xe)(Mt, ".") || (0,
                        o.xe)(Mt, "/")) && (G.sync = 3)
                    }
                }
                if (i && (G.targetUri = Ea(i),
                et = this._contentHandler.getElementContent(i, _i.PAGE_ACTION),
                et = (0,
                a.l7)(et, this._getCustomTags(i)),
                et && et.bhvr && !(0,
                a.Sn)(s.behavior))) {
                    var en = ra(et, "bhvr");
                    G.behavior = this._getValidBehavior(en)
                }
                (0,
                a.Sn)(s.actionType) && (G.actionType = s.actionType),
                (0,
                a.Sn)(s.clickCoordinateX) && (0,
                a.Sn)(s.clickCoordinateY) && (G.clickCoordinates = s.clickCoordinateX + "X" + s.clickCoordinateY),
                (0,
                a.Sn)(s.targetUri) && (G.targetUri = s.targetUri),
                G.contentVer = Qi;
                var yn = s.content || et;
                if (!(0,
                o.kJ)(yn)) {
                    var rn = this._config.callback.pageActionContentTags;
                    yn = (0,
                    a.l7)(yn, typeof rn == "function" ? rn(i) : {}, s && s.contentTags ? s.contentTags : {})
                }
                G.content = this._getContentFormatted(yn),
                lt.timeToAction = this._getTimeToClick(),
                lt.refUri = (0,
                a.Sn)(s.refUri) ? s.refUri : this._config.coreData.referrerUri;
                var Kn = Ji(this._config, this._traceLogger);
                Kn && (lt.cookies = Kn),
                this.trackPageAction(G, lt)
            }
            ,
            e.prototype._getCustomTags = function(i) {
                for (var s = {}; i; ) {
                    if (!Bi(i)) {
                        for (var d in i.attributes)
                            if (d && i.attributes[d]) {
                                var S = i.attributes[d].name;
                                S && S.toLowerCase().indexOf("ms.") === 0 && (s[S] = i.attributes[d].value)
                            }
                    }
                    i = i.parentElement || i.parentNode
                }
                return s
            }
            ,
            e.prototype._getTimeToClick = function() {
                var i = (0,
                v.r)();
                if (i && i.timing) {
                    var s = i.timing.navigationStart;
                    if (s && s !== 0)
                        return new Date().getTime() - s
                }
                return -1
            }
            ,
            e
        }(Si)
          , ya = function(n) {
            (0,
            C.ne)(e, n);
            function e(i, s, d, S, G, lt) {
                var et = n.call(this, i, s, null, d, {}, {}, S) || this;
                return et._webAnalyticsPlugin = i,
                et._config = s,
                et._id = d,
                et._traceLogger = S,
                et._timestamp = G,
                et._maxScroll = lt,
                et
            }
            return e.prototype.trackPageUnload = function(i, s) {
                var d = {};
                d.web = {},
                d.web.isManual = i.isManual;
                var S = {
                    name: "Ms.Web.PageUnload",
                    baseType: "PageUnloadData",
                    ext: d,
                    data: {},
                    baseData: {},
                    latency: 3
                }
                  , G = this._config || {};
                ((0,
                o.o8)(G.syncUnloadAction) || G.syncUnloadAction) && (S.sync = 3),
                S.baseData.name = i.name,
                S.baseData.uri = i.uri,
                S.baseData.id = i.id,
                S.baseData.properties = i.properties,
                S.baseData.ver = i.ver,
                S.baseData.market = i.market,
                S.baseData.pageType = i.pageType,
                S.baseData.isLoggedIn = i.isLoggedIn,
                (0,
                o.rW)(s, function(lt, et) {
                    S.data[lt] || (S.data[lt] = et)
                }),
                this._webAnalyticsPlugin.core.track(S)
            }
            ,
            e.prototype.capturePageUnload = function(i, s) {
                i = (0,
                a.Sn)(i) ? i : {};
                var d = {}
                  , S = (0,
                a.Sn)(s) ? s : {}
                  , G = a.x9 ? document.body.scrollHeight : 0;
                if (this._setBasicProperties(d, i),
                d.isManual = !i.isAuto,
                S.dwellTime = this._timestamp._recordTimeSpan("dwellTime", !0),
                S.scrollDepth = i.scrollDepth || this._maxScroll.v.toString() + "/" + G.toString(),
                S.vpHeight = Vi().h,
                S.vScrollOffset = i.vScrollOffset || this._maxScroll.v,
                a.dH) {
                    var lt = (0,
                    v.r)()
                      , et = lt ? lt.timing : null;
                    et && et.loadEventStart && et.navigationStart && et.loadEventStart > 0 && (S.pageLoadTime = et.loadEventStart - et.navigationStart)
                }
                this.trackPageUnload(d, S)
            }
            ,
            e
        }(Si)
          , Ia = function(n) {
            (0,
            C.ne)(e, n);
            function e() {
                return n !== null && n.apply(this, arguments) || this
            }
            return e.prototype.capturePageView = function(i, s) {
                i = (0,
                a.Sn)(i) ? i : {};
                var d = {}
                  , S = (0,
                a.Sn)(s) ? s : {};
                this._setCommonProperties(d, S, i),
                d.refUri = (0,
                a.Sn)(i.referrerUri) ? i.referrerUri : this._config.coreData.referrerUri,
                d.isManual = !i.isAuto;
                var G = Ji(this._config, this._traceLogger);
                G && (S.cookies = G),
                S.behavior = this._getBehavior(i),
                this._webAnalyticsPlugin.trackPageView(d, S)
            }
            ,
            e
        }(Si)
          , Pa = function(n) {
            (0,
            C.ne)(e, n);
            function e() {
                return n !== null && n.apply(this, arguments) || this
            }
            return e.prototype.capturePageViewPerformance = function(i, s) {
                i = (0,
                a.Sn)(i) ? i : {};
                var d = {}
                  , S = (0,
                a.Sn)(s) ? s : {};
                this._setBasicProperties(d, i),
                this._setPageTags(d, i),
                d.isManual = !i.isAuto,
                S.behavior = this._getBehavior(i),
                S.vpHeight = i.vpHeight,
                S.vpWidth = i.vpWidth,
                S.framework = i.framework,
                S.systemTiming = i.systemTiming,
                S.customTiming = i.customTiming,
                this._webAnalyticsPlugin._populatePageViewPerformance(d),
                this._webAnalyticsPlugin.trackPageViewPerformance(d, S)
            }
            ,
            e
        }(Si)
          , Da = {
            BUTTON: !0,
            CHECKBOX: !0,
            RADIO: !0,
            RESET: !0,
            SUBMIT: !0
        }
          , wa = function() {
            function n(e, i) {
                var s = this, d, S, G, lt, et, Tt, Mt, en, yn;
                (0,
                y.Z)(n, this, function(rn) {
                    oe(),
                    d = e,
                    S = i,
                    G = (0,
                    fe.jU)((0,
                    It.J)("AutoCaptureHandler"), d._evtNamespace),
                    rn._analyticsPlugin = d,
                    rn._traceLogger = S,
                    rn.pageView = function() {
                        d && d.capturePageView({
                            isAuto: !0
                        })
                    }
                    ,
                    rn.onLoad = function() {
                        d && !yn && (Zi(function() {
                            d && d.capturePageViewPerformance({
                                isAuto: !0
                            }),
                            d && d.captureContentUpdate({
                                isAuto: !0,
                                isDomComplete: !0
                            })
                        }, G),
                        yn = !0)
                    }
                    ,
                    rn.click = function() {
                        if (!lt) {
                            var Xt = (0,
                            v.Jj)()
                              , ae = (0,
                            v.Me)();
                            if (Xt && Xt.addEventListener) {
                                var Me = navigator.appVersion.indexOf("MSIE") !== -1 ? "click" : "mousedown";
                                (0,
                                fe.XO)(Xt, Me, Kn, G),
                                (0,
                                fe.XO)(Xt, "keyup", Kn, G)
                            } else
                                ae && ae.attachEvent && ((0,
                                fe.XO)(ae, "click", Kn, G),
                                (0,
                                fe.XO)(ae, "keyup", Kn, G));
                            lt = !0
                        }
                    }
                    ,
                    rn.scroll = function(Xt) {
                        if (!et) {
                            var ae = Gi(null, function() {
                                d && d.captureContentUpdate({
                                    isAuto: !0,
                                    actionType: yr.SCROLL
                                })
                            }, Xt.scroll, s);
                            (0,
                            fe.XO)((0,
                            v.Jj)(), "scroll", ae, G),
                            et = !0
                        }
                    }
                    ,
                    rn.maxScroll = function(Xt) {
                        if (!Tt) {
                            var ae = function() {
                                var Me = zi();
                                Xt.v = Xt.v > Me.v ? Xt.v : Me.v
                            };
                            (0,
                            fe.XO)((0,
                            v.Jj)(), "scroll", ae, G),
                            Tt = !0
                        }
                    }
                    ,
                    rn.resize = function(Xt) {
                        if (!Mt) {
                            var ae = Gi(function() {
                                d && d.captureContentUpdate({
                                    isAuto: !0,
                                    actionType: yr.RESIZE
                                })
                            }, null, Xt.resize, s);
                            (0,
                            fe.XO)((0,
                            v.Jj)(), "resize", ae, G),
                            Mt = !0
                        }
                    }
                    ,
                    rn.onUnload = function() {
                        function Xt() {
                            d && d.capturePageUnload({
                                isAuto: !0
                            })
                        }
                        if (!en) {
                            var ae = ((d || {}).core || {}).config
                              , Me = ae.disablePageUnloadEvents;
                            (0,
                            fe.c9)(Xt, Me, G),
                            (0,
                            fe.TJ)(Xt, Me, G),
                            en = !0
                        }
                    }
                    ,
                    rn.teardown = function(Xt, ae) {
                        (0,
                        fe.QY)((0,
                        v.Jj)(), null, null, G),
                        (0,
                        fe.QY)((0,
                        v.Me)(), null, null, G),
                        (0,
                        fe.JA)(null, G),
                        (0,
                        fe.C9)(null, G),
                        oe()
                    }
                    ,
                    rn._processClick = Kn;
                    function Kn(Xt) {
                        var ae = {
                            A: !0,
                            BUTTON: !0,
                            AREA: !0,
                            INPUT: !0
                        }
                          , Me = (0,
                        v.Jj)();
                        Xt = Xt || Me.event;
                        var pe = Xt.srcElement || Xt.target
                          , Pe = {
                            isAuto: !0,
                            clickCoordinateX: Xt.pageX,
                            clickCoordinateY: Xt.pageY
                        }
                          , ln = ia(Xt);
                        if (ln)
                            Pe.actionType = yr.CLICKRIGHT;
                        else if (aa(Xt))
                            Pe.actionType = yr.CLICKLEFT;
                        else if (sa(Xt))
                            Pe.actionType = yr.KEYBOARDENTER;
                        else if (ua(Xt))
                            Pe.actionType = yr.KEYBOARDSPACE;
                        else if (oa(Xt))
                            Pe.actionType = yr.CLICKMIDDLE;
                        else
                            return;
                        for (; pe && pe.tagName; )
                            if (pe.control && ae[pe.control.tagName.toUpperCase()] && (pe = pe.control),
                            ae[pe.tagName.toUpperCase()]) {
                                var dn = pe.tagName.toUpperCase() === "INPUT" ? Da[pe.type.toUpperCase()] : !0;
                                dn && d && d.capturePageAction(pe, Pe, {}, ln);
                                break
                            } else {
                                pe = pe.parentElement || pe.parentNode;
                                continue
                            }
                    }
                    function oe() {
                        rn._analyticsPlugin = null,
                        rn._traceLogger = null,
                        d = null,
                        S = null,
                        G = null,
                        et = !1,
                        Tt = !1,
                        Mt = !1,
                        en = !1,
                        yn = !1
                    }
                })
            }
            return n.__ieDyn = 1,
            n
        }()
          , $i = {
            longNames: {
                isShortNames: !1,
                id: "data-bi-id",
                areaName: "data-bi-area",
                slotNumber: "data-bi-slot",
                contentName: "data-bi-name",
                contentSource: "data-bi-source",
                templateName: "data-bi-view",
                productId: "data-bi-product",
                contentType: "data-bi-type",
                parentId: "data-bi-parentid",
                parentName: "data-bi-parentname"
            },
            shortNames: {
                isShortNames: !0,
                id: "data-bi-id",
                areaName: "data-bi-an",
                slotNumber: "data-bi-sn",
                contentName: "data-bi-cn",
                contentSource: "data-bi-cs",
                templateName: "data-bi-tn",
                productId: "data-bi-pid",
                contentType: "data-bi-ct",
                parentId: "data-bi-pi",
                parentName: "data-bi-pn"
            }
        }
          , Ui = {
            longKeys: {
                parentId: "parentId",
                parentName: "parentName"
            },
            shortKeys: {
                parentId: "pI",
                parentName: "pN"
            }
        }
          , Oa = function() {
            function n(e, i) {
                this._config = e,
                this._traceLogger = i,
                this._contentBlobFieldNames = null,
                this._contentBlobFieldNames = this._config.useShortNameForContentBlob === !0 ? $i.shortNames : $i.longNames
            }
            return n.prototype.getMetadata = function() {
                var e = {}
                  , i = {};
                return a.x9 && (i = this._getMetaDataFromDOM("awa-", !0),
                this._config.autoCapture && this._config.autoCapture.msTags && (e = this._getMetaDataFromDOM("ms.", !1))),
                (0,
                a.l7)(!0, i, e)
            }
            ,
            n.prototype.getVisibleContent = function() {
                var e = Vi()
                  , i = fa(e)
                  , s = null;
                a.x9 && (s = document.querySelectorAll(Li(this._contentBlobFieldNames.areaName) + "," + Li(this._contentBlobFieldNames.slotNumber) + "," + Li(this._config.biBlobAttributeTag)));
                var d = [];
                if (s)
                    for (var S = 0; S < s.length; S++) {
                        var G = s[S];
                        if (!Ki(G) && ea(G, i)) {
                            var lt = this.getElementContent(G, _i.CONTENT_UPDATE);
                            lt && d.push(lt)
                        }
                    }
                return d
            }
            ,
            n.prototype.getElementContent = function(e, i) {
                if (!e)
                    return {};
                var s = {}, d, S, G;
                if (this._isTracked(e))
                    if (this._isTrackedWithDataM(e)) {
                        d = e,
                        S = d.getAttribute(this._config.biBlobAttributeTag);
                        try {
                            s = JSON.parse(S)
                        } catch (lt) {
                            (0,
                            T.kP)(this._traceLogger, 1, 506, "Can not parse " + S)
                        }
                    } else
                        this._isTrackedWithDataBi(e) && (G = e,
                        s = (0,
                        a.l7)(s, this._populateElementContentwithDataBi(G, e)));
                else if (d = Mi(e, this._config.biBlobAttributeTag),
                d && (S = d.getAttribute(this._config.biBlobAttributeTag)),
                S)
                    try {
                        s = JSON.parse(S)
                    } catch (lt) {
                        (0,
                        T.kP)(this._traceLogger, 1, 506, "Can not parse " + S)
                    }
                else
                    G = Ri(e, this._isTrackedWithDataBi),
                    s = (0,
                    a.l7)(s, this._populateElementContentwithDataBi(G, e));
                return de(s),
                this._config.autoCapture.lineage && i === _i.PAGE_ACTION && (s = (0,
                a.l7)(s, this.getLineageDetails(e))),
                this._config.autoPopulateParentIdAndParentName && (s = (0,
                a.l7)(s, this._getParentDetails(d || G, s))),
                s
            }
            ,
            n.prototype.getLineageDetails = function(e) {
                for (var i = [], s = [], d = ">", S = this._config.biBlobAttributeTag, G = "data-module-id", lt, et, Tt; e; ) {
                    var Mt = e.getAttribute(S) || e[S]
                      , en = e.getAttribute(G) || e[G];
                    if (Mt) {
                        try {
                            var yn = JSON.parse(Mt)
                        } catch (Kn) {
                            (0,
                            T.kP)(this._traceLogger, 1, 507, "Can not parse " + Mt)
                        }
                        yn && (et = yn.cN || yn.cT,
                        Tt = yn.id || void 0,
                        (et || Tt) && (i.push(et),
                        en && (lt = et),
                        s.push(Tt)))
                    } else
                        et = e.getAttribute(this._contentBlobFieldNames.contentName) || e.getAttribute(this._contentBlobFieldNames.contentType),
                        Tt = e.getAttribute(this._contentBlobFieldNames.id) || void 0,
                        (et || Tt) && (i.push(et),
                        en && (lt = et),
                        s.push(Tt));
                    e = e.parentElement
                }
                var rn = {
                    lineage: i.join(d),
                    lineageById: s.join(d),
                    lineageContainerName: lt
                };
                return rn
            }
            ,
            n.prototype._populateElementContentwithDataBi = function(e, i) {
                var s = {};
                if (!e)
                    if (this._config.useDefaultContentName)
                        e = i;
                    else
                        return s;
                var d = Mi(e, this._contentBlobFieldNames.areaName)
                  , S = (0,
                a.l7)({}, this._getAreaContent(d))
                  , G = this._config.callback.contentName ? this._config.callback.contentName(e, this._config.useDefaultContentName) : ""
                  , lt = this._getDefaultContentName(i, this._config.useDefaultContentName);
                s = {
                    id: e.getAttribute(this._contentBlobFieldNames.id) || e.id || "",
                    aN: S.areaName,
                    sN: e.getAttribute(this._contentBlobFieldNames.slotNumber),
                    cN: G || e.getAttribute(this._contentBlobFieldNames.contentName) || lt || e.getAttribute("alt") || "",
                    cS: e.getAttribute(this._contentBlobFieldNames.contentSource) || S.contentSource,
                    tN: S.templateName,
                    pid: e.getAttribute(this._contentBlobFieldNames.productId),
                    cT: e.getAttribute(this._contentBlobFieldNames.contentType) || S.type,
                    pI: e.getAttribute(this._contentBlobFieldNames.parentId),
                    pN: e.getAttribute(this._contentBlobFieldNames.parentName)
                },
                (!s.id || !s.aN || !s.sN || !s.cN) && (0,
                T.kP)(this._traceLogger, 2, 515, "Invalid content blob.  Missing required attributes (id, aN/area, sN/slot), cN/contentName.  Content information will still be collected!"),
                this._contentBlobFieldNames.isShortNames || (s = {
                    contentId: s.id,
                    areaName: s.aN,
                    slotNumber: s.sN,
                    contentName: s.cN,
                    contentSource: s.cS,
                    templateName: s.tN,
                    productId: s.pid,
                    contentType: s.cT,
                    parentId: s.pI,
                    parentName: s.pN
                });
                for (var et = 0, Tt; et < e.attributes.length; et++)
                    if (Tt = e.attributes[et],
                    !(Tt.name === this._contentBlobFieldNames.id || Tt.name === this._contentBlobFieldNames.areaName || Tt.name === this._contentBlobFieldNames.slotNumber || Tt.name === this._contentBlobFieldNames.contentName || Tt.name === this._contentBlobFieldNames.contentSource || Tt.name === this._contentBlobFieldNames.templateName || Tt.name === this._contentBlobFieldNames.productId || Tt.name === this._contentBlobFieldNames.contentType || Tt.name === this._contentBlobFieldNames.parentId || Tt.name === this._contentBlobFieldNames.parentName || Tt.name.indexOf("data-bi-") === -1)) {
                        var Mt = Tt.name.replace("data-bi-", "");
                        s[Mt] = Tt.value
                    }
                return s
            }
            ,
            n.prototype._getMetaDataFromDOM = function(e, i) {
                var s, d = {};
                if (a.x9) {
                    s = document.querySelectorAll("meta");
                    for (var S = 0; S < s.length; S++) {
                        var G = s[S];
                        if (G.name) {
                            var lt = G.name.toLowerCase();
                            if (lt.indexOf(e) === 0) {
                                var et = i ? G.name.replace(e, "") : G.name;
                                d[et] = G.content
                            }
                        }
                    }
                }
                return d
            }
            ,
            n.prototype._getAreaContent = function(e) {
                if (e = e,
                e)
                    return {
                        areaName: e.getAttribute(this._contentBlobFieldNames.areaName),
                        templateName: e.getAttribute(this._contentBlobFieldNames.templateName),
                        contentSource: e.getAttribute(this._contentBlobFieldNames.contentSource),
                        product: e.getAttribute(this._contentBlobFieldNames.productId),
                        type: e.getAttribute(this._contentBlobFieldNames.contentType)
                    }
            }
            ,
            n.prototype._getDefaultContentName = function(e, i) {
                if (i === !1 || Bi(e) || !e.tagName)
                    return "";
                var s = (0,
                v.Me)() || {}, d;
                switch (e.tagName) {
                case "A":
                    d = s.all ? e.innerText || e.innerHTML : e.text || e.innerHTML;
                    break;
                case "IMG":
                case "AREA":
                    d = e.alt;
                    break;
                default:
                    d = e.value || e.name || e.alt || e.innerText || e.id
                }
                return d.substring(0, Ta)
            }
            ,
            n.prototype._getParentDetails = function(e, i) {
                var s = this._contentBlobFieldNames.isShortNames ? Ui.shortKeys.parentId : Ui.longKeys.parentId
                  , d = this._contentBlobFieldNames.isShortNames ? Ui.shortKeys.parentName : Ui.longKeys.parentName
                  , S = i[s]
                  , G = i[d]
                  , lt = {};
                return S || G || !e ? lt : this._populateParentInfo(e, s, d)
            }
            ,
            n.prototype._isTrackedWithDataM = function(e) {
                for (var i = e.attributes, s = 0; s < i.length; s++)
                    if (i[s].name === "data-m")
                        return !0;
                return !1
            }
            ,
            n.prototype._isTrackedWithDataBi = function(e) {
                for (var i = e.attributes, s = 0; s < i.length; s++)
                    if (i[s].name.indexOf("data-bi-") >= 0)
                        return !0;
                return !1
            }
            ,
            n.prototype._isTracked = function(e) {
                for (var i = e.attributes, s = 0; s < i.length; s++)
                    if (i[s].name === "data-m" || i[s].name.indexOf("data-bi-") >= 0)
                        return !0;
                return !1
            }
            ,
            n.prototype._populateParentInfo = function(e, i, s) {
                var d = {}, S = this._config.biBlobAttributeTag, G, lt, et = Ri(e.parentElement, this._isTracked);
                if (et) {
                    var Tt = et.getAttribute(S) || e[S];
                    if (Tt) {
                        try {
                            var Mt = JSON.parse(Tt)
                        } catch (en) {
                            (0,
                            T.kP)(this._traceLogger, 1, 507, "Can not parse " + Tt)
                        }
                        Mt && (G = Mt.id,
                        lt = Mt.cN)
                    } else
                        G = et.getAttribute(this._contentBlobFieldNames.id),
                        lt = et.getAttribute(this._contentBlobFieldNames.contentName);
                    G && (d[i] = G),
                    lt && (d[s] = lt)
                }
                return d
            }
            ,
            n
        }();
        function Na(n) {
            var e = {
                useDefaultContentName: !0,
                useShortNameForContentBlob: !0,
                debounceMs: {
                    scroll: 600,
                    resize: 3e3
                },
                biBlobAttributeTag: "data-m",
                isLoggedIn: !1,
                shareAuthStatus: !1,
                cookiesToCollect: ["MSFPC", "ANON"],
                autoCapture: {
                    pageView: !0,
                    onLoad: !0,
                    onUnload: !0,
                    click: !0,
                    scroll: !1,
                    resize: !1,
                    lineage: !1,
                    jsError: !0,
                    msTags: !0
                },
                callback: {
                    pageName: null,
                    pageActionPageTags: null,
                    pageViewPageTags: null,
                    contentUpdatePageTags: null,
                    pageActionContentTags: null,
                    signedinStatus: null
                },
                coreData: {
                    referrerUri: a.x9 ? document.referrer : "",
                    requestUri: "",
                    pageName: "",
                    pageType: "",
                    product: "",
                    market: "",
                    pageTags: {}
                },
                autoPopulateParentIdAndParentName: !1,
                syncMuid: !1,
                muidDomain: "microsoft.com"
            }
              , i = [];
            return (0,
            o.rW)(e, function(s, d) {
                (0,
                o.Kn)(d) && i.push(s)
            }),
            Bn(n, i),
            (0,
            a.l7)(!0, e, n)
        }
        var ba = function(n) {
            (0,
            C.ne)(e, n);
            function e() {
                var i = n.call(this) || this;
                i.identifier = "WebAnalyticsPlugin",
                i.version = "3.2.9";
                var s, d, S, G, lt, et, Tt, Mt, en = !1, yn, rn, Kn, oe;
                return (0,
                y.Z)(e, i, function(Xt, ae) {
                    Me(),
                    Xt.updateCoreDataConfig = function(dn) {
                        Tt.coreData = (0,
                        a.l7)(!0, Tt.coreData, dn)
                    }
                    ,
                    Xt.refreshMetadata = function() {
                        var dn = rn.getMetadata();
                        s.metaTags = dn,
                        S.metaTags = dn,
                        d.metaTags = dn,
                        lt.metaTags = dn
                    }
                    ,
                    Xt.initialize = function(dn, zn, me) {
                        var je = zn;
                        dn.extensionConfig = dn.extensionConfig || [],
                        dn.extensionConfig[Xt.identifier] = dn.extensionConfig[Xt.identifier] || {},
                        Xt._config = Tt = Na(dn.extensionConfig[Xt.identifier]),
                        oe = Tt.autoCapture;
                        var Yi = je.getWParam;
                        if (je.getWParam = function() {
                            var Br = 0;
                            return Tt.mscomCookies && (Br = Br | 1),
                            Br | Yi()
                        }
                        ,
                        dn.extensionConfig[Xt.identifier].disableExceptionTracking = !oe.jsError,
                        ae.initialize(dn, zn, me),
                        rn = rn || new Oa(Tt,Xt.diagLog()),
                        Kn = Kn || new wa(Xt,Xt.diagLog()),
                        Tt.manageCv) {
                            for (var ri = 0; ri < me.length; ri++)
                                if (me[ri].identifier === "CorrelationVectorPlugin") {
                                    Tt.manageCv = !0,
                                    et = me[ri];
                                    break
                                }
                            et || ((0,
                            T.kP)(Xt.diagLog(), 2, 508, 'Automatic Cv management is set to "true" in config.  However, cv plugin is not available. Disabling automatic Cv management'),
                            Tt.manageCv = !1)
                        }
                        Xt.id = new V(zn),
                        yn = new _t;
                        var ii = rn.getMetadata();
                        s = new Ia(i,Tt,rn,Xt.id,Tt.callback.pageViewPageTags,ii,Xt.diagLog()),
                        d = new _a(i,Tt,rn,Xt.id,Tt.callback.pageActionPageTags,ii,Xt.diagLog()),
                        S = new Sa(i,Tt,rn,Xt.id,Tt.callback.contentUpdatePageTags,ii,Xt.diagLog()),
                        G = new ya(i,Tt,Xt.id,Xt.diagLog(),yn,Mt),
                        lt = new Pa(i,Tt,rn,Xt.id,Tt.callback.pageViewPageTags,ii,Xt.diagLog()),
                        Tt.syncMuid && Zi(function() {
                            var Br = Xt.id.getMuidHost(Tt.muidDomain);
                            Xt.id.syncMuid(Br)
                        }, Xt._evtNamespace),
                        pe(!0)
                    }
                    ,
                    Xt.processTelemetry = function(dn, zn) {
                        (0,
                        a.if)(dn, Xt.identifier);
                        var me = dn;
                        me.baseType === "PageviewData" ? (me.name = "Ms.Web.PageView",
                        me.latency = 3) : me.baseType === "ExceptionData" ? (me.name = "Ms.Web.ClientError",
                        me.latency = 1,
                        delete me.baseData.aiDataContract) : me.baseType === "PageviewPerformanceData" && (me.name = "Ms.Web.PageViewPerformance",
                        me.latency = 1,
                        delete me.baseData.isValid,
                        delete me.baseData.durationMs);
                        var je = null;
                        me.baseType !== "PageviewData" ? Tt.manageCv && (je = et.getCv(),
                        je && je.increment()) : Tt.manageCv && (je = et.getCv(),
                        je ? je.seed() : je = et.getCv()),
                        ae.processTelemetry(me, zn)
                    }
                    ,
                    Xt.trackEvent = function(dn, zn) {
                        dn.latency = dn.latency || 1,
                        dn.baseData = dn.baseData || {},
                        dn.data = dn.data || {},
                        (0,
                        a.Sn)(zn) && (0,
                        o.rW)(zn, function(me, je) {
                            dn.data[me] = je
                        }),
                        Xt.core.track(dn)
                    }
                    ,
                    Xt.trackPageView = function(dn, zn) {
                        ln(),
                        Xt.id.initializeIds(),
                        dn.id = Xt.id.getLastPageViewId(),
                        ae.sendPageViewInternal(dn, zn, Pe(dn))
                    }
                    ,
                    Xt.capturePageView = function(dn, zn) {
                        s.capturePageView(dn, zn)
                    }
                    ,
                    Xt.trackPageViewPerformance = function(dn, zn) {
                        ae.sendPageViewPerformanceInternal(dn, zn, Pe(dn))
                    }
                    ,
                    Xt.capturePageViewPerformance = function(dn, zn) {
                        lt.capturePageViewPerformance(dn, zn)
                    }
                    ,
                    Xt.trackException = function(dn, zn) {
                        dn.id = dn.id || (0,
                        a.cm)(),
                        ae.sendExceptionInternal(dn, zn, Pe(dn))
                    }
                    ,
                    Xt.trackPageAction = function(dn, zn) {
                        d.trackPageAction(dn, zn)
                    }
                    ,
                    Xt.capturePageAction = function(dn, zn, me, je) {
                        ca(dn, zn) && d.capturePageAction(dn, zn, me, je)
                    }
                    ,
                    Xt.trackContentUpdate = function(dn, zn) {
                        S.trackContentUpdate(dn, zn)
                    }
                    ,
                    Xt.captureContentUpdate = function(dn, zn) {
                        S.captureContentUpdate(dn, zn)
                    }
                    ,
                    Xt.trackPageUnload = function(dn, zn) {
                        en || (en = !0,
                        G.trackPageUnload(dn, zn))
                    }
                    ,
                    Xt.capturePageUnload = function(dn, zn) {
                        en || (en = !0,
                        G.capturePageUnload(dn, zn))
                    }
                    ,
                    Xt._populatePageViewPerformance = function(dn) {
                        var zn = Xt._pageViewPerformanceManager;
                        zn && zn.populatePageViewPerformanceEvent(dn)
                    }
                    ,
                    Xt.setContentHandler = function(dn) {
                        rn = dn
                    }
                    ,
                    Xt.setAutoCaptureHandler = function(dn) {
                        Kn !== dn && (Kn && Kn.teardown(),
                        Kn = dn,
                        pe(!1))
                    }
                    ,
                    Xt._doTeardown = function(dn, zn) {
                        Kn && Kn.teardown(dn, zn),
                        ae._doTeardown(dn, zn),
                        Me()
                    }
                    ;
                    function Me() {
                        s = null,
                        d = null,
                        S = null,
                        G = null,
                        lt = null,
                        et = null,
                        Tt = null,
                        Mt = {
                            h: 0,
                            v: 0
                        },
                        en = !1,
                        yn = null,
                        rn = null,
                        Kn = null,
                        oe = null
                    }
                    function pe(dn) {
                        Kn && (dn && (oe.pageView && Kn.pageView(),
                        oe.onLoad && Kn.onLoad()),
                        oe.click && Kn.click(),
                        oe.scroll && Kn.scroll(Tt.debounceMs),
                        oe.resize && Kn.resize(Tt.debounceMs),
                        (oe.onUnload || Tt.manualPageUnload) && Kn.maxScroll(Mt),
                        oe.onUnload && Kn.onUnload())
                    }
                    function Pe(dn) {
                        var zn = {};
                        return dn.isManual !== void 0 && (zn.web = {},
                        zn.web.isManual = dn.isManual !== void 0 ? dn.isManual : !0,
                        delete dn.isManual),
                        zn
                    }
                    function ln() {
                        yn._recordTimeSpan("dwellTime", !1),
                        Mt.v = 0,
                        en = !1
                    }
                }),
                i
            }
            return e.__ieDyn = 1,
            e
        }(Ce)
          , qi = ["snippet", "_webAnalytics", "_postChannel", "_propertyManager", "_extensions"]
          , Aa = ["queue", "extensions", "version", "sv"]
          , Ra = function(n) {
            (0,
            C.ne)(e, n);
            function e() {
                var i = n.call(this) || this, s, d, S, G;
                (0,
                y.Z)(e, i, function(et, Tt) {
                    lt(),
                    et.initialize = function(Mt, en) {
                        (0,
                        N.Lm)(et, function() {
                            return "ApplicationInsights:initialize"
                        }, function() {
                            var yn = [G, d];
                            if (en && (yn = yn.concat(en)),
                            Mt || (0,
                            o._y)("You must provide a config object!"),
                            Mt.channels && Mt.channels.length > 0) {
                                for (var rn = !1, Kn = 0; Kn < Mt.channels[0].length; Kn++)
                                    if (Mt.channels[0][Kn].identifier === S.identifier) {
                                        rn = !0;
                                        break
                                    }
                                rn || Mt.channels[0].push(S)
                            } else
                                Mt.channels = [[S]];
                            var oe = Mt.extensionConfig = Mt.extensionConfig || [];
                            oe[S.identifier] = Mt ? Mt.channelConfiguration : {},
                            oe[G.identifier] = Mt ? Mt.propertyConfiguration : {},
                            oe[d.identifier] = Mt ? Mt.webAnalyticsConfiguration : {};
                            try {
                                Tt.initialize(Mt, yn)
                            } catch (Xt) {
                                (0,
                                T.kP)(et.logger, 1, 514, "Failed to initialize SDK." + (0,
                                v.eU)(Xt))
                            }
                        }, function() {
                            return {
                                config: Mt,
                                extensions: en
                            }
                        })
                    }
                    ,
                    et.getPropertyManager = function() {
                        return G
                    }
                    ,
                    et.getPostChannel = function() {
                        return S
                    }
                    ,
                    et.getWebAnalyticsExtension = function() {
                        return d
                    }
                    ,
                    (0,
                    o.Vb)(et, function() {
                        return d
                    }, ["trackEvent", "trackPageView", "trackPageAction", "trackContentUpdate", "trackPageUnload", "trackException", "trackPageViewPerformance", "capturePageView", "capturePageViewPerformance", "capturePageAction", "captureContentUpdate", "capturePageUnload", "_onerror"]),
                    et.emptySnippetQueue = function(Mt) {
                        function en() {
                            if (Mt) {
                                var Xt = "";
                                (0,
                                o.le)(s) || (Xt += s),
                                (0,
                                o.rW)(et, function(ae, Me) {
                                    if ((0,
                                    o.HD)(ae) && !(0,
                                    o.mf)(Me) && ae && ae[0] !== "_" && (0,
                                    o.UA)(qi, ae) === -1)
                                        try {
                                            Mt[ae] = Me
                                        } catch (pe) {
                                            (0,
                                            T.kP)(et.logger, 2, 514, "Failed to set [" + ae + "] during initialization." + (0,
                                            v.eU)(pe))
                                        }
                                })
                            }
                        }
                        try {
                            if (en(),
                            (0,
                            o.kJ)(Mt.queue)) {
                                for (var yn = Mt.queue.length, rn = 0; rn < yn; rn++) {
                                    var Kn = Mt.queue[rn];
                                    Kn()
                                }
                                Mt.queue = void 0,
                                delete Mt.queue
                            }
                        } catch (Xt) {
                            var oe = {};
                            Xt && (0,
                            o.mf)(Xt.toString) && (oe.exception = Xt.toString())
                        }
                    }
                    ,
                    et.updateSnippetDefinitions = function(Mt) {
                        var en = i;
                        en.snippet = Mt,
                        s = "" + (Mt.sv || Mt.version || ""),
                        en.config ? en.config = (0,
                        a.l7)(!0, Mt.config, en.config || {}) : en.config = Mt.config,
                        (0,
                        o.cf)(Mt, en, function(yn) {
                            return yn && (0,
                            o.UA)(qi, yn) === -1 && (0,
                            o.UA)(Aa, yn) === -1
                        })
                    }
                    ,
                    et.unload = function(Mt, en, yn) {
                        Mt === void 0 && (Mt = !0),
                        Tt.unload(Mt, function(rn) {
                            lt(),
                            en && en(rn)
                        }, yn)
                    }
                });
                function lt() {
                    S = new ft.Z,
                    G = new gt.Z,
                    d = new ba
                }
                return i
            }
            return e.__ieDyn = 1,
            e
        }(J.Z)
    }
    ,
    4150: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            Z: ()=>cn
        });
        var C = A(43298)
          , y = A(42314)
          , N = A(94300)
          , o = A(22753)
          , T = A(43161)
          , v = A(41167)
          , a = A(86474)
          , J = A(28785)
          , ft = A(59556)
          , gt = A(80877)
          , ht = A(73656)
          , yt = 500
          , Dt = "Channel has invalid priority - ";
        function St(Yt, st, z) {
            st && (0,
            T.kJ)(st) && st[a.R5] > 0 && (st = st.sort(function(it, k) {
                return it[ft.yi] - k[ft.yi]
            }),
            (0,
            T.tO)(st, function(it) {
                it[ft.yi] < yt && (0,
                T._y)(Dt + it[a.pZ])
            }),
            Yt[a.MW]({
                queue: (0,
                T.FL)(st),
                chain: (0,
                gt.jV)(st, z[a.TC], z)
            }))
        }
        function L(Yt, st) {
            function z() {
                return (0,
                gt.CD)(null, st[a.TC], st, null)
            }
            function it(Z, nt, mt, Lt) {
                var At = Z ? Z[a.R5] + 1 : 1;
                function Sn() {
                    At--,
                    At === 0 && (Lt && Lt(),
                    Lt = null)
                }
                At > 0 && (0,
                T.tO)(Z, function(Nn) {
                    if (Nn && Nn.queue[a.R5] > 0) {
                        var $t = Nn.chain
                          , f = nt[a.zV]($t);
                        f[a.Fc](Sn),
                        mt(f)
                    } else
                        At--
                }),
                Sn()
            }
            function k(Z, nt) {
                var mt = nt || {
                    reason: 0
                };
                return it(Yt, Z, function(Lt) {
                    Lt[a.uL](mt)
                }, function() {
                    Z[a.uL](mt)
                }),
                !0
            }
            function $(Z, nt) {
                var mt = nt || {
                    reason: 0,
                    isAsync: !1
                };
                return it(Yt, Z, function(Lt) {
                    Lt[a.uL](mt)
                }, function() {
                    Z[a.uL](mt),
                    Ut = !1
                }),
                !0
            }
            function Ot(Z) {
                var nt = null;
                return Yt && Yt[a.R5] > 0 && (0,
                T.tO)(Yt, function(mt) {
                    if (mt && mt.queue[a.R5] > 0 && ((0,
                    T.tO)(mt.queue, function(Lt) {
                        if (Lt[a.pZ] === Z)
                            return nt = Lt,
                            -1
                    }),
                    nt))
                        return -1
                }),
                nt
            }
            var Ut = !1
              , Q = {
                identifier: "ChannelControllerPlugin",
                priority: yt,
                initialize: function(Z, nt, mt, Lt) {
                    Ut = !0,
                    (0,
                    T.tO)(Yt, function(At) {
                        At && At.queue[a.R5] > 0 && (0,
                        ht.bP)((0,
                        gt.CD)(At.chain, Z, nt), mt)
                    })
                },
                isInitialized: function() {
                    return Ut
                },
                processTelemetry: function(Z, nt) {
                    it(Yt, nt || z(), function(mt) {
                        mt[a.uL](Z)
                    }, function() {
                        nt[a.uL](Z)
                    })
                },
                update: k,
                pause: function() {
                    it(Yt, z(), function(Z) {
                        Z.iterate(function(nt) {
                            nt.pause && nt.pause()
                        })
                    }, null)
                },
                resume: function() {
                    it(Yt, z(), function(Z) {
                        Z.iterate(function(nt) {
                            nt.resume && nt.resume()
                        })
                    }, null)
                },
                teardown: $,
                getChannel: Ot,
                flush: function(Z, nt, mt, Lt) {
                    var At = 1
                      , Sn = !1
                      , Nn = null;
                    Lt = Lt || 5e3;
                    function $t() {
                        At--,
                        Sn && At === 0 && (Nn && (clearTimeout(Nn),
                        Nn = null),
                        nt && nt(Sn),
                        nt = null)
                    }
                    return it(Yt, z(), function(f) {
                        f.iterate(function(Gn) {
                            if (Gn[a.kL]) {
                                At++;
                                var Zn = !1;
                                Gn[a.kL](Z, function() {
                                    Zn = !0,
                                    $t()
                                }, mt) || Zn || (Z && Nn == null ? Nn = setTimeout(function() {
                                    Nn = null,
                                    $t()
                                }, Lt) : $t())
                            }
                        })
                    }, function() {
                        Sn = !0,
                        $t()
                    }),
                    !0
                },
                _setQueue: function(Z) {
                    Yt = Z
                }
            };
            return Q
        }
        function V(Yt, st, z) {
            var it = [];
            if (Yt && (0,
            T.tO)(Yt, function($) {
                return St(it, $, z)
            }),
            st) {
                var k = [];
                (0,
                T.tO)(st, function($) {
                    $[ft.yi] > yt && k[a.MW]($)
                }),
                St(it, k, z)
            }
            return it
        }
        var x = A(98589)
          , _t = A(98530)
          , H = A(57485)
          , g = A(31549)
          , X = function(Yt) {
            (0,
            C.ne)(st, Yt);
            function st() {
                var z = Yt.call(this) || this;
                z.identifier = "TelemetryInitializerPlugin",
                z.priority = 199;
                var it, k;
                $(),
                (0,
                y.Z)(st, z, function(Ot, Ut) {
                    Ot.addTelemetryInitializer = function(Q) {
                        var Z = {
                            id: it++,
                            fn: Q
                        };
                        k[a.MW](Z);
                        var nt = {
                            remove: function() {
                                (0,
                                T.tO)(k, function(mt, Lt) {
                                    if (mt.id === Z.id)
                                        return k[a.cb](Lt, 1),
                                        -1
                                })
                            }
                        };
                        return nt
                    }
                    ,
                    Ot[ft.hL] = function(Q, Z) {
                        for (var nt = !1, mt = k[a.R5], Lt = 0; Lt < mt; ++Lt) {
                            var At = k[Lt];
                            if (At)
                                try {
                                    if (At.fn[a.ZV](null, [Q]) === !1) {
                                        nt = !0;
                                        break
                                    }
                                } catch (Sn) {
                                    (0,
                                    N.kP)(Z[a.mc](), 1, 64, "One of telemetry initializers failed, telemetry item will not be sent: " + (0,
                                    T.jj)(Sn), {
                                        exception: (0,
                                        v.eU)(Sn)
                                    }, !0)
                                }
                        }
                        nt || Ot[a.uL](Q, Z)
                    }
                    ,
                    Ot[a.F3] = function() {
                        $()
                    }
                });
                function $() {
                    it = 0,
                    k = []
                }
                return z
            }
            return st.__ieDyn = 1,
            st
        }(g.i)
          , bt = A(66930)
          , B = "Plugins must provide initialize method"
          , Pt = "_notificationManager"
          , U = "SDK is still unloading..."
          , F = "SDK is not initialized"
          , Et = {
            loggingLevelConsole: 1
        };
        function P(Yt, st) {
            return new o.Jk(st)
        }
        function pt(Yt, st, z) {
            var it, k = [], $ = {};
            return (0,
            T.tO)(z, function(Ot) {
                ((0,
                T.le)(Ot) || (0,
                T.le)(Ot[a.VL])) && (0,
                T._y)(B);
                var Ut = Ot[ft.yi]
                  , Q = Ot[a.pZ];
                Ot && Ut && ((0,
                T.le)($[Ut]) ? $[Ut] = Q : (0,
                N.jV)(Yt, "Two extensions have same priority #" + Ut + " - " + $[Ut] + ", " + Q)),
                (!Ut || Ut < st) && k[a.MW](Ot)
            }),
            it = {
                all: z
            },
            it[ft.oV] = k,
            it
        }
        function l(Yt, st) {
            var z = !1;
            return (0,
            T.tO)(st, function(it) {
                if (it === Yt)
                    return z = !0,
                    -1
            }),
            z
        }
        function sn() {
            var Yt;
            return (0,
            J.pu)((Yt = {},
            Yt[a.g] = function(st) {}
            ,
            Yt[a.n7] = function(st) {}
            ,
            Yt[ft.uC] = function(st) {}
            ,
            Yt[ft.$F] = function(st, z) {}
            ,
            Yt[ft.f_] = function(st, z) {}
            ,
            Yt))
        }
        var b = function() {
            function Yt() {
                var st, z, it, k, $, Ot, Ut, Q, Z, nt, mt, Lt, At, Sn, Nn, $t, f, Gn, Zn, xe, Le = 0;
                (0,
                y.Z)(Yt, this, function(un) {
                    Ie(),
                    un[a.yl] = function() {
                        return z
                    }
                    ,
                    un[a.VL] = function(Jt, Dn, _, bn) {
                        Sn && (0,
                        T._y)(U),
                        un[a.yl]() && (0,
                        T._y)("Core should not be initialized more than once"),
                        st = Jt || {},
                        un[a.TC] = st,
                        (0,
                        T.le)(Jt[a.p$]) && (0,
                        T._y)("Please provide instrumentation key"),
                        k = bn,
                        un[Pt] = bn,
                        ee(),
                        Jn(),
                        we(),
                        _ && (un[a.eZ] = _);
                        var re = (0,
                        T.qK)(st, ft.js, []);
                        Z = [],
                        Z[a.MW].apply(Z, (0,
                        C.$h)((0,
                        C.$h)([], Dn, !1), re, !1)),
                        Lt = (0,
                        T.qK)(st, ft.Z, []),
                        Yn(null),
                        (!At || At[a.R5] === 0) && (0,
                        T._y)("No " + ft.Z + " available"),
                        z = !0,
                        un.releaseQueue()
                    }
                    ,
                    un.getTransmissionControls = function() {
                        var Jt = [];
                        return At && (0,
                        T.tO)(At, function(Dn) {
                            Jt[a.MW](Dn.queue)
                        }),
                        (0,
                        T.FL)(Jt)
                    }
                    ,
                    un.track = function(Jt) {
                        Jt.iKey = Jt.iKey || st[a.p$],
                        Jt[a.Z_] = Jt[a.Z_] || (0,
                        T.Y6)(new Date),
                        Jt.ver = Jt.ver || "4.0",
                        !Sn && un[a.yl]() ? Vt()[a.uL](Jt) : it[a.MW](Jt)
                    }
                    ,
                    un[a.SD] = Vt,
                    un[a.tb] = function() {
                        return k || (k = sn(),
                        un[Pt] = k),
                        k
                    }
                    ,
                    un[a.g] = function(Jt) {
                        k && k[a.g](Jt)
                    }
                    ,
                    un[a.n7] = function(Jt) {
                        k && k[a.n7](Jt)
                    }
                    ,
                    un.getCookieMgr = function() {
                        return Ut || (Ut = (0,
                        x.Nz)(st, un[a.eZ])),
                        Ut
                    }
                    ,
                    un.setCookieMgr = function(Jt) {
                        Ut = Jt
                    }
                    ,
                    un[ft.kl] = function() {
                        if (!$ && !Ot && (0,
                        T.v4)(st.enablePerfMgr)) {
                            var Jt = (0,
                            T.v4)(st[ft.DN]);
                            (0,
                            T.mf)(Jt) && (Ot = Jt(un, un[a.tb]()))
                        }
                        return $ || Ot || (0,
                        o.j5)()
                    }
                    ,
                    un.setPerfMgr = function(Jt) {
                        $ = Jt
                    }
                    ,
                    un.eventCnt = function() {
                        return it[a.R5]
                    }
                    ,
                    un.releaseQueue = function() {
                        if (z && it[a.R5] > 0) {
                            var Jt = it;
                            it = [],
                            (0,
                            T.tO)(Jt, function(Dn) {
                                Vt()[a.uL](Dn)
                            })
                        }
                    }
                    ,
                    un.pollInternalLogs = function(Jt) {
                        $t = Jt || null;
                        var Dn = (0,
                        T.v4)(st.diagnosticLogInterval);
                        return (!Dn || !(Dn > 0)) && (Dn = 1e4),
                        Le && clearInterval(Le),
                        Le = setInterval(function() {
                            ue()
                        }, Dn),
                        Le
                    }
                    ,
                    un[a.LS] = function() {
                        Le && (clearInterval(Le),
                        Le = 0,
                        ue())
                    }
                    ,
                    (0,
                    T.Vb)(un, function() {
                        return Nn
                    }, ["addTelemetryInitializer"]),
                    un.unload = function(Jt, Dn, _) {
                        var bn;
                        Jt === void 0 && (Jt = !0),
                        z || (0,
                        T._y)(F),
                        Sn && (0,
                        T._y)(U);
                        var re = (bn = {
                            reason: 50
                        },
                        bn[a.d] = Jt,
                        bn.flushComplete = !1,
                        bn)
                          , ve = (0,
                        gt.Bt)(he(), un);
                        ve[a.Fc](function() {
                            Ie(),
                            Dn && Dn(re)
                        }, un);
                        function _e(Oe) {
                            re.flushComplete = Oe,
                            Sn = !0,
                            Gn.run(ve, re),
                            un[a.LS](),
                            ve[a.uL](re)
                        }
                        Se(Jt, _e, 6, _) || _e(!1)
                    }
                    ,
                    un[a.TO] = be,
                    un.addPlugin = function(Jt, Dn, _, bn) {
                        if (!Jt) {
                            bn && bn(!1),
                            le(B);
                            return
                        }
                        var re = be(Jt[a.pZ]);
                        if (re && !Dn) {
                            bn && bn(!1),
                            le("Plugin [" + Jt[a.pZ] + "] is already loaded!");
                            return
                        }
                        var ve = {
                            reason: 16
                        };
                        function _e(He) {
                            Z[a.MW](Jt),
                            ve.added = [Jt],
                            Yn(ve),
                            bn && bn(!0)
                        }
                        if (re) {
                            var Oe = [re.plugin]
                              , Ae = {
                                reason: 2,
                                isAsync: !!_
                            };
                            Te(Oe, Ae, function(He) {
                                He ? (ve.removed = Oe,
                                ve.reason |= 32,
                                _e(!0)) : bn && bn(!1)
                            })
                        } else
                            _e(!1)
                    }
                    ,
                    un.evtNamespace = function() {
                        return f
                    }
                    ,
                    un[a.kL] = Se,
                    un.getTraceCtx = function(Jt) {
                        return xe || (xe = (0,
                        ht.Yn)()),
                        xe
                    }
                    ,
                    un.setTraceCtx = function(Jt) {
                        xe = Jt || null
                    }
                    ,
                    (0,
                    T.Oi)(un, "addUnloadCb", function() {
                        return Gn
                    }, "add");
                    function Ie() {
                        z = !1,
                        st = (0,
                        T.mm)(!0, {}, Et),
                        un[a.TC] = st,
                        un[a.eZ] = new N.AQ(st),
                        un[a.iC] = [],
                        Nn = new X,
                        it = [],
                        k = null,
                        $ = null,
                        Ot = null,
                        Ut = null,
                        Q = null,
                        nt = null,
                        Z = [],
                        mt = null,
                        Lt = null,
                        At = null,
                        Sn = !1,
                        $t = null,
                        f = (0,
                        _t.J)("AIBaseCore", !0),
                        Gn = (0,
                        bt.Y)(),
                        xe = null
                    }
                    function Vt() {
                        return (0,
                        gt.CD)(he(), st, un)
                    }
                    function Yn(Jt) {
                        var Dn = pt(un[a.eZ], yt, Z);
                        nt = Dn[ft.oV],
                        Q = null;
                        var _ = Dn.all;
                        if (At = (0,
                        T.FL)(V(Lt, _, un)),
                        mt) {
                            var bn = (0,
                            T.UA)(_, mt);
                            bn !== -1 && _[a.cb](bn, 1),
                            bn = (0,
                            T.UA)(nt, mt),
                            bn !== -1 && nt[a.cb](bn, 1),
                            mt._setQueue(At)
                        } else
                            mt = L(At, un);
                        _[a.MW](mt),
                        nt[a.MW](mt),
                        un[a.iC] = (0,
                        ht.AA)(_),
                        mt[a.VL](st, un, _),
                        (0,
                        ht.bP)(Vt(), _),
                        un[a.iC] = (0,
                        T.FL)((0,
                        ht.AA)(nt || [])).slice(),
                        Jt && Fe(Jt)
                    }
                    function be(Jt) {
                        var Dn, _ = null, bn = null;
                        return (0,
                        T.tO)(un[a.iC], function(re) {
                            if (re[a.pZ] === Jt && re !== mt && re !== Nn)
                                return bn = re,
                                -1
                        }),
                        !bn && mt && (bn = mt.getChannel(Jt)),
                        bn && (_ = (Dn = {
                            plugin: bn
                        },
                        Dn[a.$h] = function(re) {
                            (0,
                            ht.OY)(bn)[ft.mE] = !re
                        }
                        ,
                        Dn.isEnabled = function() {
                            var re = (0,
                            ht.OY)(bn);
                            return !re[a.fi] && !re[ft.mE]
                        }
                        ,
                        Dn.remove = function(re, ve) {
                            var _e;
                            re === void 0 && (re = !0);
                            var Oe = [bn]
                              , Ae = (_e = {
                                reason: 1
                            },
                            _e[a.d] = re,
                            _e);
                            Te(Oe, Ae, function(He) {
                                He && Yn({
                                    reason: 32,
                                    removed: Oe
                                }),
                                ve && ve(He)
                            })
                        }
                        ,
                        Dn)),
                        _
                    }
                    function he() {
                        if (!Q) {
                            var Jt = (nt || []).slice();
                            (0,
                            T.UA)(Jt, Nn) === -1 && Jt[a.MW](Nn),
                            Q = (0,
                            gt.jV)((0,
                            ht.AA)(Jt), st, un)
                        }
                        return Q
                    }
                    function Te(Jt, Dn, _) {
                        if (Jt && Jt[a.R5] > 0) {
                            var bn = (0,
                            gt.jV)(Jt, st, un)
                              , re = (0,
                            gt.Bt)(bn, un);
                            re[a.Fc](function() {
                                var ve = !1
                                  , _e = [];
                                (0,
                                T.tO)(Z, function(Ae, He) {
                                    l(Ae, Jt) ? ve = !0 : _e[a.MW](Ae)
                                }),
                                Z = _e;
                                var Oe = [];
                                Lt && ((0,
                                T.tO)(Lt, function(Ae, He) {
                                    var Xe = [];
                                    (0,
                                    T.tO)(Ae, function(Ee) {
                                        l(Ee, Jt) ? ve = !0 : Xe[a.MW](Ee)
                                    }),
                                    Oe[a.MW](Xe)
                                }),
                                Lt = Oe),
                                _ && _(ve)
                            }),
                            re[a.uL](Dn)
                        } else
                            _(!1)
                    }
                    function ue() {
                        var Jt = un[a.eZ] ? un[a.eZ].queue : [];
                        Jt && ((0,
                        T.tO)(Jt, function(Dn) {
                            var _, bn = (_ = {},
                            _[a.I] = $t || "InternalMessageId: " + Dn[a.Gc],
                            _.iKey = (0,
                            T.v4)(st[a.p$]),
                            _.time = (0,
                            T.Y6)(new Date),
                            _.baseType = N.lQ.dataType,
                            _.baseData = {
                                message: Dn[a.gU]
                            },
                            _);
                            un.track(bn)
                        }),
                        Jt[a.R5] = 0)
                    }
                    function Se(Jt, Dn, _, bn) {
                        return mt ? mt[a.kL](Jt, Dn, _ || 6, bn) : (Dn && Dn(!1),
                        !0)
                    }
                    function ee() {
                        var Jt = (0,
                        T.v4)(st.disableDbgExt);
                        Jt === !0 && Zn && (k[a.n7](Zn),
                        Zn = null),
                        k && !Zn && Jt !== !0 && (Zn = (0,
                        H.p)(st),
                        k[a.g](Zn))
                    }
                    function Jn() {
                        var Jt = (0,
                        T.v4)(st.enablePerfMgr);
                        !Jt && Ot && (Ot = null),
                        Jt && (0,
                        T.qK)(st, ft.DN, P)
                    }
                    function we() {
                        var Jt = (0,
                        T.qK)(st, ft.Zh, {});
                        Jt.NotificationManager = k
                    }
                    function Fe(Jt) {
                        var Dn = (0,
                        gt.xy)(he(), un);
                        (!un._updateHook || un._updateHook(Dn, Jt) !== !0) && Dn[a.uL](Jt)
                    }
                    function le(Jt) {
                        var Dn = un[a.eZ];
                        Dn ? (0,
                        N.kP)(Dn, 2, 73, Jt) : (0,
                        T._y)(Jt)
                    }
                })
            }
            return Yt.__ieDyn = 1,
            Yt
        }();
        function M(Yt, st, z, it) {
            (0,
            T.tO)(Yt, function(k) {
                if (k && k[st])
                    if (z)
                        setTimeout(function() {
                            return it(k)
                        }, 0);
                    else
                        try {
                            it(k)
                        } catch ($) {}
            })
        }
        var D = function() {
            function Yt(st) {
                this.listeners = [];
                var z = !!(st || {}).perfEvtsSendAll;
                (0,
                y.Z)(Yt, this, function(it) {
                    it[a.g] = function(k) {
                        it.listeners[a.MW](k)
                    }
                    ,
                    it[a.n7] = function(k) {
                        for (var $ = (0,
                        T.UA)(it[a.dE], k); $ > -1; )
                            it.listeners[a.cb]($, 1),
                            $ = (0,
                            T.UA)(it[a.dE], k)
                    }
                    ,
                    it[ft.uC] = function(k) {
                        M(it[a.dE], ft.uC, !0, function($) {
                            $[ft.uC](k)
                        })
                    }
                    ,
                    it[ft.$F] = function(k, $) {
                        M(it[a.dE], ft.$F, !0, function(Ot) {
                            Ot[ft.$F](k, $)
                        })
                    }
                    ,
                    it[ft.f_] = function(k, $) {
                        M(it[a.dE], ft.f_, $, function(Ot) {
                            Ot[ft.f_](k, $)
                        })
                    }
                    ,
                    it[ft.C$] = function(k) {
                        k && (z || !k[a.PL]()) && M(it[a.dE], ft.C$, !1, function($) {
                            k[a.d] ? setTimeout(function() {
                                return $[ft.C$](k)
                            }, 0) : $[ft.C$](k)
                        })
                    }
                })
            }
            return Yt.__ieDyn = 1,
            Yt
        }()
          , K = function(Yt) {
            (0,
            C.ne)(st, Yt);
            function st() {
                var z = Yt.call(this) || this;
                return (0,
                y.Z)(st, z, function(it, k) {
                    it[a.VL] = function(Ut, Q, Z, nt) {
                        k[a.VL](Ut, Q, Z || new N.AQ(Ut), nt || new D(Ut))
                    }
                    ,
                    it.track = function(Ut) {
                        (0,
                        o.Lm)(it[ft.kl](), function() {
                            return "AppInsightsCore:track"
                        }, function() {
                            Ut === null && (Ot(Ut),
                            (0,
                            T._y)("Invalid telemetry item")),
                            $(Ut),
                            k.track(Ut)
                        }, function() {
                            return {
                                item: Ut
                            }
                        }, !Ut.sync)
                    }
                    ;
                    function $(Ut) {
                        (0,
                        T.le)(Ut[a.I]) && (Ot(Ut),
                        (0,
                        T._y)("telemetry name required"))
                    }
                    function Ot(Ut) {
                        var Q = it[a.tb]();
                        Q && Q[ft.$F]([Ut], 2)
                    }
                }),
                z
            }
            return st.__ieDyn = 1,
            st
        }(b)
          , tt = A(68368)
          , R = A(51175)
          , Gt = function(Yt) {
            (0,
            C.ne)(st, Yt);
            function st() {
                var z = Yt.call(this) || this;
                return z.pluginVersionStringArr = [],
                (0,
                y.Z)(st, z, function(it, k) {
                    (!it.logger || !it.logger.queue) && (it.logger = new N.AQ({
                        loggingLevelConsole: 1
                    })),
                    it.initialize = function($, Ot, Ut, Q) {
                        (0,
                        o.Lm)(it, function() {
                            return "AppInsightsCore.initialize"
                        }, function() {
                            var Z = it.pluginVersionStringArr;
                            if ($) {
                                $.endpointUrl || ($.endpointUrl = tt.YT);
                                var nt = $.propertyStorageOverride;
                                nt && (!nt.getProperty || !nt.setProperty) && (0,
                                T._y)("Invalid property storage override passed."),
                                $.channels && (0,
                                T.tO)($.channels, function(At) {
                                    At && (0,
                                    T.tO)(At, function(Sn) {
                                        if (Sn.identifier && Sn.version) {
                                            var Nn = Sn.identifier + "=" + Sn.version;
                                            Z.push(Nn)
                                        }
                                    })
                                })
                            }
                            it.getWParam = function() {
                                return typeof document != "undefined" || !!$.enableWParam ? 0 : -1
                            }
                            ,
                            Ot && (0,
                            T.tO)(Ot, function(At) {
                                if (At && At.identifier && At.version) {
                                    var Sn = At.identifier + "=" + At.version;
                                    Z.push(Sn)
                                }
                            }),
                            it.pluginVersionString = Z.join(";"),
                            it.pluginVersionStringArr = Z;
                            try {
                                k.initialize($, Ot, Ut, Q),
                                it.pollInternalLogs("InternalLog")
                            } catch (At) {
                                var mt = it.logger
                                  , Lt = (0,
                                v.eU)(At);
                                Lt.indexOf("channels") !== -1 && (Lt += `
 - Channels must be provided through config.channels only!`),
                                (0,
                                N.kP)(mt, 1, 514, "SDK Initialization Failed - no telemetry will be sent: " + Lt)
                            }
                        }, function() {
                            return {
                                config: $,
                                extensions: Ot,
                                logger: Ut,
                                notificationManager: Q
                            }
                        })
                    }
                    ,
                    it.track = function($) {
                        (0,
                        o.Lm)(it, function() {
                            return "AppInsightsCore.track"
                        }, function() {
                            var Ot = $;
                            if (Ot) {
                                Ot.timings = Ot.timings || {},
                                Ot.timings.trackStart = (0,
                                R.hK)(),
                                (0,
                                R.r7)(Ot.latency) || (Ot.latency = 1);
                                var Ut = Ot.ext = Ot.ext || {};
                                Ut.sdk = Ut.sdk || {},
                                Ut.sdk.ver = R.vs;
                                var Q = Ot.baseData = Ot.baseData || {};
                                Q[tt.o6] = Q[tt.o6] || {};
                                var Z = Q[tt.o6];
                                Z[tt.p8] = Z[tt.p8] || it.pluginVersionString || tt.qS
                            }
                            k.track(Ot)
                        }, function() {
                            return {
                                item: $
                            }
                        }, !$.sync)
                    }
                }),
                z
            }
            return st.__ieDyn = 1,
            st
        }(K);
        const cn = Gt
    }
    ,
    68368: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            YT: ()=>y,
            o6: ()=>v,
            p8: ()=>T,
            qS: ()=>C
        });
        var C = ""
          , y = "https://browser.events.data.microsoft.com/OneCollector/1.0/"
          , N = "pluginVersionString"
          , o = N + "Arr"
          , T = "version"
          , v = "properties"
    }
    ,
    51175: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            Do: ()=>l,
            Sn: ()=>g,
            Vv: ()=>U,
            cm: ()=>sn,
            dH: ()=>H,
            hK: ()=>M,
            if: ()=>Gt,
            jM: ()=>X,
            l7: ()=>b,
            mJ: ()=>z,
            ot: ()=>it,
            r7: ()=>B,
            vs: ()=>yt,
            x9: ()=>_t,
            yj: ()=>Pt
        });
        var C = A(41167), y = A(43161), N = A(98589), o = A(40821), T = A(32589), v = A(51318), a = A(70395), J = A(28785), ft = A(68368), gt, ht = "3.2.9", yt = "1DS-Web-JS-" + ht, Dt = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation", St = "withCredentials", L = "timeout", V = (gt = {},
        gt[0] = 0,
        gt[2] = 6,
        gt[1] = 1,
        gt[3] = 7,
        gt[4098] = 6,
        gt[4097] = 1,
        gt[4099] = 7,
        gt), x = null, _t = Boolean((0,
        C.Me)()), H = Boolean((0,
        C.Jj)());
        function g(k) {
            return !(k === ft.qS || (0,
            y.le)(k))
        }
        function X(k) {
            if (k) {
                var $ = k.indexOf("-");
                if ($ > -1)
                    return k.substring(0, $)
            }
            return ft.qS
        }
        function bt() {
            return x === null && (x = !(0,
            y.o8)(Uint8Array) && !tt() && !(0,
            C.b$)()),
            x
        }
        function B(k) {
            return !!(k && (0,
            y.hj)(k) && k >= 1 && k <= 4)
        }
        function Pt(k, $, Ot) {
            if (!$ && !g($) || typeof k != "string")
                return null;
            var Ut = typeof $;
            if (Ut === "string" || Ut === "number" || Ut === "boolean" || (0,
            y.kJ)($))
                $ = {
                    value: $
                };
            else if (Ut === "object" && !T.CY.call($, "value"))
                $ = {
                    value: Ot ? JSON.stringify($) : $
                };
            else if ((0,
            y.le)($.value) || $.value === ft.qS || !(0,
            y.HD)($.value) && !(0,
            y.hj)($.value) && !(0,
            y.jn)($.value) && !(0,
            y.kJ)($.value))
                return null;
            if ((0,
            y.kJ)($.value) && !R($.value))
                return null;
            if (!(0,
            y.le)($.kind)) {
                if ((0,
                y.kJ)($.value) || !D($.kind))
                    return null;
                $.value = $.value.toString()
            }
            return $
        }
        function U(k, $, Ot) {
            var Ut = -1;
            if (!(0,
            y.o8)(k))
                if ($ > 0 && ($ === 32 ? Ut = 1 << 13 : $ <= 13 && (Ut = $ << 5)),
                K(Ot))
                    Ut === -1 && (Ut = 0),
                    Ut |= Ot;
                else {
                    var Q = V[cn(k)] || -1;
                    Ut !== -1 && Q !== -1 ? Ut |= Q : Q === 6 && (Ut = Q)
                }
            return Ut
        }
        function F() {
            (0,
            N.JP)(null).setEnabled(!1)
        }
        function Et(k, $, Ot) {
            (0,
            N.p7)(null) && (0,
            N.JP)(null).set(k, $, Ot * 86400, null, "/")
        }
        function P(k) {
            (0,
            N.p7)(null) && (0,
            N.JP)(null).del(k)
        }
        function pt(k) {
            return (0,
            N.p7)(null) ? l((0,
            N.JP)(null), k) : ft.qS
        }
        function l(k, $, Ot) {
            Ot === void 0 && (Ot = !0);
            var Ut;
            return k && (Ut = k.get($),
            Ot && Ut && decodeURIComponent && (Ut = decodeURIComponent(Ut))),
            Ut || ft.qS
        }
        function sn(k) {
            k === void 0 && (k = "D");
            var $ = (0,
            o.GW)();
            return k === "B" ? $ = "{" + $ + "}" : k === "P" ? $ = "(" + $ + ")" : k === "N" && ($ = $.replace(/-/g, ft.qS)),
            $
        }
        function b(k, $, Ot, Ut, Q) {
            var Z = {}
              , nt = !1
              , mt = 0
              , Lt = arguments.length
              , At = Object[T.hB]
              , Sn = arguments;
            for (At.toString.call(Sn[0]) === "[object Boolean]" && (nt = Sn[0],
            mt++); mt < Lt; mt++) {
                var k = Sn[mt];
                (0,
                y.rW)(k, function($t, f) {
                    nt && f && (0,
                    y.Kn)(f) ? (0,
                    y.kJ)(f) ? (Z[$t] = Z[$t] || [],
                    (0,
                    y.tO)(f, function(Gn, Zn) {
                        Gn && (0,
                        y.Kn)(Gn) ? Z[$t][Zn] = b(!0, Z[$t][Zn], Gn) : Z[$t][Zn] = Gn
                    })) : Z[$t] = b(!0, Z[$t], f) : Z[$t] = f
                })
            }
            return Z
        }
        var M = o.Jj;
        function D(k) {
            return k === 0 || k > 0 && k <= 13 || k === 32
        }
        function K(k) {
            return k >= 0 && k <= 9
        }
        function tt() {
            var k = (0,
            C.jW)();
            if (!(0,
            y.o8)(k) && k.userAgent) {
                var $ = k.userAgent.toLowerCase();
                if (($.indexOf("safari") >= 0 || $.indexOf("firefox") >= 0) && $.indexOf("chrome") < 0)
                    return !0
            }
            return !1
        }
        function R(k) {
            return k.length > 0
        }
        function Gt(k, $) {
            var Ot = k;
            Ot.timings = Ot.timings || {},
            Ot.timings.processTelemetryStart = Ot.timings.processTelemetryStart || {},
            Ot.timings.processTelemetryStart[$] = M()
        }
        function cn(k) {
            var $ = 0;
            if (k != null) {
                var Ot = typeof k;
                Ot === "string" ? $ = 1 : Ot === "number" ? $ = 2 : Ot === "boolean" ? $ = 3 : Ot === T.fK && ($ = 4,
                (0,
                y.kJ)(k) ? ($ = 4096,
                k.length > 0 && ($ |= cn(k[0]))) : T.CY.call(k, "value") && ($ = 8192 | cn(k.value)))
            }
            return $
        }
        var Yt = {
            Version: ht,
            FullVersionString: yt,
            strUndefined: T.jA,
            strObject: T.fK,
            Undefined: T.jA,
            arrForEach: y.tO,
            arrIndexOf: y.UA,
            arrMap: y.Mr,
            arrReduce: y.Xz,
            objKeys: y.FY,
            toISOString: y.Y6,
            isReactNative: C.b$,
            isString: y.HD,
            isNumber: y.hj,
            isBoolean: y.jn,
            isFunction: y.mf,
            isArray: y.kJ,
            isObject: y.Kn,
            strTrim: y.nd,
            isDocumentObjectAvailable: _t,
            isWindowObjectAvailable: H,
            isValueAssigned: g,
            getTenantId: X,
            isBeaconsSupported: C.MF,
            isUint8ArrayAvailable: bt,
            isLatency: B,
            sanitizeProperty: Pt,
            getISOString: y.Y6,
            useXDomainRequest: C.cp,
            getCommonSchemaMetaData: U,
            cookieAvailable: N.p7,
            disallowsSameSiteNone: N.UY,
            setCookie: Et,
            deleteCookie: P,
            getCookie: pt,
            createGuid: sn,
            extend: b,
            getTime: M,
            isValueKind: D,
            isArrayValid: R,
            objDefineAccessors: y.l_,
            addPageUnloadEventListener: v.c9,
            setProcessTelemetryTimings: Gt,
            addEventHandler: v.Ib,
            getFieldValueType: cn,
            strEndsWith: y.Id,
            objForEachKey: y.rW
        }
          , st = {
            _canUseCookies: void 0,
            isTypeof: y.Ym,
            isUndefined: y.o8,
            isNullOrUndefined: y.le,
            hasOwnProperty: y.nr,
            isFunction: y.mf,
            isObject: y.Kn,
            isDate: y.J_,
            isArray: y.kJ,
            isError: y.VZ,
            isString: y.HD,
            isNumber: y.hj,
            isBoolean: y.jn,
            toISOString: y.Y6,
            arrForEach: y.tO,
            arrIndexOf: y.UA,
            arrMap: y.Mr,
            arrReduce: y.Xz,
            strTrim: y.nd,
            objCreate: J.pu,
            objKeys: y.FY,
            objDefineAccessors: y.l_,
            addEventHandler: v.Ib,
            dateNow: y.m6,
            isIE: C.w1,
            disableCookies: F,
            newGuid: o.GW,
            perfNow: o.Jj,
            newId: a.pZ,
            randomValue: a.az,
            random32: a._l,
            mwcRandomSeed: a.CN,
            mwcRandom32: a.F6,
            generateW3CId: o.DO
        };
        function z() {
            return !!(0,
            C.a8)("chrome")
        }
        function it(k, $, Ot, Ut, Q, Z) {
            Ut === void 0 && (Ut = !1),
            Q === void 0 && (Q = !1);
            function nt(Lt, At, Sn) {
                try {
                    Lt[At] = Sn
                } catch (Nn) {}
            }
            var mt = new XMLHttpRequest;
            return Ut && nt(mt, Dt, Ut),
            Ot && nt(mt, St, Ot),
            mt.open(k, $, !Q),
            Ot && nt(mt, St, Ot),
            !Q && Z && nt(mt, L, Z),
            mt
        }
    }
    ,
    94077: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            Z: ()=>Ne
        });
        var C = A(43298)
          , y = A(42314)
          , N = A(22753)
          , o = A(51318)
          , T = A(98530)
          , v = A(51175)
          , a = A(43161)
          , J = A(41167)
          , ft = A(1785)
          , gt = (0,
        ft.By)({
            Unknown: 0,
            NonRetryableStatus: 1,
            InvalidEvent: 2,
            SizeLimitExceeded: 3,
            KillSwitch: 4,
            QueueFull: 5
        })
          , ht = A(94300)
          , yt = A(31549)
          , Dt = "REAL_TIME"
          , St = "NEAR_REAL_TIME"
          , L = "BEST_EFFORT"
          , V = ""
          , x = "POST"
          , _t = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation"
          , H = "drop"
          , g = "send"
          , X = "requeue"
          , bt = "rspFail"
          , B = "oth"
          , Pt = "no-cache, no-store"
          , U = "application/x-json-stream"
          , F = "cache-control"
          , Et = "content-type"
          , P = "kill-tokens"
          , pt = "kill-duration"
          , l = "kill-duration-seconds"
          , sn = "time-delta-millis"
          , b = "client-version"
          , M = "client-id"
          , D = "time-delta-to-apply-millis"
          , K = "upload-time"
          , tt = "apikey"
          , R = "AuthMsaDeviceTicket"
          , Gt = "AuthXToken"
          , cn = "sdk-version"
          , Yt = "NoResponseBody"
          , st = "msfpc"
          , z = "trace"
          , it = "user";
        function k(vn) {
            var Tn = (vn.ext || {}).intweb;
            return Tn && (0,
            v.Sn)(Tn[st]) ? Tn[st] : null
        }
        function $(vn) {
            for (var Tn = null, w = 0; Tn === null && w < vn.length; w++)
                Tn = k(vn[w]);
            return Tn
        }
        var Ot = function() {
            function vn(Tn, w) {
                var I = w ? [].concat(w) : []
                  , h = this
                  , j = $(I);
                h.iKey = function() {
                    return Tn
                }
                ,
                h.Msfpc = function() {
                    return j || V
                }
                ,
                h.count = function() {
                    return I.length
                }
                ,
                h.events = function() {
                    return I
                }
                ,
                h.addEvent = function(q) {
                    return q ? (I.push(q),
                    j || (j = k(q)),
                    !0) : !1
                }
                ,
                h.split = function(q, ut) {
                    var Wt;
                    if (q < I.length) {
                        var Kt = I.length - q;
                        (0,
                        a.le)(ut) || (Kt = ut < Kt ? ut : Kt),
                        Wt = I.splice(q, Kt),
                        j = $(I)
                    }
                    return new vn(Tn,Wt)
                }
            }
            return vn.create = function(Tn, w) {
                return new vn(Tn,w)
            }
            ,
            vn
        }()
          , Ut = function() {
            function vn() {
                var Tn = !0
                  , w = !0
                  , I = !0
                  , h = "use-collector-delta"
                  , j = !1;
                (0,
                y.Z)(vn, this, function(q) {
                    q.allowRequestSending = function() {
                        return Tn
                    }
                    ,
                    q.firstRequestSent = function() {
                        I && (I = !1,
                        j || (Tn = !1))
                    }
                    ,
                    q.shouldAddClockSkewHeaders = function() {
                        return w
                    }
                    ,
                    q.getClockSkewHeaderValue = function() {
                        return h
                    }
                    ,
                    q.setClockSkew = function(ut) {
                        j || (ut ? (h = ut,
                        w = !0,
                        j = !0) : w = !1,
                        Tn = !0)
                    }
                })
            }
            return vn.__ieDyn = 1,
            vn
        }();
        const Q = Ut;
        var Z = 1e3
          , nt = function() {
            function vn() {
                var Tn = {};
                function w(I) {
                    var h = [];
                    return I && (0,
                    a.tO)(I, function(j) {
                        h.push((0,
                        a.nd)(j))
                    }),
                    h
                }
                (0,
                y.Z)(vn, this, function(I) {
                    I.setKillSwitchTenants = function(h, j) {
                        if (h && j)
                            try {
                                var q = w(h.split(","));
                                if (j === "this-request-only")
                                    return q;
                                for (var ut = parseInt(j, 10) * Z, Wt = 0; Wt < q.length; ++Wt)
                                    Tn[q[Wt]] = (0,
                                    a.m6)() + ut
                            } catch (Kt) {
                                return []
                            }
                        return []
                    }
                    ,
                    I.isTenantKilled = function(h) {
                        var j = Tn
                          , q = (0,
                        a.nd)(h);
                        return j[q] !== void 0 && j[q] > (0,
                        a.m6)() ? !0 : (delete j[q],
                        !1)
                    }
                })
            }
            return vn.__ieDyn = 1,
            vn
        }();
        const mt = nt;
        var Lt = A(32589)
          , At = .8
          , Sn = 1.2
          , Nn = 3e3
          , $t = 6e5;
        function f(vn) {
            return !(vn >= 300 && vn < 500 && vn != 408 && vn != 429 || vn == 501 || vn == 505)
        }
        function Gn(vn) {
            var Tn = 0
              , w = Nn * At
              , I = Nn * Sn
              , h = Math.floor(Math.random() * (I - w)) + w;
            return Tn = Math.pow(2, vn) * h,
            Math.min(Tn, $t)
        }
        var Zn = 20
          , xe = 3984588
          , Le = 65e3
          , un = 2e6
          , Ie = Math.min(un, Le)
          , Vt = "metadata"
          , Yn = "f"
          , be = /\./
          , he = function() {
            function vn(Tn, w, I, h) {
                var j = "data"
                  , q = "baseData"
                  , ut = "ext"
                  , Wt = !!h
                  , Kt = !0
                  , Vn = w
                  , qt = {};
                (0,
                y.Z)(vn, this, function(En) {
                    En.createPayload = function(Y, ct, vt, zt, xt, nn) {
                        return {
                            apiKeys: [],
                            payloadBlob: V,
                            overflow: null,
                            sizeExceed: [],
                            failedEvts: [],
                            batches: [],
                            numEvents: 0,
                            retryCnt: Y,
                            isTeardown: ct,
                            isSync: vt,
                            isBeacon: zt,
                            sendType: nn,
                            sendReason: xt
                        }
                    }
                    ,
                    En.appendPayload = function(Y, ct, vt) {
                        var zt = Y && ct && !Y.overflow;
                        return zt && (0,
                        N.Lm)(Tn, function() {
                            return "Serializer:appendPayload"
                        }, function() {
                            for (var xt = ct.events(), nn = Y.payloadBlob, _n = Y.numEvents, Mn = !1, Qt = [], Ln = [], xn = Y.isBeacon, tn = xn ? Le : xe, Rt = xn ? Ie : un, Nt = 0, Un = 0; Nt < xt.length; ) {
                                var fn = xt[Nt];
                                if (fn) {
                                    if (_n >= vt) {
                                        Y.overflow = ct.split(Nt);
                                        break
                                    }
                                    var wn = En.getEventBlob(fn);
                                    if (wn && wn.length <= Rt) {
                                        var qn = wn.length
                                          , Ue = nn.length;
                                        if (Ue + qn > tn) {
                                            Y.overflow = ct.split(Nt);
                                            break
                                        }
                                        nn && (nn += `
`),
                                        nn += wn,
                                        Un++,
                                        Un > Zn && (nn.substr(0, 1),
                                        Un = 0),
                                        Mn = !0,
                                        _n++
                                    } else
                                        wn ? Qt.push(fn) : Ln.push(fn),
                                        xt.splice(Nt, 1),
                                        Nt--
                                }
                                Nt++
                            }
                            if (Qt && Qt.length > 0 && Y.sizeExceed.push(Ot.create(ct.iKey(), Qt)),
                            Ln && Ln.length > 0 && Y.failedEvts.push(Ot.create(ct.iKey(), Ln)),
                            Mn) {
                                Y.batches.push(ct),
                                Y.payloadBlob = nn,
                                Y.numEvents = _n;
                                var We = ct.iKey();
                                (0,
                                a.UA)(Y.apiKeys, We) === -1 && Y.apiKeys.push(We)
                            }
                        }, function() {
                            return {
                                payload: Y,
                                theBatch: {
                                    iKey: ct.iKey(),
                                    evts: ct.events()
                                },
                                max: vt
                            }
                        }),
                        zt
                    }
                    ,
                    En.getEventBlob = function(Y) {
                        try {
                            return (0,
                            N.Lm)(Tn, function() {
                                return "Serializer.getEventBlob"
                            }, function() {
                                var ct = {};
                                ct.name = Y.name,
                                ct.time = Y.time,
                                ct.ver = Y.ver,
                                ct.iKey = "o:" + (0,
                                v.jM)(Y.iKey);
                                var vt = {}
                                  , zt = Y[ut];
                                zt && (ct[ut] = vt,
                                (0,
                                a.rW)(zt, function(_n, Mn) {
                                    var Qt = vt[_n] = {};
                                    m(Mn, Qt, "ext." + _n, !0, null, null, !0)
                                }));
                                var xt = ct[j] = {};
                                xt.baseType = Y.baseType;
                                var nn = xt[q] = {};
                                return m(Y.baseData, nn, q, !1, [q], function(_n, Mn, Qt) {
                                    Te(vt, _n, Mn, Qt)
                                }, Kt),
                                m(Y.data, xt, j, !1, [], function(_n, Mn, Qt) {
                                    Te(vt, _n, Mn, Qt)
                                }, Kt),
                                JSON.stringify(ct)
                            }, function() {
                                return {
                                    item: Y
                                }
                            })
                        } catch (ct) {
                            return null
                        }
                    }
                    ;
                    function at(Y, ct) {
                        var vt = qt[Y];
                        return vt === void 0 && (Y.length >= 7 && (vt = (0,
                        a.xe)(Y, "ext.metadata") || (0,
                        a.xe)(Y, "ext.web")),
                        qt[Y] = vt),
                        vt
                    }
                    function m(Y, ct, vt, zt, xt, nn, _n) {
                        (0,
                        a.rW)(Y, function(Mn, Qt) {
                            var Ln = null;
                            if (Qt || (0,
                            v.Sn)(Qt)) {
                                var xn = vt
                                  , tn = Mn
                                  , Rt = xt
                                  , Nt = ct;
                                if (Wt && !zt && be.test(Mn)) {
                                    var Un = Mn.split(".")
                                      , fn = Un.length;
                                    if (fn > 1) {
                                        Rt && (Rt = Rt.slice());
                                        for (var wn = 0; wn < fn - 1; wn++) {
                                            var qn = Un[wn];
                                            Nt = Nt[qn] = Nt[qn] || {},
                                            xn += "." + qn,
                                            Rt && Rt.push(qn)
                                        }
                                        tn = Un[fn - 1]
                                    }
                                }
                                var Ue = zt && at(xn, tn);
                                if (!Ue && Vn && Vn.handleField(xn, tn) ? Ln = Vn.value(xn, tn, Qt, I) : Ln = (0,
                                v.yj)(tn, Qt, I),
                                Ln) {
                                    var We = Ln.value;
                                    if (Nt[tn] = We,
                                    nn && nn(Rt, tn, Ln),
                                    _n && typeof We == "object" && !(0,
                                    a.kJ)(We)) {
                                        var ke = Rt;
                                        ke && (ke = ke.slice(),
                                        ke.push(tn)),
                                        m(Qt, We, xn + "." + tn, zt, ke, nn, _n)
                                    }
                                }
                            }
                        })
                    }
                })
            }
            return vn.__ieDyn = 1,
            vn
        }();
        function Te(vn, Tn, w, I) {
            if (I && vn) {
                var h = (0,
                v.Vv)(I.value, I.kind, I.propertyType);
                if (h > -1) {
                    var j = vn[Vt];
                    j || (j = vn[Vt] = {
                        f: {}
                    });
                    var q = j[Yn];
                    if (q || (q = j[Yn] = {}),
                    Tn)
                        for (var ut = 0; ut < Tn.length; ut++) {
                            var Wt = Tn[ut];
                            q[Wt] || (q[Wt] = {
                                f: {}
                            });
                            var Kt = q[Wt][Yn];
                            Kt || (Kt = q[Wt][Yn] = {}),
                            q = Kt
                        }
                    q = q[w] = {},
                    (0,
                    a.kJ)(I.value) ? q.a = {
                        t: h
                    } : q.t = h
                }
            }
        }
        var ue, Se = "sendAttempt", ee = "&" + Yt + "=true", Jn = (ue = {},
        ue[1] = X,
        ue[100] = X,
        ue[200] = "sent",
        ue[8004] = H,
        ue[8003] = H,
        ue), we = {}, Fe = {};
        function le(vn, Tn, w) {
            we[vn] = Tn,
            w !== !1 && (Fe[Tn] = vn)
        }
        le(R, R, !1),
        le(b, b),
        le(M, "Client-Id"),
        le(tt, tt),
        le(D, D),
        le(K, K),
        le(Gt, Gt);
        function Jt(vn) {
            try {
                return vn.responseText
            } catch (Tn) {}
            return V
        }
        function Dn(vn, Tn) {
            var w = !1;
            if (vn && Tn) {
                var I = (0,
                a.FY)(vn);
                if (I && I.length > 0)
                    for (var h = Tn.toLowerCase(), j = 0; j < I.length; j++) {
                        var q = I[j];
                        if (q && (0,
                        a.nr)(Tn, q) && q.toLowerCase() === h) {
                            w = !0;
                            break
                        }
                    }
            }
            return w
        }
        function _(vn, Tn, w, I) {
            Tn && w && w.length > 0 && (I && we[Tn] ? (vn.hdrs[we[Tn]] = w,
            vn.useHdrs = !0) : vn.url += "&" + Tn + "=" + w)
        }
        function bn(vn, Tn) {
            return Tn && ((0,
            a.hj)(Tn) ? vn = [Tn].concat(vn) : (0,
            a.kJ)(Tn) && (vn = Tn.concat(vn))),
            vn
        }
        var re = function() {
            function vn(Tn, w, I, h, j) {
                this._responseHandlers = [];
                var q = "?cors=true&" + Et.toLowerCase() + "=" + U, ut = new mt, Wt = !1, Kt = new Q, Vn = !1, qt = 0, En, at, m, Y, ct = !0, vt = [], zt = {}, xt = [], nn = null, _n = !1, Mn, Qt = !1, Ln = !1, xn, tn, Rt, Nt, Un;
                (0,
                y.Z)(vn, this, function(fn) {
                    var wn = !0;
                    fn.initialize = function(ot, Bt, Zt, an, In) {
                        var Hn;
                        In || (In = {}),
                        q = ot + q,
                        Ln = (0,
                        a.o8)(In.avoidOptions) ? !0 : !In.avoidOptions,
                        Y = Bt,
                        Mn = Bt.getCookieMgr(),
                        _n = !Y.config.disableEventTimings;
                        var jn = !!Y.config.enableCompoundKey;
                        En = Zt,
                        at = En.diagLog();
                        var rt = In.valueSanitizer
                          , wt = In.stringifyObjects;
                        (0,
                        a.o8)(In.enableCompoundKey) || (jn = !!In.enableCompoundKey),
                        xn = In.xhrTimeout,
                        tn = !!In.disableXhrSync,
                        Rt = !!In.disableFetchKeepAlive,
                        Un = In.addNoResponse !== !1,
                        Vn = !(0,
                        J.b$)(),
                        nn = new he(Y,rt,wt,jn),
                        (0,
                        a.le)(In.useSendBeacon) || (Vn = !!In.useSendBeacon);
                        var It = an
                          , on = In.alwaysUseXhrOverride ? an : null
                          , mn = In.alwaysUseXhrOverride ? an : null
                          , Wn = [3, 2];
                        if (!an) {
                            ct = !1;
                            var ne = (0,
                            J.k$)();
                            ne && ne.protocol && ne.protocol.toLowerCase() === "file:" && (wn = !1);
                            var ie = [];
                            (0,
                            J.b$)() ? (ie = [2, 1],
                            Wn = [2, 1, 3]) : ie = [1, 2, 3],
                            ie = bn(ie, In.transports),
                            an = qn(ie, !1),
                            an || (0,
                            ht.jV)(at, "No available transport to send events"),
                            It = qn(ie, !0)
                        }
                        on || (Wn = bn(Wn, In.unloadTransports),
                        on = qn(Wn, !0)),
                        Nt = !ct && (Vn && (0,
                        J.MF)() || !Rt && (0,
                        J.JO)(!0)),
                        m = (Hn = {},
                        Hn[0] = an,
                        Hn[1] = It || qn([1, 2, 3], !0),
                        Hn[2] = on || It || qn([1], !0),
                        Hn[3] = mn || qn([2, 3], !0) || It || qn([1], !0),
                        Hn)
                    }
                    ;
                    function qn(ot, Bt) {
                        for (var Zt = 0, an = null, In = 0; an == null && In < ot.length; )
                            Zt = ot[In],
                            Zt === 1 ? (0,
                            J.cp)() ? an = Ue : (0,
                            J.Z3)() && (an = ke) : Zt === 2 && (0,
                            J.JO)(Bt) && (!Bt || Bt && !Rt) ? an = We : Vn && Zt === 3 && (0,
                            J.MF)() && (an = Qe),
                            In++;
                        return an ? {
                            _transport: Zt,
                            _isSync: Bt,
                            sendPOST: an
                        } : null
                    }
                    fn._getDbgPlgTargets = function() {
                        return [m[0], ut, nn, m]
                    }
                    ;
                    function Ue(ot, Bt, Zt) {
                        var an = new XDomainRequest;
                        an.open(x, ot.urlString),
                        ot.timeout && (an.timeout = ot.timeout),
                        an.onload = function() {
                            var In = Jt(an);
                            Ke(Bt, 200, {}, In),
                            cr(In)
                        }
                        ,
                        an.onerror = function() {
                            Ke(Bt, 400, {})
                        }
                        ,
                        an.ontimeout = function() {
                            Ke(Bt, 500, {})
                        }
                        ,
                        an.onprogress = function() {}
                        ,
                        Zt ? an.send(ot.data) : j.set(function() {
                            an.send(ot.data)
                        }, 0)
                    }
                    function We(ot, Bt, Zt) {
                        var an, In = ot.urlString, Hn = !1, jn = !1, rt = (an = {
                            body: ot.data,
                            method: x
                        },
                        an[_t] = !0,
                        an);
                        Zt && (rt.keepalive = !0,
                        ot._sendReason === 2 && (Hn = !0,
                        Un && (In += ee))),
                        wn && (rt.credentials = "include"),
                        ot.headers && (0,
                        a.FY)(ot.headers).length > 0 && (rt.headers = ot.headers),
                        fetch(In, rt).then(function(wt) {
                            var It = {}
                              , on = V
                              , mn = wt.headers;
                            mn && mn.forEach(function(Wn, ne) {
                                It[ne] = Wn
                            }),
                            wt.body && wt.text().then(function(Wn) {
                                on = Wn
                            }),
                            jn || (jn = !0,
                            Ke(Bt, wt.status, It, on),
                            cr(on))
                        }).catch(function(wt) {
                            jn || (jn = !0,
                            Ke(Bt, 0, {}))
                        }),
                        Hn && !jn && (jn = !0,
                        Ke(Bt, 200, {})),
                        !jn && ot.timeout > 0 && j.set(function() {
                            jn || (jn = !0,
                            Ke(Bt, 500, {}))
                        }, ot.timeout)
                    }
                    function ke(ot, Bt, Zt) {
                        var an = ot.urlString;
                        function In(wt, It, on) {
                            if (!wt[on] && It && It.getResponseHeader) {
                                var mn = It.getResponseHeader(on);
                                mn && (wt[on] = (0,
                                a.nd)(mn))
                            }
                            return wt
                        }
                        function Hn(wt) {
                            var It = {};
                            return wt.getAllResponseHeaders ? It = Fr(wt.getAllResponseHeaders()) : (It = In(It, wt, sn),
                            It = In(It, wt, pt),
                            It = In(It, wt, l)),
                            It
                        }
                        function jn(wt, It) {
                            Ke(Bt, wt.status, Hn(wt), It)
                        }
                        Zt && ot.disableXhrSync && (Zt = !1);
                        var rt = (0,
                        v.ot)(x, an, wn, !0, Zt, ot.timeout);
                        (0,
                        a.rW)(ot.headers, function(wt, It) {
                            rt.setRequestHeader(wt, It)
                        }),
                        rt.onload = function() {
                            var wt = Jt(rt);
                            jn(rt, wt),
                            cr(wt)
                        }
                        ,
                        rt.onerror = function() {
                            jn(rt)
                        }
                        ,
                        rt.ontimeout = function() {
                            jn(rt)
                        }
                        ,
                        rt.send(ot.data)
                    }
                    function Ke(ot, Bt, Zt, an) {
                        try {
                            ot(Bt, Zt, an)
                        } catch (In) {
                            (0,
                            ht.kP)(at, 2, 518, (0,
                            J.eU)(In))
                        }
                    }
                    function Qe(ot, Bt, Zt) {
                        var an = ot
                          , In = 200
                          , Hn = an._thePayload
                          , jn = ot.urlString + (Un ? ee : V);
                        try {
                            var rt = (0,
                            J.jW)();
                            if (!rt.sendBeacon(jn, ot.data))
                                if (Hn) {
                                    var wt = [];
                                    (0,
                                    a.tO)(Hn.batches, function(It) {
                                        if (wt && It && It.count() > 0) {
                                            for (var on = It.events(), mn = 0; mn < on.length; mn++)
                                                if (!rt.sendBeacon(jn, nn.getEventBlob(on[mn]))) {
                                                    wt.push(It.split(mn));
                                                    break
                                                }
                                        } else
                                            wt.push(It.split(0))
                                    }),
                                    Be(wt, 8003, Hn.sendType, !0)
                                } else
                                    In = 0
                        } catch (It) {
                            (0,
                            ht.jV)(at, "Failed to send telemetry using sendBeacon API. Ex:" + (0,
                            J.eU)(It)),
                            In = 0
                        } finally {
                            Ke(Bt, In, {}, V)
                        }
                    }
                    function qe(ot) {
                        return ot === 2 || ot === 3
                    }
                    function ye(ot) {
                        return Qt && qe(ot) && (ot = 2),
                        ot
                    }
                    fn.addQueryStringParameter = function(ot, Bt) {
                        for (var Zt = 0; Zt < vt.length; Zt++)
                            if (vt[Zt].name === ot) {
                                vt[Zt].value = Bt;
                                return
                            }
                        vt.push({
                            name: ot,
                            value: Bt
                        })
                    }
                    ,
                    fn.addHeader = function(ot, Bt) {
                        zt[ot] = Bt
                    }
                    ,
                    fn.canSendRequest = function() {
                        return gr() && Kt.allowRequestSending()
                    }
                    ,
                    fn.sendQueuedRequests = function(ot, Bt) {
                        (0,
                        a.o8)(ot) && (ot = 0),
                        Qt && (ot = ye(ot),
                        Bt = 2),
                        ze(xt, ot, 0) && or($e(), 0, !1, ot, Bt || 0)
                    }
                    ,
                    fn.isCompletelyIdle = function() {
                        return !Wt && qt === 0 && xt.length === 0
                    }
                    ,
                    fn.setUnloading = function(ot) {
                        Qt = ot
                    }
                    ,
                    fn.addBatch = function(ot) {
                        if (ot && ot.count() > 0) {
                            if (ut.isTenantKilled(ot.iKey()))
                                return !1;
                            xt.push(ot)
                        }
                        return !0
                    }
                    ,
                    fn.teardown = function() {
                        xt.length > 0 && or($e(), 0, !0, 2, 2)
                    }
                    ,
                    fn.pause = function() {
                        Wt = !0
                    }
                    ,
                    fn.resume = function() {
                        Wt = !1,
                        fn.sendQueuedRequests(0, 4)
                    }
                    ,
                    fn.sendSynchronousBatch = function(ot, Bt, Zt) {
                        ot && ot.count() > 0 && ((0,
                        a.le)(Bt) && (Bt = 1),
                        Qt && (Bt = ye(Bt),
                        Zt = 2),
                        or([ot], 0, !1, Bt, Zt || 0))
                    }
                    ;
                    function gr() {
                        return !Wt && qt < w
                    }
                    function $e() {
                        var ot = xt;
                        return xt = [],
                        ot
                    }
                    function ze(ot, Bt, Zt) {
                        var an = !1;
                        return ot && ot.length > 0 && !Wt && m[Bt] && nn && (an = Bt !== 0 || gr() && (Zt > 0 || Kt.allowRequestSending())),
                        an
                    }
                    function fe(ot) {
                        var Bt = {};
                        return ot && (0,
                        a.tO)(ot, function(Zt, an) {
                            Bt[an] = {
                                iKey: Zt.iKey(),
                                evts: Zt.events()
                            }
                        }),
                        Bt
                    }
                    function or(ot, Bt, Zt, an, In) {
                        if (!(!ot || ot.length === 0)) {
                            if (Wt) {
                                Be(ot, 1, an);
                                return
                            }
                            an = ye(an);
                            try {
                                var Hn = ot
                                  , jn = an !== 0;
                                (0,
                                N.Lm)(Y, function() {
                                    return "HttpManager:_sendBatches"
                                }, function(rt) {
                                    rt && (ot = ot.slice(0));
                                    for (var wt = [], It = null, on = (0,
                                    v.hK)(), mn = m[an] || (jn ? m[1] : m[0]), Wn = mn && mn._transport, ne = Nt && (Qt || qe(an) || Wn === 3 || mn._isSync && Wn === 2); ze(ot, an, Bt); ) {
                                        var ie = ot.shift();
                                        ie && ie.count() > 0 && (ut.isTenantKilled(ie.iKey()) ? wt.push(ie) : (It = It || nn.createPayload(Bt, Zt, jn, ne, In, an),
                                        nn.appendPayload(It, ie, Tn) ? It.overflow !== null && (ot = [It.overflow].concat(ot),
                                        It.overflow = null,
                                        ur(It, on, (0,
                                        v.hK)(), In),
                                        on = (0,
                                        v.hK)(),
                                        It = null) : (ur(It, on, (0,
                                        v.hK)(), In),
                                        on = (0,
                                        v.hK)(),
                                        ot = [ie].concat(ot),
                                        It = null)))
                                    }
                                    It && ur(It, on, (0,
                                    v.hK)(), In),
                                    ot.length > 0 && (xt = ot.concat(xt)),
                                    Be(wt, 8004, an)
                                }, function() {
                                    return {
                                        batches: fe(Hn),
                                        retryCount: Bt,
                                        isTeardown: Zt,
                                        isSynchronous: jn,
                                        sendReason: In,
                                        useSendBeacon: qe(an),
                                        sendType: an
                                    }
                                }, !jn)
                            } catch (rt) {
                                (0,
                                ht.kP)(at, 2, 48, "Unexpected Exception sending batch: " + (0,
                                J.eU)(rt))
                            }
                        }
                    }
                    function Je(ot, Bt) {
                        var Zt = {
                            url: q,
                            hdrs: {},
                            useHdrs: !1
                        };
                        Bt ? (Zt.hdrs = (0,
                        v.l7)(Zt.hdrs, zt),
                        Zt.useHdrs = (0,
                        a.FY)(Zt.hdrs).length > 0) : (0,
                        a.rW)(zt, function(rt, wt) {
                            Fe[rt] ? _(Zt, Fe[rt], wt, !1) : (Zt.hdrs[rt] = wt,
                            Zt.useHdrs = !0)
                        }),
                        _(Zt, M, "NO_AUTH", Bt),
                        _(Zt, b, v.vs, Bt);
                        var an = V;
                        (0,
                        a.tO)(ot.apiKeys, function(rt) {
                            an.length > 0 && (an += ","),
                            an += rt
                        }),
                        _(Zt, tt, an, Bt),
                        _(Zt, K, (0,
                        a.m6)().toString(), Bt);
                        var In = Cr(ot);
                        if ((0,
                        v.Sn)(In) && (Zt.url += "&ext.intweb.msfpc=" + In),
                        Kt.shouldAddClockSkewHeaders() && _(Zt, D, Kt.getClockSkewHeaderValue(), Bt),
                        Y.getWParam) {
                            var Hn = Y.getWParam();
                            Hn >= 0 && (Zt.url += "&w=" + Hn)
                        }
                        for (var jn = 0; jn < vt.length; jn++)
                            Zt.url += "&" + vt[jn].name + "=" + vt[jn].value;
                        return Zt
                    }
                    function sr(ot, Bt, Zt) {
                        ot[Bt] = ot[Bt] || {},
                        ot[Bt][En.identifier] = Zt
                    }
                    function ur(ot, Bt, Zt, an) {
                        if (ot && ot.payloadBlob && ot.payloadBlob.length > 0) {
                            var In = !!fn.sendHook
                              , Hn = m[ot.sendType];
                            !qe(ot.sendType) && ot.isBeacon && ot.sendReason === 2 && (Hn = m[2] || m[3] || Hn);
                            var jn = Ln;
                            (ot.isBeacon || Hn._transport === 3) && (jn = !1);
                            var rt = Je(ot, jn);
                            jn = jn || rt.useHdrs;
                            var wt = (0,
                            v.hK)();
                            (0,
                            N.Lm)(Y, function() {
                                return "HttpManager:_doPayloadSend"
                            }, function() {
                                for (var It = 0; It < ot.batches.length; It++)
                                    for (var on = ot.batches[It], mn = on.events(), Wn = 0; Wn < mn.length; Wn++) {
                                        var ne = mn[Wn];
                                        if (_n) {
                                            var ie = ne.timings = ne.timings || {};
                                            sr(ie, "sendEventStart", wt),
                                            sr(ie, "serializationStart", Bt),
                                            sr(ie, "serializationCompleted", Zt)
                                        }
                                        ne[Se] > 0 ? ne[Se]++ : ne[Se] = 1
                                    }
                                Be(ot.batches, 1e3 + (an || 0), ot.sendType, !0);
                                var ge = {
                                    data: ot.payloadBlob,
                                    urlString: rt.url,
                                    headers: rt.hdrs,
                                    _thePayload: ot,
                                    _sendReason: an,
                                    timeout: xn,
                                    disableXhrSync: tn,
                                    disableFetchKeepAlive: Rt
                                };
                                jn && (Dn(ge.headers, F) || (ge.headers[F] = Pt),
                                Dn(ge.headers, Et) || (ge.headers[Et] = U));
                                var Tr = null;
                                Hn && (Tr = function(mr) {
                                    Kt.firstRequestSent();
                                    var wr = function(Or, Ur) {
                                        Pr(Or, Ur, ot, an)
                                    }
                                      , nr = ot.isTeardown || ot.isSync;
                                    try {
                                        Hn.sendPOST(mr, wr, nr),
                                        fn.sendListener && fn.sendListener(ge, mr, nr, ot.isBeacon)
                                    } catch (Or) {
                                        (0,
                                        ht.jV)(at, "Unexpected exception sending payload. Ex:" + (0,
                                        J.eU)(Or)),
                                        Ke(wr, 0, {})
                                    }
                                }
                                ),
                                (0,
                                N.Lm)(Y, function() {
                                    return "HttpManager:_doPayloadSend.sender"
                                }, function() {
                                    if (Tr)
                                        if (ot.sendType === 0 && qt++,
                                        In && !ot.isBeacon && Hn._transport !== 3) {
                                            var mr = {
                                                data: ge.data,
                                                urlString: ge.urlString,
                                                headers: (0,
                                                v.l7)({}, ge.headers),
                                                timeout: ge.timeout,
                                                disableXhrSync: ge.disableXhrSync,
                                                disableFetchKeepAlive: ge.disableFetchKeepAlive
                                            }
                                              , wr = !1;
                                            (0,
                                            N.Lm)(Y, function() {
                                                return "HttpManager:_doPayloadSend.sendHook"
                                            }, function() {
                                                try {
                                                    fn.sendHook(mr, function(nr) {
                                                        wr = !0,
                                                        !ct && !nr._thePayload && (nr._thePayload = nr._thePayload || ge._thePayload,
                                                        nr._sendReason = nr._sendReason || ge._sendReason),
                                                        Tr(nr)
                                                    }, ot.isSync || ot.isTeardown)
                                                } catch (nr) {
                                                    wr || Tr(ge)
                                                }
                                            })
                                        } else
                                            Tr(ge)
                                })
                            }, function() {
                                return {
                                    thePayload: ot,
                                    serializationStart: Bt,
                                    serializationCompleted: Zt,
                                    sendReason: an
                                }
                            }, ot.isSync)
                        }
                        ot.sizeExceed && ot.sizeExceed.length > 0 && Be(ot.sizeExceed, 8003, ot.sendType),
                        ot.failedEvts && ot.failedEvts.length > 0 && Be(ot.failedEvts, 8002, ot.sendType)
                    }
                    function Ir(ot, Bt) {
                        _n && (0,
                        a.tO)(ot, function(Zt) {
                            var an = Zt.timings = Zt.timings || {};
                            sr(an, "sendEventCompleted", Bt)
                        })
                    }
                    function Pr(ot, Bt, Zt, an) {
                        var In = 9e3
                          , Hn = null
                          , jn = !1
                          , rt = !1;
                        try {
                            var wt = !0;
                            if (typeof ot !== Lt.jA) {
                                if (Bt) {
                                    Kt.setClockSkew(Bt[sn]);
                                    var It = Bt[pt] || Bt["kill-duration-seconds"];
                                    (0,
                                    a.tO)(ut.setKillSwitchTenants(Bt[P], It), function(mn) {
                                        (0,
                                        a.tO)(Zt.batches, function(Wn) {
                                            if (Wn.iKey() === mn) {
                                                Hn = Hn || [];
                                                var ne = Wn.split(0);
                                                Zt.numEvents -= ne.count(),
                                                Hn.push(ne)
                                            }
                                        })
                                    })
                                }
                                if (ot == 200 || ot == 204) {
                                    In = 200;
                                    return
                                }
                                (!f(ot) || Zt.numEvents <= 0) && (wt = !1),
                                In = 9e3 + ot % 1e3
                            }
                            if (wt) {
                                In = 100;
                                var on = Zt.retryCnt;
                                Zt.sendType === 0 && (on < I ? (jn = !0,
                                Er(function() {
                                    Zt.sendType === 0 && qt--,
                                    or(Zt.batches, on + 1, Zt.isTeardown, Qt ? 2 : Zt.sendType, 5)
                                }, Qt, Gn(on))) : (rt = !0,
                                Qt && (In = 8001)))
                            }
                        } finally {
                            jn || (Kt.setClockSkew(),
                            tr(Zt, In, an, rt)),
                            Be(Hn, 8004, Zt.sendType)
                        }
                    }
                    function tr(ot, Bt, Zt, an) {
                        try {
                            an && En._backOffTransmission(),
                            Bt === 200 && (!an && !ot.isSync && En._clearBackOff(),
                            Dr(ot.batches)),
                            Be(ot.batches, Bt, ot.sendType, !0)
                        } finally {
                            ot.sendType === 0 && (qt--,
                            Zt !== 5 && fn.sendQueuedRequests(ot.sendType, Zt))
                        }
                    }
                    function Dr(ot) {
                        if (_n) {
                            var Bt = (0,
                            v.hK)();
                            (0,
                            a.tO)(ot, function(Zt) {
                                Zt && Zt.count() > 0 && Ir(Zt.events(), Bt)
                            })
                        }
                    }
                    function Er(ot, Bt, Zt) {
                        Bt ? ot() : j.set(ot, Zt)
                    }
                    function Fr(ot) {
                        var Bt = {};
                        if ((0,
                        a.HD)(ot)) {
                            var Zt = (0,
                            a.nd)(ot).split(/[\r\n]+/);
                            (0,
                            a.tO)(Zt, function(an) {
                                if (an) {
                                    var In = an.indexOf(": ");
                                    if (In !== -1) {
                                        var Hn = (0,
                                        a.nd)(an.substring(0, In)).toLowerCase()
                                          , jn = (0,
                                        a.nd)(an.substring(In + 1));
                                        Bt[Hn] = jn
                                    } else
                                        Bt[(0,
                                        a.nd)(an)] = 1
                                }
                            })
                        }
                        return Bt
                    }
                    function Cr(ot) {
                        for (var Bt = 0; Bt < ot.batches.length; Bt++) {
                            var Zt = ot.batches[Bt].Msfpc();
                            if (Zt)
                                return encodeURIComponent(Zt)
                        }
                        return V
                    }
                    function cr(ot) {
                        var Bt = fn._responseHandlers;
                        try {
                            for (var Zt = 0; Zt < Bt.length; Zt++)
                                try {
                                    Bt[Zt](ot)
                                } catch (In) {
                                    (0,
                                    ht.kP)(at, 1, 519, "Response handler failed: " + In)
                                }
                            if (ot) {
                                var an = JSON.parse(ot);
                                (0,
                                v.Sn)(an.webResult) && (0,
                                v.Sn)(an.webResult[st]) && Mn.set("MSFPC", an.webResult[st], 365 * 86400)
                            }
                        } catch (In) {}
                    }
                    function Be(ot, Bt, Zt, an) {
                        if (ot && ot.length > 0 && h) {
                            var In = h[pr(Bt)];
                            if (In) {
                                var Hn = Zt !== 0;
                                (0,
                                N.Lm)(Y, function() {
                                    return "HttpManager:_sendBatchesNotification"
                                }, function() {
                                    Er(function() {
                                        try {
                                            In.call(h, ot, Bt, Hn, Zt)
                                        } catch (jn) {
                                            (0,
                                            ht.kP)(at, 1, 74, "send request notification failed: " + jn)
                                        }
                                    }, an || Hn, 0)
                                }, function() {
                                    return {
                                        batches: fe(ot),
                                        reason: Bt,
                                        isSync: Hn,
                                        sendSync: an,
                                        sendType: Zt
                                    }
                                }, !Hn)
                            }
                        }
                    }
                    function pr(ot) {
                        var Bt = Jn[ot];
                        return (0,
                        v.Sn)(Bt) || (Bt = B,
                        ot >= 9e3 && ot <= 9999 ? Bt = bt : ot >= 8e3 && ot <= 8999 ? Bt = H : ot >= 1e3 && ot <= 1999 && (Bt = g)),
                        Bt
                    }
                })
            }
            return vn.__ieDyn = 1,
            vn
        }();
        function ve(vn, Tn) {
            for (var w = [], I = 2; I < arguments.length; I++)
                w[I - 2] = arguments[I];
            return setTimeout(vn, Tn, w)
        }
        function _e(vn) {
            clearTimeout(vn)
        }
        function Oe(vn, Tn) {
            return {
                set: vn || ve,
                clear: Tn || _e
            }
        }
        var Ae = .25
          , He = 500
          , Xe = 20
          , Ee = 6
          , ar = 2
          , rr = 4
          , W = 2
          , Ct = 1
          , Ht = "eventsDiscarded"
          , pn = "overrideInstrumentationKey"
          , Pn = "maxEventRetryAttempts"
          , An = "maxUnloadEventRetryAttempts"
          , $n = "addUnloadCb"
          , Re = function(vn) {
            (0,
            C.ne)(Tn, vn);
            function Tn() {
                var w = vn.call(this) || this;
                w.identifier = "PostChannel",
                w.priority = 1011,
                w.version = "3.2.9";
                var I, h = !1, j = [], q = null, ut = !1, Wt = 0, Kt = 500, Vn = 0, qt = 1e4, En = {}, at = Dt, m = null, Y = null, ct = 0, vt = 0, zt, xt, nn = {}, _n, Mn, Qt = -1, Ln, xn = !0, tn = !1, Rt = Ee, Nt = ar, Un, fn;
                return (0,
                y.Z)(Tn, w, function(wn, qn) {
                    gr(),
                    wn._getDbgPlgTargets = function() {
                        return [xt]
                    }
                    ,
                    wn.initialize = function(rt, wt, It) {
                        (0,
                        N.Lm)(wt, function() {
                            return "PostChannel:initialize"
                        }, function() {
                            var on = wt;
                            qn.initialize(rt, wt, It);
                            try {
                                var mn = !!wt[$n];
                                Un = (0,
                                o.jU)((0,
                                T.J)(wn.identifier), wt.evtNamespace && wt.evtNamespace());
                                var Wn = wn._getTelCtx();
                                rt.extensionConfig[wn.identifier] = rt.extensionConfig[wn.identifier] || {},
                                I = Wn.getExtCfg(wn.identifier),
                                fn = Oe(I.setTimeoutOverride, I.clearTimeoutOverride),
                                xn = !I.disableOptimizeObj && (0,
                                v.mJ)(),
                                Ue(on),
                                I.eventsLimitInMem > 0 && (qt = I.eventsLimitInMem),
                                I.immediateEventLimit > 0 && (Kt = I.immediateEventLimit),
                                I.autoFlushEventsLimit > 0 && (_n = I.autoFlushEventsLimit),
                                (0,
                                a.hj)(I[Pn]) && (Rt = I[Pn]),
                                (0,
                                a.hj)(I[An]) && (Nt = I[An]),
                                jn(),
                                I.httpXHROverride && I.httpXHROverride.sendPOST && (zt = I.httpXHROverride),
                                (0,
                                v.Sn)(rt.anonCookieName) && xt.addQueryStringParameter("anoncknm", rt.anonCookieName),
                                xt.sendHook = I.payloadPreprocessor,
                                xt.sendListener = I.payloadListener;
                                var ne = I.overrideEndpointUrl ? I.overrideEndpointUrl : rt.endpointUrl;
                                wn._notificationManager = wt.getNotifyMgr(),
                                xt.initialize(ne, wn.core, wn, zt, I);
                                var ie = rt.disablePageUnloadEvents || [];
                                (0,
                                o.c9)(We, ie, Un),
                                (0,
                                o.TJ)(We, ie, Un),
                                (0,
                                o.nD)(ke, rt.disablePageShowEvents, Un)
                            } catch (ge) {
                                throw wn.setInitialized(!1),
                                ge
                            }
                        }, function() {
                            return {
                                coreConfig: rt,
                                core: wt,
                                extensions: It
                            }
                        })
                    }
                    ,
                    wn.processTelemetry = function(rt, wt) {
                        (0,
                        v.if)(rt, wn.identifier),
                        wt = wn._getTelCtx(wt);
                        var It = wt.getExtCfg(wn.identifier)
                          , on = !!I.disableTelemetry;
                        It && (on = on || !!It.disableTelemetry);
                        var mn = rt;
                        !on && !h && (I[pn] && (mn.iKey = I[pn]),
                        It && It[pn] && (mn.iKey = It[pn]),
                        Ke(mn, !0),
                        tn ? fe(2, 2) : ye()),
                        wn.processNext(mn, wt)
                    }
                    ,
                    wn._doTeardown = function(rt, wt) {
                        fe(2, 2),
                        h = !0,
                        xt.teardown(),
                        (0,
                        o.JA)(null, Un),
                        (0,
                        o.C9)(null, Un),
                        (0,
                        o.Yl)(null, Un),
                        gr()
                    }
                    ;
                    function Ue(rt) {
                        var wt = rt.getWParam;
                        rt.getWParam = function() {
                            var It = 0;
                            return I.ignoreMc1Ms0CookieProcessing && (It = It | 2),
                            It | wt()
                        }
                    }
                    function We(rt) {
                        var wt = rt || (0,
                        J.Jj)().event;
                        wt.type !== "beforeunload" && (tn = !0,
                        xt.setUnloading(tn)),
                        fe(2, 2)
                    }
                    function ke(rt) {
                        tn = !1,
                        xt.setUnloading(tn)
                    }
                    function Ke(rt, wt) {
                        if (rt.sendAttempt || (rt.sendAttempt = 0),
                        rt.latency || (rt.latency = 1),
                        rt.ext && rt.ext[z] && delete rt.ext[z],
                        rt.ext && rt.ext[it] && rt.ext[it].id && delete rt.ext[it].id,
                        xn && (v.if,
                        rt.ext = (0,
                        a.Ax)(rt.ext),
                        rt.baseData && (rt.baseData = (0,
                        a.Ax)(rt.baseData)),
                        rt.data && (rt.data = (0,
                        a.Ax)(rt.data))),
                        rt.sync) {
                            if (ct || ut)
                                rt.latency = 3,
                                rt.sync = !1;
                            else if (xt) {
                                xn && (rt = (0,
                                a.Ax)(rt)),
                                xt.sendSynchronousBatch(Ot.create(rt.iKey, [rt]), rt.sync === !0 ? 1 : rt.sync, 3);
                                return
                            }
                        }
                        var It = rt.latency
                          , on = Vn
                          , mn = qt;
                        It === 4 && (on = Wt,
                        mn = Kt);
                        var Wn = !1;
                        if (on < mn)
                            Wn = !ur(rt, wt);
                        else {
                            var ne = 1
                              , ie = Xe;
                            It === 4 && (ne = 4,
                            ie = 1),
                            Wn = !0,
                            Ir(rt.iKey, rt.latency, ne, ie) && (Wn = !ur(rt, wt))
                        }
                        Wn && pr(Ht, [rt], gt.QueueFull)
                    }
                    wn.setEventQueueLimits = function(rt, wt) {
                        qt = rt > 0 ? rt : 1e4,
                        _n = wt > 0 ? wt : 0,
                        jn();
                        var It = Vn > rt;
                        if (!It && Mn > 0)
                            for (var on = 1; !It && on <= 3; on++) {
                                var mn = nn[on];
                                mn && mn.batches && (0,
                                a.tO)(mn.batches, function(Wn) {
                                    Wn && Wn.count() >= Mn && (It = !0)
                                })
                            }
                        sr(!0, It)
                    }
                    ,
                    wn.pause = function() {
                        ze(),
                        ut = !0,
                        xt.pause()
                    }
                    ,
                    wn.resume = function() {
                        ut = !1,
                        xt.resume(),
                        ye()
                    }
                    ,
                    wn.addResponseHandler = function(rt) {
                        xt._responseHandlers.push(rt)
                    }
                    ,
                    wn._loadTransmitProfiles = function(rt) {
                        Fr(),
                        (0,
                        a.rW)(rt, function(wt, It) {
                            var on = It.length;
                            if (on >= 2) {
                                var mn = on > 2 ? It[2] : 0;
                                if (It.splice(0, on - 2),
                                It[1] < 0 && (It[0] = -1),
                                It[1] > 0 && It[0] > 0) {
                                    var Wn = It[0] / It[1];
                                    It[0] = Math.ceil(Wn) * It[1]
                                }
                                mn >= 0 && It[1] >= 0 && mn > It[1] && (mn = It[1]),
                                It.push(mn),
                                En[wt] = It
                            }
                        })
                    }
                    ,
                    wn.flush = function(rt, wt, It) {
                        if (rt === void 0 && (rt = !0),
                        !ut)
                            if (It = It || 1,
                            rt)
                                q == null ? (ze(),
                                tr(1, 0, It),
                                q = $e(function() {
                                    q = null,
                                    Dr(wt, It)
                                }, 0)) : j.push(wt);
                            else {
                                var on = ze();
                                Qe(1, 1, It),
                                wt != null && wt(),
                                on && ye()
                            }
                    }
                    ,
                    wn.setMsaAuthTicket = function(rt) {
                        xt.addHeader(R, rt)
                    }
                    ,
                    wn.hasEvents = qe,
                    wn._setTransmitProfile = function(rt) {
                        at !== rt && En[rt] !== void 0 && (ze(),
                        at = rt,
                        ye())
                    }
                    ;
                    function Qe(rt, wt, It) {
                        var on = tr(rt, wt, It);
                        return xt.sendQueuedRequests(wt, It),
                        on
                    }
                    function qe() {
                        return Vn > 0
                    }
                    function ye() {
                        if (Qt >= 0 && tr(Qt, 0, Ln) && xt.sendQueuedRequests(0, Ln),
                        Wt > 0 && !Y && !ut) {
                            var rt = En[at][2];
                            rt >= 0 && (Y = $e(function() {
                                Y = null,
                                Qe(4, 0, 1),
                                ye()
                            }, rt))
                        }
                        var wt = En[at][1];
                        !m && !q && wt >= 0 && !ut && (qe() ? m = $e(function() {
                            m = null,
                            Qe(vt === 0 ? 3 : 1, 0, 1),
                            vt++,
                            vt %= 2,
                            ye()
                        }, wt) : vt = 0)
                    }
                    wn._backOffTransmission = function() {
                        ct < rr && (ct++,
                        ze(),
                        ye())
                    }
                    ,
                    wn._clearBackOff = function() {
                        ct && (ct = 0,
                        ze(),
                        ye())
                    }
                    ;
                    function gr() {
                        I = null,
                        h = !1,
                        j = [],
                        q = null,
                        ut = !1,
                        Wt = 0,
                        Kt = 500,
                        Vn = 0,
                        qt = 1e4,
                        En = {},
                        at = Dt,
                        m = null,
                        Y = null,
                        ct = 0,
                        vt = 0,
                        zt = null,
                        nn = {},
                        _n = void 0,
                        Mn = 0,
                        Qt = -1,
                        Ln = null,
                        xn = !0,
                        tn = !1,
                        Rt = Ee,
                        Nt = ar,
                        Un = null,
                        fn = Oe(),
                        xt = new re(He,W,Ct,{
                            requeue: cr,
                            send: Bt,
                            sent: Zt,
                            drop: an,
                            rspFail: In,
                            oth: Hn
                        },fn),
                        Cr(),
                        or(),
                        jn()
                    }
                    function $e(rt, wt) {
                        wt === 0 && ct && (wt = 1);
                        var It = 1e3;
                        return ct && (It = Gn(ct - 1)),
                        fn.set(rt, wt * It)
                    }
                    function ze() {
                        return m !== null ? (fn.clear(m),
                        m = null,
                        vt = 0,
                        !0) : !1
                    }
                    function fe(rt, wt) {
                        ze(),
                        q && (fn.clear(q),
                        q = null),
                        ut || Qe(1, rt, wt)
                    }
                    function or() {
                        nn[4] = {
                            batches: [],
                            iKeyMap: {}
                        },
                        nn[3] = {
                            batches: [],
                            iKeyMap: {}
                        },
                        nn[2] = {
                            batches: [],
                            iKeyMap: {}
                        },
                        nn[1] = {
                            batches: [],
                            iKeyMap: {}
                        }
                    }
                    function Je(rt, wt, It) {
                        var on = nn[wt];
                        on || (wt = 1,
                        on = nn[wt]);
                        var mn = on.iKeyMap[rt];
                        return !mn && It && (mn = Ot.create(rt),
                        on.batches.push(mn),
                        on.iKeyMap[rt] = mn),
                        mn
                    }
                    function sr(rt, wt) {
                        xt.canSendRequest() && !ct && (_n > 0 && Vn > _n && (wt = !0),
                        wt && q == null && wn.flush(rt, null, 20))
                    }
                    function ur(rt, wt) {
                        xn && (rt = (0,
                        a.Ax)(rt));
                        var It = rt.latency
                          , on = Je(rt.iKey, It, !0);
                        return on.addEvent(rt) ? (It !== 4 ? (Vn++,
                        wt && rt.sendAttempt === 0 && sr(!rt.sync, Mn > 0 && on.count() >= Mn)) : Wt++,
                        !0) : !1
                    }
                    function Ir(rt, wt, It, on) {
                        for (; It <= wt; ) {
                            var mn = Je(rt, wt, !0);
                            if (mn && mn.count() > 0) {
                                var Wn = mn.split(0, on)
                                  , ne = Wn.count();
                                if (ne > 0)
                                    return It === 4 ? Wt -= ne : Vn -= ne,
                                    ot(Ht, [Wn], gt.QueueFull),
                                    !0
                            }
                            It++
                        }
                        return Pr(),
                        !1
                    }
                    function Pr() {
                        for (var rt = 0, wt = 0, It = function(mn) {
                            var Wn = nn[mn];
                            Wn && Wn.batches && (0,
                            a.tO)(Wn.batches, function(ne) {
                                mn === 4 ? rt += ne.count() : wt += ne.count()
                            })
                        }, on = 1; on <= 4; on++)
                            It(on);
                        Vn = wt,
                        Wt = rt
                    }
                    function tr(rt, wt, It) {
                        var on = !1
                          , mn = wt === 0;
                        return !mn || xt.canSendRequest() ? (0,
                        N.Lm)(wn.core, function() {
                            return "PostChannel._queueBatches"
                        }, function() {
                            for (var Wn = [], ne = 4; ne >= rt; ) {
                                var ie = nn[ne];
                                ie && ie.batches && ie.batches.length > 0 && ((0,
                                a.tO)(ie.batches, function(ge) {
                                    xt.addBatch(ge) ? on = on || ge && ge.count() > 0 : Wn = Wn.concat(ge.events()),
                                    ne === 4 ? Wt -= ge.count() : Vn -= ge.count()
                                }),
                                ie.batches = [],
                                ie.iKeyMap = {}),
                                ne--
                            }
                            Wn.length > 0 && pr(Ht, Wn, gt.KillSwitch),
                            on && Qt >= rt && (Qt = -1,
                            Ln = 0)
                        }, function() {
                            return {
                                latency: rt,
                                sendType: wt,
                                sendReason: It
                            }
                        }, !mn) : (Qt = Qt >= 0 ? Math.min(Qt, rt) : rt,
                        Ln = Math.max(Ln, It)),
                        on
                    }
                    function Dr(rt, wt) {
                        Qe(1, 0, wt),
                        Pr(),
                        Er(function() {
                            rt && rt(),
                            j.length > 0 ? q = $e(function() {
                                q = null,
                                Dr(j.shift(), wt)
                            }, 0) : (q = null,
                            ye())
                        })
                    }
                    function Er(rt) {
                        xt.isCompletelyIdle() ? rt() : q = $e(function() {
                            q = null,
                            Er(rt)
                        }, Ae)
                    }
                    function Fr() {
                        ze(),
                        Cr(),
                        at = Dt,
                        ye()
                    }
                    function Cr() {
                        En = {},
                        En[Dt] = [2, 1, 0],
                        En[St] = [6, 3, 0],
                        En[L] = [18, 9, 0]
                    }
                    function cr(rt, wt) {
                        var It = []
                          , on = Rt;
                        tn && (on = Nt),
                        (0,
                        a.tO)(rt, function(mn) {
                            mn && mn.count() > 0 && (0,
                            a.tO)(mn.events(), function(Wn) {
                                Wn && (Wn.sync && (Wn.latency = 4,
                                Wn.sync = !1),
                                Wn.sendAttempt < on ? ((0,
                                v.if)(Wn, wn.identifier),
                                Ke(Wn, !1)) : It.push(Wn))
                            })
                        }),
                        It.length > 0 && pr(Ht, It, gt.NonRetryableStatus),
                        tn && fe(2, 2)
                    }
                    function Be(rt, wt) {
                        var It = wn._notificationManager || {}
                          , on = It[rt];
                        if (on)
                            try {
                                on.apply(It, wt)
                            } catch (mn) {
                                (0,
                                ht.kP)(wn.diagLog(), 1, 74, rt + " notification failed: " + mn)
                            }
                    }
                    function pr(rt, wt) {
                        for (var It = [], on = 2; on < arguments.length; on++)
                            It[on - 2] = arguments[on];
                        wt && wt.length > 0 && Be(rt, [wt].concat(It))
                    }
                    function ot(rt, wt) {
                        for (var It = [], on = 2; on < arguments.length; on++)
                            It[on - 2] = arguments[on];
                        wt && wt.length > 0 && (0,
                        a.tO)(wt, function(mn) {
                            mn && mn.count() > 0 && Be(rt, [mn.events()].concat(It))
                        })
                    }
                    function Bt(rt, wt, It) {
                        rt && rt.length > 0 && Be("eventsSendRequest", [wt >= 1e3 && wt <= 1999 ? wt - 1e3 : 0, It !== !0])
                    }
                    function Zt(rt, wt) {
                        ot("eventsSent", rt, wt),
                        ye()
                    }
                    function an(rt, wt) {
                        ot(Ht, rt, wt >= 8e3 && wt <= 8999 ? wt - 8e3 : gt.Unknown)
                    }
                    function In(rt) {
                        ot(Ht, rt, gt.NonRetryableStatus),
                        ye()
                    }
                    function Hn(rt, wt) {
                        ot(Ht, rt, gt.Unknown),
                        ye()
                    }
                    function jn() {
                        !I || !I.disableAutoBatchFlushLimit ? Mn = Math.max(He * (W + 1), qt / 6) : Mn = 0
                    }
                    (0,
                    a.l_)(wn, "_setTimeoutOverride", function() {
                        return fn.set
                    }, function(rt) {
                        fn = Oe(rt, fn.clear)
                    }),
                    (0,
                    a.l_)(wn, "_clearTimeoutOverride", function() {
                        return fn.clear
                    }, function(rt) {
                        fn = Oe(fn.set, rt)
                    })
                }),
                w
            }
            return Tn.__ieDyn = 1,
            Tn
        }(yt.i);
        const Ne = Re
    }
    ,
    84691: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            Z: ()=>En
        });
        var C = A(43298), y = A(42314), N = A(51175), o = A(43161), T = A(31549), v = A(1785), a = "device", J = "locale", ft = "ver", gt = "browser", ht = "browserVer", yt = "popSample", Dt = "eventFlags", St = "name", L = "serviceName", V = "length", x = "sessionExpirationMs", _t = "sessionRenewalMs", H = "userAgent", g = "userAgentData", X = "namePrefix", bt = null, B = (0,
        v.cc)({
            UserExt: [0, "user"],
            DeviceExt: [1, a],
            TraceExt: [2, "trace"],
            WebExt: [3, "web"],
            AppExt: [4, "app"],
            OSExt: [5, "os"],
            SdkExt: [6, "sdk"],
            IntWebExt: [7, "intweb"],
            UtcExt: [8, "utc"],
            LocExt: [9, "loc"],
            CloudExt: [10, "cloud"],
            DtExt: [11, "dt"]
        }), Pt = (0,
        v.cc)({
            id: [0, "id"],
            ver: [1, ft],
            appName: [2, St],
            locale: [3, J],
            expId: [4, "expId"],
            env: [5, "env"]
        }), U = (0,
        v.cc)({
            domain: [0, "domain"],
            browser: [1, gt],
            browserVer: [2, ht],
            screenRes: [3, "screenRes"],
            userConsent: [4, "userConsent"],
            consentDetails: [5, "consentDetails"]
        }), F = (0,
        v.cc)({
            locale: [0, J],
            localId: [1, "localId"],
            id: [2, "id"]
        }), Et = (0,
        v.cc)({
            osName: [0, St],
            ver: [1, ft]
        }), P = (0,
        v.cc)({
            ver: [0, ft],
            seq: [1, "seq"],
            installId: [2, "installId"],
            epoch: [3, "epoch"]
        }), pt = (0,
        v.cc)({
            msfpc: [0, "msfpc"],
            anid: [1, "anid"],
            serviceName: [2, L]
        }), l = (0,
        v.cc)({
            popSample: [0, yt],
            eventFlags: [1, Dt]
        }), sn = (0,
        v.cc)({
            tz: [0, "tz"]
        }), b = (0,
        v.cc)({
            sessionId: [0, "sesId"]
        }), M = (0,
        v.cc)({
            localId: [0, "localId"],
            deviceClass: [1, "deviceClass"],
            make: [2, "make"],
            model: [3, "model"]
        }), D = (0,
        v.cc)({
            role: [0, "role"],
            roleInstance: [1, "roleInstance"],
            roleVer: [2, "roleVer"]
        }), K = (0,
        v.cc)({
            traceId: [0, "traceID"],
            traceName: [1, St],
            parentId: [2, "parentID"]
        }), tt = (0,
        v.cc)({
            traceId: [0, "traceId"],
            spanId: [1, "spanId"],
            traceFlags: [2, "traceFlags"]
        }), R = A(21579), Gt = A(94300), cn = A(98589), Yt = A(70395), st = A(28785), z;
        function it() {
            return z === void 0 && (z = !!$(0)),
            z
        }
        function k() {
            return it() ? $(0) : null
        }
        function $(at) {
            var m = null, Y, ct;
            try {
                var vt = (0,
                st.Rd)();
                if (!vt)
                    return null;
                ct = new Date,
                m = at === 0 ? vt.localStorage : vt.sessionStorage,
                m && (0,
                o.mf)(m.setItem) && (m.setItem(ct, ct),
                Y = m.getItem(ct) !== ct,
                m.removeItem(ct),
                Y && (m = null))
            } catch (zt) {
                m = null
            }
            return m
        }
        function Ot(at, m, Y) {
            var ct = k();
            if (ct !== null)
                try {
                    return ct.setItem(m, Y),
                    !0
                } catch (vt) {
                    z = !1,
                    (0,
                    Gt.kP)(at, 1, 504, "Browser failed write to local storage. " + vt)
                }
            return !1
        }
        function Ut(at, m) {
            var Y = k();
            if (Y !== null)
                try {
                    return Y.getItem(m)
                } catch (ct) {
                    z = !1,
                    (0,
                    Gt.kP)(at, 1, 503, "Browser failed read of local storage. " + ct)
                }
            return null
        }
        function Q() {
            return this.getId()
        }
        function Z(at) {
            this.setId(at)
        }
        var nt = function() {
            function at() {
                (0,
                y.Z)(at, this, function(m) {
                    m.setId = function(Y) {
                        m.customId = Y
                    }
                    ,
                    m.getId = function() {
                        return (0,
                        o.HD)(m.customId) ? m.customId : m.automaticId
                    }
                })
            }
            return at._staticInit = function() {
                (0,
                o.l_)(at.prototype, "id", Q, Z)
            }(),
            at
        }()
          , mt = "ai_session"
          , Lt = function() {
            function at(m, Y) {
                var ct, vt = (0,
                Gt.vH)(m), zt = (0,
                cn.JP)(m), xt;
                (0,
                y.Z)(at, this, function(nn) {
                    var _n = Mn(Y);
                    (0,
                    o.mf)(Y.sessionExpirationMs) || (_n.sessionExpirationMs = function() {
                        return at.acquisitionSpan
                    }
                    ),
                    (0,
                    o.mf)(Y.sessionRenewalMs) || (_n.sessionRenewalMs = function() {
                        return at.renewalSpan
                    }
                    ),
                    nn.config = _n,
                    xt = function() {
                        return nn.config.namePrefix && nn.config.namePrefix() ? mt + nn.config.namePrefix() : mt
                    }
                    ,
                    nn.automaticSession = new nt,
                    nn.update = function() {
                        nn.automaticSession.getId() || Qt();
                        var Nt = nn.automaticSession
                          , Un = nn.config
                          , fn = new Date().getTime()
                          , wn = fn - Nt.acquisitionDate > Un.sessionExpirationMs()
                          , qn = fn - Nt.renewalDate > Un.sessionRenewalMs();
                        if (wn || qn)
                            xn();
                        else {
                            var Ue = ct;
                            (!Ue || fn - Ue > at.cookieUpdateInterval) && (Nt.renewalDate = fn,
                            tn(Nt.getId(), Nt.acquisitionDate, Nt.renewalDate))
                        }
                    }
                    ,
                    nn.backup = function() {
                        var Nt = nn.automaticSession;
                        Rt(Nt.getId(), Nt.acquisitionDate, Nt.renewalDate)
                    }
                    ;
                    function Mn(Nt) {
                        return {
                            sessionRenewalMs: Nt.sessionRenewalMs && function() {
                                return Nt.sessionRenewalMs
                            }
                            ,
                            sessionExpirationMs: Nt.sessionExpirationMs && function() {
                                return Nt.sessionExpirationMs
                            }
                            ,
                            cookieDomain: Nt.cookieDomain && function() {
                                return Nt.cookieDomain
                            }
                            ,
                            namePrefix: Nt.namePrefix && function() {
                                return Nt.namePrefix
                            }
                            ,
                            sessionAsGuid: function() {
                                return Nt.sessionAsGuid
                            },
                            idLength: function() {
                                return Nt.idLength ? Nt.idLength : 22
                            }
                        }
                    }
                    function Qt() {
                        var Nt = zt.get(xt());
                        if (Nt && (0,
                        o.mf)(Nt.split))
                            Ln(Nt);
                        else {
                            var Un = Ut(vt, xt());
                            Un && Ln(Un)
                        }
                        nn.automaticSession.getId() || xn()
                    }
                    function Ln(Nt) {
                        var Un = nn.automaticSession
                          , fn = Nt.split("|");
                        fn.length > 0 && Un.setId(fn[0]);
                        try {
                            if (fn.length > 1) {
                                var wn = +fn[1];
                                Un.acquisitionDate = +new Date(wn),
                                Un.acquisitionDate = Un.acquisitionDate > 0 ? Un.acquisitionDate : 0
                            }
                            if (fn.length > 2) {
                                var qn = +fn[2];
                                Un.renewalDate = +new Date(qn),
                                Un.renewalDate = Un.renewalDate > 0 ? Un.renewalDate : 0
                            }
                        } catch (Ue) {
                            (0,
                            Gt.kP)(vt, 1, 510, "Error parsing ai_session cookie, session will be reset: " + Ue)
                        }
                        Un.renewalDate === 0 && (0,
                        Gt.kP)(vt, 2, 517, "AI session renewal date is 0, session will be reset.")
                    }
                    function xn() {
                        var Nt = nn.automaticSession
                          , Un = new Date().getTime()
                          , fn = nn.config.sessionAsGuid();
                        !(0,
                        o.o8)(fn) && fn ? (0,
                        o.jn)(fn) ? Nt.setId((0,
                        N.cm)()) : Nt.setId((0,
                        N.cm)(fn)) : Nt.setId((0,
                        Yt.pZ)(_n && _n.idLength ? _n.idLength() : 22)),
                        Nt.acquisitionDate = Un,
                        Nt.renewalDate = Un,
                        tn(Nt.getId(), Nt.acquisitionDate, Nt.renewalDate),
                        it() || (0,
                        Gt.kP)(vt, 2, 505, "Browser does not support local storage. Session durations will be inaccurate.")
                    }
                    function tn(Nt, Un, fn) {
                        var wn = Un + nn.config.sessionExpirationMs()
                          , qn = fn + nn.config.sessionRenewalMs()
                          , Ue = new Date
                          , We = [Nt, Un, fn];
                        wn < qn ? Ue.setTime(wn) : Ue.setTime(qn);
                        var ke = nn.config.cookieDomain ? nn.config.cookieDomain() : null;
                        zt.set(xt(), We.join("|") + ";expires=" + Ue.toUTCString(), null, ke),
                        ct = new Date().getTime()
                    }
                    function Rt(Nt, Un, fn) {
                        Ot(vt, xt(), [Nt, Un, fn].join("|"))
                    }
                })
            }
            return at.acquisitionSpan = 864e5,
            at.renewalSpan = 18e5,
            at.cookieUpdateInterval = 6e4,
            at
        }()
          , At = A(41167)
          , Sn = ["AX", "EX", "SF", "CS", "CF", "CT", "CU", "DC", "DF", "H5", "HL", "WS", "WP"];
        function Nn(at, m) {
            m === void 0 && (m = Sn);
            var Y = null;
            if (at)
                for (var ct = at.split(","), vt = 0; vt < ct.length; vt++)
                    $t(ct[vt], m) && (Y ? Y += "," + ct[vt] : Y = ct[vt]);
            return Y
        }
        function $t(at, m) {
            if (m === void 0 && (m = Sn),
            !at || at.length < 4)
                return !1;
            for (var Y = !1, ct = 256, vt = at.substring(0, 3).toString().toUpperCase(), zt = 0; zt < m.length; zt++)
                if (m[zt] + ":" === vt && at.length <= ct) {
                    Y = !0;
                    break
                }
            return Y
        }
        function f() {
            return this.getExpId()
        }
        var Gn = function() {
            function at(m, Y) {
                var ct = null
                  , vt = Sn.slice(0)
                  , zt = "Treatments"
                  , xt = (0,
                cn.JP)(Y)
                  , nn = m;
                (0,
                y.Z)(at, this, function(_n) {
                    if ((0,
                    At.Nv)()) {
                        var Mn = (0,
                        At.Me)().documentElement;
                        Mn && (_n.locale = Mn.lang)
                    }
                    _n.env = m.env ? m.env : Qt("awa-").env,
                    _n.getExpId = function() {
                        return nn.expId ? tn(nn.expId) : xn()
                    }
                    ;
                    function Qt(Rt) {
                        var Nt, Un = {}, fn = (0,
                        At.Me)();
                        if (fn) {
                            Nt = fn && fn.querySelectorAll("meta");
                            for (var wn = 0; wn < Nt.length; wn++) {
                                var qn = Nt[wn];
                                if (qn.name) {
                                    var Ue = qn.name.toLowerCase();
                                    if (Ue.indexOf(Rt) === 0) {
                                        var We = qn.name.replace(Rt, "");
                                        Un[We] = qn.content
                                    }
                                }
                            }
                        }
                        return Un
                    }
                    function Ln(Rt) {
                        Rt !== ct && (ct = Nn(Rt, vt))
                    }
                    function xn() {
                        var Rt = (0,
                        N.Do)(xt, zt);
                        return Ln(Rt),
                        ct
                    }
                    function tn(Rt) {
                        return Ln(Rt),
                        ct
                    }
                })
            }
            return at.validateAppExpId = Nn,
            at._staticInit = function() {
                (0,
                o.l_)(at.prototype, "expId", f)
            }(),
            at
        }()
          , Zn = function() {
            function at() {}
            return at
        }()
          , xe = function() {
            function at() {}
            return at
        }();
        function Le() {
            return this.getMsfpc()
        }
        function un() {
            return this.getAnid()
        }
        var Ie = function() {
            function at(m, Y) {
                var ct = (0,
                cn.JP)(Y);
                (0,
                y.Z)(at, this, function(vt) {
                    m.serviceName && (vt.serviceName = m.serviceName),
                    vt.getMsfpc = function() {
                        return (0,
                        N.Do)(ct, "MSFPC")
                    }
                    ,
                    vt.getAnid = function() {
                        return (0,
                        N.Do)(ct, "ANON").slice(0, 34)
                    }
                })
            }
            return at._staticInit = function() {
                var m = at.prototype;
                (0,
                o.l_)(m, "msfpc", Le),
                (0,
                o.l_)(m, "anid", un)
            }(),
            at
        }()
          , Vt = function() {
            function at() {
                var m = new Date().getTimezoneOffset()
                  , Y = m % 60
                  , ct = (m - Y) / 60
                  , vt = "+";
                ct > 0 && (vt = "-"),
                ct = Math.abs(ct),
                Y = Math.abs(Y),
                this.tz = vt + (ct < 10 ? "0" + ct : ct.toString()) + ":" + (Y < 10 ? "0" + Y : Y.toString())
            }
            return at
        }()
          , Yn = {
            WIN: /(windows|win32)/i,
            WINRT: / arm;/i,
            WINPHONE: /windows\sphone\s\d+\.\d+/i,
            OSX: /(macintosh|mac os x)/i,
            IOS: /(ipad|iphone|ipod)(?=.*like mac os x)/i,
            LINUX: /(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,
            ANDROID: /android/i,
            CROS: /CrOS/i
        }
          , be = {
            "5.1": "XP",
            "6.0": "Vista",
            "6.1": "7",
            "6.2": "8",
            "6.3": "8.1",
            "10.0": "10"
        }
          , he = "([\\d,.]+)"
          , Te = "([\\d,_,.]+)"
          , ue = "Unknown"
          , Se = [{
            r: Yn.WINPHONE,
            os: "Windows Phone"
        }, {
            r: Yn.WINRT,
            os: "Windows RT"
        }, {
            r: Yn.WIN,
            os: "Windows"
        }, {
            r: Yn.IOS,
            os: "iOS"
        }, {
            r: Yn.ANDROID,
            os: "Android"
        }, {
            r: Yn.LINUX,
            os: "Linux"
        }, {
            r: Yn.CROS,
            os: "Chrome OS"
        }, {
            s: "x11",
            os: "Unix"
        }, {
            s: "blackberry",
            os: "BlackBerry"
        }, {
            s: "symbian",
            os: "Symbian"
        }, {
            s: "nokia",
            os: "Nokia"
        }, {
            r: Yn.OSX,
            os: "Mac OS X"
        }];
        function ee(at) {
            for (var m = 0; m < Se.length; m++) {
                var Y = Se[m];
                if (Y.r && at.match(Y.r))
                    return Y.os;
                if (Y.s && at.indexOf(Y.s) !== -1)
                    return Y.os
            }
            return ue
        }
        function Jn(at, m) {
            return m === "Windows" ? we(at, "Windows NT") : m === "Android" ? we(at, m) : m === "Mac OS X" ? Fe(at) : m === "iOS" ? le(at) : ue
        }
        function we(at, m) {
            var Y = at.match(new RegExp(m + " " + he));
            return Y ? be[Y[1]] ? be[Y[1]] : Y[1] : ue
        }
        function Fe(at) {
            var m = at.match(new RegExp("Mac OS X " + Te));
            if (m) {
                var Y = m[1].replace(/_/g, ".");
                if (Y) {
                    var ct = Jt(Y);
                    if (ct) {
                        var vt = Y.split(ct);
                        return vt[0]
                    } else
                        return Y
                }
            }
            return ue
        }
        function le(at) {
            var m = at.match(new RegExp("OS " + Te));
            if (m) {
                var Y = m[1].replace(/_/g, ".");
                if (Y) {
                    var ct = Jt(Y);
                    if (ct) {
                        var vt = Y.split(ct);
                        return vt[0]
                    } else
                        return Y
                }
            }
            return ue
        }
        function Jt(at) {
            return at.indexOf(".") > -1 ? "." : at.indexOf("_") > -1 ? "_" : null
        }
        var Dn = function() {
            function at(m) {
                if (m.populateOperatingSystemInfo) {
                    var Y = this
                      , ct = (0,
                    At.jW)() || {}
                      , vt = m.userAgent || ct.userAgent || ""
                      , zt = m.userAgentData || ct.userAgentData || {};
                    if (vt) {
                        var xt = ee(vt.toLowerCase());
                        Y.name = xt,
                        Y.ver = Jn(vt, xt)
                    }
                    (!Y.name || Y.name === ue) && (0,
                    o.HD)(zt.platform) && (Y.name = zt.platform)
                }
            }
            return at
        }()
          , _ = A(40821)
          , bn = "MicrosoftApplicationsTelemetryDeviceId";
        function re(at, m, Y, ct) {
            m ? m.setProperty(Y, ct) : at.set(Y, ct, 31536e3)
        }
        function ve(at, m, Y) {
            return m ? m.getProperty(Y) || "" : (0,
            N.Do)(at, Y)
        }
        var _e = function() {
            function at(m, Y) {
                var ct = 0;
                (0,
                y.Z)(at, this, function(vt) {
                    var zt = m.propertyStorageOverride;
                    vt.seq = ct,
                    vt.epoch = (0,
                    Yt._l)(!1).toString();
                    var xt = (0,
                    cn.JP)(Y, m);
                    if (xt.isEnabled() || zt) {
                        var nn = ve(xt, zt, bn);
                        nn || (nn = (0,
                        _.GW)()),
                        re(xt, zt, bn, nn),
                        vt.installId = nn
                    } else
                        xt.purge(bn);
                    vt.getSequenceId = function() {
                        return ++ct
                    }
                })
            }
            return at.__ieDyn = 1,
            at
        }()
          , Oe = function() {
            function at(m, Y, ct, vt) {
                var zt = this;
                if (zt.traceId = Y || (0,
                _.DO)(),
                m.enableDistributedTracing && !ct && (ct = (0,
                _.DO)().substring(0, 16)),
                zt.parentId = ct,
                m.enableApplicationInsightsTrace) {
                    zt.name = vt;
                    var xt = (0,
                    At.k$)();
                    xt && xt.pathname && (zt.name = xt.pathname)
                }
            }
            return at
        }()
          , Ae = "setLocalId";
        function He() {
            return this.getLocalId()
        }
        function Xe(at) {
            this[Ae](at)
        }
        var Ee = function() {
            function at(m, Y, ct) {
                var vt = Y, zt, xt = (0,
                cn.JP)(ct, m);
                (0,
                y.Z)(at, this, function(nn) {
                    if (xt && xt.isEnabled() && (Rt(),
                    vt.enableApplicationInsightsUser)) {
                        var _n = (0,
                        N.Do)(xt, at.userCookieName);
                        if (_n) {
                            var Mn = _n.split(at.cookieSeparator);
                            Mn.length > 0 && (nn.id = Mn[0])
                        }
                        if (!nn.id) {
                            nn.id = (0,
                            Yt.pZ)(m && !(0,
                            o.o8)(m.idLength) ? m.idLength : 22);
                            var Qt = (0,
                            o.Y6)(new Date);
                            nn.accountAcquisitionDate = Qt;
                            var Ln = [nn.id, Qt]
                              , xn = vt.cookieDomain ? vt.cookieDomain : void 0;
                            xt.set(at.userCookieName, Ln.join(at.cookieSeparator), 31536e3, xn)
                        }
                    }
                    if (typeof navigator != "undefined") {
                        var tn = navigator;
                        nn.locale = tn.userLanguage || tn.language
                    }
                    nn.getLocalId = function() {
                        return zt || Rt()
                    }
                    ,
                    nn[Ae] = function(Nt) {
                        zt = Nt
                    }
                    ;
                    function Rt() {
                        if (!vt.hashIdentifiers && !vt.dropIdentifiers) {
                            var Nt = (0,
                            N.Do)(xt, "MUID");
                            Nt && (zt = "t:" + Nt)
                        }
                        return zt
                    }
                })
            }
            return at.cookieSeparator = "|",
            at.userCookieName = "ai_user",
            at._staticInit = function() {
                (0,
                o.l_)(at.prototype, "localId", He, Xe)
            }(),
            at
        }()
          , ar = 1048576
          , rr = 2097152
          , W = 4194304
          , Ct = function() {
            function at(m) {
                var Y = this;
                Y.popSample = 100,
                Y.eventFlags = 0,
                m.hashIdentifiers && (Y.eventFlags = Y.eventFlags | ar),
                m.dropIdentifiers && (Y.eventFlags = Y.eventFlags | rr)
            }
            return at
        }()
          , Ht = "([\\d,.]+)"
          , pn = "Unknown"
          , Pn = "Edg/"
          , An = [{
            ua: "OPR/",
            b: "Opera"
        }, {
            ua: "PhantomJS",
            b: "PhantomJS"
        }, {
            ua: "Edge",
            b: "Edge"
        }, {
            ua: Pn,
            b: "Edge"
        }, {
            ua: "Electron",
            b: "Electron"
        }, {
            ua: "Chrome",
            b: "Chrome"
        }, {
            ua: "Trident",
            b: "MSIE"
        }, {
            ua: "MSIE ",
            b: "MSIE"
        }, {
            ua: "Firefox",
            b: "Firefox"
        }, {
            ua: "Safari",
            b: "Safari"
        }, {
            ua: "SkypeShell",
            b: "SkypeShell"
        }]
          , $n = [{
            br: "Microsoft Edge",
            b: "Edge"
        }, {
            br: "Google Chrome",
            b: "Chrome"
        }, {
            br: "Opera",
            b: "Opera"
        }];
        function Re(at, m) {
            return m.indexOf(at) > -1
        }
        function Ne(at, m) {
            for (var Y = 0; Y < m.length; Y++)
                if (at == m[Y].brand)
                    return m[Y].version;
            return null
        }
        function vn(at) {
            if (at)
                for (var m = 0; m < An.length; m++) {
                    var Y = An[m].ua;
                    if (Re(Y, at))
                        return An[m].b
                }
            return pn
        }
        function Tn(at, m) {
            return m === "MSIE" ? w(at) : I(m, at)
        }
        function w(at) {
            var m = at.match(new RegExp("MSIE " + Ht));
            if (m)
                return m[1];
            var Y = at.match(new RegExp("rv:" + Ht));
            if (Y)
                return Y[1]
        }
        function I(at, m) {
            at === "Safari" ? at = "Version" : at === "Edge" && Re(Pn, m) && (at = "Edg");
            var Y = m.match(new RegExp(at + "/" + Ht));
            return Y || at === "Opera" && (Y = m.match(new RegExp("OPR/" + Ht)),
            Y) ? Y[1] : pn
        }
        function h() {
            var at = {
                h: 0,
                w: 0
            }
              , m = (0,
            At.Jj)();
            return m && m.screen && (at.h = screen.height,
            at.w = screen.width),
            at
        }
        function j() {
            return this.getUserConsent()
        }
        var q = function() {
            function at(m, Y) {
                var ct = (0,
                cn.JP)(Y)
                  , vt = m || {};
                (0,
                y.Z)(at, this, function(zt) {
                    var xt = (0,
                    At.k$)();
                    if (xt) {
                        var nn = xt.hostname;
                        nn && (zt.domain = xt.protocol === "file:" ? "local" : nn)
                    }
                    if (vt.populateBrowserInfo) {
                        var _n = vt.userAgent
                          , Mn = (vt.userAgentData || {}).brands
                          , Qt = (0,
                        At.jW)();
                        Qt && (_n = _n || Qt.userAgent || "",
                        Mn = Mn || (Qt.userAgentData || {}).brands),
                        xn(_n, Mn);
                        var Ln = h();
                        zt.screenRes = Ln.w + "X" + Ln.h
                    }
                    zt.getUserConsent = function() {
                        return vt.userConsented || !!(0,
                        N.Do)(ct, vt.userConsentCookieName || "MSCC")
                    }
                    ,
                    zt.getUserConsentDetails = function() {
                        try {
                            var tn = vt.callback;
                            if (tn && tn.userConsentDetails) {
                                var Rt = tn.userConsentDetails();
                                if (Rt)
                                    return JSON.stringify({
                                        Required: Rt.Required || !1,
                                        Analytics: Rt.Analytics || !1,
                                        SocialMedia: Rt.SocialMedia || !1,
                                        Advertising: Rt.Advertising || !1
                                    })
                            }
                        } catch (Nt) {}
                        return null
                    }
                    ;
                    function xn(tn, Rt) {
                        if ((0,
                        o.kJ)(Rt))
                            try {
                                for (var Nt = 0; Nt < $n.length; Nt++) {
                                    var Un = Ne($n[Nt].br, Rt);
                                    if (Un) {
                                        zt.browser = $n[Nt].b,
                                        zt.browserVer = Un;
                                        return
                                    }
                                }
                            } catch (wn) {}
                        if (tn) {
                            var fn = vn(tn);
                            zt.browser = fn,
                            zt.browserVer = Tn(tn, fn)
                        }
                    }
                    (0,
                    o.l_)(zt, "userConsent", zt.getUserConsent)
                })
            }
            return at._staticInit = function() {
                (0,
                o.l_)(at.prototype, "userConsent", j)
            }(),
            at
        }();
        function ut(at, m, Y, ct, vt) {
            var zt = m.ext[B[at]];
            return zt && (0,
            o.rW)(ct, function(xt, nn) {
                if ((0,
                o.HD)(nn) || (0,
                o.hj)(nn) || (0,
                o.jn)(nn)) {
                    var _n = zt[Y[xt]];
                    !vt && (_n || (0,
                    o.HD)(_n) || (0,
                    o.hj)(_n) || (0,
                    o.jn)(_n)) && (nn = _n),
                    zt[Y[xt]] = nn
                }
            }),
            zt
        }
        var Wt = function() {
            function at(m, Y, ct) {
                (0,
                y.Z)(at, this, function(vt) {
                    vt.app = new Gn(Y,ct),
                    vt.cloud = new Zn,
                    vt.user = new Ee(m,Y,ct),
                    vt.os = new Dn(Y),
                    vt.web = new q(Y,ct);
                    var zt = new _e(m,ct)
                      , xt = new Ie(Y,ct)
                      , nn = new Ct(Y);
                    vt.loc = new Vt,
                    vt.device = new xe;
                    var _n = new Lt(ct,Y);
                    vt.session = new nt;
                    var Mn = Kt(new Oe(Y), xn())
                      , Qt = !(Y || {}).eventContainExtFields;
                    function Ln() {
                        var tn = vt.session;
                        if (tn && (0,
                        o.HD)(tn.customId))
                            return tn.customId;
                        _n.update();
                        var Rt = _n.automaticSession;
                        if (Rt) {
                            var Nt = Rt.getId();
                            Nt && (0,
                            o.HD)(Nt) && (tn.automaticId = Nt)
                        }
                        return tn.automaticId
                    }
                    vt.getTraceCtx = function() {
                        return Mn
                    }
                    ,
                    vt.getSessionId = Ln,
                    vt.applyApplicationContext = function(tn) {
                        var Rt, Nt = vt.app;
                        ut(4, tn, Pt, (Rt = {},
                        Rt[0] = Nt.id,
                        Rt[1] = Nt.ver,
                        Rt[2] = Nt.name,
                        Rt[3] = Nt.locale,
                        Rt[4] = Nt.getExpId(),
                        Rt[5] = Nt.env,
                        Rt), Qt)
                    }
                    ,
                    vt.applyUserContext = function(tn) {
                        var Rt, Nt = vt.user;
                        ut(0, tn, F, (Rt = {},
                        Rt[1] = Nt.getLocalId(),
                        Rt[0] = Nt.locale,
                        Rt[2] = Nt.id,
                        Rt), Qt)
                    }
                    ,
                    vt.applyWebContext = function(tn) {
                        var Rt, Nt = vt.web;
                        ut(3, tn, U, (Rt = {},
                        Rt[0] = Nt.domain,
                        Rt[1] = Nt.browser,
                        Rt[2] = Nt.browserVer,
                        Rt[3] = Nt.screenRes,
                        Rt[5] = Nt.getUserConsentDetails(),
                        Rt[4] = Nt.getUserConsent(),
                        Rt), Qt)
                    }
                    ,
                    vt.applyOsContext = function(tn) {
                        var Rt, Nt = vt.os;
                        ut(5, tn, Et, (Rt = {},
                        Rt[0] = Nt.name,
                        Rt[1] = Nt.ver,
                        Rt), Qt)
                    }
                    ,
                    vt.applySdkContext = function(tn) {
                        var Rt, Nt = ut(6, tn, P, (Rt = {},
                        Rt[2] = zt.installId,
                        Rt[1] = zt.getSequenceId(),
                        Rt[3] = zt.epoch,
                        Rt), Qt)
                    }
                    ,
                    vt.applyIntWebContext = function(tn) {
                        var Rt;
                        ut(7, tn, pt, (Rt = {},
                        Rt[0] = xt.getMsfpc(),
                        Rt[1] = xt.getAnid(),
                        Rt[2] = xt.serviceName,
                        Rt), Qt)
                    }
                    ,
                    vt.applyUtcContext = function(tn) {
                        var Rt, Nt = (Rt = {},
                        Rt[0] = nn.popSample,
                        Rt);
                        nn.eventFlags > 0 && (Nt[1] = nn.eventFlags),
                        ut(8, tn, l, Nt, Qt)
                    }
                    ,
                    vt.applyLocContext = function(tn) {
                        var Rt;
                        ut(9, tn, sn, (Rt = {},
                        Rt[0] = vt.loc.tz,
                        Rt), Qt)
                    }
                    ,
                    vt.applySessionContext = function(tn) {
                        var Rt;
                        ut(4, tn, b, (Rt = {},
                        Rt[0] = Ln(),
                        Rt), Qt)
                    }
                    ,
                    vt.applyDeviceContext = function(tn) {
                        var Rt, Nt = vt.device;
                        ut(1, tn, M, (Rt = {},
                        Rt[0] = Nt.localId,
                        Rt[2] = Nt.make,
                        Rt[3] = Nt.model,
                        Rt[1] = Nt.deviceClass,
                        Rt), Qt)
                    }
                    ,
                    vt.applyCloudContext = function(tn) {
                        var Rt, Nt = vt.cloud;
                        ut(10, tn, D, (Rt = {},
                        Rt[0] = Nt.role,
                        Rt[1] = Nt.roleInstance,
                        Rt[2] = Nt.roleVer,
                        Rt), Qt)
                    }
                    ,
                    vt.applyAITraceContext = function(tn) {
                        var Rt;
                        if (Y.enableApplicationInsightsTrace) {
                            var Nt = xn();
                            Nt && ut(2, tn, K, (Rt = {},
                            Rt[0] = Nt.getTraceId(),
                            Rt[1] = Nt.getName(),
                            Rt[2] = Nt.getSpanId(),
                            Rt), !1)
                        }
                    }
                    ,
                    vt.applyDistributedTraceContext = function(tn) {
                        var Rt, Nt = xn();
                        if (Nt) {
                            var Un = (Rt = {},
                            Rt[0] = Nt.getTraceId(),
                            Rt[1] = Nt.getSpanId(),
                            Rt)
                              , fn = Nt.getTraceFlags();
                            (0,
                            o.le)(fn) || (Un[2] = fn),
                            ut(11, tn, tt, Un, !1)
                        }
                    }
                    ;
                    function xn() {
                        var tn = Mn;
                        return ct && ct.getTraceCtx && (tn = ct.getTraceCtx(!1) || Mn),
                        tn
                    }
                })
            }
            return at.__ieDyn = 1,
            at
        }();
        function Kt(at, m) {
            var Y = at || {};
            return {
                getName: function() {
                    return Y.name
                },
                setName: function(ct) {
                    m && m.setName(ct),
                    Y.name = ct
                },
                getTraceId: function() {
                    return Y.traceId
                },
                setTraceId: function(ct) {
                    m && m.setTraceId(ct),
                    (0,
                    R.jN)(ct) && (Y.traceId = ct)
                },
                getSpanId: function() {
                    return Y.parentId
                },
                setSpanId: function(ct) {
                    m && m.setSpanId(ct),
                    (0,
                    R.Lc)(ct) && (Y.parentId = ct)
                },
                getTraceFlags: function() {
                    return Y.traceFlags
                },
                setTraceFlags: function(ct) {
                    m && m.setTraceFlags(ct),
                    Y.traceFlags = ct
                }
            }
        }
        var Vn = [B[4], B[0], B[3], B[5], B[6], B[7], B[8], B[9], B[1], B[2], B[11], B[10]]
          , qt = function(at) {
            (0,
            C.ne)(m, at);
            function m() {
                var Y = at.call(this) || this;
                Y.identifier = "SystemPropertiesCollector",
                Y.priority = 3,
                Y.version = "3.2.9";
                var ct, vt, zt;
                return (0,
                y.Z)(m, Y, function(xt, nn) {
                    _n(),
                    xt.initialize = function(Qt, Ln, xn) {
                        nn.initialize(Qt, Ln, xn),
                        zt = xt._getTelCtx().getExtCfg(xt.identifier),
                        ct = new Wt(Qt,zt,Ln),
                        Ln && Ln.setTraceCtx && Ln.setTraceCtx(ct.getTraceCtx())
                    }
                    ,
                    xt.processTelemetry = function(Qt, Ln) {
                        (0,
                        N.if)(Qt, xt.identifier),
                        Ln = xt._getTelCtx(Ln);
                        var xn = Qt.ext = Qt.ext ? Qt.ext : {};
                        Qt.data = Qt.data ? Qt.data : {},
                        (0,
                        o.tO)(Vn, function(tn) {
                            xn[tn] = xn[tn] || {}
                        }),
                        ct && (ct.applyApplicationContext(Qt),
                        ct.applyUserContext(Qt),
                        ct.applyWebContext(Qt),
                        ct.applyOsContext(Qt),
                        ct.applySdkContext(Qt),
                        ct.applyIntWebContext(Qt),
                        ct.applyUtcContext(Qt),
                        ct.applyLocContext(Qt),
                        ct.applySessionContext(Qt),
                        ct.applyDeviceContext(Qt),
                        zt.enableApplicationInsightsTrace && ct.applyAITraceContext(Qt),
                        zt.enableDistributedTracing && ct.applyDistributedTraceContext(Qt),
                        ct.applyCloudContext(Qt)),
                        (0,
                        o.tO)((0,
                        o.FY)(xn), function(tn) {
                            (0,
                            o.FY)(xn[tn]).length === 0 && delete xn[tn]
                        }),
                        Mn(vt, Qt.data),
                        xt.processNext(Qt, Ln)
                    }
                    ,
                    xt.getPropertiesContext = function() {
                        return ct
                    }
                    ,
                    xt.setProperty = function(Qt, Ln) {
                        vt[Qt] = Ln
                    }
                    ,
                    xt._doTeardown = function(Qt, Ln) {
                        var xn = (Qt || {}).core();
                        if (xn && xn.getTraceCtx && ct) {
                            var tn = xn.getTraceCtx(!1);
                            tn && tn === ct.getTraceCtx() && xn.setTraceCtx(null)
                        }
                        _n()
                    }
                    ;
                    function _n() {
                        ct = null,
                        vt = {}
                    }
                    function Mn(Qt, Ln) {
                        Qt && (0,
                        o.rW)(Qt, function(xn, tn) {
                            Ln[xn] || (Ln[xn] = tn)
                        })
                    }
                }),
                Y
            }
            return m.__ieDyn = 1,
            m
        }(T.i);
        const En = qt
    }
    ,
    1785: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            By: ()=>y,
            cc: ()=>o
        });
        var C = A(43161);
        function y(T) {
            var v = {};
            return (0,
            C.rW)(T, function(a, J) {
                v[a] = J,
                v[J] = a
            }),
            (0,
            C._A)(v)
        }
        function N(T) {
            var v = {};
            return objForEachKey(T, function(a, J) {
                v[a] = a,
                v[J] = a
            }),
            deepFreeze(v)
        }
        function o(T) {
            var v = {};
            return (0,
            C.rW)(T, function(a, J) {
                v[a] = J[1],
                v[J[0]] = J[1]
            }),
            (0,
            C._A)(v)
        }
    }
    ,
    31549: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            i: ()=>J
        });
        var C = A(42314)
          , y = A(86474)
          , N = A(43161)
          , o = A(59556)
          , T = A(80877)
          , v = A(66930)
          , a = "getPlugin"
          , J = function() {
            function ft() {
                var gt = this, ht, yt, Dt, St, L;
                _t(),
                (0,
                C.Z)(ft, gt, function(H) {
                    H[y.VL] = function(g, X, bt, B) {
                        x(g, X, B),
                        ht = !0
                    }
                    ,
                    H[y.fi] = function(g, X) {
                        var bt, B = H[o.oV];
                        if (!B || g && B !== g[o.oV]())
                            return;
                        var Pt, U = !1, F = g || (0,
                        T.Bt)(null, B, Dt && Dt[a] ? Dt[a]() : Dt), Et = X || (bt = {
                            reason: 0
                        },
                        bt[y.d] = !1,
                        bt);
                        function P() {
                            if (!U) {
                                U = !0,
                                St.run(F, X);
                                var pt = L;
                                L = [],
                                (0,
                                N.tO)(pt, function(l) {
                                    l.rm()
                                }),
                                Pt === !0 && F[y.uL](Et),
                                _t()
                            }
                        }
                        return !H[y.F3] || H[y.F3](F, Et, P) !== !0 ? P() : Pt = !0,
                        Pt
                    }
                    ,
                    H[y.Tu] = function(g, X) {
                        var bt = H[o.oV];
                        if (!bt || g && bt !== g[o.oV]())
                            return;
                        var B, Pt = !1, U = g || (0,
                        T.xy)(null, bt, Dt && Dt[a] ? Dt[a]() : Dt), F = X || {
                            reason: 0
                        };
                        function Et() {
                            Pt || (Pt = !0,
                            x(U.getCfg(), U.core(), U[y.W2]()))
                        }
                        return !H._doUpdate || H._doUpdate(U, F, Et) !== !0 ? Et() : B = !0,
                        B
                    }
                    ,
                    H._addHook = function(g) {
                        g && ((0,
                        N.kJ)(g) ? L = L.concat(g) : L[y.MW](g))
                    }
                    ,
                    (0,
                    N.Oi)(H, "_addUnloadCb", function() {
                        return St
                    }, "add")
                }),
                gt[y.mc] = function(H) {
                    return V(H)[y.mc]()
                }
                ,
                gt[y.yl] = function() {
                    return ht
                }
                ,
                gt.setInitialized = function(H) {
                    ht = H
                }
                ,
                gt[y.Jd] = function(H) {
                    Dt = H
                }
                ,
                gt[y.uL] = function(H, g) {
                    g ? g[y.uL](H) : Dt && (0,
                    N.mf)(Dt[o.hL]) && Dt[o.hL](H, null)
                }
                ,
                gt._getTelCtx = V;
                function V(H) {
                    H === void 0 && (H = null);
                    var g = H;
                    if (!g) {
                        var X = yt || (0,
                        T.CD)(null, {}, gt[o.oV]);
                        Dt && Dt[a] ? g = X[y.zV](null, Dt[a]) : g = X[y.zV](null, Dt)
                    }
                    return g
                }
                function x(H, g, X) {
                    H && (0,
                    N.sO)(H, o.Zh, [], null, N.le),
                    !X && g && (X = g[y.SD]()[y.W2]());
                    var bt = Dt;
                    Dt && Dt[a] && (bt = Dt[a]()),
                    gt[o.oV] = g,
                    yt = (0,
                    T.CD)(X, H, g, bt)
                }
                function _t() {
                    ht = !1,
                    gt[o.oV] = null,
                    yt = null,
                    Dt = null,
                    L = [],
                    St = (0,
                    v.Y)()
                }
            }
            return ft.__ieDyn = 1,
            ft
        }()
    }
    ,
    98589: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            JP: ()=>U,
            Nz: ()=>F,
            UY: ()=>M,
            kj: ()=>g,
            p7: ()=>Et
        });
        var C = A(86474)
          , y = A(94300)
          , N = A(41167)
          , o = A(43161)
          , T = A(59556)
          , v = "toGMTString"
          , a = "toUTCString"
          , J = "cookie"
          , ft = "expires"
          , gt = "enabled"
          , ht = "isCookieUseDisabled"
          , yt = "disableCookiesUsage"
          , Dt = "_ckMgr"
          , St = null
          , L = null
          , V = null
          , x = (0,
        N.Me)()
          , _t = {}
          , H = {};
        function g(D, K) {
            var tt = F[Dt] || H[Dt];
            return tt || (tt = F[Dt] = F(D, K),
            H[Dt] = tt),
            tt
        }
        function X(D) {
            return D ? D.isEnabled() : !0
        }
        function bt(D) {
            var K = D[C.Lk] = D[C.Lk] || {};
            if ((0,
            o.sO)(K, "domain", D.cookieDomain, o.BX, o.le),
            (0,
            o.sO)(K, "path", D.cookiePath || "/", null, o.le),
            (0,
            o.le)(K[gt])) {
                var tt = void 0;
                (0,
                o.o8)(D[ht]) || (tt = !D[ht]),
                (0,
                o.o8)(D[yt]) || (tt = !D[yt]),
                K[gt] = tt
            }
            return K
        }
        function B(D, K) {
            return K && D && (0,
            o.kJ)(D.ignoreCookies) ? D.ignoreCookies[C.ou](K) !== -1 : !1
        }
        function Pt(D, K) {
            return K && D && (0,
            o.kJ)(D.blockedCookies) && D.blockedCookies[C.ou](K) !== -1 ? !0 : B(D, K)
        }
        function U(D, K) {
            var tt;
            if (D)
                tt = D.getCookieMgr();
            else if (K) {
                var R = K[C.Lk];
                R[Dt] ? tt = R[Dt] : tt = F(K)
            }
            return tt || (tt = g(K, (D || {})[C.eZ])),
            tt
        }
        function F(D, K) {
            var tt, R = bt(D || H), Gt = R.path || "/", cn = R.domain, Yt = R[gt] !== !1, st = (tt = {
                isEnabled: function() {
                    var z = Yt && Et(K)
                      , it = H[Dt];
                    return z && it && st !== it && (z = X(it)),
                    z
                }
            },
            tt[C.$h] = function(z) {
                Yt = z !== !1
            }
            ,
            tt.set = function(z, it, k, $, Ot) {
                var Ut = !1;
                if (X(st) && !Pt(R, z)) {
                    var Q = {}
                      , Z = (0,
                    o.nd)(it || T.qS)
                      , nt = Z[C.ou](";");
                    if (nt !== -1 && (Z = (0,
                    o.nd)(it[C.zc](0, nt)),
                    Q = P(it[C.zc](nt + 1))),
                    (0,
                    o.sO)(Q, "domain", $ || cn, o.fQ, o.o8),
                    !(0,
                    o.le)(k)) {
                        var mt = (0,
                        N.w1)();
                        if ((0,
                        o.o8)(Q[ft])) {
                            var Lt = (0,
                            o.m6)()
                              , At = Lt + k * 1e3;
                            if (At > 0) {
                                var Sn = new Date;
                                Sn.setTime(At),
                                (0,
                                o.sO)(Q, ft, pt(Sn, mt ? v : a) || pt(Sn, mt ? v : a) || T.qS, o.fQ)
                            }
                        }
                        mt || (0,
                        o.sO)(Q, "max-age", T.qS + k, null, o.o8)
                    }
                    var Nn = (0,
                    N.k$)();
                    Nn && Nn.protocol === "https:" && ((0,
                    o.sO)(Q, "secure", null, null, o.o8),
                    L === null && (L = !M(((0,
                    N.jW)() || {})[C.qV])),
                    L && (0,
                    o.sO)(Q, "SameSite", "None", null, o.o8)),
                    (0,
                    o.sO)(Q, "path", Ot || Gt, null, o.o8);
                    var $t = R.setCookie || b;
                    $t(z, l(Z, Q)),
                    Ut = !0
                }
                return Ut
            }
            ,
            tt.get = function(z) {
                var it = T.qS;
                return X(st) && !B(R, z) && (it = (R.getCookie || sn)(z)),
                it
            }
            ,
            tt.del = function(z, it) {
                var k = !1;
                return X(st) && (k = st.purge(z, it)),
                k
            }
            ,
            tt.purge = function(z, it) {
                var k, $ = !1;
                if (Et(K)) {
                    var Ot = (k = {},
                    k.path = it || "/",
                    k[ft] = "Thu, 01 Jan 1970 00:00:01 GMT",
                    k);
                    (0,
                    N.w1)() || (Ot["max-age"] = "0");
                    var Ut = R.delCookie || b;
                    Ut(z, l(T.qS, Ot)),
                    $ = !0
                }
                return $
            }
            ,
            tt);
            return st[Dt] = st,
            st
        }
        function Et(D) {
            if (St === null) {
                St = !1;
                try {
                    var K = x || {};
                    St = K[J] !== void 0
                } catch (tt) {
                    (0,
                    y.kP)(D, 2, 68, "Cannot access document.cookie - " + (0,
                    o.jj)(tt), {
                        exception: (0,
                        N.eU)(tt)
                    })
                }
            }
            return St
        }
        function P(D) {
            var K = {};
            if (D && D[C.R5]) {
                var tt = (0,
                o.nd)(D)[C.w6](";");
                (0,
                o.tO)(tt, function(R) {
                    if (R = (0,
                    o.nd)(R || T.qS),
                    R) {
                        var Gt = R[C.ou]("=");
                        Gt === -1 ? K[R] = null : K[(0,
                        o.nd)(R[C.zc](0, Gt))] = (0,
                        o.nd)(R[C.zc](Gt + 1))
                    }
                })
            }
            return K
        }
        function pt(D, K) {
            return (0,
            o.mf)(D[K]) ? D[K]() : null
        }
        function l(D, K) {
            var tt = D || T.qS;
            return (0,
            o.rW)(K, function(R, Gt) {
                tt += "; " + R + ((0,
                o.le)(Gt) ? T.qS : "=" + Gt)
            }),
            tt
        }
        function sn(D) {
            var K = T.qS;
            if (x) {
                var tt = x[J] || T.qS;
                V !== tt && (_t = P(tt),
                V = tt),
                K = (0,
                o.nd)(_t[D] || T.qS)
            }
            return K
        }
        function b(D, K) {
            x && (x[J] = D + "=" + K)
        }
        function M(D) {
            return (0,
            o.HD)(D) ? !!((0,
            o._Q)(D, "CPU iPhone OS 12") || (0,
            o._Q)(D, "iPad; CPU OS 12") || (0,
            o._Q)(D, "Macintosh; Intel Mac OS X 10_14") && (0,
            o._Q)(D, "Version/") && (0,
            o._Q)(D, "Safari") || (0,
            o._Q)(D, "Macintosh; Intel Mac OS X 10_14") && (0,
            o.Id)(D, "AppleWebKit/605.1.15 (KHTML, like Gecko)") || (0,
            o._Q)(D, "Chrome/5") || (0,
            o._Q)(D, "Chrome/6") || (0,
            o._Q)(D, "UnrealEngine") && !(0,
            o._Q)(D, "Chrome") || (0,
            o._Q)(D, "UCBrowser/12") || (0,
            o._Q)(D, "UCBrowser/11")) : !1
        }
    }
    ,
    40821: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            DO: ()=>L,
            GW: ()=>yt,
            Jj: ()=>Dt,
            d8: ()=>B,
            ej: ()=>bt,
            kT: ()=>Pt,
            oF: ()=>g,
            vn: ()=>X
        });
        var C = A(28785), y = A(86474), N = A(98589), o = A(41167), T = A(51318), v = A(43161), a = A(59556), J = A(70395), ft = null, gt, ht = null;
        function yt() {
            var U = L();
            return U[y.zc](0, 8) + "-" + U[y.zc](8, 12) + "-" + U[y.zc](12, 16) + "-" + U[y.zc](16, 20) + "-" + U[y.zc](20)
        }
        function Dt() {
            var U = (0,
            o.r)();
            return U && U.now ? U.now() : (0,
            v.m6)()
        }
        function St(U, F) {
            if (U && F) {
                var Et = U[_DYN_LENGTH]
                  , P = Et - F[_DYN_LENGTH];
                return U[_DYN_SUBSTRING](P >= 0 ? P : 0, Et) === F
            }
            return !1
        }
        function L() {
            for (var U = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], F = a.qS, Et, P = 0; P < 4; P++)
                Et = (0,
                J._l)(),
                F += U[Et & 15] + U[Et >> 4 & 15] + U[Et >> 8 & 15] + U[Et >> 12 & 15] + U[Et >> 16 & 15] + U[Et >> 20 & 15] + U[Et >> 24 & 15] + U[Et >> 28 & 15];
            var pt = U[8 + ((0,
            J._l)() & 3) | 0];
            return F[y.Jn](0, 8) + F[y.Jn](9, 4) + "4" + F[y.Jn](13, 3) + pt + F[y.Jn](16, 3) + F[y.Jn](19, 12)
        }
        var V = {
            _canUseCookies: void 0,
            isTypeof: v.Ym,
            isUndefined: v.o8,
            isNullOrUndefined: v.le,
            hasOwnProperty: v.nr,
            isFunction: v.mf,
            isObject: v.Kn,
            isDate: v.J_,
            isArray: v.kJ,
            isError: v.VZ,
            isString: v.HD,
            isNumber: v.hj,
            isBoolean: v.jn,
            toISOString: v.Y6,
            arrForEach: v.tO,
            arrIndexOf: v.UA,
            arrMap: v.Mr,
            arrReduce: v.Xz,
            strTrim: v.nd,
            objCreate: C.pu,
            objKeys: v.FY,
            objDefineAccessors: v.l_,
            addEventHandler: T.Ib,
            dateNow: v.m6,
            isIE: o.w1,
            disableCookies: g,
            newGuid: yt,
            perfNow: Dt,
            newId: J.pZ,
            randomValue: J.az,
            random32: J._l,
            mwcRandomSeed: J.CN,
            mwcRandom32: J.F6,
            generateW3CId: L
        }
          , x = /[xy]/g
          , _t = {
            Attach: T.pZ,
            AttachEvent: T.pZ,
            Detach: T.pD,
            DetachEvent: T.pD
        };
        function H(U, F) {
            var Et = (0,
            N.kj)(U, F)
              , P = V._canUseCookies;
            return ft === null && (ft = [],
            gt = P,
            (0,
            v.l_)(V, "_canUseCookies", function() {
                return gt
            }, function(pt) {
                gt = pt,
                (0,
                v.tO)(ft, function(l) {
                    l[y.$h](pt)
                })
            })),
            (0,
            v.UA)(ft, Et) === -1 && ft[y.MW](Et),
            (0,
            v.jn)(P) && Et[y.$h](P),
            (0,
            v.jn)(gt) && Et[y.$h](gt),
            Et
        }
        function g() {
            H()[y.$h](!1)
        }
        function X(U) {
            return H(null, U).isEnabled()
        }
        function bt(U, F) {
            return H(null, U).get(F)
        }
        function B(U, F, Et, P) {
            H(null, U).set(F, Et, null, P)
        }
        function Pt(U, F) {
            return H(null, U).del(F)
        }
    }
    ,
    98530: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            J: ()=>Dt,
            K: ()=>St
        });
        var C = A(32589)
          , y = A(86474)
          , N = A(43161)
          , o = A(59556)
          , T = A(70395)
          , v = C.RJ
          , a = "2.8.10"
          , J = "." + (0,
        T.pZ)(6)
          , ft = 0;
        function gt(L, V, x) {
            if (v)
                try {
                    return v(L, V, {
                        value: x,
                        enumerable: !1,
                        configurable: !0
                    }),
                    !0
                } catch (_t) {}
            return !1
        }
        function ht(L) {
            return L[y.xv] === 1 || L[y.xv] === 9 || !+L[y.xv]
        }
        function yt(L, V) {
            var x = V[L.id];
            if (!x) {
                x = {};
                try {
                    ht(V) && (gt(V, L.id, x) || (V[L.id] = x))
                } catch (_t) {}
            }
            return x
        }
        function Dt(L, V) {
            return V === void 0 && (V = !1),
            (0,
            N.Gf)(L + ft++ + (V ? "." + a : o.qS) + J)
        }
        function St(L) {
            var V = {
                id: Dt("_aiData-" + (L || o.qS) + "." + a),
                accept: function(x) {
                    return ht(x)
                },
                get: function(x, _t, H, g) {
                    var X = x[V.id];
                    return X ? X[(0,
                    N.Gf)(_t)] : (g && (X = yt(V, x),
                    X[(0,
                    N.Gf)(_t)] = H),
                    H)
                },
                kill: function(x, _t) {
                    if (x && x[_t])
                        try {
                            delete x[_t]
                        } catch (H) {}
                }
            };
            return V
        }
    }
    ,
    57485: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            j: ()=>J,
            p: ()=>ft
        });
        var C = A(86474), y = A(41167), N = ["eventsSent", "eventsDiscarded", "eventsSendRequest", "perfEvent"], o = null, T;
        function v(gt, ht) {
            return function() {
                var yt = arguments
                  , Dt = J(ht);
                if (Dt) {
                    var St = Dt.listener;
                    St && St[gt] && St[gt][C.ZV](St, yt)
                }
            }
        }
        function a() {
            var gt = (0,
            y.a8)("Microsoft");
            return gt && (o = gt.ApplicationInsights),
            o
        }
        function J(gt) {
            var ht = o;
            return !ht && gt.disableDbgExt !== !0 && (ht = o || a()),
            ht ? ht.ChromeDbgExt : null
        }
        function ft(gt) {
            if (!T) {
                T = {};
                for (var ht = 0; ht < N[C.R5]; ht++)
                    T[N[ht]] = v(N[ht], gt)
            }
            return T
        }
    }
    ,
    94300: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            AQ: ()=>St,
            jV: ()=>x,
            kP: ()=>V,
            lQ: ()=>yt,
            vH: ()=>Dt
        });
        var C = A(42314)
          , y = A(86474)
          , N = A(57485)
          , o = A(41167)
          , T = A(43161)
          , v = A(59556)
          , a = "AI (Internal): "
          , J = "AI: "
          , ft = "AITR_";
        function gt(H) {
            return H ? '"' + H[y.i7](/\"/g, v.qS) + '"' : v.qS
        }
        function ht(H, g) {
            var X = (0,
            o.dr)();
            if (X) {
                var bt = "log";
                X[H] && (bt = H),
                (0,
                T.mf)(X[bt]) && X[bt](g)
            }
        }
        var yt = function() {
            function H(g, X, bt, B) {
                bt === void 0 && (bt = !1);
                var Pt = this;
                Pt[y.Gc] = g,
                Pt[y.gU] = (bt ? J : a) + g;
                var U = v.qS;
                (0,
                o.nS)() && (U = (0,
                o.xA)().stringify(B));
                var F = (X ? " message:" + gt(X) : v.qS) + (B ? " props:" + gt(U) : v.qS);
                Pt[y.gU] += F
            }
            return H.dataType = "MessageData",
            H
        }();
        function Dt(H, g) {
            return (H || {})[y.eZ] || new St(g)
        }
        var St = function() {
            function H(g) {
                this.identifier = "DiagnosticLogger",
                this.queue = [];
                var X = 0, bt = {}, B, Pt, U, F;
                (0,
                C.Z)(H, this, function(Et) {
                    pt(g || {}),
                    Et.consoleLoggingLevel = function() {
                        return B
                    }
                    ,
                    Et.telemetryLoggingLevel = function() {
                        return Pt
                    }
                    ,
                    Et.maxInternalMessageLimit = function() {
                        return U
                    }
                    ,
                    Et[y.Fr] = function() {
                        return F
                    }
                    ,
                    Et.throwInternal = function(b, M, D, K, tt) {
                        tt === void 0 && (tt = !1);
                        var R = new yt(M,D,tt,K);
                        if (F)
                            throw (0,
                            o.eU)(R);
                        var Gt = b === 1 ? v.ys : v.cL;
                        if ((0,
                        T.o8)(R[y.gU]))
                            sn("throw" + (b === 1 ? "Critical" : "Warning"), R);
                        else {
                            if (tt) {
                                var cn = +R[y.Gc];
                                !bt[cn] && B >= b && (Et[Gt](R[y.gU]),
                                bt[cn] = !0)
                            } else
                                B >= b && Et[Gt](R[y.gU]);
                            P(b, R)
                        }
                    }
                    ,
                    Et[v.cL] = function(b) {
                        ht("warn", b),
                        sn("warning", b)
                    }
                    ,
                    Et[v.ys] = function(b) {
                        ht("error", b),
                        sn("error", b)
                    }
                    ,
                    Et.resetInternalMessageCount = function() {
                        X = 0,
                        bt = {}
                    }
                    ,
                    Et[y.jk] = P;
                    function P(b, M) {
                        if (!l()) {
                            var D = !0
                              , K = ft + M[y.Gc];
                            if (bt[K] ? D = !1 : bt[K] = !0,
                            D && (b <= Pt && (Et.queue[y.MW](M),
                            X++,
                            sn(b === 1 ? "error" : "warn", M)),
                            X === U)) {
                                var tt = "Internal events throttle limit per PageView reached for this app."
                                  , R = new yt(23,tt,!1);
                                Et.queue[y.MW](R),
                                b === 1 ? Et[v.ys](tt) : Et[v.cL](tt)
                            }
                        }
                    }
                    function pt(b) {
                        B = (0,
                        T.v4)(b.loggingLevelConsole, 0),
                        Pt = (0,
                        T.v4)(b.loggingLevelTelemetry, 1),
                        U = (0,
                        T.v4)(b.maxMessageLimit, 25),
                        F = (0,
                        T.v4)(b[y.Fr], !1)
                    }
                    function l() {
                        return X >= U
                    }
                    function sn(b, M) {
                        var D = (0,
                        N.j)(g || {});
                        D && D[y.mc] && D[y.mc](b, M)
                    }
                })
            }
            return H.__ieDyn = 1,
            H
        }();
        function L(H) {
            return H || new St
        }
        function V(H, g, X, bt, B, Pt) {
            Pt === void 0 && (Pt = !1),
            L(H).throwInternal(g, X, bt, B, Pt)
        }
        function x(H, g) {
            L(H)[v.cL](g)
        }
        function _t(H, g, X) {
            L(H)[_DYN_LOG_INTERNAL_MESSAGE](g, X)
        }
    }
    ,
    41167: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            JO: ()=>nt,
            Jj: ()=>l,
            MF: ()=>Z,
            MX: ()=>z,
            Me: ()=>b,
            Nv: ()=>sn,
            Ym: ()=>pt,
            Z3: ()=>Lt,
            a8: ()=>P,
            b$: ()=>k,
            cp: ()=>mt,
            dr: ()=>Gt,
            eU: ()=>Ut,
            fE: ()=>K,
            gz: ()=>it,
            jW: ()=>D,
            k$: ()=>R,
            nS: ()=>Yt,
            r: ()=>cn,
            s1: ()=>tt,
            sA: ()=>Ot,
            w1: ()=>$,
            xA: ()=>st
        });
        var C = A(32589)
          , y = A(28785)
          , N = A(86474)
          , o = A(43161)
          , T = A(59556)
          , v = "window"
          , a = "document"
          , J = "documentMode"
          , ft = "navigator"
          , gt = "history"
          , ht = "location"
          , yt = "console"
          , Dt = "performance"
          , St = "JSON"
          , L = "crypto"
          , V = "msCrypto"
          , x = "ReactNative"
          , _t = "msie"
          , H = "trident/"
          , g = "XMLHttpRequest"
          , X = null
          , bt = null
          , B = !1
          , Pt = null
          , U = null;
        function F($t, f) {
            var Gn = !1;
            if ($t) {
                try {
                    if (Gn = f in $t,
                    !Gn) {
                        var Zn = $t[C.hB];
                        Zn && (Gn = f in Zn)
                    }
                } catch (Le) {}
                if (!Gn)
                    try {
                        var xe = new $t;
                        Gn = !(0,
                        o.o8)(xe[f])
                    } catch (Le) {}
            }
            return Gn
        }
        function Et($t) {
            B = $t
        }
        function P($t) {
            var f = (0,
            y.Rd)();
            return f && f[$t] ? f[$t] : $t === v && pt() ? window : null
        }
        function pt() {
            return Boolean(typeof window === C.fK && window)
        }
        function l() {
            return pt() ? window : P(v)
        }
        function sn() {
            return Boolean(typeof document === C.fK && document)
        }
        function b() {
            return sn() ? document : P(a)
        }
        function M() {
            return Boolean(typeof navigator === C.fK && navigator)
        }
        function D() {
            return M() ? navigator : P(ft)
        }
        function K() {
            return Boolean(typeof history === C.fK && history)
        }
        function tt() {
            return K() ? history : P(gt)
        }
        function R($t) {
            if ($t && B) {
                var f = P("__mockLocation");
                if (f)
                    return f
            }
            return typeof location === C.fK && location ? location : P(ht)
        }
        function Gt() {
            return typeof console !== C.jA ? console : P(yt)
        }
        function cn() {
            return P(Dt)
        }
        function Yt() {
            return Boolean(typeof JSON === C.fK && JSON || P(St) !== null)
        }
        function st() {
            return Yt() ? JSON || P(St) : null
        }
        function z() {
            return P(L)
        }
        function it() {
            return P(V)
        }
        function k() {
            var $t = D();
            return $t && $t.product ? $t.product === x : !1
        }
        function $() {
            var $t = D();
            if ($t && ($t[N.qV] !== bt || X === null)) {
                bt = $t[N.qV];
                var f = (bt || T.qS)[N.T1]();
                X = (0,
                o._Q)(f, _t) || (0,
                o._Q)(f, H)
            }
            return X
        }
        function Ot($t) {
            if ($t === void 0 && ($t = null),
            !$t) {
                var f = D() || {};
                $t = f ? (f[N.qV] || T.qS)[N.T1]() : T.qS
            }
            var Gn = ($t || T.qS)[N.T1]();
            if ((0,
            o._Q)(Gn, _t)) {
                var Zn = b() || {};
                return Math.max(parseInt(Gn[N.w6](_t)[1]), Zn[J] || 0)
            } else if ((0,
            o._Q)(Gn, H)) {
                var xe = parseInt(Gn[N.w6](H)[1]);
                if (xe)
                    return xe + 4
            }
            return null
        }
        function Ut($t) {
            var f = Object[C.hB].toString[N._S]($t)
              , Gn = T.qS;
            return f === "[object Error]" ? Gn = "{ stack: '" + $t.stack + "', message: '" + $t.message + "', name: '" + $t[N.I] + "'" : Yt() && (Gn = st().stringify($t)),
            f + Gn
        }
        function Q($t) {
            if (!$t || !isString($t)) {
                var f = D() || {};
                $t = f ? (f[_DYN_USER_AGENT] || STR_EMPTY)[_DYN_TO_LOWER_CASE]() : STR_EMPTY
            }
            var Gn = ($t || STR_EMPTY)[_DYN_TO_LOWER_CASE]();
            return Gn[_DYN_INDEX_OF]("safari") >= 0
        }
        function Z() {
            return U === null && (U = M() && Boolean(D().sendBeacon)),
            U
        }
        function nt($t) {
            var f = !1;
            try {
                f = !!P("fetch");
                var Gn = P("Request");
                f && $t && Gn && (f = F(Gn, "keepalive"))
            } catch (Zn) {}
            return f
        }
        function mt() {
            return Pt === null && (Pt = typeof XDomainRequest !== C.jA,
            Pt && Lt() && (Pt = Pt && !F(P(g), "withCredentials"))),
            Pt
        }
        function Lt() {
            var $t = !1;
            try {
                var f = P(g);
                $t = !!f
            } catch (Gn) {}
            return $t
        }
        function At($t, f) {
            if ($t)
                for (var Gn = 0; Gn < $t[_DYN_LENGTH]; Gn++) {
                    var Zn = $t[Gn];
                    if (Zn[_DYN_NAME] && Zn[_DYN_NAME] === f)
                        return Zn
                }
            return {}
        }
        function Sn($t) {
            var f = b();
            return f && $t ? At(f.querySelectorAll("meta"), $t).content : null
        }
        function Nn($t) {
            var f, Gn = cn();
            if (Gn) {
                var Zn = Gn.getEntriesByType("navigation") || [];
                f = At((Zn[_DYN_LENGTH] > 0 ? Zn[0] : {}).serverTiming, $t).description
            }
            return f
        }
    }
    ,
    51318: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            C9: ()=>$,
            Ib: ()=>R,
            JA: ()=>it,
            QY: ()=>D,
            TJ: ()=>k,
            XO: ()=>M,
            Yl: ()=>Ut,
            c9: ()=>z,
            jU: ()=>b,
            nD: ()=>Ot,
            pD: ()=>tt,
            pZ: ()=>K
        });
        var C = A(86474)
          , y = A(98530)
          , N = A(41167)
          , o = A(43161)
          , T = A(59556)
          , v = "on"
          , a = "attachEvent"
          , J = "addEventListener"
          , ft = "detachEvent"
          , gt = "removeEventListener"
          , ht = "events"
          , yt = "visibilitychange"
          , Dt = "pagehide"
          , St = "pageshow"
          , L = "unload"
          , V = "beforeunload"
          , x = (0,
        y.J)("aiEvtPageHide")
          , _t = (0,
        y.J)("aiEvtPageShow")
          , H = /\.[\.]+/g
          , g = /[\.]+$/
          , X = 1
          , bt = (0,
        y.K)("events")
          , B = /^([^.]*)(?:\.(.+)|)/;
        function Pt(Q) {
            return Q && Q[C.i7] ? Q[C.i7](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g, T.qS) : Q
        }
        function U(Q, Z) {
            var nt;
            if (Z) {
                var mt = T.qS;
                (0,
                o.kJ)(Z) ? (mt = T.qS,
                (0,
                o.tO)(Z, function(At) {
                    At = Pt(At),
                    At && (At[0] !== "." && (At = "." + At),
                    mt += At)
                })) : mt = Pt(Z),
                mt && (mt[0] !== "." && (mt = "." + mt),
                Q = (Q || T.qS) + mt)
            }
            var Lt = B.exec(Q || T.qS) || [];
            return nt = {},
            nt[C.P6] = Lt[1],
            nt.ns = (Lt[2] || T.qS).replace(H, ".").replace(g, T.qS)[C.w6](".").sort().join("."),
            nt
        }
        function F(Q, Z, nt) {
            var mt = []
              , Lt = bt.get(Q, ht, {}, !1)
              , At = U(Z, nt);
            return objForEachKey(Lt, function(Sn, Nn) {
                arrForEach(Nn, function($t) {
                    var f;
                    (!At[_DYN_TYPE] || At[_DYN_TYPE] === $t.evtName[_DYN_TYPE]) && (!At.ns || At.ns === At.ns) && mt[_DYN_PUSH]((f = {},
                    f[_DYN_NAME] = $t.evtName[_DYN_TYPE] + ($t.evtName.ns ? "." + $t.evtName.ns : STR_EMPTY),
                    f.handler = $t[_DYN_HANDLER],
                    f))
                })
            }),
            mt
        }
        function Et(Q, Z, nt) {
            nt === void 0 && (nt = !0);
            var mt = bt.get(Q, ht, {}, nt)
              , Lt = mt[Z];
            return Lt || (Lt = mt[Z] = []),
            Lt
        }
        function P(Q, Z, nt, mt) {
            Q && Z && Z[C.P6] && (Q[gt] ? Q[gt](Z[C.P6], nt, mt) : Q[ft] && Q[ft](v + Z[C.P6], nt))
        }
        function pt(Q, Z, nt, mt) {
            var Lt = !1;
            return Q && Z && Z[C.P6] && nt && (Q[J] ? (Q[J](Z[C.P6], nt, mt),
            Lt = !0) : Q[a] && (Q[a](v + Z[C.P6], nt),
            Lt = !0)),
            Lt
        }
        function l(Q, Z, nt, mt) {
            for (var Lt = Z[C.R5]; Lt--; ) {
                var At = Z[Lt];
                At && (!nt.ns || nt.ns === At.evtName.ns) && (!mt || mt(At)) && (P(Q, At.evtName, At[C.Kn], At.capture),
                Z[C.cb](Lt, 1))
            }
        }
        function sn(Q, Z, nt) {
            if (Z[C.P6])
                l(Q, Et(Q, Z[C.P6]), Z, nt);
            else {
                var mt = bt.get(Q, ht, {});
                (0,
                o.rW)(mt, function(Lt, At) {
                    l(Q, At, Z, nt)
                }),
                (0,
                o.FY)(mt)[C.R5] === 0 && bt.kill(Q, ht)
            }
        }
        function b(Q, Z) {
            var nt;
            return Z ? ((0,
            o.kJ)(Z) ? nt = [Q].concat(Z) : nt = [Q, Z],
            nt = U("xx", nt).ns[C.w6](".")) : nt = Q,
            nt
        }
        function M(Q, Z, nt, mt, Lt) {
            var At;
            Lt === void 0 && (Lt = !1);
            var Sn = !1;
            if (Q)
                try {
                    var Nn = U(Z, mt);
                    if (Sn = pt(Q, Nn, nt, Lt),
                    Sn && bt.accept(Q)) {
                        var $t = (At = {
                            guid: X++,
                            evtName: Nn
                        },
                        At[C.Kn] = nt,
                        At.capture = Lt,
                        At);
                        Et(Q, Nn.type)[C.MW]($t)
                    }
                } catch (f) {}
            return Sn
        }
        function D(Q, Z, nt, mt, Lt) {
            if (Lt === void 0 && (Lt = !1),
            Q)
                try {
                    var At = U(Z, mt)
                      , Sn = !1;
                    sn(Q, At, function(Nn) {
                        return At.ns && !nt || Nn[C.Kn] === nt ? (Sn = !0,
                        !0) : !1
                    }),
                    Sn || P(Q, At, nt, Lt)
                } catch (Nn) {}
        }
        function K(Q, Z, nt, mt) {
            return mt === void 0 && (mt = !1),
            M(Q, Z, nt, null, mt)
        }
        function tt(Q, Z, nt, mt) {
            mt === void 0 && (mt = !1),
            D(Q, Z, nt, null, mt)
        }
        function R(Q, Z, nt) {
            var mt = !1
              , Lt = (0,
            N.Jj)();
            Lt && (mt = M(Lt, Q, Z, nt),
            mt = M(Lt.body, Q, Z, nt) || mt);
            var At = (0,
            N.Me)();
            return At && (mt = M(At, Q, Z, nt) || mt),
            mt
        }
        function Gt(Q, Z, nt) {
            var mt = (0,
            N.Jj)();
            mt && (D(mt, Q, Z, nt),
            D(mt.body, Q, Z, nt));
            var Lt = (0,
            N.Me)();
            Lt && D(Lt, Q, Z, nt)
        }
        function cn(Q, Z, nt, mt) {
            var Lt = !1;
            return Z && Q && Q[C.R5] > 0 && (0,
            o.tO)(Q, function(At) {
                At && (!nt || (0,
                o.UA)(nt, At) === -1) && (Lt = R(At, Z, mt) || Lt)
            }),
            Lt
        }
        function Yt(Q, Z, nt, mt) {
            var Lt = !1;
            return Z && Q && (0,
            o.kJ)(Q) && (Lt = cn(Q, Z, nt, mt),
            !Lt && nt && nt[C.R5] > 0 && (Lt = cn(Q, Z, null, mt))),
            Lt
        }
        function st(Q, Z, nt) {
            Q && (0,
            o.kJ)(Q) && (0,
            o.tO)(Q, function(mt) {
                mt && Gt(mt, Z, nt)
            })
        }
        function z(Q, Z, nt) {
            return Yt([V, L, Dt], Q, Z, nt)
        }
        function it(Q, Z) {
            st([V, L, Dt], Q, Z)
        }
        function k(Q, Z, nt) {
            function mt(Sn) {
                var Nn = (0,
                N.Me)();
                Q && Nn && Nn.visibilityState === "hidden" && Q(Sn)
            }
            var Lt = b(x, nt)
              , At = cn([Dt], Q, Z, Lt);
            return (!Z || (0,
            o.UA)(Z, yt) === -1) && (At = cn([yt], mt, Z, Lt) || At),
            !At && Z && (At = k(Q, null, nt)),
            At
        }
        function $(Q, Z) {
            var nt = b(x, Z);
            st([Dt], Q, nt),
            st([yt], null, nt)
        }
        function Ot(Q, Z, nt) {
            function mt(Sn) {
                var Nn = (0,
                N.Me)();
                Q && Nn && Nn.visibilityState === "visible" && Q(Sn)
            }
            var Lt = b(_t, nt)
              , At = cn([St], Q, Z, Lt);
            return At = cn([yt], mt, Z, Lt) || At,
            !At && Z && (At = Ot(Q, null, nt)),
            At
        }
        function Ut(Q, Z) {
            var nt = b(_t, Z);
            st([St], Q, nt),
            st([yt], null, nt)
        }
    }
    ,
    43161: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            Ax: ()=>ar,
            BX: ()=>cn,
            FL: ()=>we,
            FY: ()=>ue,
            Gf: ()=>k,
            HD: ()=>Nn,
            Hb: ()=>M,
            Id: ()=>Ot,
            J_: ()=>mt,
            Kn: ()=>st,
            Mr: ()=>Vt,
            Oi: ()=>He,
            UA: ()=>Ie,
            VZ: ()=>Sn,
            Vb: ()=>Xe,
            Xz: ()=>Yn,
            Y6: ()=>xe,
            Ym: ()=>K,
            _A: ()=>Jn,
            _Q: ()=>nt,
            _y: ()=>_e,
            cf: ()=>Ae,
            fQ: ()=>ve,
            hj: ()=>$t,
            jj: ()=>Jt,
            jn: ()=>f,
            kJ: ()=>Lt,
            l_: ()=>Se,
            le: ()=>Gt,
            m6: ()=>le,
            mf: ()=>z,
            mm: ()=>rr,
            nd: ()=>be,
            nr: ()=>Yt,
            o8: ()=>tt,
            qK: ()=>_,
            rW: ()=>$,
            sO: ()=>Dn,
            tO: ()=>un,
            v4: ()=>bn,
            xe: ()=>Q
        });
        var C = A(32589)
          , y = A(28785)
          , N = A(86474)
          , o = A(59556)
          , T = "toISOString"
          , v = "endsWith"
          , a = "startsWith"
          , J = "indexOf"
          , ft = "map"
          , gt = "reduce"
          , ht = "trim"
          , yt = "toString"
          , Dt = "__proto__"
          , St = "constructor"
          , L = C.RJ
          , V = C.Pw.freeze
          , x = C.Pw.seal
          , _t = C.Pw.keys
          , H = String[C.hB]
          , g = H[ht]
          , X = H[v]
          , bt = H[a]
          , B = Date[C.hB]
          , Pt = B[T]
          , U = Array.isArray
          , F = C.V4[yt]
          , Et = C.CY[yt]
          , P = Et[N._S](C.Pw)
          , pt = /-([a-z])/g
          , l = /([^\w\d_$])/g
          , sn = /^(\d+[\w\d_$])/
          , b = Object.getPrototypeOf;
        function M(W) {
            if (W) {
                if (b)
                    return b(W);
                var Ct = W[Dt] || W[C.hB] || W[St];
                if (Ct)
                    return Ct
            }
            return null
        }
        function D(W) {
            return F[_DYN_CALL](W)
        }
        function K(W, Ct) {
            return typeof W === Ct
        }
        function tt(W) {
            return W === void 0 || typeof W === C.jA
        }
        function R(W) {
            return !tt(W)
        }
        function Gt(W) {
            return W === null || tt(W)
        }
        function cn(W) {
            return !Gt(W)
        }
        function Yt(W, Ct) {
            return !!(W && C.CY[N._S](W, Ct))
        }
        function st(W) {
            return !!(W && typeof W === C.fK)
        }
        function z(W) {
            return !!(W && typeof W === C.cb)
        }
        function it(W) {
            return W && z(W.then)
        }
        function k(W) {
            var Ct = W;
            return Ct && Nn(Ct) && (Ct = Ct[N.i7](pt, function(Ht, pn) {
                return pn.toUpperCase()
            }),
            Ct = Ct[N.i7](l, "_"),
            Ct = Ct[N.i7](sn, function(Ht, pn) {
                return "_" + pn
            })),
            Ct
        }
        function $(W, Ct) {
            if (W)
                for (var Ht in W)
                    C.CY[N._S](W, Ht) && Ct[N._S](W, Ht, W[Ht])
        }
        function Ot(W, Ct) {
            var Ht = !1;
            return W && Ct && !(Ht = W === Ct) && (Ht = X ? W[v](Ct) : Ut(W, Ct)),
            Ht
        }
        function Ut(W, Ct) {
            var Ht = !1
              , pn = Ct ? Ct[N.R5] : 0
              , Pn = W ? W[N.R5] : 0;
            if (pn && Pn && Pn >= pn && !(Ht = W === Ct)) {
                for (var An = Pn - 1, $n = pn - 1; $n >= 0; $n--) {
                    if (W[An] != Ct[$n])
                        return !1;
                    An--
                }
                Ht = !0
            }
            return Ht
        }
        function Q(W, Ct) {
            var Ht = !1;
            return W && Ct && !(Ht = W === Ct) && (Ht = bt ? W[a](Ct) : Z(W, Ct)),
            Ht
        }
        function Z(W, Ct) {
            var Ht = !1
              , pn = Ct ? Ct[N.R5] : 0;
            if (W && pn && W[N.R5] >= pn && !(Ht = W === Ct)) {
                for (var Pn = 0; Pn < pn; Pn++)
                    if (W[Pn] !== Ct[Pn])
                        return !1;
                Ht = !0
            }
            return Ht
        }
        function nt(W, Ct) {
            return W && Ct ? W[N.ou](Ct) !== -1 : !1
        }
        function mt(W) {
            return !!(W && F[N._S](W) === "[object Date]")
        }
        var Lt = U || At;
        function At(W) {
            return !!(W && F[N._S](W) === "[object Array]")
        }
        function Sn(W) {
            return !!(W && F[N._S](W) === "[object Error]")
        }
        function Nn(W) {
            return typeof W == "string"
        }
        function $t(W) {
            return typeof W == "number"
        }
        function f(W) {
            return typeof W == "boolean"
        }
        function Gn(W) {
            return typeof W == "symbol"
        }
        function Zn(W) {
            var Ct = !1;
            if (W && typeof W == "object") {
                var Ht = b ? b(W) : M(W);
                Ht ? (Ht[St] && C.CY[N._S](Ht, St) && (Ht = Ht[St]),
                Ct = typeof Ht === C.cb && Et[N._S](Ht) === P) : Ct = !0
            }
            return Ct
        }
        function xe(W) {
            if (W)
                return Pt ? W[T]() : Le(W)
        }
        function Le(W) {
            if (W && W.getUTCFullYear) {
                var Ct = function(Ht) {
                    var pn = String(Ht);
                    return pn[N.R5] === 1 && (pn = "0" + pn),
                    pn
                };
                return W.getUTCFullYear() + "-" + Ct(W.getUTCMonth() + 1) + "-" + Ct(W.getUTCDate()) + "T" + Ct(W.getUTCHours()) + ":" + Ct(W.getUTCMinutes()) + ":" + Ct(W.getUTCSeconds()) + "." + String((W.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
            }
        }
        function un(W, Ct, Ht) {
            var pn = W[N.R5];
            try {
                for (var Pn = 0; Pn < pn && !(Pn in W && Ct[N._S](Ht || W, W[Pn], Pn, W) === -1); Pn++)
                    ;
            } catch (An) {}
        }
        function Ie(W, Ct, Ht) {
            if (W) {
                if (W[J])
                    return W[J](Ct, Ht);
                var pn = W[N.R5]
                  , Pn = Ht || 0;
                try {
                    for (var An = Math.max(Pn >= 0 ? Pn : pn - Math.abs(Pn), 0); An < pn; An++)
                        if (An in W && W[An] === Ct)
                            return An
                } catch ($n) {}
            }
            return -1
        }
        function Vt(W, Ct, Ht) {
            var pn;
            if (W) {
                if (W[ft])
                    return W[ft](Ct, Ht);
                var Pn = W[N.R5]
                  , An = Ht || W;
                pn = new Array(Pn);
                try {
                    for (var $n = 0; $n < Pn; $n++)
                        $n in W && (pn[$n] = Ct[N._S](An, W[$n], W))
                } catch (Re) {}
            }
            return pn
        }
        function Yn(W, Ct, Ht) {
            var pn;
            if (W) {
                if (W[gt])
                    return W[gt](Ct, Ht);
                var Pn = W[N.R5]
                  , An = 0;
                if (arguments[N.R5] >= 3)
                    pn = arguments[2];
                else {
                    for (; An < Pn && !(An in W); )
                        An++;
                    pn = W[An++]
                }
                for (; An < Pn; )
                    An in W && (pn = Ct(pn, W[An], An, W)),
                    An++
            }
            return pn
        }
        function be(W) {
            return W && (W = g && W[ht] ? W[ht]() : W[N.i7] ? W[N.i7](/^\s+|(?=\s)\s+$/g, o.qS) : W),
            W
        }
        var he = !{
            toString: null
        }.propertyIsEnumerable("toString")
          , Te = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
        function ue(W) {
            var Ct = typeof W;
            if (Ct !== C.cb && (Ct !== C.fK || W === null) && (0,
            y.ZU)("objKeys called on non-object"),
            !he && _t)
                return _t(W);
            var Ht = [];
            for (var pn in W)
                W && C.CY[N._S](W, pn) && Ht[N.MW](pn);
            if (he)
                for (var Pn = Te[N.R5], An = 0; An < Pn; An++)
                    W && C.CY[N._S](W, Te[An]) && Ht[N.MW](Te[An]);
            return Ht
        }
        function Se(W, Ct, Ht, pn) {
            if (L)
                try {
                    var Pn = {
                        enumerable: !0,
                        configurable: !0
                    };
                    return Ht && (Pn.get = Ht),
                    pn && (Pn.set = pn),
                    L(W, Ct, Pn),
                    !0
                } catch (An) {}
            return !1
        }
        function ee(W) {
            return W
        }
        function Jn(W) {
            return V && $(W, function(Ct, Ht) {
                (Lt(Ht) || st(Ht)) && V(Ht)
            }),
            we(W)
        }
        var we = V || ee
          , Fe = x || ee;
        function le() {
            var W = Date;
            return W.now ? W.now() : new W().getTime()
        }
        function Jt(W) {
            return Sn(W) ? W[N.I] : o.qS
        }
        function Dn(W, Ct, Ht, pn, Pn) {
            var An = Ht;
            return W && (An = W[Ct],
            An !== Ht && (!Pn || Pn(An)) && (!pn || pn(Ht)) && (An = Ht,
            W[Ct] = An)),
            An
        }
        function _(W, Ct, Ht) {
            var pn;
            return W ? (pn = W[Ct],
            !pn && Gt(pn) && (pn = tt(Ht) ? {} : Ht,
            W[Ct] = pn)) : pn = tt(Ht) ? {} : Ht,
            pn
        }
        function bn(W, Ct) {
            return Gt(W) ? Ct : W
        }
        function re(W) {
            return !W
        }
        function ve(W) {
            return !!W
        }
        function _e(W) {
            throw new Error(W)
        }
        function Oe(W, Ct) {
            var Ht = null
              , pn = null;
            return z(W) ? Ht = W : pn = W,
            function() {
                var Pn = arguments;
                if (Ht && (pn = Ht()),
                pn)
                    return pn[Ct][N.ZV](pn, Pn)
            }
        }
        function Ae(W, Ct, Ht) {
            if (W && Ct && st(W) && st(Ct)) {
                var pn = function(An) {
                    if (Nn(An)) {
                        var $n = Ct[An];
                        z($n) ? (!Ht || Ht(An, !0, Ct, W)) && (W[An] = Oe(Ct, An)) : (!Ht || Ht(An, !1, Ct, W)) && (Yt(W, An) && delete W[An],
                        Se(W, An, function() {
                            return Ct[An]
                        }, function(Re) {
                            Ct[An] = Re
                        }) || (W[An] = $n))
                    }
                };
                for (var Pn in Ct)
                    pn(Pn)
            }
            return W
        }
        function He(W, Ct, Ht, pn, Pn) {
            W && Ct && Ht && (Pn !== !1 || tt(W[Ct])) && (W[Ct] = Oe(Ht, pn))
        }
        function Xe(W, Ct, Ht, pn) {
            return W && Ct && st(W) && Lt(Ht) && un(Ht, function(Pn) {
                Nn(Pn) && He(W, Pn, Ct, Pn, pn)
            }),
            W
        }
        function Ee(W) {
            return function() {
                function Ct() {
                    var Ht = this;
                    W && $(W, function(pn, Pn) {
                        Ht[pn] = Pn
                    })
                }
                return Ct
            }()
        }
        function ar(W) {
            return W && C.rl && (W = (0,
            C.Pw)((0,
            C.rl)({}, W))),
            W
        }
        function rr(W, Ct, Ht, pn, Pn, An) {
            var $n = arguments
              , Re = $n[0] || {}
              , Ne = $n[N.R5]
              , vn = !1
              , Tn = 1;
            for (Ne > 0 && f(Re) && (vn = Re,
            Re = $n[Tn] || {},
            Tn++),
            st(Re) || (Re = {}); Tn < Ne; Tn++) {
                var w = $n[Tn]
                  , I = Lt(w)
                  , h = st(w);
                for (var j in w) {
                    var q = I && j in w || h && C.CY[N._S](w, j);
                    if (!!q) {
                        var ut = w[j]
                          , Wt = void 0;
                        if (vn && ut && ((Wt = Lt(ut)) || Zn(ut))) {
                            var Kt = Re[j];
                            Wt ? Lt(Kt) || (Kt = []) : Zn(Kt) || (Kt = {}),
                            ut = rr(vn, Kt, ut)
                        }
                        ut !== void 0 && (Re[j] = ut)
                    }
                }
            }
            return Re
        }
    }
    ,
    59556: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            $F: ()=>ht,
            C$: ()=>Dt,
            DN: ()=>o,
            Z: ()=>y,
            Zh: ()=>v,
            cL: ()=>L,
            f_: ()=>yt,
            hL: ()=>J,
            js: ()=>a,
            kl: ()=>V,
            mE: ()=>T,
            oV: ()=>N,
            qS: ()=>C,
            uC: ()=>gt,
            yi: ()=>ft,
            ys: ()=>St
        });
        var C = ""
          , y = "channels"
          , N = "core"
          , o = "createPerfMgr"
          , T = "disabled"
          , v = "extensionConfig"
          , a = "extensions"
          , J = "processTelemetry"
          , ft = "priority"
          , gt = "eventsSent"
          , ht = "eventsDiscarded"
          , yt = "eventsSendRequest"
          , Dt = "perfEvent"
          , St = "errorToConsole"
          , L = "warnToConsole"
          , V = "getPerfMgr"
    }
    ,
    22753: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            Jk: ()=>gt,
            Lm: ()=>yt,
            j5: ()=>St
        });
        var C = A(42314)
          , y = A(86474)
          , N = A(43161)
          , o = A(59556)
          , T = "ctx"
          , v = "ParentContextKey"
          , a = "ChildrenContextKey"
          , J = null
          , ft = function() {
            function L(V, x, _t) {
                var H = this
                  , g = !1;
                if (H.start = (0,
                N.m6)(),
                H[y.I] = V,
                H[y.d] = _t,
                H[y.PL] = function() {
                    return !1
                }
                ,
                (0,
                N.mf)(x)) {
                    var X;
                    g = (0,
                    N.l_)(H, "payload", function() {
                        return !X && (0,
                        N.mf)(x) && (X = x(),
                        x = null),
                        X
                    })
                }
                H[y.T] = function(bt) {
                    return bt ? bt === L[v] || bt === L[a] ? H[bt] : (H[T] || {})[bt] : null
                }
                ,
                H[y.wu] = function(bt, B) {
                    if (bt)
                        if (bt === L[v])
                            H[bt] || (H[y.PL] = function() {
                                return !0
                            }
                            ),
                            H[bt] = B;
                        else if (bt === L[a])
                            H[bt] = B;
                        else {
                            var Pt = H[T] = H[T] || {};
                            Pt[bt] = B
                        }
                }
                ,
                H[y.Km] = function() {
                    var bt = 0
                      , B = H[y.T](L[a]);
                    if ((0,
                    N.kJ)(B))
                        for (var Pt = 0; Pt < B[y.R5]; Pt++) {
                            var U = B[Pt];
                            U && (bt += U[y.Z_])
                        }
                    H[y.Z_] = (0,
                    N.m6)() - H.start,
                    H.exTime = H[y.Z_] - bt,
                    H[y.Km] = function() {}
                    ,
                    !g && (0,
                    N.mf)(x) && (H.payload = x())
                }
            }
            return L.ParentContextKey = "parent",
            L.ChildrenContextKey = "childEvts",
            L
        }()
          , gt = function() {
            function L(V) {
                this.ctx = {},
                (0,
                C.Z)(L, this, function(x) {
                    x.create = function(_t, H, g) {
                        return new ft(_t,H,g)
                    }
                    ,
                    x.fire = function(_t) {
                        _t && (_t[y.Km](),
                        V && (0,
                        N.mf)(V[o.C$]) && V[o.C$](_t))
                    }
                    ,
                    x[y.wu] = function(_t, H) {
                        if (_t) {
                            var g = x[T] = x[T] || {};
                            g[_t] = H
                        }
                    }
                    ,
                    x[y.T] = function(_t) {
                        return (x[T] || {})[_t]
                    }
                })
            }
            return L.__ieDyn = 1,
            L
        }()
          , ht = "CoreUtils.doPerf";
        function yt(L, V, x, _t, H) {
            if (L) {
                var g = L;
                if (g[o.kl] && (g = g[o.kl]()),
                g) {
                    var X = void 0
                      , bt = g[y.T](ht);
                    try {
                        if (X = g.create(V(), _t, H),
                        X) {
                            if (bt && X[y.wu] && (X[y.wu](ft[v], bt),
                            bt[y.T] && bt[y.wu])) {
                                var B = bt[y.T](ft[a]);
                                B || (B = [],
                                bt[y.wu](ft[a], B)),
                                B[y.MW](X)
                            }
                            return g[y.wu](ht, X),
                            x(X)
                        }
                    } catch (Pt) {
                        X && X[y.wu] && X[y.wu]("exception", Pt)
                    } finally {
                        X && g.fire(X),
                        g[y.wu](ht, bt)
                    }
                }
            }
            return x()
        }
        function Dt(L) {
            J = L
        }
        function St() {
            return J
        }
    }
    ,
    80877: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            Bt: ()=>L,
            CD: ()=>St,
            jV: ()=>x,
            xy: ()=>V
        });
        var C = A(86474)
          , y = A(94300)
          , N = A(41167)
          , o = A(43161)
          , T = A(59556)
          , v = A(22753)
          , a = A(73656)
          , J = "TelemetryPluginChain"
          , ft = "_hasRun"
          , gt = "_getTelCtx"
          , ht = 0;
        function yt(g, X, bt) {
            for (; g; ) {
                if (g[C.TO]() === bt)
                    return g;
                g = g[C.W2]()
            }
            return x([bt], X[C.TC] || {}, X)
        }
        function Dt(g, X, bt, B) {
            var Pt = null
              , U = [];
            B !== null && (Pt = B ? yt(g, bt, B) : g);
            var F = {
                _next: P,
                ctx: {
                    core: function() {
                        return bt
                    },
                    diagLog: function() {
                        return (0,
                        y.vH)(bt, X)
                    },
                    getCfg: function() {
                        return X
                    },
                    getExtCfg: pt,
                    getConfig: l,
                    hasNext: function() {
                        return !!Pt
                    },
                    getNext: function() {
                        return Pt
                    },
                    setNext: function(b) {
                        Pt = b
                    },
                    iterate: sn,
                    onComplete: Et
                }
            };
            function Et(b, M) {
                for (var D = [], K = 2; K < arguments.length; K++)
                    D[K - 2] = arguments[K];
                b && U[C.MW]({
                    func: b,
                    self: (0,
                    o.o8)(M) ? F.ctx : M,
                    args: D
                })
            }
            function P() {
                var b = Pt;
                if (Pt = b ? b[C.W2]() : null,
                !b) {
                    var M = U;
                    M && M[C.R5] > 0 && ((0,
                    o.tO)(M, function(D) {
                        try {
                            D.func[C._S](D.self, D.args)
                        } catch (K) {
                            (0,
                            y.kP)(bt[C.eZ], 2, 73, "Unexpected Exception during onComplete - " + (0,
                            N.eU)(K))
                        }
                    }),
                    U = [])
                }
                return b
            }
            function pt(b, M, D) {
                M === void 0 && (M = {}),
                D === void 0 && (D = 0);
                var K;
                if (X) {
                    var tt = X[T.Zh];
                    tt && b && (K = tt[b])
                }
                if (!K)
                    K = M;
                else if ((0,
                o.Kn)(M) && D !== 0) {
                    var R = (0,
                    o.mm)(!0, M, K);
                    X && D === 2 && (0,
                    o.rW)(M, function(Gt) {
                        if ((0,
                        o.le)(R[Gt])) {
                            var cn = X[Gt];
                            (0,
                            o.le)(cn) || (R[Gt] = cn)
                        }
                    }),
                    K = R
                }
                return K
            }
            function l(b, M, D) {
                D === void 0 && (D = !1);
                var K, tt = pt(b, null);
                return tt && !(0,
                o.le)(tt[M]) ? K = tt[M] : X && !(0,
                o.le)(X[M]) && (K = X[M]),
                (0,
                o.le)(K) ? D : K
            }
            function sn(b) {
                for (var M; M = F._next(); ) {
                    var D = M[C.TO]();
                    D && b(D)
                }
            }
            return F
        }
        function St(g, X, bt, B) {
            var Pt = Dt(g, X, bt, B)
              , U = Pt.ctx;
            function F(P) {
                var pt = Pt._next();
                return pt && pt[T.hL](P, U),
                !pt
            }
            function Et(P, pt) {
                return P === void 0 && (P = null),
                (0,
                o.kJ)(P) && (P = x(P, X, bt, pt)),
                St(P || U[C.W2](), X, bt, pt)
            }
            return U[C.uL] = F,
            U[C.zV] = Et,
            U
        }
        function L(g, X, bt) {
            var B = X[C.TC] || {}
              , Pt = Dt(g, B, X, bt)
              , U = Pt.ctx;
            function F(P) {
                var pt = Pt._next();
                return pt && pt.unload(U, P),
                !pt
            }
            function Et(P, pt) {
                return P === void 0 && (P = null),
                (0,
                o.kJ)(P) && (P = x(P, B, X, pt)),
                L(P || U[C.W2](), X, pt)
            }
            return U[C.uL] = F,
            U[C.zV] = Et,
            U
        }
        function V(g, X, bt) {
            var B = X[C.TC] || {}
              , Pt = Dt(g, B, X, bt)
              , U = Pt.ctx;
            function F(P) {
                return U.iterate(function(pt) {
                    (0,
                    o.mf)(pt[C.Tu]) && pt[C.Tu](U, P)
                })
            }
            function Et(P, pt) {
                return P === void 0 && (P = null),
                (0,
                o.kJ)(P) && (P = x(P, B, X, pt)),
                V(P || U[C.W2](), X, pt)
            }
            return U[C.uL] = F,
            U[C.zV] = Et,
            U
        }
        function x(g, X, bt, B) {
            var Pt = null
              , U = !B;
            if ((0,
            o.kJ)(g) && g[C.R5] > 0) {
                var F = null;
                (0,
                o.tO)(g, function(Et) {
                    if (!U && B === Et && (U = !0),
                    U && Et && (0,
                    o.mf)(Et[T.hL])) {
                        var P = _t(Et, X, bt);
                        Pt || (Pt = P),
                        F && F._setNext(P),
                        F = P
                    }
                })
            }
            return B && !Pt ? x([B], X, bt) : Pt
        }
        function _t(g, X, bt) {
            var B = null, Pt = (0,
            o.mf)(g[T.hL]), U = (0,
            o.mf)(g[C.Jd]), F;
            g ? F = g[C.pZ] + "-" + g[T.yi] + "-" + ht++ : F = "Unknown-0-" + ht++;
            var Et = {
                getPlugin: function() {
                    return g
                },
                getNext: function() {
                    return B
                },
                processTelemetry: l,
                unload: sn,
                update: b,
                _id: F,
                _setNext: function(M) {
                    B = M
                }
            };
            function P() {
                var M;
                return g && (0,
                o.mf)(g[gt]) && (M = g[gt]()),
                M || (M = St(Et, X, bt)),
                M
            }
            function pt(M, D, K, tt, R) {
                var Gt = !1
                  , cn = g ? g[C.pZ] : J
                  , Yt = M[ft];
                return Yt || (Yt = M[ft] = {}),
                M.setNext(B),
                g && (0,
                v.Lm)(M[T.oV](), function() {
                    return cn + ":" + K
                }, function() {
                    Yt[F] = !0;
                    try {
                        var st = B ? B._id : T.qS;
                        st && (Yt[st] = !1),
                        Gt = D(M)
                    } catch (it) {
                        var z = B ? Yt[B._id] : !0;
                        z && (Gt = !0),
                        (!B || !z) && (0,
                        y.kP)(M[C.mc](), 1, 73, "Plugin [" + cn + "] failed during " + K + " - " + (0,
                        N.eU)(it) + ", run flags: " + (0,
                        N.eU)(Yt))
                    }
                }, tt, R),
                Gt
            }
            function l(M, D) {
                D = D || P();
                function K(tt) {
                    if (!g || !Pt)
                        return !1;
                    var R = (0,
                    a.OY)(g);
                    return R[C.fi] || R[T.mE] ? !1 : (U && g[C.Jd](B),
                    g[T.hL](M, tt),
                    !0)
                }
                pt(D, K, "processTelemetry", function() {
                    return {
                        item: M
                    }
                }, !M.sync) || D[C.uL](M)
            }
            function sn(M, D) {
                function K() {
                    var tt = !1;
                    if (g) {
                        var R = (0,
                        a.OY)(g)
                          , Gt = g[T.oV] || R[T.oV];
                        g && (!Gt || Gt === M.core()) && !R[C.fi] && (R[T.oV] = null,
                        R[C.fi] = !0,
                        R[C.yl] = !1,
                        g[C.fi] && g[C.fi](M, D) === !0 && (tt = !0))
                    }
                    return tt
                }
                pt(M, K, "unload", function() {}, D[C.d]) || M[C.uL](D)
            }
            function b(M, D) {
                function K() {
                    var tt = !1;
                    if (g) {
                        var R = (0,
                        a.OY)(g)
                          , Gt = g[T.oV] || R[T.oV];
                        g && (!Gt || Gt === M.core()) && !R[C.fi] && g[C.Tu] && g[C.Tu](M, D) === !0 && (tt = !0)
                    }
                    return tt
                }
                pt(M, K, "update", function() {}, !1) || M[C.uL](D)
            }
            return (0,
            o.FL)(Et)
        }
        var H = function() {
            function g(X, bt, B, Pt) {
                var U = this
                  , F = St(X, bt, B, Pt);
                (0,
                o.Vb)(U, F, (0,
                o.FY)(F))
            }
            return g
        }()
    }
    ,
    70395: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            CN: ()=>St,
            F6: ()=>L,
            _l: ()=>Dt,
            az: ()=>yt,
            pZ: ()=>V
        });
        var C = A(86474)
          , y = A(41167)
          , N = A(43161)
          , o = A(59556)
          , T = 4294967296
          , v = 4294967295
          , a = !1
          , J = 123456789
          , ft = 987654321;
        function gt(x) {
            x < 0 && (x >>>= 0),
            J = 123456789 + x & v,
            ft = 987654321 - x & v,
            a = !0
        }
        function ht() {
            try {
                var x = (0,
                N.m6)() & 2147483647;
                gt((Math.random() * T ^ x) + x)
            } catch (_t) {}
        }
        function yt(x) {
            return x > 0 ? Math.floor(Dt() / v * (x + 1)) >>> 0 : 0
        }
        function Dt(x) {
            var _t = 0
              , H = (0,
            y.MX)() || (0,
            y.gz)();
            return H && H.getRandomValues && (_t = H.getRandomValues(new Uint32Array(1))[0] & v),
            _t === 0 && (0,
            y.w1)() && (a || ht(),
            _t = L() & v),
            _t === 0 && (_t = Math.floor(T * Math.random() | 0)),
            x || (_t >>>= 0),
            _t
        }
        function St(x) {
            x ? gt(x) : ht()
        }
        function L(x) {
            ft = 36969 * (ft & 65535) + (ft >> 16) & v,
            J = 18e3 * (J & 65535) + (J >> 16) & v;
            var _t = (ft << 16) + (J & 65535) >>> 0 & v | 0;
            return x || (_t >>>= 0),
            _t
        }
        function V(x) {
            x === void 0 && (x = 22);
            for (var _t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", H = Dt() >>> 0, g = 0, X = o.qS; X[C.R5] < x; )
                g++,
                X += _t.charAt(H & 63),
                H >>>= 6,
                g === 5 && (H = (Dt() << 2 & 4294967295 | H & 3) >>> 0,
                g = 0);
            return X
        }
    }
    ,
    73656: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            AA: ()=>ft,
            OY: ()=>a,
            Yn: ()=>ht,
            bP: ()=>J
        });
        var C = A(86474)
          , y = A(98530)
          , N = A(43161)
          , o = A(59556)
          , T = A(21579)
          , v = (0,
        y.K)("plugin");
        function a(yt) {
            return v.get(yt, "state", {}, !0)
        }
        function J(yt, Dt) {
            for (var St = [], L = null, V = yt[C.W2](), x; V; ) {
                var _t = V[C.TO]();
                if (_t) {
                    L && (0,
                    N.mf)(L[C.Jd]) && (0,
                    N.mf)(_t[o.hL]) && L[C.Jd](_t);
                    var H = !1;
                    (0,
                    N.mf)(_t[C.yl]) ? H = _t[C.yl]() : (x = a(_t),
                    H = x[C.yl]),
                    H || St[C.MW](_t),
                    L = _t,
                    V = V[C.W2]()
                }
            }
            (0,
            N.tO)(St, function(g) {
                var X = yt[o.oV]();
                g[C.VL](yt.getCfg(), X, Dt, yt[C.W2]()),
                x = a(g),
                !g[o.oV] && !x[o.oV] && (x[o.oV] = X),
                x[C.yl] = !0,
                delete x[C.fi]
            })
        }
        function ft(yt) {
            return yt.sort(function(Dt, St) {
                var L = 0;
                if (St) {
                    var V = (0,
                    N.mf)(St[o.hL]);
                    (0,
                    N.mf)(Dt[o.hL]) ? L = V ? Dt[o.yi] - St[o.yi] : 1 : V && (L = -1)
                } else
                    L = Dt ? 1 : -1;
                return L
            })
        }
        function gt(yt, Dt, St, L) {
            var V = 0;
            function x() {
                for (; V < yt[_DYN_LENGTH]; ) {
                    var _t = yt[V++];
                    if (_t) {
                        var H = _t._doUnload || _t[_DYN__DO_TEARDOWN];
                        if (isFunction(H) && H[_DYN_CALL](_t, Dt, St, x) === !0)
                            return !0
                    }
                }
            }
            return x()
        }
        function ht(yt) {
            var Dt = {};
            return {
                getName: function() {
                    return Dt[C.I]
                },
                setName: function(St) {
                    yt && yt.setName(St),
                    Dt[C.I] = St
                },
                getTraceId: function() {
                    return Dt[C.nY]
                },
                setTraceId: function(St) {
                    yt && yt.setTraceId(St),
                    (0,
                    T.jN)(St) && (Dt[C.nY] = St)
                },
                getSpanId: function() {
                    return Dt[C._d]
                },
                setSpanId: function(St) {
                    yt && yt.setSpanId(St),
                    (0,
                    T.Lc)(St) && (Dt[C._d] = St)
                },
                getTraceFlags: function() {
                    return Dt[C.T0]
                },
                setTraceFlags: function(St) {
                    yt && yt.setTraceFlags(St),
                    Dt[C.T0] = St
                }
            }
        }
    }
    ,
    66930: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            Y: ()=>T
        });
        var C = A(86474)
          , y = A(94300)
          , N = A(41167)
          , o = A(43161);
        function T() {
            var v = [];
            function a(ft) {
                ft && v[C.MW](ft)
            }
            function J(ft, gt) {
                (0,
                o.tO)(v, function(ht) {
                    try {
                        ht(ft, gt)
                    } catch (yt) {
                        (0,
                        y.kP)(ft[C.mc](), 2, 73, "Unexpected error calling unload handler - " + (0,
                        N.eU)(yt))
                    }
                }),
                v = []
            }
            return {
                add: a,
                run: J
            }
        }
    }
    ,
    21579: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            Lc: ()=>St,
            jN: ()=>Dt
        });
        var C = A(86474)
          , y = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})(-[^\s]*)?$/
          , N = "00"
          , o = "ff"
          , T = "00000000000000000000000000000000"
          , v = "0000000000000000"
          , a = 1;
        function J(H, g, X) {
            return H && H[C.R5] === g && H !== X ? !!H.match(/^[\da-f]*$/) : !1
        }
        function ft(H, g, X) {
            return J(H, g) ? H : X
        }
        function gt(H) {
            (isNaN(H) || H < 0 || H > 255) && (H = 1);
            for (var g = H.toString(16); g[_DYN_LENGTH] < 2; )
                g = "0" + g;
            return g
        }
        function ht(H, g, X, bt) {
            var B;
            return B = {},
            B[_DYN_VERSION] = J(bt, 2, o) ? bt : N,
            B[_DYN_TRACE_ID] = Dt(H) ? H : generateW3CId(),
            B.spanId = St(g) ? g : generateW3CId()[_DYN_SUBSTR](0, 16),
            B.traceFlags = X >= 0 && X <= 255 ? X : 1,
            B
        }
        function yt(H) {
            var g;
            if (!H || (isArray(H) && (H = H[0] || ""),
            !H || !isString(H) || H[_DYN_LENGTH] > 8192))
                return null;
            var X = y.exec(strTrim(H));
            return !X || X[1] === o || X[2] === T || X[3] === v ? null : (g = {},
            g[_DYN_VERSION] = X[1],
            g[_DYN_TRACE_ID] = X[2],
            g[_DYN_SPAN_ID] = X[3],
            g[_DYN_TRACE_FLAGS] = parseInt(X[4], 16),
            g)
        }
        function Dt(H) {
            return J(H, 32, T)
        }
        function St(H) {
            return J(H, 16, v)
        }
        function L(H) {
            return !(!H || !J(H[_DYN_VERSION], 2, o) || !J(H[_DYN_TRACE_ID], 32, T) || !J(H[_DYN_SPAN_ID], 16, v) || !J(gt(H[_DYN_TRACE_FLAGS]), 2))
        }
        function V(H) {
            return L(H) ? (H[_DYN_TRACE_FLAGS] & a) === a : !1
        }
        function x(H) {
            if (H) {
                var g = gt(H[_DYN_TRACE_FLAGS]);
                J(g, 2) || (g = "01");
                var X = H[_DYN_VERSION] || N;
                return X !== "00" && X !== "ff" && (X = N),
                "".concat(X, "-").concat(ft(H.traceId, 32, T), "-").concat(ft(H.spanId, 16, v), "-").concat(g)
            }
            return ""
        }
        function _t() {
            var H = "traceparent"
              , g = yt(findMetaTag(H));
            return g || (g = yt(findNamedServerTiming(H))),
            g
        }
    }
    ,
    86474: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            $h: ()=>R,
            F3: ()=>F,
            Fc: ()=>x,
            Fr: ()=>z,
            Gc: ()=>B,
            I: ()=>y,
            Jd: ()=>l,
            Jn: ()=>Gt,
            Km: ()=>Lt,
            Kn: ()=>Ut,
            LS: ()=>V,
            Lk: ()=>b,
            MW: ()=>T,
            P6: ()=>Ot,
            PL: ()=>Z,
            R5: ()=>gt,
            SD: ()=>Dt,
            T: ()=>nt,
            T0: ()=>Nn,
            T1: ()=>k,
            TC: ()=>a,
            TO: ()=>_t,
            Tu: ()=>Et,
            VL: ()=>C,
            W2: ()=>P,
            ZV: ()=>Yt,
            Z_: ()=>ht,
            _S: ()=>$,
            _d: ()=>Sn,
            cb: ()=>X,
            d: ()=>U,
            dE: ()=>Q,
            eZ: ()=>ft,
            fi: ()=>bt,
            g: ()=>St,
            gU: ()=>Pt,
            i7: ()=>st,
            iC: ()=>g,
            jk: ()=>it,
            kL: ()=>H,
            mc: ()=>pt,
            n7: ()=>L,
            nY: ()=>At,
            ou: ()=>M,
            p$: ()=>J,
            pZ: ()=>o,
            qV: ()=>K,
            tb: ()=>N,
            uL: ()=>yt,
            w6: ()=>tt,
            wu: ()=>mt,
            xv: ()=>cn,
            yl: ()=>v,
            zV: ()=>sn,
            zc: ()=>D
        });
        var C = "initialize"
          , y = "name"
          , N = "getNotifyMgr"
          , o = "identifier"
          , T = "push"
          , v = "isInitialized"
          , a = "config"
          , J = "instrumentationKey"
          , ft = "logger"
          , gt = "length"
          , ht = "time"
          , yt = "processNext"
          , Dt = "getProcessTelContext"
          , St = "addNotificationListener"
          , L = "removeNotificationListener"
          , V = "stopPollingInternalLogs"
          , x = "onComplete"
          , _t = "getPlugin"
          , H = "flush"
          , g = "_extensions"
          , X = "splice"
          , bt = "teardown"
          , B = "messageId"
          , Pt = "message"
          , U = "isAsync"
          , F = "_doTeardown"
          , Et = "update"
          , P = "getNext"
          , pt = "diagLog"
          , l = "setNextPlugin"
          , sn = "createNew"
          , b = "cookieCfg"
          , M = "indexOf"
          , D = "substring"
          , K = "userAgent"
          , tt = "split"
          , R = "setEnabled"
          , Gt = "substr"
          , cn = "nodeType"
          , Yt = "apply"
          , st = "replace"
          , z = "enableDebugExceptions"
          , it = "logInternalMessage"
          , k = "toLowerCase"
          , $ = "call"
          , Ot = "type"
          , Ut = "handler"
          , Q = "listeners"
          , Z = "isChildEvt"
          , nt = "getCtx"
          , mt = "setCtx"
          , Lt = "complete"
          , At = "traceId"
          , Sn = "spanId"
          , Nn = "traceFlags"
          , $t = "version"
    }
    ,
    32589: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            CY: ()=>yt,
            Pw: ()=>a,
            RJ: ()=>ht,
            V4: ()=>J,
            bO: ()=>T,
            cb: ()=>C,
            fK: ()=>y,
            hB: ()=>o,
            jA: ()=>N,
            rl: ()=>ft,
            yu: ()=>gt
        });
        var C = "function"
          , y = "object"
          , N = "undefined"
          , o = "prototype"
          , T = "hasOwnProperty"
          , v = "default"
          , a = Object
          , J = a[o]
          , ft = a.assign
          , gt = a.create
          , ht = a.defineProperty
          , yt = J[T]
    }
    ,
    28785: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            Rd: ()=>N,
            ZU: ()=>o,
            pu: ()=>T
        });
        var C = A(32589)
          , y = null;
        function N(v) {
            v === void 0 && (v = !0);
            var a = v === !1 ? null : y;
            return a || (typeof globalThis !== C.jA && (a = globalThis),
            !a && typeof self !== C.jA && (a = self),
            !a && typeof window !== C.jA && (a = window),
            !a && typeof A.g !== C.jA && (a = A.g),
            y = a),
            a
        }
        function o(v) {
            throw new TypeError(v)
        }
        function T(v) {
            var a = C.yu;
            if (a)
                return a(v);
            if (v == null)
                return {};
            var J = typeof v;
            J !== C.fK && J !== C.cb && o("Object prototype may only be an Object:" + v);
            function ft() {}
            return ft[C.hB] = v,
            new ft
        }
    }
    ,
    43298: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            $h: ()=>Pt,
            ne: ()=>St,
            uc: ()=>yt
        });
        var C = A(32589)
          , y = A(28785)
          , N = ((0,
        y.Rd)() || {}).Symbol
          , o = ((0,
        y.Rd)() || {}).Reflect
          , T = !!N
          , v = !!o
          , a = "decorate"
          , J = "metadata"
          , ft = "getOwnPropertySymbols"
          , gt = "iterator"
          , ht = function(P) {
            for (var pt, l = 1, sn = arguments.length; l < sn; l++) {
                pt = arguments[l];
                for (var b in pt)
                    C.V4[C.bO].call(pt, b) && (P[b] = pt[b])
            }
            return P
        }
          , yt = C.rl || ht
          , Dt = function(P, pt) {
            return Dt = C.Pw.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(l, sn) {
                l.__proto__ = sn
            }
            || function(l, sn) {
                for (var b in sn)
                    sn[C.bO](b) && (l[b] = sn[b])
            }
            ,
            Dt(P, pt)
        };
        function St(P, pt) {
            typeof pt !== C.cb && pt !== null && (0,
            y.ZU)("Class extends value " + String(pt) + " is not a constructor or null"),
            Dt(P, pt);
            function l() {
                this.constructor = P
            }
            P[C.hB] = pt === null ? (0,
            y.pu)(pt) : (l[C.hB] = pt[C.hB],
            new l)
        }
        function L(P, pt) {
            var l = {};
            for (var sn in P)
                ObjHasOwnProperty.call(P, sn) && pt.indexOf(sn) < 0 && (l[sn] = P[sn]);
            if (P != null && typeof ObjClass[ft] === strShimFunction)
                for (var b = 0, M = ObjClass[ft](P); b < M.length; b++)
                    pt.indexOf(M[b]) < 0 && ObjProto.propertyIsEnumerable.call(P, M[b]) && (l[M[b]] = P[M[b]]);
            return l
        }
        function V(P, pt, l, sn) {
            var b = arguments.length, M = b < 3 ? pt : sn === null ? sn = ObjClass.getOwnPropertyDescriptor(pt, l) : sn, D;
            if (v && typeof o[a] === strShimFunction)
                M = o[a](P, pt, l, sn);
            else
                for (var K = P.length - 1; K >= 0; K--)
                    (D = P[K]) && (M = (b < 3 ? D(M) : b > 3 ? D(pt, l, M) : D(pt, l)) || M);
            return b > 3 && M && ObjDefineProperty(pt, l, M),
            M
        }
        function x(P, pt) {
            return function(l, sn) {
                pt(l, sn, P)
            }
        }
        function _t(P, pt) {
            if (v && o[J] === strShimFunction)
                return o[J](P, pt)
        }
        function H(P, pt) {
            for (var l in P)
                l !== strDefault && !ObjHasOwnProperty.call(pt, l) && g(pt, P, l)
        }
        function g(P, pt, l, sn) {
            sn === void 0 && (sn = l),
            ObjCreate ? ObjDefineProperty(P, sn, {
                enumerable: !0,
                get: function() {
                    return pt[l]
                }
            }) : P[sn] = pt[l]
        }
        function X(P) {
            var pt = typeof N === strShimFunction && N[gt]
              , l = pt && P[pt]
              , sn = 0;
            if (l)
                return l.call(P);
            if (P && typeof P.length == "number")
                return {
                    next: function() {
                        return P && sn >= P.length && (P = void 0),
                        {
                            value: P && P[sn++],
                            done: !P
                        }
                    }
                };
            throwTypeError(pt ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function bt(P, pt) {
            var l = typeof N === strShimFunction && P[N[gt]];
            if (!l)
                return P;
            var sn = l.call(P), b, M = [], D;
            try {
                for (; (pt === void 0 || pt-- > 0) && !(b = sn.next()).done; )
                    M.push(b.value)
            } catch (K) {
                D = {
                    error: K
                }
            } finally {
                try {
                    b && !b.done && (l = sn.return) && l.call(sn)
                } finally {
                    if (D)
                        throw D.error
                }
            }
            return M
        }
        function B() {
            for (var P = arguments, pt = 0, l = 0, sn = P.length; l < sn; l++)
                pt += P[l].length;
            for (var b = Array(pt), M = 0, l = 0; l < sn; l++)
                for (var D = P[l], K = 0, tt = D.length; K < tt; K++,
                M++)
                    b[M] = D[K];
            return b
        }
        function Pt(P, pt) {
            for (var l = 0, sn = pt.length, b = P.length; l < sn; l++,
            b++)
                P[b] = pt[l];
            return P
        }
        function U(P, pt) {
            return ObjDefineProperty ? ObjDefineProperty(P, "raw", {
                value: pt
            }) : P.raw = pt,
            P
        }
        function F(P) {
            if (P && P.__esModule)
                return P;
            var pt = {};
            if (P != null)
                for (var l in P)
                    l !== strDefault && Object.prototype.hasOwnProperty.call(P, l) && g(pt, P, l);
            return ObjCreate ? ObjDefineProperty(pt, strDefault, {
                enumerable: !0,
                value: P
            }) : pt[strDefault] = P,
            pt
        }
        function Et(P) {
            return P && P.__esModule ? P : {
                strDefault: P
            }
        }
    }
    ,
    42314: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            Z: ()=>st
        });
        /*!
 * Microsoft Dynamic Proto Utility, 1.1.8
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */
        var C, y = "undefined", N = "constructor", o = "prototype", T = "function", v = "_dynInstFuncs", a = "_isDynProxy", J = "_dynClass", ft = "_dynCls$", gt = "_dynInstChk", ht = gt, yt = "_dfOpts", Dt = "_unknown_", St = "__proto__", L = "_dyn" + St, V = "__dynProto$Gbl", x = "_dynInstProto", _t = "useBaseInst", H = "setInstFuncs", g = Object, X = g.getPrototypeOf, bt = g.getOwnPropertyNames;
        function B() {
            var z;
            return typeof globalThis !== y && (z = globalThis),
            !z && typeof self !== y && (z = self),
            !z && typeof window !== y && (z = window),
            !z && typeof A.g !== y && (z = A.g),
            z || {}
        }
        var Pt = B()
          , U = Pt[V] || (Pt[V] = {
            o: (C = {},
            C[H] = !0,
            C[_t] = !0,
            C),
            n: 1e3
        });
        function F(z, it) {
            return z && g[o].hasOwnProperty.call(z, it)
        }
        function Et(z) {
            return z && (z === g[o] || z === Array[o])
        }
        function P(z) {
            return Et(z) || z === Function[o]
        }
        function pt(z) {
            var it;
            if (z) {
                if (X)
                    return X(z);
                var k = z[St] || z[o] || (z[N] ? z[N][o] : null);
                it = z[L] || k,
                F(z, L) || (delete z[x],
                it = z[L] = z[x] || z[L],
                z[x] = k)
            }
            return it
        }
        function l(z, it) {
            var k = [];
            if (bt)
                k = bt(z);
            else
                for (var $ in z)
                    typeof $ == "string" && F(z, $) && k.push($);
            if (k && k.length > 0)
                for (var Ot = 0; Ot < k.length; Ot++)
                    it(k[Ot])
        }
        function sn(z, it, k) {
            return it !== N && typeof z[it] === T && (k || F(z, it))
        }
        function b(z) {
            throw new TypeError("DynamicProto: " + z)
        }
        function M(z) {
            var it = {};
            return l(z, function(k) {
                !it[k] && sn(z, k, !1) && (it[k] = z[k])
            }),
            it
        }
        function D(z, it) {
            for (var k = z.length - 1; k >= 0; k--)
                if (z[k] === it)
                    return !0;
            return !1
        }
        function K(z, it, k, $) {
            function Ot(nt, mt, Lt) {
                var At = mt[Lt];
                if (At[a] && $) {
                    var Sn = nt[v] || {};
                    Sn[ht] !== !1 && (At = (Sn[mt[J]] || {})[Lt] || At)
                }
                return function() {
                    return At.apply(nt, arguments)
                }
            }
            var Ut = {};
            l(k, function(nt) {
                Ut[nt] = Ot(it, k, nt)
            });
            for (var Q = pt(z), Z = []; Q && !P(Q) && !D(Z, Q); )
                l(Q, function(nt) {
                    !Ut[nt] && sn(Q, nt, !X) && (Ut[nt] = Ot(it, Q, nt))
                }),
                Z.push(Q),
                Q = pt(Q);
            return Ut
        }
        function tt(z, it, k, $) {
            var Ot = null;
            if (z && F(k, J)) {
                var Ut = z[v] || {};
                if (Ot = (Ut[k[J]] || {})[it],
                Ot || b("Missing [" + it + "] " + T),
                !Ot[gt] && Ut[ht] !== !1) {
                    for (var Q = !F(z, it), Z = pt(z), nt = []; Q && Z && !P(Z) && !D(nt, Z); ) {
                        var mt = Z[it];
                        if (mt) {
                            Q = mt === $;
                            break
                        }
                        nt.push(Z),
                        Z = pt(Z)
                    }
                    try {
                        Q && (z[it] = Ot),
                        Ot[gt] = 1
                    } catch (Lt) {
                        Ut[ht] = !1
                    }
                }
            }
            return Ot
        }
        function R(z, it, k) {
            var $ = it[z];
            return $ === k && ($ = pt(it)[z]),
            typeof $ !== T && b("[" + z + "] is not a " + T),
            $
        }
        function Gt(z, it, k, $, Ot) {
            function Ut(nt, mt) {
                var Lt = function() {
                    var At = tt(this, mt, nt, Lt) || R(mt, nt, Lt);
                    return At.apply(this, arguments)
                };
                return Lt[a] = 1,
                Lt
            }
            if (!Et(z)) {
                var Q = k[v] = k[v] || {}
                  , Z = Q[it] = Q[it] || {};
                Q[ht] !== !1 && (Q[ht] = !!Ot),
                l(k, function(nt) {
                    sn(k, nt, !1) && k[nt] !== $[nt] && (Z[nt] = k[nt],
                    delete k[nt],
                    (!F(z, nt) || z[nt] && !z[nt][a]) && (z[nt] = Ut(z, nt)))
                })
            }
        }
        function cn(z, it) {
            if (X) {
                for (var k = [], $ = pt(it); $ && !P($) && !D(k, $); ) {
                    if ($ === z)
                        return !0;
                    k.push($),
                    $ = pt($)
                }
                return !1
            }
            return !0
        }
        function Yt(z, it) {
            return F(z, o) ? z.name || it || Dt : ((z || {})[N] || {}).name || it || Dt
        }
        function st(z, it, k, $) {
            F(z, o) || b("theClass is an invalid class definition.");
            var Ot = z[o];
            cn(Ot, it) || b("[" + Yt(z) + "] not in hierarchy of [" + Yt(it) + "]");
            var Ut = null;
            F(Ot, J) ? Ut = Ot[J] : (Ut = ft + Yt(z, "_") + "$" + U.n,
            U.n++,
            Ot[J] = Ut);
            var Q = st[yt]
              , Z = !!Q[_t];
            Z && $ && $[_t] !== void 0 && (Z = !!$[_t]);
            var nt = M(it)
              , mt = K(Ot, it, nt, Z);
            k(it, mt);
            var Lt = !!X && !!Q[H];
            Lt && $ && (Lt = !!$[H]),
            Gt(Ot, Ut, it, nt, Lt !== !1)
        }
        st[yt] = U.o
    }
    ,
    40387: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            RM: ()=>ft,
            jz: ()=>L
        });
        var C = function() {
            return C = Object.assign || function(B) {
                for (var Pt, U = 1, F = arguments.length; U < F; U++) {
                    Pt = arguments[U];
                    for (var Et in Pt)
                        Object.prototype.hasOwnProperty.call(Pt, Et) && (B[Et] = Pt[Et])
                }
                return B
            }
            ,
            C.apply(this, arguments)
        }
          , y = typeof window == "undefined" ? A.g : window
          , N = y && y.CSPSettings && y.CSPSettings.nonce
          , o = J()
          , T = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g
          , v = function() {
            return typeof performance != "undefined" && !!performance.now ? performance.now() : Date.now()
        };
        function a(B) {
            var Pt = v();
            B();
            var U = v();
            o.perf.duration += U - Pt
        }
        function J() {
            var B = y.__themeState__ || {
                theme: void 0,
                lastStyleElement: void 0,
                registeredStyles: []
            };
            return B.runState || (B = C(C({}, B), {
                perf: {
                    count: 0,
                    duration: 0
                },
                runState: {
                    flushTimer: 0,
                    mode: 0,
                    buffer: []
                }
            })),
            B.registeredThemableStyles || (B = C(C({}, B), {
                registeredThemableStyles: []
            })),
            y.__themeState__ = B,
            B
        }
        function ft(B, Pt) {
            Pt === void 0 && (Pt = !1),
            a(function() {
                var U = Array.isArray(B) ? B : X(B)
                  , F = o.runState
                  , Et = F.mode
                  , P = F.buffer
                  , pt = F.flushTimer;
                Pt || Et === 1 ? (P.push(U),
                pt || (o.runState.flushTimer = Dt())) : St(U)
            })
        }
        function gt(B) {
            o.loadStyles = B
        }
        function ht(B) {
            o.runState.mode = B
        }
        function yt() {
            a(function() {
                var B = o.runState.buffer.slice();
                o.runState.buffer = [];
                var Pt = [].concat.apply([], B);
                Pt.length > 0 && St(Pt)
            })
        }
        function Dt() {
            return setTimeout(function() {
                o.runState.flushTimer = 0,
                yt()
            }, 0)
        }
        function St(B, Pt) {
            o.loadStyles ? o.loadStyles(g(B).styleString, B) : bt(B)
        }
        function L(B) {
            o.theme = B,
            _t()
        }
        function V(B) {
            B === void 0 && (B = 3),
            (B === 3 || B === 2) && (x(o.registeredStyles),
            o.registeredStyles = []),
            (B === 3 || B === 1) && (x(o.registeredThemableStyles),
            o.registeredThemableStyles = [])
        }
        function x(B) {
            B.forEach(function(Pt) {
                var U = Pt && Pt.styleElement;
                U && U.parentElement && U.parentElement.removeChild(U)
            })
        }
        function _t() {
            if (o.theme) {
                for (var B = [], Pt = 0, U = o.registeredThemableStyles; Pt < U.length; Pt++) {
                    var F = U[Pt];
                    B.push(F.themableStyle)
                }
                B.length > 0 && (V(1),
                St([].concat.apply([], B)))
            }
        }
        function H(B) {
            return B && (B = g(X(B)).styleString),
            B
        }
        function g(B) {
            var Pt = o.theme
              , U = !1
              , F = (B || []).map(function(Et) {
                var P = Et.theme;
                if (P) {
                    U = !0;
                    var pt = Pt ? Pt[P] : void 0
                      , l = Et.defaultValue || "inherit";
                    return Pt && !pt && console && !(P in Pt) && typeof DEBUG != "undefined" && DEBUG && console.warn('Theming value not provided for "'.concat(P, '". Falling back to "').concat(l, '".')),
                    pt || l
                } else
                    return Et.rawString
            });
            return {
                styleString: F.join(""),
                themable: U
            }
        }
        function X(B) {
            var Pt = [];
            if (B) {
                for (var U = 0, F = void 0; F = T.exec(B); ) {
                    var Et = F.index;
                    Et > U && Pt.push({
                        rawString: B.substring(U, Et)
                    }),
                    Pt.push({
                        theme: F[1],
                        defaultValue: F[2]
                    }),
                    U = T.lastIndex
                }
                Pt.push({
                    rawString: B.substring(U)
                })
            }
            return Pt
        }
        function bt(B) {
            if (typeof document != "undefined") {
                var Pt = document.getElementsByTagName("head")[0]
                  , U = document.createElement("style")
                  , F = g(B)
                  , Et = F.styleString
                  , P = F.themable;
                U.setAttribute("data-load-themed-styles", "true"),
                N && U.setAttribute("nonce", N),
                U.appendChild(document.createTextNode(Et)),
                o.perf.count++,
                Pt.appendChild(U);
                var pt = document.createEvent("HTMLEvents");
                pt.initEvent("styleinsert", !0, !1),
                pt.args = {
                    newStyle: U
                },
                document.dispatchEvent(pt);
                var l = {
                    styleElement: U,
                    themableStyle: B
                };
                P ? o.registeredThemableStyles.push(l) : o.registeredStyles.push(l)
            }
        }
    }
    ,
    72825: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            x: ()=>C
        });
        var C;
        (function(y) {
            y.USGOV_DOD = "https://pf.events.data.microsoft.com/OneCollector/1.0/",
            y.USGOV_DOJ = "https://tb.events.data.microsoft.com/OneCollector/1.0/",
            y.PUBLIC = "https://browser.events.data.microsoft.com/OneCollector/1.0/",
            y.CUSTOMER_CONTENT = "",
            y.EUDB = "https://eu-office.events.data.microsoft.com/OneCollector/1.0/"
        }
        )(C || (C = {}))
    }
    ,
    77327: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            a: ()=>Tn
        });
        var C = function(w, I) {
            return C = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(h, j) {
                h.__proto__ = j
            }
            || function(h, j) {
                for (var q in j)
                    Object.prototype.hasOwnProperty.call(j, q) && (h[q] = j[q])
            }
            ,
            C(w, I)
        };
        function y(w, I) {
            if (typeof I != "function" && I !== null)
                throw new TypeError("Class extends value " + String(I) + " is not a constructor or null");
            C(w, I);
            function h() {
                this.constructor = w
            }
            w.prototype = I === null ? Object.create(I) : (h.prototype = I.prototype,
            new h)
        }
        var N = function() {
            return N = Object.assign || function(I) {
                for (var h, j = 1, q = arguments.length; j < q; j++) {
                    h = arguments[j];
                    for (var ut in h)
                        Object.prototype.hasOwnProperty.call(h, ut) && (I[ut] = h[ut])
                }
                return I
            }
            ,
            N.apply(this, arguments)
        };
        function o(w, I) {
            var h = {};
            for (var j in w)
                Object.prototype.hasOwnProperty.call(w, j) && I.indexOf(j) < 0 && (h[j] = w[j]);
            if (w != null && typeof Object.getOwnPropertySymbols == "function")
                for (var q = 0, j = Object.getOwnPropertySymbols(w); q < j.length; q++)
                    I.indexOf(j[q]) < 0 && Object.prototype.propertyIsEnumerable.call(w, j[q]) && (h[j[q]] = w[j[q]]);
            return h
        }
        function T(w, I, h, j) {
            var q = arguments.length, ut = q < 3 ? I : j === null ? j = Object.getOwnPropertyDescriptor(I, h) : j, Wt;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                ut = Reflect.decorate(w, I, h, j);
            else
                for (var Kt = w.length - 1; Kt >= 0; Kt--)
                    (Wt = w[Kt]) && (ut = (q < 3 ? Wt(ut) : q > 3 ? Wt(I, h, ut) : Wt(I, h)) || ut);
            return q > 3 && ut && Object.defineProperty(I, h, ut),
            ut
        }
        function v(w, I) {
            return function(h, j) {
                I(h, j, w)
            }
        }
        function a(w, I, h, j, q, ut) {
            function Wt(xt) {
                if (xt !== void 0 && typeof xt != "function")
                    throw new TypeError("Function expected");
                return xt
            }
            for (var Kt = j.kind, Vn = Kt === "getter" ? "get" : Kt === "setter" ? "set" : "value", qt = !I && w ? j.static ? w : w.prototype : null, En = I || (qt ? Object.getOwnPropertyDescriptor(qt, j.name) : {}), at, m = !1, Y = h.length - 1; Y >= 0; Y--) {
                var ct = {};
                for (var vt in j)
                    ct[vt] = vt === "access" ? {} : j[vt];
                for (var vt in j.access)
                    ct.access[vt] = j.access[vt];
                ct.addInitializer = function(xt) {
                    if (m)
                        throw new TypeError("Cannot add initializers after decoration has completed");
                    ut.push(Wt(xt || null))
                }
                ;
                var zt = (0,
                h[Y])(Kt === "accessor" ? {
                    get: En.get,
                    set: En.set
                } : En[Vn], ct);
                if (Kt === "accessor") {
                    if (zt === void 0)
                        continue;
                    if (zt === null || typeof zt != "object")
                        throw new TypeError("Object expected");
                    (at = Wt(zt.get)) && (En.get = at),
                    (at = Wt(zt.set)) && (En.set = at),
                    (at = Wt(zt.init)) && q.push(at)
                } else
                    (at = Wt(zt)) && (Kt === "field" ? q.push(at) : En[Vn] = at)
            }
            qt && Object.defineProperty(qt, j.name, En),
            m = !0
        }
        function J(w, I, h) {
            for (var j = arguments.length > 2, q = 0; q < I.length; q++)
                h = j ? I[q].call(w, h) : I[q].call(w);
            return j ? h : void 0
        }
        function ft(w) {
            return typeof w == "symbol" ? w : "".concat(w)
        }
        function gt(w, I, h) {
            return typeof I == "symbol" && (I = I.description ? "[".concat(I.description, "]") : ""),
            Object.defineProperty(w, "name", {
                configurable: !0,
                value: h ? "".concat(h, " ", I) : I
            })
        }
        function ht(w, I) {
            if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
                return Reflect.metadata(w, I)
        }
        function yt(w, I, h, j) {
            function q(ut) {
                return ut instanceof h ? ut : new h(function(Wt) {
                    Wt(ut)
                }
                )
            }
            return new (h || (h = Promise))(function(ut, Wt) {
                function Kt(En) {
                    try {
                        qt(j.next(En))
                    } catch (at) {
                        Wt(at)
                    }
                }
                function Vn(En) {
                    try {
                        qt(j.throw(En))
                    } catch (at) {
                        Wt(at)
                    }
                }
                function qt(En) {
                    En.done ? ut(En.value) : q(En.value).then(Kt, Vn)
                }
                qt((j = j.apply(w, I || [])).next())
            }
            )
        }
        function Dt(w, I) {
            var h = {
                label: 0,
                sent: function() {
                    if (ut[0] & 1)
                        throw ut[1];
                    return ut[1]
                },
                trys: [],
                ops: []
            }, j, q, ut, Wt;
            return Wt = {
                next: Kt(0),
                throw: Kt(1),
                return: Kt(2)
            },
            typeof Symbol == "function" && (Wt[Symbol.iterator] = function() {
                return this
            }
            ),
            Wt;
            function Kt(qt) {
                return function(En) {
                    return Vn([qt, En])
                }
            }
            function Vn(qt) {
                if (j)
                    throw new TypeError("Generator is already executing.");
                for (; Wt && (Wt = 0,
                qt[0] && (h = 0)),
                h; )
                    try {
                        if (j = 1,
                        q && (ut = qt[0] & 2 ? q.return : qt[0] ? q.throw || ((ut = q.return) && ut.call(q),
                        0) : q.next) && !(ut = ut.call(q, qt[1])).done)
                            return ut;
                        switch (q = 0,
                        ut && (qt = [qt[0] & 2, ut.value]),
                        qt[0]) {
                        case 0:
                        case 1:
                            ut = qt;
                            break;
                        case 4:
                            return h.label++,
                            {
                                value: qt[1],
                                done: !1
                            };
                        case 5:
                            h.label++,
                            q = qt[1],
                            qt = [0];
                            continue;
                        case 7:
                            qt = h.ops.pop(),
                            h.trys.pop();
                            continue;
                        default:
                            if (ut = h.trys,
                            !(ut = ut.length > 0 && ut[ut.length - 1]) && (qt[0] === 6 || qt[0] === 2)) {
                                h = 0;
                                continue
                            }
                            if (qt[0] === 3 && (!ut || qt[1] > ut[0] && qt[1] < ut[3])) {
                                h.label = qt[1];
                                break
                            }
                            if (qt[0] === 6 && h.label < ut[1]) {
                                h.label = ut[1],
                                ut = qt;
                                break
                            }
                            if (ut && h.label < ut[2]) {
                                h.label = ut[2],
                                h.ops.push(qt);
                                break
                            }
                            ut[2] && h.ops.pop(),
                            h.trys.pop();
                            continue
                        }
                        qt = I.call(w, h)
                    } catch (En) {
                        qt = [6, En],
                        q = 0
                    } finally {
                        j = ut = 0
                    }
                if (qt[0] & 5)
                    throw qt[1];
                return {
                    value: qt[0] ? qt[1] : void 0,
                    done: !0
                }
            }
        }
        var St = Object.create ? function(w, I, h, j) {
            j === void 0 && (j = h);
            var q = Object.getOwnPropertyDescriptor(I, h);
            (!q || ("get"in q ? !I.__esModule : q.writable || q.configurable)) && (q = {
                enumerable: !0,
                get: function() {
                    return I[h]
                }
            }),
            Object.defineProperty(w, j, q)
        }
        : function(w, I, h, j) {
            j === void 0 && (j = h),
            w[j] = I[h]
        }
        ;
        function L(w, I) {
            for (var h in w)
                h !== "default" && !Object.prototype.hasOwnProperty.call(I, h) && St(I, w, h)
        }
        function V(w) {
            var I = typeof Symbol == "function" && Symbol.iterator
              , h = I && w[I]
              , j = 0;
            if (h)
                return h.call(w);
            if (w && typeof w.length == "number")
                return {
                    next: function() {
                        return w && j >= w.length && (w = void 0),
                        {
                            value: w && w[j++],
                            done: !w
                        }
                    }
                };
            throw new TypeError(I ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function x(w, I) {
            var h = typeof Symbol == "function" && w[Symbol.iterator];
            if (!h)
                return w;
            var j = h.call(w), q, ut = [], Wt;
            try {
                for (; (I === void 0 || I-- > 0) && !(q = j.next()).done; )
                    ut.push(q.value)
            } catch (Kt) {
                Wt = {
                    error: Kt
                }
            } finally {
                try {
                    q && !q.done && (h = j.return) && h.call(j)
                } finally {
                    if (Wt)
                        throw Wt.error
                }
            }
            return ut
        }
        function _t() {
            for (var w = [], I = 0; I < arguments.length; I++)
                w = w.concat(x(arguments[I]));
            return w
        }
        function H() {
            for (var w = 0, I = 0, h = arguments.length; I < h; I++)
                w += arguments[I].length;
            for (var j = Array(w), q = 0, I = 0; I < h; I++)
                for (var ut = arguments[I], Wt = 0, Kt = ut.length; Wt < Kt; Wt++,
                q++)
                    j[q] = ut[Wt];
            return j
        }
        function g(w, I, h) {
            if (h || arguments.length === 2)
                for (var j = 0, q = I.length, ut; j < q; j++)
                    (ut || !(j in I)) && (ut || (ut = Array.prototype.slice.call(I, 0, j)),
                    ut[j] = I[j]);
            return w.concat(ut || Array.prototype.slice.call(I))
        }
        function X(w) {
            return this instanceof X ? (this.v = w,
            this) : new X(w)
        }
        function bt(w, I, h) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var j = h.apply(w, I || []), q, ut = [];
            return q = {},
            Wt("next"),
            Wt("throw"),
            Wt("return"),
            q[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            q;
            function Wt(m) {
                j[m] && (q[m] = function(Y) {
                    return new Promise(function(ct, vt) {
                        ut.push([m, Y, ct, vt]) > 1 || Kt(m, Y)
                    }
                    )
                }
                )
            }
            function Kt(m, Y) {
                try {
                    Vn(j[m](Y))
                } catch (ct) {
                    at(ut[0][3], ct)
                }
            }
            function Vn(m) {
                m.value instanceof X ? Promise.resolve(m.value.v).then(qt, En) : at(ut[0][2], m)
            }
            function qt(m) {
                Kt("next", m)
            }
            function En(m) {
                Kt("throw", m)
            }
            function at(m, Y) {
                m(Y),
                ut.shift(),
                ut.length && Kt(ut[0][0], ut[0][1])
            }
        }
        function B(w) {
            var I, h;
            return I = {},
            j("next"),
            j("throw", function(q) {
                throw q
            }),
            j("return"),
            I[Symbol.iterator] = function() {
                return this
            }
            ,
            I;
            function j(q, ut) {
                I[q] = w[q] ? function(Wt) {
                    return (h = !h) ? {
                        value: X(w[q](Wt)),
                        done: !1
                    } : ut ? ut(Wt) : Wt
                }
                : ut
            }
        }
        function Pt(w) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var I = w[Symbol.asyncIterator], h;
            return I ? I.call(w) : (w = typeof V == "function" ? V(w) : w[Symbol.iterator](),
            h = {},
            j("next"),
            j("throw"),
            j("return"),
            h[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            h);
            function j(ut) {
                h[ut] = w[ut] && function(Wt) {
                    return new Promise(function(Kt, Vn) {
                        Wt = w[ut](Wt),
                        q(Kt, Vn, Wt.done, Wt.value)
                    }
                    )
                }
            }
            function q(ut, Wt, Kt, Vn) {
                Promise.resolve(Vn).then(function(qt) {
                    ut({
                        value: qt,
                        done: Kt
                    })
                }, Wt)
            }
        }
        function U(w, I) {
            return Object.defineProperty ? Object.defineProperty(w, "raw", {
                value: I
            }) : w.raw = I,
            w
        }
        var F = Object.create ? function(w, I) {
            Object.defineProperty(w, "default", {
                enumerable: !0,
                value: I
            })
        }
        : function(w, I) {
            w.default = I
        }
        ;
        function Et(w) {
            if (w && w.__esModule)
                return w;
            var I = {};
            if (w != null)
                for (var h in w)
                    h !== "default" && Object.prototype.hasOwnProperty.call(w, h) && St(I, w, h);
            return F(I, w),
            I
        }
        function P(w) {
            return w && w.__esModule ? w : {
                default: w
            }
        }
        function pt(w, I, h, j) {
            if (h === "a" && !j)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof I == "function" ? w !== I || !j : !I.has(w))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return h === "m" ? j : h === "a" ? j.call(w) : j ? j.value : I.get(w)
        }
        function l(w, I, h, j, q) {
            if (j === "m")
                throw new TypeError("Private method is not writable");
            if (j === "a" && !q)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof I == "function" ? w !== I || !q : !I.has(w))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return j === "a" ? q.call(w, h) : q ? q.value = h : I.set(w, h),
            h
        }
        function sn(w, I) {
            if (I === null || typeof I != "object" && typeof I != "function")
                throw new TypeError("Cannot use 'in' operator on non-object");
            return typeof w == "function" ? I === w : w.has(I)
        }
        var b = A(56340)
          , M = "Data."
          , D = "zC."
          , K = "Release.AudienceGroup"
          , tt = "WAC.Ring"
          , R = "App.Name"
          , Gt = "App.Platform"
          , cn = "App.Version"
          , Yt = "f998cc5ba4d448d6a1e8e913ff18be94-dd122e0a-fcf8-4dc5-9dbb-6afac5325183-7405"
          , st = "b22a201c3f1d41d28ccc399ba6cc9ca2-1972c77f-1f79-4283-a0f9-b4ddc4646f55-7121"
          , z = void 0;
        function it(w, I, h, j) {
            var q = !0;
            if (I)
                for (var ut = function(En) {
                    var at = En.classification
                      , m = En.dataType
                      , Y = En.name;
                    if (at && !(at === 4 || at === 1 || j === 2 && at === 32 || j === 3 && at === 2048))
                        return q = !1,
                        "break";
                    if (j === 3 && h && m !== 3 && m !== 1 && m !== 2 && Y !== "OTelJS.Version" && Y !== "OTelJS.Sink")
                        return (0,
                        b.uf)(0, 1, function() {
                            return "DNM: Invalid field type " + Y
                        }),
                        q = !1,
                        "break";
                    var ct = void 0;
                    h ? Y.substr(0, 3) === D ? ct = D + M + Y.substr(3) : ct = M + Y : ct = Y;
                    var vt = void 0;
                    switch (m) {
                    case 3:
                        vt = 6;
                        break;
                    case 2:
                        vt = 4;
                        break;
                    case 4:
                        vt = 8;
                        break;
                    case 0:
                        return w[ct] = typeof En.value == "string" ? En.value.substr(0, 25e3) : En.value,
                        "continue";
                    case 1:
                    default:
                        return w[ct] = En.value,
                        "continue"
                    }
                    var zt = {
                        value: En.value,
                        propertyType: vt
                    };
                    w[ct] = zt
                }, Wt = 0, Kt = I; Wt < Kt.length; Wt++) {
                    var Vn = Kt[Wt]
                      , qt = ut(Vn);
                    if (qt === "break")
                        break
                }
            return q
        }
        function k(w, I) {
            try {
                return w()
            } catch (h) {
                return (0,
                b.H)(1, "1DS Sink", h),
                I
            }
        }
        function $(w) {
            var I;
            return w.timestamp ? I = new Date(w.timestamp) : I = new Date,
            I
        }
        function Ot(w, I) {
            for (var h = function(ut) {
                var Wt = I[ut];
                if (!Wt.processEvent(w))
                    return (0,
                    b.uf)(2, 1, function() {
                        return "".concat(w.eventName, " suppressed by ").concat(Wt.name)
                    }),
                    {
                        value: !1
                    }
            }, j = 0; j < I.length; j++) {
                var q = h(j);
                if (typeof q == "object")
                    return q.value
            }
            return !0
        }
        var Ut = "App.Name"
          , Q = "App.Version"
          , Z = "App.Platform"
          , nt = "User.PrimaryIdentityHash"
          , mt = "User.PrimaryIdentitySpace"
          , Lt = "User.TenantId"
          , At = "User.IsAnonymous"
          , Sn = "Session.Id";
        function Nn(w) {
            (0,
            b.uf)(0, 1, function() {
                return "Invalid " + w
            })
        }
        var $t = /^((0|[1-9]\d*)\.){0,3}(0|[1-9]\d*)([-+][-+0-9a-zA-Z\.]+)?$/;
        function f(w) {
            function I(Kt) {
                return typeof w[Kt] == "string" ? !0 : (Nn(Kt),
                !1)
            }
            var h = I(Ut) && I(Q) && I(Z) && I(Sn)
              , j = w[At];
            if ((j === !1 || typeof j == "undefined") && (h = h && I(nt) && I(mt)),
            !h)
                return h;
            var q = w[Q];
            $t.test(q) || (Nn(Q),
            h = !1);
            var ut = /^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/
              , Wt = w[Lt];
            return Wt && (!I(Lt) || !ut.test(Wt)) && (Nn(Lt),
            h = !1),
            ut.test(w[Sn]) || (Nn(Sn),
            h = !1),
            h
        }
        var Gn = A(47064), Zn = A(10402), xe = A(40821), Le = A(43298), un = A(1785), Ie = A(43161), Vt, Yn = "Failed", be = Yn + "MonitorAjax", he = "Track", Te = "Start", ue = "Stop", Se = "Event", ee = "AuthContext", Jn = "Exception", we = "Local", Fe = "Session", le = "Storage", Jt = "Browser", Dn = "Cannot", _ = "Buffer", bn = "InstrumentationKey", re = (0,
        un.By)({
            CRITICAL: 1,
            WARNING: 2
        }), ve = (0,
        un.By)((Vt = {},
        Vt[Jt + "DoesNotSupport" + we + le] = 0,
        Vt[Jt + Dn + "Read" + we + le] = 1,
        Vt[Jt + Dn + "Read" + Fe + le] = 2,
        Vt[Jt + Dn + "Write" + we + le] = 3,
        Vt[Jt + Dn + "Write" + Fe + le] = 4,
        Vt[Jt + Yn + "RemovalFrom" + we + le] = 5,
        Vt[Jt + Yn + "RemovalFrom" + Fe + le] = 6,
        Vt[Dn + "SendEmptyTelemetry"] = 7,
        Vt.ClientPerformanceMathError = 8,
        Vt["ErrorParsingAI" + Fe + "Cookie"] = 9,
        Vt.ErrorPVCalc = 10,
        Vt[Jn + "WhileLoggingError"] = 11,
        Vt[Yn + "AddingTelemetryTo" + _] = 12,
        Vt[be + "Abort"] = 13,
        Vt[be + "Dur"] = 14,
        Vt[be + "Open"] = 15,
        Vt[be + "RSC"] = 16,
        Vt[be + "Send"] = 17,
        Vt[be + "GetCorrelationHeader"] = 18,
        Vt[Yn + "ToAddHandlerForOnBeforeUnload"] = 19,
        Vt[Yn + "ToSendQueuedTelemetry"] = 20,
        Vt[Yn + "ToReportDataLoss"] = 21,
        Vt["Flush" + Yn] = 22,
        Vt.MessageLimitPerPVExceeded = 23,
        Vt.MissingRequiredFieldSpecification = 24,
        Vt.NavigationTimingNotSupported = 25,
        Vt.OnError = 26,
        Vt[Fe + "RenewalDateIsZero"] = 27,
        Vt.SenderNotInitialized = 28,
        Vt[Te + he + Se + Yn] = 29,
        Vt[ue + he + Se + Yn] = 30,
        Vt[Te + he + Yn] = 31,
        Vt[ue + he + Yn] = 32,
        Vt.TelemetrySampledAndNotSent = 33,
        Vt[he + Se + Yn] = 34,
        Vt[he + Jn + Yn] = 35,
        Vt[he + "Metric" + Yn] = 36,
        Vt[he + "PV" + Yn] = 37,
        Vt[he + "PV" + Yn + "Calc"] = 38,
        Vt[he + "Trace" + Yn] = 39,
        Vt["Transmission" + Yn] = 40,
        Vt[Yn + "ToSet" + le + _] = 41,
        Vt[Yn + "ToRestore" + le + _] = 42,
        Vt.InvalidBackendResponse = 43,
        Vt[Yn + "ToFixDepricatedValues"] = 44,
        Vt.InvalidDurationValue = 45,
        Vt.TelemetryEnvelopeInvalid = 46,
        Vt.CreateEnvelopeError = 47,
        Vt[Dn + "SerializeObject"] = 48,
        Vt[Dn + "SerializeObjectNonSerializable"] = 49,
        Vt.CircularReferenceDetected = 50,
        Vt["Clear" + ee + Yn] = 51,
        Vt[Jn + "Truncated"] = 52,
        Vt.IllegalCharsInName = 53,
        Vt.ItemNotInArray = 54,
        Vt.MaxAjaxPerPVExceeded = 55,
        Vt.MessageTruncated = 56,
        Vt.NameTooLong = 57,
        Vt.SampleRateOutOfRange = 58,
        Vt["Set" + ee + Yn] = 59,
        Vt["Set" + ee + Yn + "AccountName"] = 60,
        Vt.StringValueTooLong = 61,
        Vt.StartCalledMoreThanOnce = 62,
        Vt.StopCalledWithoutStart = 63,
        Vt["TelemetryInitializer" + Yn] = 64,
        Vt.TrackArgumentsNotSpecified = 65,
        Vt.UrlTooLong = 66,
        Vt[Fe + le + _ + "Full"] = 67,
        Vt[Dn + "AccessCookie"] = 68,
        Vt.IdTooLong = 69,
        Vt.InvalidEvent = 70,
        Vt[be + "SetRequestHeader"] = 71,
        Vt["Send" + Jt + "InfoOnUserInit"] = 72,
        Vt["Plugin" + Jn] = 73,
        Vt["Notification" + Jn] = 74,
        Vt.SnippetScriptLoadFailure = 99,
        Vt["Invalid" + bn] = 100,
        Vt[Dn + "ParseAiBlobValue"] = 101,
        Vt.InvalidContentBlob = 102,
        Vt[he + "PageAction" + Se + Yn] = 103,
        Vt[Yn + "AddingCustomDefinedRequestContext"] = 104,
        Vt["InMemory" + le + _ + "Full"] = 105,
        Vt[bn + "Deprecation"] = 106,
        Vt)), _e = (0,
        un.By)({
            NotSet: 0,
            Pii_DistinguishedName: 1,
            Pii_GenericData: 2,
            Pii_IPV4Address: 3,
            Pii_IPv6Address: 4,
            Pii_MailSubject: 5,
            Pii_PhoneNumber: 6,
            Pii_QueryString: 7,
            Pii_SipAddress: 8,
            Pii_SmtpAddress: 9,
            Pii_Identity: 10,
            Pii_Uri: 11,
            Pii_Fqdn: 12,
            Pii_IPV4AddressLegacy: 13,
            CustomerContent_GenericContent: 32
        }), Oe = (0,
        un.By)({
            Normal: 1,
            CostDeferred: 2,
            RealTime: 3,
            Immediate: 4
        }), Ae = (0,
        un.By)({
            Unspecified: 0,
            String: 1,
            Int32: 2,
            UInt32: 3,
            Int64: 4,
            UInt64: 5,
            Double: 6,
            Bool: 7,
            Guid: 8,
            DateTime: 9
        }), He = (0,
        un.By)({
            Normal: 1,
            Critical: 2
        }), Xe = (0,
        un.By)({
            NONE: 0,
            ERROR: 1,
            WARNING: 2,
            INFORMATION: 3
        }), Ee = (0,
        Ie.FL)((0,
        Le.uc)((0,
        Le.uc)({}, ve), (0,
        un.By)({
            AuthHandShakeError: 501,
            AuthRedirectFail: 502,
            BrowserCannotReadLocalStorage: 503,
            BrowserCannotWriteLocalStorage: 504,
            BrowserDoesNotSupportLocalStorage: 505,
            CannotParseBiBlobValue: 506,
            CannotParseDataAttribute: 507,
            CVPluginNotAvailable: 508,
            DroppedEvent: 509,
            ErrorParsingAISessionCookie: 510,
            ErrorProvidedChannels: 511,
            FailedToGetCookies: 512,
            FailedToInitializeCorrelationVector: 513,
            FailedToInitializeSDK: 514,
            InvalidContentBlob: 515,
            InvalidCorrelationValue: 516,
            SessionRenewalDateIsZero: 517,
            SendPostOnCompleteFailure: 518,
            PostResponseHandler: 519,
            SDKNotInitialized: 520
        }))), ar = 2;
        function rr(w) {
            switch (w) {
            case OneDSEndpoint.PUBLIC:
                return "https://office-c.events.data.microsoft.com/OneCollector/1.0/";
            case OneDSEndpoint.EUDB:
                return "https://eu-office-c.events.data.microsoft.com/OneCollector/1.0/";
            default:
                return
            }
        }
        var W = function() {
            function w(I, h) {
                var j = this;
                this.eventsProcessed = 0,
                this.eventsSent = 0,
                this.eventsDiscarded = 0;
                var q = []
                  , ut = !1
                  , Wt = !0
                  , Kt = {
                    name: "DiagnosticLevel",
                    processEvent: function(vt) {
                        var zt = vt.eventFlags.diagnosticLevel;
                        return ut || zt === 10 || zt === 110 || zt === 120
                    }
                }
                  , Vn = {}
                  , qt = (0,
                xe.GW)();
                this.init = function() {
                    return Wt = Wt && f(Vn),
                    Wt
                }
                ,
                this.getOneDSTelemetryEvent = function(vt) {
                    return at(vt, {
                        eventType: 1
                    })
                }
                ,
                this.getOneDSCustomerContent = function(vt) {
                    var zt = vt.telemetryProperties.customerContentVersion;
                    if (zt && Math.floor(zt) <= ar && vt.telemetryProperties.customerContentType === 1)
                        return at(vt, {
                            eventType: 2
                        })
                }
                ;
                var En = function(vt, zt) {
                    if (zt === 2)
                        return st;
                    if (!vt.telemetryProperties || zt === 1 && !vt.telemetryProperties.ariaTenantToken) {
                        (0,
                        b.uf)(0, 1, function() {
                            return "Missing Aria Token"
                        });
                        return
                    }
                    if (zt === 1)
                        return vt.telemetryProperties.ariaTenantToken
                }
                  , at = function(vt, zt) {
                    var xt = (0,
                    Gn.vE)(vt);
                    if (Ot(xt, q)) {
                        var nn = $(xt).toISOString()
                          , _n = {
                            "Event.Name": xt.eventName,
                            "Event.Source": "OTelJS",
                            "Event.Time": {
                                value: nn,
                                propertyType: Ae.DateTime
                            }
                        };
                        j.eventsProcessed++,
                        _n["Event.Sequence"] = {
                            value: j.eventsProcessed,
                            propertyType: Ae.Int64
                        },
                        _n["Event.Id"] = qt + "." + j.eventsProcessed;
                        for (var Mn in Vn)
                            _n[Mn] = Vn[Mn];
                        if (!it(_n, xt.dataFields, !0, zt.eventType)) {
                            (0,
                            b.uf)(0, 1, function() {
                                return "Dropping Event: " + xt.eventName
                            });
                            return
                        }
                        var Qt = "custom";
                        xt.eventContract && (xt.eventContract.name && (_n["Event.Contract"] = xt.eventContract.name,
                        Qt += "." + xt.eventContract.name.toLowerCase().replace(/\./g, "_")),
                        it(_n, xt.eventContract.dataFields, !1, zt.eventType));
                        var Ln = En(xt, zt.eventType);
                        if (!Ln)
                            return;
                        var xn = {
                            iKey: Ln,
                            name: xt.eventName,
                            data: _n,
                            time: nn,
                            baseType: Qt,
                            ext: {
                                sdk: {
                                    seq: j.eventsProcessed
                                }
                            }
                        };
                        return xn
                    }
                };
                this.addPreprocessor = function(vt) {
                    q.push(vt)
                }
                ,
                this.getOneDSPersistentDataFields = function() {
                    return Vn
                }
                ,
                this.getPreprocessors = function() {
                    return q
                }
                ;
                var m = function(vt) {
                    it(Vn, vt, !1, 1)
                };
                this.addPersistentDataFields = m,
                this.setOptionalEventsEnabled = function(vt) {
                    ut = vt
                }
                ,
                this.setFullEventsEnabled = this.setOptionalEventsEnabled,
                h.enableOptionalEvents && (ut = !0),
                m(I);
                var Y = h.coreFields;
                if (Y) {
                    m(Zn.gV.getFields(Y.app)),
                    m(Zn.n5.getFields(Y.user)),
                    m(Zn.z_.getFields(Y.session));
                    var ct = Y.release;
                    ct && m(Zn.cl.getFields(ct))
                }
                this.addPreprocessor(Kt)
            }
            return w
        }()
          , Ct = A(4150)
          , Ht = A(94077)
          , pn = "HttpManager:_sendBatches"
          , Pn = "PrivacyGuard:_processTelemetry"
          , An = function() {
            function w(I, h, j) {
                this.start = Date.now(),
                this.name = I,
                this.isAsync = j === !0,
                this.payload = h
            }
            return w.prototype.isChildEvt = function() {
                return !1
            }
            ,
            w.prototype.complete = function() {
                this.time = Date.now() - this.start,
                this.exTime = this.time
            }
            ,
            w
        }()
          , $n = function() {
            function w(I) {
                this._callbacks = I
            }
            return w.prototype.create = function(I, h, j) {
                if (I === pn || I === Pn) {
                    var q = new An(I,h,j);
                    return q
                }
                return null
            }
            ,
            w.prototype.fire = function(I) {
                if (I && I.complete(),
                this._callbacks)
                    switch (I.name) {
                    case pn:
                        this.handleSendBatches(I);
                        break;
                    case Pn:
                        this.handlePrivacyGuardNotification(I);
                        break
                    }
            }
            ,
            w.prototype.setCtx = function(I, h) {}
            ,
            w.prototype.getCtx = function(I) {}
            ,
            w.prototype.handleSendBatches = function(I) {
                if (this._callbacks.requestProcessingStats) {
                    var h = 0;
                    if (I.payload) {
                        var j = I.payload();
                        if (j.batches)
                            for (var q in j.batches)
                                h += j.batches[q].evts.length
                    }
                    this._callbacks.requestProcessingStats(I.time || 0, h)
                }
            }
            ,
            w.prototype.handlePrivacyGuardNotification = function(I) {
                this._callbacks.privacyGuardStats && I.time && I.time > 0 && this._callbacks.privacyGuardStats(I.time)
            }
            ,
            w
        }();
        function Re(w, I) {
            var h = {
                instrumentationKey: I,
                endpointUrl: w.endpointUrl,
                channelConfiguration: {
                    eventsLimitInMem: w.eventsLimitInMem,
                    httpXHROverride: w.httpXHROverride,
                    setTimeoutOverride: w.setTimeoutOverride,
                    clearTimeoutOverride: w.clearTimeoutOverride,
                    ignoreMc1Ms0CookieProcessing: !0,
                    disableOptimizeObj: !0
                },
                disableCookiesUsage: !0,
                extensionConfig: N({}, w.extensionConfig)
            };
            w.stats && w.stats.networkStats && h.channelConfiguration && (h.channelConfiguration.payloadListener = function(q, ut) {
                var Wt, Kt = ut || q;
                Kt.data && ((Wt = w.stats) === null || Wt === void 0 || Wt.networkStats(Kt.data.length))
            }
            );
            var j = new vn;
            return j.initialize(h, w.plugins),
            j.setUploadFrequency(w.uploadFrequency),
            w.notificationListener && j.addNotificationListener(w.notificationListener),
            w.stats && j.setPerfMgr(new $n(w.stats)),
            j
        }
        var Ne = function(w, I) {
            I && I.addNotificationListener({
                eventsSent: function(h) {
                    (0,
                    b.uf)(2, 2, function() {
                        return "Successfully sent ".concat(h.length, " event(s)")
                    }),
                    (0,
                    b.uf)(3, 2, function() {
                        return "Sent event(s) details : ".concat(JSON.stringify(h, null, 2))
                    }),
                    w.eventsSent += h.length
                },
                eventsDiscarded: function(h, j) {
                    (0,
                    b.uf)(0, 2, function() {
                        return "Discarded ".concat(h.length, " event(s) because ").concat(j)
                    }),
                    (0,
                    b.uf)(3, 2, function() {
                        return "Discarded event(s) details : ".concat(JSON.stringify(h, null, 2))
                    }),
                    w.eventsDiscarded += h.length
                }
            })
        }
          , vn = function(w) {
            y(I, w);
            function I() {
                return w !== null && w.apply(this, arguments) || this
            }
            return I.prototype.initialize = function(h, j) {
                this._postChannel = new Ht.Z;
                var q = j != null ? j : [];
                h.channels = [[this._postChannel]],
                h.extensionConfig = h.extensionConfig || [],
                h.extensionConfig[this._postChannel.identifier] = N(N({}, h.channelConfiguration), h.extensionConfig[this._postChannel.identifier]);
                try {
                    w.prototype.initialize.call(this, h, q)
                } catch (ut) {
                    this.logger.warnToConsole("Failed to initialize SDK." + ut)
                }
            }
            ,
            I.prototype.setUploadFrequency = function(h) {
                if (!(!this._postChannel || !h)) {
                    var j = h / 1e3
                      , q = j / 2
                      , ut = {};
                    ut.OTelCustomTransmissionProfile = [j, q],
                    this._postChannel._loadTransmitProfiles(ut),
                    this._postChannel._setTransmitProfile("OTelCustomTransmissionProfile")
                }
            }
            ,
            I.prototype.flush = function(h) {
                this._postChannel && this._postChannel.flush(h)
            }
            ,
            I.prototype.shutdown = function() {
                this._postChannel && this._postChannel.teardown()
            }
            ,
            I
        }(Ct.Z)
          , Tn = function(w) {
            y(I, w);
            function I(h, j) {
                var q = w.call(this, h, j) || this, ut;
                q.sendTelemetryEvent = function(Kt) {
                    return k(function() {
                        var Vn = q.getOneDSTelemetryEvent(Kt);
                        Vn && ut && ut.track(Vn)
                    }, z)
                }
                ,
                q.sendCustomerContent = function(Kt) {}
                ,
                q.sendNonStandardEvent = function(Kt, Vn) {
                    var qt = !1;
                    Wt.forEach(function(En) {
                        En.canHandle(Vn) && (En.processEvent(Kt),
                        qt = !0)
                    }),
                    qt || (0,
                    b.uf)(0, 1, function() {
                        return "Missing Handler for " + Vn + "to process" + Kt.eventName
                    })
                }
                ,
                q.flush = function(Kt) {
                    ut == null || ut.flush(Kt),
                    Wt.forEach(function(Vn) {
                        Vn.flush(Kt)
                    })
                }
                ,
                q.shutdown = function() {
                    try {
                        ut == null || ut.shutdown(),
                        Wt.forEach(function(Kt) {
                            Kt.shutdown()
                        })
                    } catch (Kt) {
                        (0,
                        b.uf)(0, 2, function() {
                            return "An error occurred on shutdown"
                        })
                    }
                }
                ;
                var Wt = j.nonStandardEventHandlers || [];
                if (ut = Re(j, Yt),
                Wt.forEach(function(Kt) {
                    Kt.initialize(q, j)
                }),
                !j.endpointUrl)
                    throw new Error("Missing Endpoint Url");
                return j.disableStatsTracking || Ne(q, ut),
                q
            }
            return I
        }(W)
    }
    ,
    10402: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            cS: ()=>a,
            cl: ()=>St,
            gV: ()=>ht,
            n5: ()=>J,
            z_: ()=>yt
        });
        var C = A(48298);
        function y(L, V) {
            return L ? L + "." + V : V
        }
        function N(L, V, x, _t) {
            x && _t.push((0,
            C.dt)("".concat(y(L, V)), x))
        }
        function o(L, V, x, _t) {
            typeof x == "boolean" && _t.push((0,
            C.UL)("".concat(y(L, V)), x))
        }
        function T(L, V, x, _t) {
            typeof x == "number" && _t.push((0,
            C.Kq)("".concat(y(L, V)), x))
        }
        var v = {
            getFields: function(L) {
                var V = "Activity.Result"
                  , x = "Office.System.Result"
                  , _t = [];
                return T(V, "Code", L.code, _t),
                N(V, "Type", L.type, _t),
                T(V, "Tag", L.tag, _t),
                o(V, "IsExpected", L.isExpected, _t),
                _t.push((0,
                C.dt)("zC.Activity.Result", x)),
                _t
            }
        }
          , a = {
            contractName: "Office.System.Activity",
            getFields: function(L) {
                var V = "Activity"
                  , x = [];
                return N(V, "CV", L.cV, x),
                T(V, "Duration", L.duration, x),
                T(V, "Count", L.count, x),
                T(V, "AggMode", L.aggMode, x),
                o(V, "Success", L.success, x),
                L.result && x.push.apply(x, v.getFields(L.result)),
                x.push((0,
                C.dt)("zC.Activity", this.contractName)),
                x
            }
        }
          , J = {
            getFields: function(L) {
                var V = "User"
                  , x = [];
                return N(V, "PrimaryIdentityHash", L.primaryIdentityHash, x),
                N(V, "PrimaryIdentitySpace", L.primaryIdentitySpace, x),
                N(V, "TenantId", L.tenantId, x),
                N(V, "TenantGroup", L.tenantGroup, x),
                o(V, "IsAnonymous", L.isAnonymous, x),
                x
            }
        }
          , ft = {
            getFields: function(L, V) {
                var x = [];
                return N(L, "Name", V.name, x),
                N(L, "State", V.state, x),
                x
            }
        }
          , gt = {
            getFields: function(L) {
                var V = "UserAction"
                  , x = [];
                return T(V, "Id", L.id, x),
                N(V, "Name", L.name, x),
                N(V, "CommandSurface", L.commandSurface, x),
                N(V, "ParentName", L.parentName, x),
                N(V, "TriggerMethod", L.triggerMethod, x),
                T(V, "TimeOffsetMs", L.timeOffsetMs, x),
                x
            }
        }
          , ht = {
            getFields: function(L) {
                var V = "App"
                  , x = [];
                return N(V, "Name", L.name, x),
                N(V, "Platform", L.platform, x),
                N(V, "Version", L.version, x),
                x
            }
        }
          , yt = {
            getFields: function(L) {
                var V = "Session"
                  , x = [];
                return N(V, "Id", L.id, x),
                N(V, "EcsETag", L.ecsETag, x),
                x
            }
        }
          , Dt = {
            getFields: function(L) {
                var V = [];
                return V.push((0,
                C.dt)("Pillar", L.pillar)),
                V.push((0,
                C.dt)("Veto", L.veto)),
                V.push((0,
                C.UL)("IsIntentional", L.isIntentional)),
                V.push((0,
                C.UL)("IsInternal", L.isInternal)),
                V.push((0,
                C.UL)("AlertOnPillar", L.alertOnPillar)),
                V.push((0,
                C.UL)("IsSessionEndingError", L.isSessionEndingError)),
                o(void 0, "InStaging", L.inStaging, V),
                V
            }
        }
          , St = {
            getFields: function(L) {
                var V = "Release"
                  , x = [];
                return N(V, "AudienceGroup", L.audienceGroup, x),
                x
            }
        }
    }
    ,
    48298: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            Kq: ()=>y,
            UL: ()=>C,
            b_: ()=>N,
            dt: ()=>o
        });
        function C(v, a, J) {
            return {
                name: v,
                dataType: 1,
                value: a,
                classification: J || 4
            }
        }
        function y(v, a, J) {
            return {
                name: v,
                dataType: 2,
                value: a,
                classification: J || 4
            }
        }
        function N(v, a, J) {
            return {
                name: v,
                dataType: 3,
                value: a,
                classification: J || 4
            }
        }
        function o(v, a, J) {
            return {
                name: v,
                dataType: 0,
                value: a,
                classification: J || 4
            }
        }
        function T(v, a, J) {
            return {
                name: v,
                dataType: 4,
                value: a,
                classification: J || 4
            }
        }
    }
    ,
    56340: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            H: ()=>T,
            uf: ()=>o
        });
        function C() {
            var v = [];
            return {
                fireEvent: function(a) {
                    v.forEach(function(J) {
                        return J(a)
                    })
                },
                addListener: function(a) {
                    a && v.push(a)
                }
            }
        }
        var y = C();
        function N() {
            return y
        }
        function o(v, a, J) {
            y.fireEvent({
                level: v,
                category: a,
                message: J
            })
        }
        function T(v, a, J) {
            o(0, v, function() {
                var ft = J instanceof Error ? J.message : "";
                return "".concat(a, ": ").concat(ft)
            })
        }
    }
    ,
    47064: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            Dw: ()=>Pt,
            Vp: ()=>bt,
            vE: ()=>B
        });
        var C = A(28530)
          , y = A(56340)
          , N = "."
          , o = {};
        function T(U, F) {
            if (U.substring(0, 7) === "Office" + N && U[U.length - 1] !== N)
                o[U] ? (F.ariaTenantToken && (o[U].ariaTenantToken = F.ariaTenantToken),
                F.dnmToken && (o[U].dnmToken = F.dnmToken)) : o[U] = F;
            else {
                (0,
                y.uf)(0, 0, function() {
                    return "Namespace: ".concat(U)
                });
                return
            }
        }
        function v(U, F) {
            for (var Et = U.length; Et > 0; ) {
                var P = U.substr(0, Et);
                if (o[P]) {
                    var pt = o[P];
                    return F.ariaTenantToken = pt.ariaTenantToken,
                    F.dnmToken = pt.dnmToken,
                    !0
                }
                Et = U.lastIndexOf(N, Et - 1)
            }
            return !1
        }
        function a() {
            o = {}
        }
        var J = 9007199254740991
          , ft = -J
          , gt = 98
          , ht = /^Office(\.[A-Z][a-zA-Z0-9]*){2,}$/
          , yt = /^[a-zA-Z0-9_\.]{1,95}$/;
        function Dt(U) {
            if (!St(U.eventName))
                throw new Error("Invalid eventName");
            var F = U.eventContract;
            if (F) {
                if (F.name && !L(F.name))
                    throw new Error("Invalid eventContract");
                V(F.dataFields)
            }
            V(U.dataFields)
        }
        function St(U) {
            return !U || U.length > gt ? !1 : ht.test(U)
        }
        function L(U) {
            return yt.test(U)
        }
        function V(U) {
            !U || U.forEach(function(F) {
                if (typeof F.name != "string" || !L(F.name))
                    throw new Error("Invalid dataField name");
                F.dataType === 2 && x(F.value)
            })
        }
        function x(U) {
            if (typeof U != "number" || !isFinite(U) || Math.floor(U) !== U || U < ft || U > J)
                throw new Error("Invalid integer ".concat(JSON.stringify(U)))
        }
        var _t = "4.13.12"
          , H = A(48298)
          , g = 2
          , X = 1e3
          , bt = -1;
        function B(U) {
            var F = {
                eventName: U.eventName,
                eventFlags: U.eventFlags || {},
                telemetryProperties: U.telemetryProperties ? (0,
                C.pi)({}, U.telemetryProperties) : {},
                dataFields: U.dataFields ? U.dataFields.slice() : [],
                timestamp: U.timestamp || new Date().getTime()
            };
            return U.eventContract && (F.eventContract = {
                name: U.eventContract.name,
                dataFields: U.eventContract.dataFields.slice()
            }),
            F
        }
        var Pt = function() {
            function U(F, Et, P) {
                var pt, l, sn;
                this.telemetrySinks = [],
                this.persistentDataFields = [],
                this.partAFields = [],
                this.eventQueue = [],
                this.config = P || {},
                F && (this.telemetrySinks = F.telemetrySinks,
                (pt = this.persistentDataFields).push.apply(pt, F.persistentDataFields),
                this.config = (0,
                C.pi)((0,
                C.pi)({}, F.getConfig()), this.config),
                (l = this.partAFields).push.apply(l, F.partAFields)),
                Et && (sn = this.persistentDataFields).push.apply(sn, Et)
            }
            return U.prototype.addEventContentType = function(F, Et) {
                F.push((0,
                H.Kq)("EventContent.Type", Et))
            }
            ,
            U.prototype.sendTelemetryEvent = function(F) {
                var Et = B(F)
                  , P = Et.telemetryProperties;
                if (P.nexusTenantToken = bt,
                !P.ariaTenantToken) {
                    var pt = v(Et.eventName, P);
                    if (!pt && !P.ariaTenantToken) {
                        (0,
                        y.uf)(0, 0, function() {
                            return "No tenant token: " + F.eventName
                        });
                        return
                    }
                }
                this.sendTelemetryEventInternal(Et, 1)
            }
            ,
            U.prototype.sendCustomerContent = function(F) {
                var Et = B(F)
                  , P = Et.telemetryProperties
                  , pt = P.customerContentVersion;
                return (!pt || pt > g) && (P.customerContentVersion = g),
                P.ariaTenantToken = void 0,
                P.nexusTenantToken = void 0,
                P.dnmToken = void 0,
                this.addEventContentType(Et.dataFields, 2),
                this.sendTelemetryEventInternal(Et, 2)
            }
            ,
            U.prototype.sendDirectNumericEvent = function(F) {
                var Et = B(F)
                  , P = Et.telemetryProperties;
                if (!P.dnmToken) {
                    var pt = v(Et.eventName, P);
                    if (!pt && !P.dnmToken) {
                        (0,
                        y.uf)(0, 0, function() {
                            return "No dnm token: " + Et.eventName
                        });
                        return
                    }
                }
                this.addEventContentType(Et.dataFields, 1),
                this.sendTelemetryEventInternal(Et, 3)
            }
            ,
            U.prototype.sendTelemetryEventInternal = function(F, Et) {
                if (Et !== 2 && (F.telemetryProperties.customerContentVersion || F.telemetryProperties.customerContentType)) {
                    (0,
                    y.uf)(0, 0, function() {
                        return "Customer content"
                    });
                    return
                }
                try {
                    if (this.telemetrySinks.length === 0) {
                        this.config.enableQueue && this.eventQueue.length < X ? this.eventQueue.push([F, Et]) : (0,
                        y.uf)(1, 0, function() {
                            return "No telemetry sinks are attached."
                        });
                        return
                    }
                    this.processTelemetryEvent(F, Et)
                } catch (P) {
                    (0,
                    y.H)(0, "SendTelemetryEvent", P);
                    return
                }
                this.telemetrySinks.forEach(function(P) {
                    try {
                        Et === 3 || Et === 2 ? P.sendNonStandardEvent && P.sendNonStandardEvent(F, Et) : P.sendTelemetryEvent(F)
                    } catch (pt) {}
                })
            }
            ,
            U.prototype.processTelemetryEvent = function(F, Et) {
                var P, pt, l;
                if (F.dataFields && ((l = F.dataFields) === null || l === void 0 || l.unshift((0,
                H.dt)("OTelJS.Version", _t)),
                Et !== 3 && this.persistentDataFields && (P = F.dataFields).unshift.apply(P, this.persistentDataFields)),
                this.partAFields.length > 0) {
                    var sn = F.eventContract || {
                        name: "",
                        dataFields: []
                    };
                    (pt = sn.dataFields).push.apply(pt, this.partAFields),
                    F.eventContract = sn
                }
                this.config.disableValidation || Dt(F)
            }
            ,
            U.prototype.addSink = function(F) {
                this.telemetrySinks.push(F),
                this.flushQueue()
            }
            ,
            U.prototype.flushQueue = function() {
                var F = this.eventQueue;
                if (this.eventQueue = [],
                this.telemetrySinks.length > 0)
                    for (var Et = 0, P = F; Et < P.length; Et++) {
                        var pt = P[Et]
                          , l = pt[0]
                          , sn = pt[1];
                        this.sendTelemetryEventInternal(l, sn)
                    }
            }
            ,
            U.prototype.setTenantToken = function(F, Et, P) {
                T(F, {
                    ariaTenantToken: Et,
                    nexusTenantToken: P
                })
            }
            ,
            U.prototype.setDNMToken = function(F, Et) {
                T(F, {
                    dnmToken: Et
                })
            }
            ,
            U.prototype.cloneEvent = function(F) {
                return B(F)
            }
            ,
            U.prototype.getConfig = function() {
                return this.config
            }
            ,
            U
        }()
    }
    ,
    11388: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            h: ()=>St
        });
        var C = A(28530)
          , y = A(47064)
          , N = A(10402)
          , o = A(56340)
          , T = 1
          , v = 0
          , a = function() {
            return Date.now() * 1e3
        };
        typeof window == "object" && typeof window.performance == "object" && "now"in window.performance && (a = function() {
            return Math.floor(window.performance.now()) * 1e3
        }
        );
        var J = function(L) {
            var V = a(), x, _t = (0,
            y.vE)(L.telemetryEvent);
            return {
                cv: L.parentCv.getNext(),
                eventName: L.telemetryEvent.eventName,
                dataFields: _t.dataFields,
                eventFlags: _t.eventFlags,
                telemetryProperties: _t.telemetryProperties,
                createChildActivity: function(H) {
                    return J({
                        telemetryEvent: H,
                        sendTelemetryEvent: L.sendTelemetryEvent,
                        parentCv: this.cv
                    })
                },
                setResult: function(H, g, X) {
                    this.result = {
                        code: H,
                        type: g,
                        tag: X
                    }
                },
                endNow: function() {
                    if (x) {
                        (0,
                        o.uf)(0, 0, function() {
                            return "Already ended"
                        });
                        return
                    }
                    this.success === void 0 && this.result === void 0 && (0,
                    o.uf)(1, 0, function() {
                        return "Activity does not have success or result set"
                    });
                    var H = a()
                      , g = H - V;
                    x = !0;
                    var X = {
                        duration: g,
                        count: T,
                        aggMode: v,
                        cV: this.cv.value,
                        success: this.success,
                        result: this.result
                    }
                      , bt = this.eventContract && this.eventContract.dataFields ? this.eventContract.dataFields : [];
                    return bt.push.apply(bt, N.cS.getFields(X)),
                    this.eventContract = {
                        name: N.cS.contractName,
                        dataFields: bt
                    },
                    L.sendTelemetryEvent(this)
                }
            }
        }, ft = A(48298), gt = {
            getFields: function(L) {
                var V = "Error"
                  , x = [];
                return x.push((0,
                ft.dt)("".concat(V, ".ErrorGroup"), L.errorGroup)),
                x.push((0,
                ft.Kq)("".concat(V, ".Tag"), L.tag)),
                L.code !== void 0 && x.push((0,
                ft.Kq)("".concat(V, ".Code"), L.code)),
                L.id !== void 0 && x.push((0,
                ft.Kq)("".concat(V, ".Id"), L.id)),
                L.count !== void 0 && x.push((0,
                ft.Kq)("".concat(V, ".Count"), L.count)),
                x
            }
        }, ht, yt = function() {
            function L(V) {
                this.value = V,
                this.nextChild = 0
            }
            return L.prototype.getNext = function() {
                return new L("".concat(this.value, ".").concat(++this.nextChild))
            }
            ,
            L
        }();
        function Dt() {
            if (!ht) {
                for (var L = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", V = 22, x = [], _t = 0; _t < V; _t++)
                    x.push(L.charAt(Math.floor(Math.random() * L.length)));
                ht = new yt(x.join(""))
            }
            return ht
        }
        var St = function(L) {
            (0,
            C.ZT)(V, L);
            function V(x, _t, H) {
                var g = L.call(this, x, _t, H) || this;
                return g.baseCv = Dt(),
                g
            }
            return V.prototype.createActivity = function(x) {
                return J({
                    sendTelemetryEvent: this.sendTelemetryEvent.bind(this),
                    telemetryEvent: x,
                    parentCv: this.baseCv
                })
            }
            ,
            V.prototype.sendActivity = function(x, _t, H, g) {
                return this.sendTelemetryEvent({
                    eventName: x,
                    eventContract: {
                        name: N.cS.contractName,
                        dataFields: N.cS.getFields(_t)
                    },
                    dataFields: H,
                    eventFlags: g
                })
            }
            ,
            V.prototype.sendError = function(x) {
                var _t = gt.getFields(x.error);
                return x.dataFields != null && _t.push.apply(_t, x.dataFields),
                this.sendTelemetryEvent({
                    eventName: x.eventName,
                    dataFields: _t,
                    eventFlags: x.eventFlags
                })
            }
            ,
            V.prototype.createCustomerContentActivity = function(x) {
                return J({
                    sendTelemetryEvent: this.sendCustomerContent.bind(this),
                    telemetryEvent: x,
                    parentCv: this.baseCv
                })
            }
            ,
            V
        }(y.Dw)
    }
    ,
    28530: (te,hn,A)=>{
        "use strict";
        A.d(hn, {
            ZT: ()=>y,
            pi: ()=>N
        });
        var C = function(b, M) {
            return C = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(D, K) {
                D.__proto__ = K
            }
            || function(D, K) {
                for (var tt in K)
                    Object.prototype.hasOwnProperty.call(K, tt) && (D[tt] = K[tt])
            }
            ,
            C(b, M)
        };
        function y(b, M) {
            if (typeof M != "function" && M !== null)
                throw new TypeError("Class extends value " + String(M) + " is not a constructor or null");
            C(b, M);
            function D() {
                this.constructor = b
            }
            b.prototype = M === null ? Object.create(M) : (D.prototype = M.prototype,
            new D)
        }
        var N = function() {
            return N = Object.assign || function(M) {
                for (var D, K = 1, tt = arguments.length; K < tt; K++) {
                    D = arguments[K];
                    for (var R in D)
                        Object.prototype.hasOwnProperty.call(D, R) && (M[R] = D[R])
                }
                return M
            }
            ,
            N.apply(this, arguments)
        };
        function o(b, M) {
            var D = {};
            for (var K in b)
                Object.prototype.hasOwnProperty.call(b, K) && M.indexOf(K) < 0 && (D[K] = b[K]);
            if (b != null && typeof Object.getOwnPropertySymbols == "function")
                for (var tt = 0, K = Object.getOwnPropertySymbols(b); tt < K.length; tt++)
                    M.indexOf(K[tt]) < 0 && Object.prototype.propertyIsEnumerable.call(b, K[tt]) && (D[K[tt]] = b[K[tt]]);
            return D
        }
        function T(b, M, D, K) {
            var tt = arguments.length, R = tt < 3 ? M : K === null ? K = Object.getOwnPropertyDescriptor(M, D) : K, Gt;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                R = Reflect.decorate(b, M, D, K);
            else
                for (var cn = b.length - 1; cn >= 0; cn--)
                    (Gt = b[cn]) && (R = (tt < 3 ? Gt(R) : tt > 3 ? Gt(M, D, R) : Gt(M, D)) || R);
            return tt > 3 && R && Object.defineProperty(M, D, R),
            R
        }
        function v(b, M) {
            return function(D, K) {
                M(D, K, b)
            }
        }
        function a(b, M, D, K, tt, R) {
            function Gt(Z) {
                if (Z !== void 0 && typeof Z != "function")
                    throw new TypeError("Function expected");
                return Z
            }
            for (var cn = K.kind, Yt = cn === "getter" ? "get" : cn === "setter" ? "set" : "value", st = !M && b ? K.static ? b : b.prototype : null, z = M || (st ? Object.getOwnPropertyDescriptor(st, K.name) : {}), it, k = !1, $ = D.length - 1; $ >= 0; $--) {
                var Ot = {};
                for (var Ut in K)
                    Ot[Ut] = Ut === "access" ? {} : K[Ut];
                for (var Ut in K.access)
                    Ot.access[Ut] = K.access[Ut];
                Ot.addInitializer = function(Z) {
                    if (k)
                        throw new TypeError("Cannot add initializers after decoration has completed");
                    R.push(Gt(Z || null))
                }
                ;
                var Q = (0,
                D[$])(cn === "accessor" ? {
                    get: z.get,
                    set: z.set
                } : z[Yt], Ot);
                if (cn === "accessor") {
                    if (Q === void 0)
                        continue;
                    if (Q === null || typeof Q != "object")
                        throw new TypeError("Object expected");
                    (it = Gt(Q.get)) && (z.get = it),
                    (it = Gt(Q.set)) && (z.set = it),
                    (it = Gt(Q.init)) && tt.push(it)
                } else
                    (it = Gt(Q)) && (cn === "field" ? tt.push(it) : z[Yt] = it)
            }
            st && Object.defineProperty(st, K.name, z),
            k = !0
        }
        function J(b, M, D) {
            for (var K = arguments.length > 2, tt = 0; tt < M.length; tt++)
                D = K ? M[tt].call(b, D) : M[tt].call(b);
            return K ? D : void 0
        }
        function ft(b) {
            return typeof b == "symbol" ? b : "".concat(b)
        }
        function gt(b, M, D) {
            return typeof M == "symbol" && (M = M.description ? "[".concat(M.description, "]") : ""),
            Object.defineProperty(b, "name", {
                configurable: !0,
                value: D ? "".concat(D, " ", M) : M
            })
        }
        function ht(b, M) {
            if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
                return Reflect.metadata(b, M)
        }
        function yt(b, M, D, K) {
            function tt(R) {
                return R instanceof D ? R : new D(function(Gt) {
                    Gt(R)
                }
                )
            }
            return new (D || (D = Promise))(function(R, Gt) {
                function cn(z) {
                    try {
                        st(K.next(z))
                    } catch (it) {
                        Gt(it)
                    }
                }
                function Yt(z) {
                    try {
                        st(K.throw(z))
                    } catch (it) {
                        Gt(it)
                    }
                }
                function st(z) {
                    z.done ? R(z.value) : tt(z.value).then(cn, Yt)
                }
                st((K = K.apply(b, M || [])).next())
            }
            )
        }
        function Dt(b, M) {
            var D = {
                label: 0,
                sent: function() {
                    if (R[0] & 1)
                        throw R[1];
                    return R[1]
                },
                trys: [],
                ops: []
            }, K, tt, R, Gt;
            return Gt = {
                next: cn(0),
                throw: cn(1),
                return: cn(2)
            },
            typeof Symbol == "function" && (Gt[Symbol.iterator] = function() {
                return this
            }
            ),
            Gt;
            function cn(st) {
                return function(z) {
                    return Yt([st, z])
                }
            }
            function Yt(st) {
                if (K)
                    throw new TypeError("Generator is already executing.");
                for (; Gt && (Gt = 0,
                st[0] && (D = 0)),
                D; )
                    try {
                        if (K = 1,
                        tt && (R = st[0] & 2 ? tt.return : st[0] ? tt.throw || ((R = tt.return) && R.call(tt),
                        0) : tt.next) && !(R = R.call(tt, st[1])).done)
                            return R;
                        switch (tt = 0,
                        R && (st = [st[0] & 2, R.value]),
                        st[0]) {
                        case 0:
                        case 1:
                            R = st;
                            break;
                        case 4:
                            return D.label++,
                            {
                                value: st[1],
                                done: !1
                            };
                        case 5:
                            D.label++,
                            tt = st[1],
                            st = [0];
                            continue;
                        case 7:
                            st = D.ops.pop(),
                            D.trys.pop();
                            continue;
                        default:
                            if (R = D.trys,
                            !(R = R.length > 0 && R[R.length - 1]) && (st[0] === 6 || st[0] === 2)) {
                                D = 0;
                                continue
                            }
                            if (st[0] === 3 && (!R || st[1] > R[0] && st[1] < R[3])) {
                                D.label = st[1];
                                break
                            }
                            if (st[0] === 6 && D.label < R[1]) {
                                D.label = R[1],
                                R = st;
                                break
                            }
                            if (R && D.label < R[2]) {
                                D.label = R[2],
                                D.ops.push(st);
                                break
                            }
                            R[2] && D.ops.pop(),
                            D.trys.pop();
                            continue
                        }
                        st = M.call(b, D)
                    } catch (z) {
                        st = [6, z],
                        tt = 0
                    } finally {
                        K = R = 0
                    }
                if (st[0] & 5)
                    throw st[1];
                return {
                    value: st[0] ? st[1] : void 0,
                    done: !0
                }
            }
        }
        var St = Object.create ? function(b, M, D, K) {
            K === void 0 && (K = D);
            var tt = Object.getOwnPropertyDescriptor(M, D);
            (!tt || ("get"in tt ? !M.__esModule : tt.writable || tt.configurable)) && (tt = {
                enumerable: !0,
                get: function() {
                    return M[D]
                }
            }),
            Object.defineProperty(b, K, tt)
        }
        : function(b, M, D, K) {
            K === void 0 && (K = D),
            b[K] = M[D]
        }
        ;
        function L(b, M) {
            for (var D in b)
                D !== "default" && !Object.prototype.hasOwnProperty.call(M, D) && St(M, b, D)
        }
        function V(b) {
            var M = typeof Symbol == "function" && Symbol.iterator
              , D = M && b[M]
              , K = 0;
            if (D)
                return D.call(b);
            if (b && typeof b.length == "number")
                return {
                    next: function() {
                        return b && K >= b.length && (b = void 0),
                        {
                            value: b && b[K++],
                            done: !b
                        }
                    }
                };
            throw new TypeError(M ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function x(b, M) {
            var D = typeof Symbol == "function" && b[Symbol.iterator];
            if (!D)
                return b;
            var K = D.call(b), tt, R = [], Gt;
            try {
                for (; (M === void 0 || M-- > 0) && !(tt = K.next()).done; )
                    R.push(tt.value)
            } catch (cn) {
                Gt = {
                    error: cn
                }
            } finally {
                try {
                    tt && !tt.done && (D = K.return) && D.call(K)
                } finally {
                    if (Gt)
                        throw Gt.error
                }
            }
            return R
        }
        function _t() {
            for (var b = [], M = 0; M < arguments.length; M++)
                b = b.concat(x(arguments[M]));
            return b
        }
        function H() {
            for (var b = 0, M = 0, D = arguments.length; M < D; M++)
                b += arguments[M].length;
            for (var K = Array(b), tt = 0, M = 0; M < D; M++)
                for (var R = arguments[M], Gt = 0, cn = R.length; Gt < cn; Gt++,
                tt++)
                    K[tt] = R[Gt];
            return K
        }
        function g(b, M, D) {
            if (D || arguments.length === 2)
                for (var K = 0, tt = M.length, R; K < tt; K++)
                    (R || !(K in M)) && (R || (R = Array.prototype.slice.call(M, 0, K)),
                    R[K] = M[K]);
            return b.concat(R || Array.prototype.slice.call(M))
        }
        function X(b) {
            return this instanceof X ? (this.v = b,
            this) : new X(b)
        }
        function bt(b, M, D) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var K = D.apply(b, M || []), tt, R = [];
            return tt = {},
            Gt("next"),
            Gt("throw"),
            Gt("return"),
            tt[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            tt;
            function Gt(k) {
                K[k] && (tt[k] = function($) {
                    return new Promise(function(Ot, Ut) {
                        R.push([k, $, Ot, Ut]) > 1 || cn(k, $)
                    }
                    )
                }
                )
            }
            function cn(k, $) {
                try {
                    Yt(K[k]($))
                } catch (Ot) {
                    it(R[0][3], Ot)
                }
            }
            function Yt(k) {
                k.value instanceof X ? Promise.resolve(k.value.v).then(st, z) : it(R[0][2], k)
            }
            function st(k) {
                cn("next", k)
            }
            function z(k) {
                cn("throw", k)
            }
            function it(k, $) {
                k($),
                R.shift(),
                R.length && cn(R[0][0], R[0][1])
            }
        }
        function B(b) {
            var M, D;
            return M = {},
            K("next"),
            K("throw", function(tt) {
                throw tt
            }),
            K("return"),
            M[Symbol.iterator] = function() {
                return this
            }
            ,
            M;
            function K(tt, R) {
                M[tt] = b[tt] ? function(Gt) {
                    return (D = !D) ? {
                        value: X(b[tt](Gt)),
                        done: !1
                    } : R ? R(Gt) : Gt
                }
                : R
            }
        }
        function Pt(b) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var M = b[Symbol.asyncIterator], D;
            return M ? M.call(b) : (b = typeof V == "function" ? V(b) : b[Symbol.iterator](),
            D = {},
            K("next"),
            K("throw"),
            K("return"),
            D[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            D);
            function K(R) {
                D[R] = b[R] && function(Gt) {
                    return new Promise(function(cn, Yt) {
                        Gt = b[R](Gt),
                        tt(cn, Yt, Gt.done, Gt.value)
                    }
                    )
                }
            }
            function tt(R, Gt, cn, Yt) {
                Promise.resolve(Yt).then(function(st) {
                    R({
                        value: st,
                        done: cn
                    })
                }, Gt)
            }
        }
        function U(b, M) {
            return Object.defineProperty ? Object.defineProperty(b, "raw", {
                value: M
            }) : b.raw = M,
            b
        }
        var F = Object.create ? function(b, M) {
            Object.defineProperty(b, "default", {
                enumerable: !0,
                value: M
            })
        }
        : function(b, M) {
            b.default = M
        }
        ;
        function Et(b) {
            if (b && b.__esModule)
                return b;
            var M = {};
            if (b != null)
                for (var D in b)
                    D !== "default" && Object.prototype.hasOwnProperty.call(b, D) && St(M, b, D);
            return F(M, b),
            M
        }
        function P(b) {
            return b && b.__esModule ? b : {
                default: b
            }
        }
        function pt(b, M, D, K) {
            if (D === "a" && !K)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof M == "function" ? b !== M || !K : !M.has(b))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return D === "m" ? K : D === "a" ? K.call(b) : K ? K.value : M.get(b)
        }
        function l(b, M, D, K, tt) {
            if (K === "m")
                throw new TypeError("Private method is not writable");
            if (K === "a" && !tt)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof M == "function" ? b !== M || !tt : !M.has(b))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return K === "a" ? tt.call(b, D) : tt ? tt.value = D : M.set(b, D),
            D
        }
        function sn(b, M) {
            if (M === null || typeof M != "object" && typeof M != "function")
                throw new TypeError("Cannot use 'in' operator on non-object");
            return typeof b == "function" ? M === b : b.has(M)
        }
    }
    ,
    10786: te=>{
        (function(hn, A) {
            te.exports = A()
        }
        )(self, ()=>(()=>{
            var hn = {
                881: N=>{
                    var o = 1e3
                      , T = 60 * o
                      , v = 60 * T
                      , a = 24 * v
                      , J = 7 * a
                      , ft = 365.25 * a;
                    function gt(St) {
                        if (!((St = String(St)).length > 100)) {
                            var L = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(St);
                            if (L) {
                                var V = parseFloat(L[1]);
                                switch ((L[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return V * ft;
                                case "weeks":
                                case "week":
                                case "w":
                                    return V * J;
                                case "days":
                                case "day":
                                case "d":
                                    return V * a;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return V * v;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return V * T;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return V * o;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return V;
                                default:
                                    return
                                }
                            }
                        }
                    }
                    function ht(St) {
                        var L = Math.abs(St);
                        return L >= a ? Math.round(St / a) + "d" : L >= v ? Math.round(St / v) + "h" : L >= T ? Math.round(St / T) + "m" : L >= o ? Math.round(St / o) + "s" : St + "ms"
                    }
                    function yt(St) {
                        var L = Math.abs(St);
                        return L >= a ? Dt(St, L, a, "day") : L >= v ? Dt(St, L, v, "hour") : L >= T ? Dt(St, L, T, "minute") : L >= o ? Dt(St, L, o, "second") : St + " ms"
                    }
                    function Dt(St, L, V, x) {
                        var _t = L >= 1.5 * V;
                        return Math.round(St / V) + " " + x + (_t ? "s" : "")
                    }
                    N.exports = function(St, L) {
                        L = L || {};
                        var V = typeof St;
                        if (V === "string" && St.length > 0)
                            return gt(St);
                        if (V === "number" && isFinite(St))
                            return L.long ? yt(St) : ht(St);
                        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(St))
                    }
                }
                ,
                130: (N,o,T)=>{
                    o.formatArgs = function(a) {
                        if (a[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + a[0] + (this.useColors ? "%c " : " ") + "+" + N.exports.humanize(this.diff),
                        !this.useColors)
                            return;
                        const J = "color: " + this.color;
                        a.splice(1, 0, J, "color: inherit");
                        let ft = 0
                          , gt = 0;
                        a[0].replace(/%[a-zA-Z%]/g, ht=>{
                            ht !== "%%" && (ft++,
                            ht === "%c" && (gt = ft))
                        }
                        ),
                        a.splice(gt, 0, J)
                    }
                    ,
                    o.save = function(a) {
                        try {
                            a ? o.storage.setItem("debug", a) : o.storage.removeItem("debug")
                        } catch (J) {}
                    }
                    ,
                    o.load = function() {
                        let a;
                        try {
                            a = o.storage.getItem("debug")
                        } catch (J) {}
                        return !a && typeof process != "undefined" && "env"in process && (a = {
                            NODE_ENV: "production",
                            HVC_VERSION: "2.20230424.12",
                            MODE: "production"
                        }.DEBUG),
                        a
                    }
                    ,
                    o.useColors = function() {
                        return typeof window != "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document != "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window != "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                    }
                    ,
                    o.storage = function() {
                        try {
                            return localStorage
                        } catch (a) {}
                    }(),
                    o.destroy = (()=>{
                        let a = !1;
                        return ()=>{
                            a || (a = !0,
                            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                        }
                    }
                    )(),
                    o.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
                    o.log = console.debug || console.log || (()=>{}
                    ),
                    N.exports = T(123)(o);
                    const {formatters: v} = N.exports;
                    v.j = function(a) {
                        try {
                            return JSON.stringify(a)
                        } catch (J) {
                            return "[UnexpectedJSONParseError]: " + J.message
                        }
                    }
                }
                ,
                123: (N,o,T)=>{
                    N.exports = function(v) {
                        function a(gt) {
                            let ht, yt, Dt, St = null;
                            function L(...V) {
                                if (!L.enabled)
                                    return;
                                const x = L
                                  , _t = Number(new Date)
                                  , H = _t - (ht || _t);
                                x.diff = H,
                                x.prev = ht,
                                x.curr = _t,
                                ht = _t,
                                V[0] = a.coerce(V[0]),
                                typeof V[0] != "string" && V.unshift("%O");
                                let g = 0;
                                V[0] = V[0].replace(/%([a-zA-Z%])/g, (X,bt)=>{
                                    if (X === "%%")
                                        return "%";
                                    g++;
                                    const B = a.formatters[bt];
                                    if (typeof B == "function") {
                                        const Pt = V[g];
                                        X = B.call(x, Pt),
                                        V.splice(g, 1),
                                        g--
                                    }
                                    return X
                                }
                                ),
                                a.formatArgs.call(x, V),
                                (x.log || a.log).apply(x, V)
                            }
                            return L.namespace = gt,
                            L.useColors = a.useColors(),
                            L.color = a.selectColor(gt),
                            L.extend = J,
                            L.destroy = a.destroy,
                            Object.defineProperty(L, "enabled", {
                                enumerable: !0,
                                configurable: !1,
                                get: ()=>St !== null ? St : (yt !== a.namespaces && (yt = a.namespaces,
                                Dt = a.enabled(gt)),
                                Dt),
                                set: V=>{
                                    St = V
                                }
                            }),
                            typeof a.init == "function" && a.init(L),
                            L
                        }
                        function J(gt, ht) {
                            const yt = a(this.namespace + (ht === void 0 ? ":" : ht) + gt);
                            return yt.log = this.log,
                            yt
                        }
                        function ft(gt) {
                            return gt.toString().substring(2, gt.toString().length - 2).replace(/\.\*\?$/, "*")
                        }
                        return a.debug = a,
                        a.default = a,
                        a.coerce = function(gt) {
                            return gt instanceof Error ? gt.stack || gt.message : gt
                        }
                        ,
                        a.disable = function() {
                            const gt = [...a.names.map(ft), ...a.skips.map(ft).map(ht=>"-" + ht)].join(",");
                            return a.enable(""),
                            gt
                        }
                        ,
                        a.enable = function(gt) {
                            let ht;
                            a.save(gt),
                            a.namespaces = gt,
                            a.names = [],
                            a.skips = [];
                            const yt = (typeof gt == "string" ? gt : "").split(/[\s,]+/)
                              , Dt = yt.length;
                            for (ht = 0; ht < Dt; ht++)
                                yt[ht] && ((gt = yt[ht].replace(/\*/g, ".*?"))[0] === "-" ? a.skips.push(new RegExp("^" + gt.slice(1) + "$")) : a.names.push(new RegExp("^" + gt + "$")))
                        }
                        ,
                        a.enabled = function(gt) {
                            if (gt[gt.length - 1] === "*")
                                return !0;
                            let ht, yt;
                            for (ht = 0,
                            yt = a.skips.length; ht < yt; ht++)
                                if (a.skips[ht].test(gt))
                                    return !1;
                            for (ht = 0,
                            yt = a.names.length; ht < yt; ht++)
                                if (a.names[ht].test(gt))
                                    return !0;
                            return !1
                        }
                        ,
                        a.humanize = T(881),
                        a.destroy = function() {
                            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
                        }
                        ,
                        Object.keys(v).forEach(gt=>{
                            a[gt] = v[gt]
                        }
                        ),
                        a.names = [],
                        a.skips = [],
                        a.formatters = {},
                        a.selectColor = function(gt) {
                            let ht = 0;
                            for (let yt = 0; yt < gt.length; yt++)
                                ht = (ht << 5) - ht + gt.charCodeAt(yt),
                                ht |= 0;
                            return a.colors[Math.abs(ht) % a.colors.length]
                        }
                        ,
                        a.enable(a.load()),
                        a
                    }
                }
                ,
                22: (N,o,T)=>{
                    var v = T(481)
                      , a = T(426)
                      , J = a;
                    J.v1 = v,
                    J.v4 = a,
                    N.exports = J
                }
                ,
                725: N=>{
                    for (var o = [], T = 0; T < 256; ++T)
                        o[T] = (T + 256).toString(16).substr(1);
                    N.exports = function(v, a) {
                        var J = a || 0
                          , ft = o;
                        return [ft[v[J++]], ft[v[J++]], ft[v[J++]], ft[v[J++]], "-", ft[v[J++]], ft[v[J++]], "-", ft[v[J++]], ft[v[J++]], "-", ft[v[J++]], ft[v[J++]], "-", ft[v[J++]], ft[v[J++]], ft[v[J++]], ft[v[J++]], ft[v[J++]], ft[v[J++]]].join("")
                    }
                }
                ,
                157: N=>{
                    var o = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
                    if (o) {
                        var T = new Uint8Array(16);
                        N.exports = function() {
                            return o(T),
                            T
                        }
                    } else {
                        var v = new Array(16);
                        N.exports = function() {
                            for (var a, J = 0; J < 16; J++)
                                (3 & J) == 0 && (a = 4294967296 * Math.random()),
                                v[J] = a >>> ((3 & J) << 3) & 255;
                            return v
                        }
                    }
                }
                ,
                481: (N,o,T)=>{
                    var v, a, J = T(157), ft = T(725), gt = 0, ht = 0;
                    N.exports = function(yt, Dt, St) {
                        var L = Dt && St || 0
                          , V = Dt || []
                          , x = (yt = yt || {}).node || v
                          , _t = yt.clockseq !== void 0 ? yt.clockseq : a;
                        if (x == null || _t == null) {
                            var H = J();
                            x == null && (x = v = [1 | H[0], H[1], H[2], H[3], H[4], H[5]]),
                            _t == null && (_t = a = 16383 & (H[6] << 8 | H[7]))
                        }
                        var g = yt.msecs !== void 0 ? yt.msecs : new Date().getTime()
                          , X = yt.nsecs !== void 0 ? yt.nsecs : ht + 1
                          , bt = g - gt + (X - ht) / 1e4;
                        if (bt < 0 && yt.clockseq === void 0 && (_t = _t + 1 & 16383),
                        (bt < 0 || g > gt) && yt.nsecs === void 0 && (X = 0),
                        X >= 1e4)
                            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                        gt = g,
                        ht = X,
                        a = _t;
                        var B = (1e4 * (268435455 & (g += 122192928e5)) + X) % 4294967296;
                        V[L++] = B >>> 24 & 255,
                        V[L++] = B >>> 16 & 255,
                        V[L++] = B >>> 8 & 255,
                        V[L++] = 255 & B;
                        var Pt = g / 4294967296 * 1e4 & 268435455;
                        V[L++] = Pt >>> 8 & 255,
                        V[L++] = 255 & Pt,
                        V[L++] = Pt >>> 24 & 15 | 16,
                        V[L++] = Pt >>> 16 & 255,
                        V[L++] = _t >>> 8 | 128,
                        V[L++] = 255 & _t;
                        for (var U = 0; U < 6; ++U)
                            V[L + U] = x[U];
                        return Dt || ft(V)
                    }
                }
                ,
                426: (N,o,T)=>{
                    var v = T(157)
                      , a = T(725);
                    N.exports = function(J, ft, gt) {
                        var ht = ft && gt || 0;
                        typeof J == "string" && (ft = J === "binary" ? new Array(16) : null,
                        J = null);
                        var yt = (J = J || {}).random || (J.rng || v)();
                        if (yt[6] = 15 & yt[6] | 64,
                        yt[8] = 63 & yt[8] | 128,
                        ft)
                            for (var Dt = 0; Dt < 16; ++Dt)
                                ft[ht + Dt] = yt[Dt];
                        return ft || a(yt)
                    }
                }
            }
              , A = {};
            function C(N) {
                var o = A[N];
                if (o !== void 0)
                    return o.exports;
                var T = A[N] = {
                    exports: {}
                };
                return hn[N](T, T.exports, C),
                T.exports
            }
            C.d = (N,o)=>{
                for (var T in o)
                    C.o(o, T) && !C.o(N, T) && Object.defineProperty(N, T, {
                        enumerable: !0,
                        get: o[T]
                    })
            }
            ,
            C.o = (N,o)=>Object.prototype.hasOwnProperty.call(N, o),
            C.r = N=>{
                typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(N, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(N, "__esModule", {
                    value: !0
                })
            }
            ;
            var y = {};
            return (()=>{
                "use strict";
                C.r(y),
                C.d(y, {
                    ActionObjectType: ()=>Pt,
                    ChannelType: ()=>K,
                    ChildAppWindow: ()=>yi,
                    ContainerState: ()=>Lr,
                    DialogDimension: ()=>M,
                    ErrorCode: ()=>F,
                    FileOpenPreference: ()=>B,
                    FrameContexts: ()=>l,
                    HostClientType: ()=>P,
                    HostName: ()=>pt,
                    LiveShareHost: ()=>Wi,
                    NotificationTypes: ()=>Rt,
                    ParentAppWindow: ()=>Xr,
                    SecondaryM365ContentIdName: ()=>U,
                    TaskModuleDimension: ()=>tt,
                    TeamType: ()=>sn,
                    UserMeetingRole: ()=>zr,
                    UserSettingTypes: ()=>Un,
                    UserTeamRole: ()=>b,
                    ViewerActionTypes: ()=>Nt,
                    app: ()=>ee,
                    appEntity: ()=>Ei,
                    appInitialization: ()=>ir,
                    appInstallDialog: ()=>Je,
                    authentication: ()=>he,
                    barCode: ()=>rt,
                    calendar: ()=>xr,
                    call: ()=>Ve,
                    chat: ()=>wt,
                    conversations: ()=>fn,
                    dialog: ()=>Te,
                    enablePrintCapability: ()=>si,
                    executeDeepLink: ()=>Oi,
                    files: ()=>mi,
                    geoLocation: ()=>It,
                    getAdaptiveCardSchemaVersion: ()=>Zr,
                    getContext: ()=>Rr,
                    getMruTabInstances: ()=>Kr,
                    getTabInstances: ()=>hr,
                    initialize: ()=>_r,
                    initializeWithFrameContext: ()=>pi,
                    location: ()=>ai,
                    logs: ()=>tn,
                    mail: ()=>Hr,
                    media: ()=>jn,
                    meeting: ()=>kr,
                    meetingRoom: ()=>hi,
                    menus: ()=>ue,
                    monetization: ()=>Nr,
                    navigateBack: ()=>Hi,
                    navigateCrossDomain: ()=>Gr,
                    navigateToTab: ()=>xi,
                    notifications: ()=>ti,
                    openFilePreview: ()=>or,
                    pages: ()=>Jn,
                    people: ()=>br,
                    print: ()=>ui,
                    profile: ()=>Ar,
                    registerAppButtonClickHandler: ()=>Yr,
                    registerAppButtonHoverEnterHandler: ()=>li,
                    registerAppButtonHoverLeaveHandler: ()=>fi,
                    registerBackButtonHandler: ()=>di,
                    registerBeforeUnloadHandler: ()=>Di,
                    registerChangeSettingsHandler: ()=>$r,
                    registerCustomHandler: ()=>ze,
                    registerFocusEnterHandler: ()=>gi,
                    registerFullScreenHandler: ()=>ci,
                    registerOnLoadHandler: ()=>vi,
                    registerOnThemeChangeHandler: ()=>Pi,
                    registerUserSettingsChangeHandler: ()=>fe,
                    remoteCamera: ()=>ni,
                    returnFocus: ()=>Ni,
                    search: ()=>Wr,
                    sendCustomEvent: ()=>$e,
                    sendCustomMessage: ()=>gr,
                    setFrameContext: ()=>qr,
                    settings: ()=>fr,
                    shareDeepLink: ()=>wi,
                    sharing: ()=>Vr,
                    stageView: ()=>jr,
                    tasks: ()=>Mr,
                    teams: ()=>Ci,
                    teamsCore: ()=>Se,
                    uploadCustomApp: ()=>ye,
                    version: ()=>we,
                    video: ()=>lr,
                    videoEx: ()=>ei,
                    webStorage: ()=>Ii
                });
                var N = "2.0.1"
                  , o = "2.0.2"
                  , T = "2.0.3"
                  , v = "2.0.4"
                  , a = "2.0.1"
                  , J = "1.9.0"
                  , ft = "2.0.0"
                  , gt = "1.7.0"
                  , ht = "1.8.0"
                  , yt = "1.9.0"
                  , Dt = ["teams.microsoft.com", "teams.microsoft.us", "gov.teams.microsoft.us", "dod.teams.microsoft.us", "int.teams.microsoft.com", "teams.live.com", "devspaces.skype.com", "ssauth.skype.com", "local.teams.live.com", "local.teams.live.com:8080", "local.teams.office.com", "local.teams.office.com:8080", "msft.spoppe.com", "*.sharepoint.com", "*.sharepoint-df.com", "*.sharepointonline.com", "outlook.office.com", "outlook-sdf.office.com", "outlook.office365.com", "outlook-sdf.office365.com", "outlook.live.com", "outlook-sdf.live.com", "*.teams.microsoft.com", "*.www.office.com", "www.office.com", "word.office.com", "excel.office.com", "powerpoint.office.com", "www.officeppe.com", "*.www.microsoft365.com", "www.microsoft365.com"]
                  , St = /^https:\/\//
                  , L = "https"
                  , V = "teams.microsoft.com"
                  , x = "The library has not yet been initialized"
                  , _t = "The runtime has not yet been initialized"
                  , H = "The runtime version is not supported"
                  , g = function() {
                    function t() {}
                    return t.initializeCalled = !1,
                    t.initializeCompleted = !1,
                    t.additionalValidOrigins = [],
                    t.isFramelessWindow = !1,
                    t.printCapabilityEnabled = !1,
                    t
                }()
                  , X = (0,
                C(130).debug)("teamsJs");
                function bt(t) {
                    return X.extend(t)
                }
                var B, Pt, U, F, Et, P, pt, l, sn, b, M, D = C(22);
                (function(t) {
                    t.Inline = "inline",
                    t.Desktop = "desktop",
                    t.Web = "web"
                }
                )(B || (B = {})),
                function(t) {
                    t.M365Content = "m365content"
                }(Pt || (Pt = {})),
                function(t) {
                    t.DriveId = "driveId",
                    t.GroupId = "groupId",
                    t.SiteId = "siteId",
                    t.UserId = "userId"
                }(U || (U = {})),
                function(t) {
                    t[t.NOT_SUPPORTED_ON_PLATFORM = 100] = "NOT_SUPPORTED_ON_PLATFORM",
                    t[t.INTERNAL_ERROR = 500] = "INTERNAL_ERROR",
                    t[t.NOT_SUPPORTED_IN_CURRENT_CONTEXT = 501] = "NOT_SUPPORTED_IN_CURRENT_CONTEXT",
                    t[t.PERMISSION_DENIED = 1e3] = "PERMISSION_DENIED",
                    t[t.NETWORK_ERROR = 2e3] = "NETWORK_ERROR",
                    t[t.NO_HW_SUPPORT = 3e3] = "NO_HW_SUPPORT",
                    t[t.INVALID_ARGUMENTS = 4e3] = "INVALID_ARGUMENTS",
                    t[t.UNAUTHORIZED_USER_OPERATION = 5e3] = "UNAUTHORIZED_USER_OPERATION",
                    t[t.INSUFFICIENT_RESOURCES = 6e3] = "INSUFFICIENT_RESOURCES",
                    t[t.THROTTLE = 7e3] = "THROTTLE",
                    t[t.USER_ABORT = 8e3] = "USER_ABORT",
                    t[t.OPERATION_TIMED_OUT = 8001] = "OPERATION_TIMED_OUT",
                    t[t.OLD_PLATFORM = 9e3] = "OLD_PLATFORM",
                    t[t.FILE_NOT_FOUND = 404] = "FILE_NOT_FOUND",
                    t[t.SIZE_EXCEEDED = 1e4] = "SIZE_EXCEEDED"
                }(F || (F = {})),
                function(t) {
                    t.GeoLocation = "geolocation",
                    t.Media = "media"
                }(Et || (Et = {})),
                function(t) {
                    t.desktop = "desktop",
                    t.web = "web",
                    t.android = "android",
                    t.ios = "ios",
                    t.ipados = "ipados",
                    t.rigel = "rigel",
                    t.surfaceHub = "surfaceHub",
                    t.teamsRoomsWindows = "teamsRoomsWindows",
                    t.teamsRoomsAndroid = "teamsRoomsAndroid",
                    t.teamsPhones = "teamsPhones",
                    t.teamsDisplays = "teamsDisplays"
                }(P || (P = {})),
                function(t) {
                    t.office = "Office",
                    t.outlook = "Outlook",
                    t.outlookWin32 = "OutlookWin32",
                    t.orange = "Orange",
                    t.teams = "Teams",
                    t.teamsModern = "TeamsModern"
                }(pt || (pt = {})),
                function(t) {
                    t.settings = "settings",
                    t.content = "content",
                    t.authentication = "authentication",
                    t.remove = "remove",
                    t.task = "task",
                    t.sidePanel = "sidePanel",
                    t.stage = "stage",
                    t.meetingStage = "meetingStage"
                }(l || (l = {})),
                function(t) {
                    t[t.Standard = 0] = "Standard",
                    t[t.Edu = 1] = "Edu",
                    t[t.Class = 2] = "Class",
                    t[t.Plc = 3] = "Plc",
                    t[t.Staff = 4] = "Staff"
                }(sn || (sn = {})),
                function(t) {
                    t[t.Admin = 0] = "Admin",
                    t[t.User = 1] = "User",
                    t[t.Guest = 2] = "Guest"
                }(b || (b = {})),
                function(t) {
                    t.Large = "large",
                    t.Medium = "medium",
                    t.Small = "small"
                }(M || (M = {}));
                var K, tt = M;
                (function(t) {
                    t.Regular = "Regular",
                    t.Private = "Private",
                    t.Shared = "Shared"
                }
                )(K || (K = {}));
                var R = {
                    errorCode: F.NOT_SUPPORTED_ON_PLATFORM
                }
                  , Gt = {
                    majorVersion: 1,
                    minorVersion: 5
                };
                function cn(t, u) {
                    if (t.substring(0, 2) === "*.") {
                        var r = t.substring(1);
                        if (u.length > r.length && u.split(".").length === r.split(".").length && u.substring(u.length - r.length) === r)
                            return !0
                    } else if (t === u)
                        return !0;
                    return !1
                }
                function Yt(t) {
                    if (t.protocol !== "https:")
                        return !1;
                    var u = t.host;
                    if (Dt.some(function(E) {
                        return cn(E, u)
                    }))
                        return !0;
                    for (var r = 0, c = g.additionalValidOrigins; r < c.length; r++) {
                        var p = c[r];
                        if (cn(p.substring(0, 8) === "https://" ? p.substring(8) : p, u))
                            return !0
                    }
                    return !1
                }
                function st(t) {
                    return function(u, r) {
                        if (!u)
                            throw new Error(t || r)
                    }
                }
                function z(t, u) {
                    if (typeof t != "string" || typeof u != "string")
                        return NaN;
                    var r = t.split(".")
                      , c = u.split(".");
                    function p(O) {
                        return /^\d+$/.test(O)
                    }
                    if (!r.every(p) || !c.every(p))
                        return NaN;
                    for (; r.length < c.length; )
                        r.push("0");
                    for (; c.length < r.length; )
                        c.push("0");
                    for (var E = 0; E < r.length; ++E)
                        if (Number(r[E]) != Number(c[E]))
                            return Number(r[E]) > Number(c[E]) ? 1 : -1;
                    return 0
                }
                function it() {
                    return D.v4()
                }
                function k(t) {
                    return Object.keys(t).forEach(function(u) {
                        typeof t[u] == "object" && k(t[u])
                    }),
                    Object.freeze(t)
                }
                function $(t, u) {
                    for (var r = [], c = 2; c < arguments.length; c++)
                        r[c - 2] = arguments[c];
                    var p = t.apply(void 0, r);
                    return p.then(function(E) {
                        u && u(void 0, E)
                    }).catch(function(E) {
                        u && u(E)
                    }),
                    p
                }
                function Ot(t, u) {
                    for (var r = [], c = 2; c < arguments.length; c++)
                        r[c - 2] = arguments[c];
                    var p = t.apply(void 0, r);
                    return p.then(function() {
                        u && u(null)
                    }).catch(function(E) {
                        u && u(E)
                    }),
                    p
                }
                function Ut(t, u) {
                    for (var r = [], c = 2; c < arguments.length; c++)
                        r[c - 2] = arguments[c];
                    var p = t.apply(void 0, r);
                    return p.then(function(E) {
                        u && u(null, E)
                    }).catch(function(E) {
                        u && u(E, null)
                    }),
                    p
                }
                function Q(t, u, r) {
                    return new Promise(function(c, p) {
                        var E = setTimeout(p, u, r);
                        t().then(function(O) {
                            clearTimeout(E),
                            c(O)
                        }).catch(function(O) {
                            clearTimeout(E),
                            p(O)
                        })
                    }
                    )
                }
                function Z(t) {
                    var u = new URL("https://teams.microsoft.com/l/entity/" + encodeURIComponent(t.appId) + "/" + encodeURIComponent(t.pageId));
                    return t.webUrl && u.searchParams.append("webUrl", t.webUrl),
                    (t.channelId || t.subPageId) && u.searchParams.append("context", JSON.stringify({
                        channelId: t.channelId,
                        subEntityId: t.subPageId
                    })),
                    u.toString()
                }
                function nt(t) {
                    return !(z("".concat(t.majorVersion, ".").concat(t.minorVersion), "".concat(Gt.majorVersion, ".").concat(Gt.minorVersion)) >= 0)
                }
                var mt = function() {
                    return mt = Object.assign || function(t) {
                        for (var u, r = 1, c = arguments.length; r < c; r++)
                            for (var p in u = arguments[r])
                                Object.prototype.hasOwnProperty.call(u, p) && (t[p] = u[p]);
                        return t
                    }
                    ,
                    mt.apply(this, arguments)
                }
                  , Lt = bt("runtime")
                  , At = 2;
                function Sn(t) {
                    return t.apiVersion === At
                }
                var Nn = {
                    apiVersion: -1,
                    supports: {}
                };
                function $t(t) {
                    if (Sn(t))
                        return !0;
                    throw t.apiVersion === -1 ? new Error(_t) : new Error(H)
                }
                var f = Nn
                  , Gn = {
                    apiVersion: 2,
                    hostVersionsInfo: void 0,
                    isLegacyTeams: !0,
                    supports: {
                        appInstallDialog: {},
                        appEntity: {},
                        call: {},
                        chat: {},
                        conversations: {},
                        dialog: {
                            url: {
                                bot: {}
                            },
                            update: {}
                        },
                        logs: {},
                        meetingRoom: {},
                        menus: {},
                        monetization: {},
                        notifications: {},
                        pages: {
                            appButton: {},
                            tabs: {},
                            config: {},
                            backStack: {},
                            fullTrust: {}
                        },
                        remoteCamera: {},
                        sharing: {},
                        stageView: {},
                        teams: {
                            fullTrust: {}
                        },
                        teamsCore: {},
                        video: {}
                    }
                }
                  , Zn = [P.desktop, P.web, P.android, P.ios, P.rigel, P.surfaceHub, P.teamsRoomsWindows, P.teamsRoomsAndroid, P.teamsPhones, P.teamsDisplays];
                function xe(t) {
                    var u = t;
                    if (u.apiVersion < At && Le.forEach(function(r) {
                        u.apiVersion === r.versionToUpgradeFrom && (u = r.upgradeToNextVersion(u))
                    }),
                    Sn(u))
                        return u;
                    throw new Error("Received a runtime that could not be upgraded to the latest version")
                }
                var Le = [{
                    versionToUpgradeFrom: 1,
                    upgradeToNextVersion: function(t) {
                        var u;
                        return {
                            apiVersion: 2,
                            hostVersionsInfo: void 0,
                            isLegacyTeams: t.isLegacyTeams,
                            supports: mt(mt({}, t.supports), {
                                dialog: t.supports.dialog ? {
                                    card: void 0,
                                    url: t.supports.dialog,
                                    update: (u = t.supports.dialog) === null || u === void 0 ? void 0 : u.update
                                } : void 0
                            })
                        }
                    }
                }]
                  , un = {
                    "1.9.0": [{
                        capability: {
                            location: {}
                        },
                        hostClientTypes: Zn
                    }],
                    "2.0.0": [{
                        capability: {
                            people: {}
                        },
                        hostClientTypes: Zn
                    }],
                    "2.0.1": [{
                        capability: {
                            teams: {
                                fullTrust: {
                                    joinedTeams: {}
                                }
                            }
                        },
                        hostClientTypes: [P.android, P.desktop, P.ios, P.teamsRoomsAndroid, P.teamsPhones, P.teamsDisplays, P.web]
                    }, {
                        capability: {
                            webStorage: {}
                        },
                        hostClientTypes: [P.desktop]
                    }],
                    "2.0.5": [{
                        capability: {
                            webStorage: {}
                        },
                        hostClientTypes: [P.android, P.desktop, P.ios]
                    }]
                }
                  , Ie = Lt.extend("generateBackCompatRuntimeConfig");
                function Vt(t) {
                    Ie("generating back compat runtime config for %s", t);
                    var u = mt({}, Gn.supports);
                    Ie("Supported capabilities in config before updating based on highestSupportedVersion: %o", u),
                    Object.keys(un).forEach(function(c) {
                        z(t, c) >= 0 && un[c].forEach(function(p) {
                            p.hostClientTypes.includes(g.hostClientType) && (u = mt(mt({}, u), p.capability))
                        })
                    });
                    var r = {
                        apiVersion: 2,
                        isLegacyTeams: !0,
                        supports: u
                    };
                    return Ie("Runtime config after updating based on highestSupportedVersion: %o", r),
                    r
                }
                var Yn = Lt.extend("applyRuntimeConfig");
                function be(t) {
                    typeof t.apiVersion == "string" && (Yn("Trying to apply runtime with string apiVersion, processing as v1: %o", t),
                    t = mt(mt({}, t), {
                        apiVersion: 1
                    })),
                    Yn("Fast-forwarding runtime %o", t);
                    var u = xe(t);
                    Yn("Applying runtime %o", u),
                    f = k(u)
                }
                var he, Te, ue, Se, ee, Jn, we = "2.9.1", Fe = bt("internal"), le = Fe.extend("ensureInitializeCalled"), Jt = Fe.extend("ensureInitialized");
                function Dn() {
                    if (!g.initializeCalled)
                        throw le(x),
                        new Error(x)
                }
                function _(t) {
                    for (var u = [], r = 1; r < arguments.length; r++)
                        u[r - 1] = arguments[r];
                    if (!g.initializeCompleted)
                        throw Jt("%s. initializeCalled: %s", x, g.initializeCalled.toString()),
                        new Error(x);
                    if (u && u.length > 0) {
                        for (var c = !1, p = 0; p < u.length; p++)
                            if (u[p] === g.frameContext) {
                                c = !0;
                                break
                            }
                        if (!c)
                            throw new Error("This call is only allowed in following contexts: ".concat(JSON.stringify(u), ". ") + 'Current context: "'.concat(g.frameContext, '".'))
                    }
                    return $t(t)
                }
                function bn(t) {
                    t === void 0 && (t = N);
                    var u = z(g.clientSupportedSDKVersion, t);
                    return !isNaN(u) && u >= 0
                }
                function re() {
                    return g.hostClientType == P.android || g.hostClientType == P.ios
                }
                function ve(t) {
                    if (t === void 0 && (t = N),
                    !re())
                        throw {
                            errorCode: F.NOT_SUPPORTED_ON_PLATFORM
                        };
                    if (!bn(t))
                        throw {
                            errorCode: F.OLD_PLATFORM
                        }
                }
                function _e(t) {
                    var u = g.additionalValidOrigins.concat(t.filter(function(c) {
                        return typeof c == "string" && St.test(c)
                    }))
                      , r = {};
                    u = u.filter(function(c) {
                        return !r[c] && (r[c] = !0,
                        !0)
                    }),
                    g.additionalValidOrigins = u
                }
                function Oe(t) {
                    return {
                        actionInfo: t.actionInfo,
                        app: {
                            locale: t.locale,
                            sessionId: t.appSessionId ? t.appSessionId : "",
                            theme: t.theme ? t.theme : "default",
                            iconPositionVertical: t.appIconPosition,
                            osLocaleInfo: t.osLocaleInfo,
                            parentMessageId: t.parentMessageId,
                            userClickTime: t.userClickTime,
                            userFileOpenPreference: t.userFileOpenPreference,
                            host: {
                                name: t.hostName ? t.hostName : pt.teams,
                                clientType: t.hostClientType ? t.hostClientType : P.web,
                                sessionId: t.sessionId ? t.sessionId : "",
                                ringId: t.ringId
                            },
                            appLaunchId: t.appLaunchId
                        },
                        page: {
                            id: t.entityId,
                            frameContext: t.frameContext ? t.frameContext : g.frameContext,
                            subPageId: t.subEntityId,
                            isFullScreen: t.isFullScreen,
                            isMultiWindow: t.isMultiWindow,
                            sourceOrigin: t.sourceOrigin
                        },
                        user: {
                            id: t.userObjectId,
                            displayName: t.userDisplayName,
                            isCallingAllowed: t.isCallingAllowed,
                            isPSTNCallingAllowed: t.isPSTNCallingAllowed,
                            licenseType: t.userLicenseType,
                            loginHint: t.loginHint,
                            userPrincipalName: t.userPrincipalName,
                            tenant: t.tid ? {
                                id: t.tid,
                                teamsSku: t.tenantSKU
                            } : void 0
                        },
                        channel: t.channelId ? {
                            id: t.channelId,
                            displayName: t.channelName,
                            relativeUrl: t.channelRelativeUrl,
                            membershipType: t.channelType,
                            defaultOneNoteSectionId: t.defaultOneNoteSectionId,
                            ownerGroupId: t.hostTeamGroupId,
                            ownerTenantId: t.hostTeamTenantId
                        } : void 0,
                        chat: t.chatId ? {
                            id: t.chatId
                        } : void 0,
                        meeting: t.meetingId ? {
                            id: t.meetingId
                        } : void 0,
                        sharepoint: t.sharepoint,
                        team: t.teamId ? {
                            internalId: t.teamId,
                            displayName: t.teamName,
                            type: t.teamType,
                            groupId: t.groupId,
                            templateId: t.teamTemplateId,
                            isArchived: t.isTeamArchived,
                            userRole: t.userTeamRole
                        } : void 0,
                        sharePointSite: t.teamSiteUrl || t.teamSiteDomain || t.teamSitePath || t.mySitePath || t.mySiteDomain ? {
                            teamSiteUrl: t.teamSiteUrl,
                            teamSiteDomain: t.teamSiteDomain,
                            teamSitePath: t.teamSitePath,
                            teamSiteId: t.teamSiteId,
                            mySitePath: t.mySitePath,
                            mySiteDomain: t.mySiteDomain
                        } : void 0
                    }
                }
                function Ae() {
                    return typeof window == "undefined"
                }
                (function(t) {
                    var u, r, c;
                    function p(Cn) {
                        return new Promise(function(Bn, de) {
                            if (g.hostClientType === P.desktop || g.hostClientType === P.android || g.hostClientType === P.ios || g.hostClientType === P.rigel || g.hostClientType === P.teamsRoomsWindows || g.hostClientType === P.teamsRoomsAndroid || g.hostClientType === P.teamsPhones || g.hostClientType === P.teamsDisplays) {
                                var ce = document.createElement("a");
                                ce.href = Cn.url,
                                Bn(En("authentication.authenticate", [ce.href, Cn.width, Cn.height, Cn.isExternal]).then(function(dr) {
                                    var Ti = dr[0]
                                      , Ai = dr[1];
                                    if (Ti)
                                        return Ai;
                                    throw new Error(Ai)
                                }))
                            } else
                                u = {
                                    success: Bn,
                                    fail: de
                                },
                                jt(Cn)
                        }
                        )
                    }
                    function E(Cn) {
                        return new Promise(function(Bn) {
                            Bn(En("authentication.getAuthToken", [Cn == null ? void 0 : Cn.resources, Cn == null ? void 0 : Cn.claims, Cn == null ? void 0 : Cn.silent]))
                        }
                        ).then(function(Bn) {
                            var de = Bn[0]
                              , ce = Bn[1];
                            if (de)
                                return ce;
                            throw new Error(ce)
                        })
                    }
                    function O() {
                        return new Promise(function(Cn) {
                            Cn(En("authentication.getUser"))
                        }
                        ).then(function(Cn) {
                            var Bn = Cn[0]
                              , de = Cn[1];
                            if (Bn)
                                return de;
                            throw new Error(de)
                        })
                    }
                    function dt() {
                        kt();
                        try {
                            h.childWindow && h.childWindow.close()
                        } finally {
                            h.childWindow = null,
                            h.childOrigin = null
                        }
                    }
                    function jt(Cn) {
                        dt();
                        var Bn = Cn.width || 600
                          , de = Cn.height || 400;
                        Bn = Math.min(Bn, h.currentWindow.outerWidth - 400),
                        de = Math.min(de, h.currentWindow.outerHeight - 200);
                        var ce = document.createElement("a");
                        ce.href = Cn.url.replace("{oauthRedirectMethod}", "web");
                        var dr = h.currentWindow.screenLeft !== void 0 ? h.currentWindow.screenLeft : h.currentWindow.screenX
                          , Ti = h.currentWindow.screenTop !== void 0 ? h.currentWindow.screenTop : h.currentWindow.screenY;
                        dr += h.currentWindow.outerWidth / 2 - Bn / 2,
                        Ti += h.currentWindow.outerHeight / 2 - de / 2,
                        h.childWindow = h.currentWindow.open(ce.href, "_blank", "toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top=" + Ti + ", left=" + dr + ", width=" + Bn + ", height=" + de),
                        h.childWindow ? On() : Ce("FailedToOpenWindow")
                    }
                    function kt() {
                        r && (clearInterval(r),
                        r = 0),
                        Ht("initialize"),
                        Ht("navigateCrossDomain")
                    }
                    function On() {
                        kt(),
                        r = h.currentWindow.setInterval(function() {
                            if (!h.childWindow || h.childWindow.closed)
                                Ce("CancelledByUser");
                            else {
                                var Cn = h.childOrigin;
                                try {
                                    h.childOrigin = "*",
                                    ke("ping")
                                } finally {
                                    h.childOrigin = Cn
                                }
                            }
                        }, 100),
                        Ct("initialize", function() {
                            return [l.authentication, g.hostClientType]
                        }),
                        Ct("navigateCrossDomain", function() {
                            return !1
                        })
                    }
                    function se(Cn) {
                        try {
                            u && u.success(Cn)
                        } finally {
                            u = null,
                            dt()
                        }
                    }
                    function Ce(Cn) {
                        try {
                            u && u.fail(new Error(Cn))
                        } finally {
                            u = null,
                            dt()
                        }
                    }
                    function kn(Cn, Bn, de) {
                        if (Cn) {
                            var ce = document.createElement("a");
                            ce.href = decodeURIComponent(Cn),
                            ce.host && ce.host !== window.location.host && ce.host === "outlook.office.com" && ce.search.indexOf("client_type=Win32_Outlook") > -1 && (Bn && Bn === "result" && (de && (ce.href = Xn(ce.href, "result", de)),
                            h.currentWindow.location.assign(Xn(ce.href, "authSuccess", ""))),
                            Bn && Bn === "reason" && (de && (ce.href = Xn(ce.href, "reason", de)),
                            h.currentWindow.location.assign(Xn(ce.href, "authFailure", ""))))
                        }
                    }
                    function Xn(Cn, Bn, de) {
                        var ce = Cn.indexOf("#")
                          , dr = ce === -1 ? "#" : Cn.substr(ce);
                        return dr = dr + "&" + Bn + (de !== "" ? "=" + de : ""),
                        (Cn = ce === -1 ? Cn : Cn.substr(0, ce)) + dr
                    }
                    t.initialize = function() {
                        Ct("authentication.authenticate.success", se, !1),
                        Ct("authentication.authenticate.failure", Ce, !1)
                    }
                    ,
                    t.registerAuthenticationHandlers = function(Cn) {
                        c = Cn
                    }
                    ,
                    t.authenticate = function(Cn) {
                        var Bn = Cn !== void 0
                          , de = Bn ? Cn : c;
                        if (!de)
                            throw new Error("No parameters are provided for authentication");
                        return _(f, l.content, l.sidePanel, l.settings, l.remove, l.task, l.stage, l.meetingStage),
                        p(de).then(function(ce) {
                            try {
                                return de && de.successCallback ? (de.successCallback(ce),
                                "") : ce
                            } finally {
                                Bn || (c = null)
                            }
                        }).catch(function(ce) {
                            try {
                                if (de && de.failureCallback)
                                    return de.failureCallback(ce.message),
                                    "";
                                throw ce
                            } finally {
                                Bn || (c = null)
                            }
                        })
                    }
                    ,
                    t.getAuthToken = function(Cn) {
                        return Dn(),
                        E(Cn).then(function(Bn) {
                            return Cn && Cn.successCallback ? (Cn.successCallback(Bn),
                            "") : Bn
                        }).catch(function(Bn) {
                            if (Cn && Cn.failureCallback)
                                return Cn.failureCallback(Bn.message),
                                "";
                            throw Bn
                        })
                    }
                    ,
                    t.getUser = function(Cn) {
                        return Dn(),
                        O().then(function(Bn) {
                            return Cn && Cn.successCallback ? (Cn.successCallback(Bn),
                            null) : Bn
                        }).catch(function(Bn) {
                            if (Cn && Cn.failureCallback)
                                return Cn.failureCallback(Bn.message),
                                null;
                            throw Bn
                        })
                    }
                    ,
                    t.notifySuccess = function(Cn, Bn) {
                        kn(Bn, "result", Cn),
                        _(f, l.authentication),
                        m("authentication.authenticate.success", [Cn]),
                        Ue(h.parentWindow, function() {
                            return setTimeout(function() {
                                return h.currentWindow.close()
                            }, 200)
                        })
                    }
                    ,
                    t.notifyFailure = function(Cn, Bn) {
                        kn(Bn, "reason", Cn),
                        _(f, l.authentication),
                        m("authentication.authenticate.failure", [Cn]),
                        Ue(h.parentWindow, function() {
                            return setTimeout(function() {
                                return h.currentWindow.close()
                            }, 200)
                        })
                    }
                    ,
                    function(Cn) {
                        Cn.Public = "public",
                        Cn.EUDB = "eudb",
                        Cn.Other = "other"
                    }(t.DataResidency || (t.DataResidency = {}))
                }
                )(he || (he = {})),
                function(t) {
                    var u = [];
                    function r(c) {
                        g.frameContext && (g.frameContext === l.task ? u.push(c) : Ht("messageForChild"))
                    }
                    t.initialize = function() {
                        Ct("messageForChild", r, !1)
                    }
                    ,
                    function(c) {
                        function p() {
                            return _(f) && (f.supports.dialog && f.supports.dialog.url) !== void 0
                        }
                        function E(dt) {
                            return {
                                url: dt.url,
                                height: dt.size ? dt.size.height : M.Small,
                                width: dt.size ? dt.size.width : M.Small,
                                title: dt.title,
                                fallbackUrl: dt.fallbackUrl
                            }
                        }
                        function O(dt) {
                            var jt = E(dt);
                            return jt.completionBotId = dt.completionBotId,
                            jt
                        }
                        c.open = function(dt, jt, kt) {
                            if (_(f, l.content, l.sidePanel, l.meetingStage),
                            !p())
                                throw R;
                            kt && Ct("messageForParent", kt),
                            m("tasks.startTask", [E(dt)], function(On, se) {
                                jt == null || jt({
                                    err: On,
                                    result: se
                                }),
                                Ht("messageForParent")
                            })
                        }
                        ,
                        c.submit = function(dt, jt) {
                            if (_(f, l.content, l.task),
                            !p())
                                throw R;
                            m("tasks.completeTask", [dt, jt ? Array.isArray(jt) ? jt : [jt] : []])
                        }
                        ,
                        c.sendMessageToParentFromDialog = function(dt) {
                            if (_(f, l.task),
                            !p())
                                throw R;
                            m("messageForParent", [dt])
                        }
                        ,
                        c.sendMessageToDialog = function(dt) {
                            if (_(f, l.content, l.sidePanel, l.meetingStage),
                            !p())
                                throw R;
                            m("messageForChild", [dt])
                        }
                        ,
                        c.registerOnMessageFromParent = function(dt) {
                            if (_(f, l.task),
                            !p())
                                throw R;
                            for (Ht("messageForChild"),
                            Ct("messageForChild", dt),
                            u.reverse(); u.length > 0; )
                                dt(u.pop())
                        }
                        ,
                        c.isSupported = p,
                        function(dt) {
                            function jt() {
                                return _(f) && (f.supports.dialog && f.supports.dialog.url && f.supports.dialog.url.bot) !== void 0
                            }
                            dt.open = function(kt, On, se) {
                                if (_(f, l.content, l.sidePanel, l.meetingStage),
                                !jt())
                                    throw R;
                                se && Ct("messageForParent", se),
                                m("tasks.startTask", [O(kt)], function(Ce, kn) {
                                    On == null || On({
                                        err: Ce,
                                        result: kn
                                    }),
                                    Ht("messageForParent")
                                })
                            }
                            ,
                            dt.isSupported = jt
                        }(c.bot || (c.bot = {})),
                        c.getDialogInfoFromUrlDialogInfo = E,
                        c.getDialogInfoFromBotUrlDialogInfo = O
                    }(t.url || (t.url = {})),
                    t.isSupported = function() {
                        return !(!_(f) || !f.supports.dialog)
                    }
                    ,
                    function(c) {
                        function p() {
                            return !(!_(f) || !f.supports.dialog) && !!f.supports.dialog.update
                        }
                        c.resize = function(E) {
                            if (_(f, l.content, l.sidePanel, l.task, l.meetingStage),
                            !p())
                                throw R;
                            m("tasks.updateTask", [E])
                        }
                        ,
                        c.isSupported = p
                    }(t.update || (t.update = {})),
                    function(c) {
                        function p() {
                            var dt = f.hostVersionsInfo && f.hostVersionsInfo.adaptiveCardSchemaVersion && !nt(f.hostVersionsInfo.adaptiveCardSchemaVersion);
                            return _(f) && (dt && f.supports.dialog && f.supports.dialog.card) !== void 0
                        }
                        function E(dt) {
                            return {
                                card: dt.card,
                                height: dt.size ? dt.size.height : M.Small,
                                width: dt.size ? dt.size.width : M.Small,
                                title: dt.title
                            }
                        }
                        function O(dt) {
                            var jt = E(dt);
                            return jt.completionBotId = dt.completionBotId,
                            jt
                        }
                        c.open = function(dt, jt) {
                            if (_(f, l.content, l.sidePanel, l.meetingStage),
                            !p())
                                throw R;
                            m("tasks.startTask", [E(dt)], function(kt, On) {
                                jt == null || jt({
                                    err: kt,
                                    result: On
                                })
                            })
                        }
                        ,
                        c.isSupported = p,
                        function(dt) {
                            function jt() {
                                var kt = f.hostVersionsInfo && f.hostVersionsInfo.adaptiveCardSchemaVersion && !nt(f.hostVersionsInfo.adaptiveCardSchemaVersion);
                                return _(f) && (kt && f.supports.dialog && f.supports.dialog.card && f.supports.dialog.card.bot) !== void 0
                            }
                            dt.open = function(kt, On) {
                                if (_(f, l.content, l.sidePanel, l.meetingStage),
                                !jt())
                                    throw R;
                                m("tasks.startTask", [O(kt)], function(se, Ce) {
                                    On == null || On({
                                        err: se,
                                        result: Ce
                                    })
                                })
                            }
                            ,
                            dt.isSupported = jt
                        }(c.bot || (c.bot = {})),
                        c.getDialogInfoFromAdaptiveCardDialogInfo = E,
                        c.getDialogInfoFromBotAdaptiveCardDialogInfo = O,
                        c.getAdaptiveCardDialogInfoFromTaskInfo = function(dt) {
                            return {
                                card: dt.card,
                                size: {
                                    height: dt.height ? dt.height : M.Small,
                                    width: dt.width ? dt.width : M.Small
                                },
                                title: dt.title
                            }
                        }
                        ,
                        c.getBotAdaptiveCardDialogInfoFromTaskInfo = function(dt) {
                            return {
                                card: dt.card,
                                size: {
                                    height: dt.height ? dt.height : M.Small,
                                    width: dt.width ? dt.width : M.Small
                                },
                                title: dt.title,
                                completionBotId: dt.completionBotId
                            }
                        }
                    }(t.adaptiveCard || (t.adaptiveCard = {}))
                }(Te || (Te = {})),
                function(t) {
                    (function(kt) {
                        kt[kt.ifRoom = 0] = "ifRoom",
                        kt[kt.overflowOnly = 1] = "overflowOnly"
                    }
                    )(t.DisplayMode || (t.DisplayMode = {}));
                    var u, r, c, p = function() {
                        return function() {
                            this.enabled = !0,
                            this.selected = !1
                        }
                    }();
                    function E(kt) {
                        c && c(kt) || (_(f),
                        m("viewConfigItemPress", [kt]))
                    }
                    function O(kt) {
                        u && u(kt) || (_(f),
                        m("handleNavBarMenuItemPress", [kt]))
                    }
                    function dt(kt) {
                        r && r(kt) || (_(f),
                        m("handleActionMenuItemPress", [kt]))
                    }
                    function jt() {
                        return !(!_(f) || !f.supports.menus)
                    }
                    t.MenuItem = p,
                    function(kt) {
                        kt.dropDown = "dropDown",
                        kt.popOver = "popOver"
                    }(t.MenuListType || (t.MenuListType = {})),
                    t.initialize = function() {
                        Ct("navBarMenuItemPress", O, !1),
                        Ct("actionMenuItemPress", dt, !1),
                        Ct("setModuleView", E, !1)
                    }
                    ,
                    t.setUpViews = function(kt, On) {
                        if (_(f),
                        !jt())
                            throw R;
                        c = On,
                        m("setUpViews", [kt])
                    }
                    ,
                    t.setNavBarMenu = function(kt, On) {
                        if (_(f),
                        !jt())
                            throw R;
                        u = On,
                        m("setNavBarMenu", [kt])
                    }
                    ,
                    t.showActionMenu = function(kt, On) {
                        if (_(f),
                        !jt())
                            throw R;
                        r = On,
                        m("showActionMenu", [kt])
                    }
                    ,
                    t.isSupported = jt
                }(ue || (ue = {})),
                function(t) {
                    function u() {
                        if (typeof window == "undefined")
                            throw new Error("window object undefined at print call");
                        window.print()
                    }
                    function r(E, O) {
                        E && _(f),
                        E && O && O(),
                        Re(E)
                    }
                    function c(E, O) {
                        E && _(f),
                        E && O && O(),
                        vn(E)
                    }
                    function p() {
                        return !(!_(f) || !f.supports.teamsCore)
                    }
                    t.enablePrintCapability = function() {
                        if (!g.printCapabilityEnabled) {
                            if (_(f),
                            !p())
                                throw R;
                            g.printCapabilityEnabled = !0,
                            document.addEventListener("keydown", function(E) {
                                (E.ctrlKey || E.metaKey) && E.keyCode === 80 && (u(),
                                E.cancelBubble = !0,
                                E.preventDefault(),
                                E.stopImmediatePropagation())
                            })
                        }
                    }
                    ,
                    t.print = u,
                    t.registerOnLoadHandler = function(E) {
                        r(E, function() {
                            if (E && !p())
                                throw R
                        })
                    }
                    ,
                    t.registerOnLoadHandlerHelper = r,
                    t.registerBeforeUnloadHandler = function(E) {
                        c(E, function() {
                            if (E && !p())
                                throw R
                        })
                    }
                    ,
                    t.registerBeforeUnloadHandlerHelper = c,
                    t.isSupported = p
                }(Se || (Se = {})),
                function(t) {
                    var u = bt("app");
                    t.Messages = {
                        AppLoaded: "appInitialization.appLoaded",
                        Success: "appInitialization.success",
                        Failure: "appInitialization.failure",
                        ExpectedFailure: "appInitialization.expectedFailure"
                    },
                    function(O) {
                        O.AuthFailed = "AuthFailed",
                        O.Timeout = "Timeout",
                        O.Other = "Other"
                    }(t.FailedReason || (t.FailedReason = {})),
                    function(O) {
                        O.PermissionError = "PermissionError",
                        O.NotFound = "NotFound",
                        O.Throttling = "Throttling",
                        O.Offline = "Offline",
                        O.Other = "Other"
                    }(t.ExpectedFailureReason || (t.ExpectedFailureReason = {})),
                    t.isInitialized = function() {
                        return g.initializeCompleted
                    }
                    ,
                    t.getFrameContext = function() {
                        return g.frameContext
                    }
                    ;
                    var r = 5e3;
                    t.initialize = function(O) {
                        return Ae() ? (u.extend("initialize")("window object undefined at initialization"),
                        Promise.resolve()) : Q(function() {
                            return p(O)
                        }, r, new Error("SDK initialization timed out."))
                    }
                    ;
                    var c = u.extend("initializeHelper");
                    function p(O) {
                        return new Promise(function(dt) {
                            g.initializeCalled || (g.initializeCalled = !0,
                            ar(),
                            g.initializePromise = q(O).then(function(jt) {
                                var kt = jt.context
                                  , On = jt.clientType
                                  , se = jt.runtimeConfig
                                  , Ce = jt.clientSupportedSDKVersion
                                  , kn = Ce === void 0 ? N : Ce;
                                g.frameContext = kt,
                                g.hostClientType = On,
                                g.clientSupportedSDKVersion = kn;
                                try {
                                    c("Parsing %s", se);
                                    var Xn = JSON.parse(se);
                                    if (c("Checking if %o is a valid runtime object", Xn != null ? Xn : "null"),
                                    !Xn || !Xn.apiVersion)
                                        throw new Error("Received runtime config is invalid");
                                    se && be(Xn)
                                } catch (Cn) {
                                    if (!(Cn instanceof SyntaxError))
                                        throw Cn;
                                    try {
                                        if (c("Attempting to parse %s as an SDK version", se),
                                        isNaN(z(se, N)) || (g.clientSupportedSDKVersion = se),
                                        Xn = JSON.parse(kn),
                                        c("givenRuntimeConfig parsed to %o", Xn != null ? Xn : "null"),
                                        !Xn)
                                            throw new Error("givenRuntimeConfig string was successfully parsed. However, it parsed to value of null");
                                        be(Xn)
                                    } catch (Bn) {
                                        if (!(Bn instanceof SyntaxError))
                                            throw Bn;
                                        be(Vt(g.clientSupportedSDKVersion))
                                    }
                                }
                                g.initializeCompleted = !0
                            }),
                            he.initialize(),
                            ue.initialize(),
                            Jn.config.initialize(),
                            Te.initialize()),
                            Array.isArray(O) && _e(O),
                            dt(g.initializePromise)
                        }
                        )
                    }
                    function E(O) {
                        O && Dn(),
                        An(O)
                    }
                    t._initialize = function(O) {
                        h.currentWindow = O
                    }
                    ,
                    t._uninitialize = function() {
                        g.initializeCalled && (g.frameContext && (E(null),
                        Jn.backStack.registerBackButtonHandler(null),
                        Jn.registerFullScreenHandler(null),
                        Se.registerBeforeUnloadHandler(null),
                        Se.registerOnLoadHandler(null),
                        tn.registerGetLogHandler(null)),
                        g.frameContext === l.settings && Jn.config.registerOnSaveHandler(null),
                        g.frameContext === l.remove && Jn.config.registerOnRemoveHandler(null),
                        g.initializeCalled = !1,
                        g.initializeCompleted = !1,
                        g.initializePromise = null,
                        g.additionalValidOrigins = [],
                        g.frameContext = null,
                        g.hostClientType = null,
                        g.isFramelessWindow = !1,
                        ut())
                    }
                    ,
                    t.getContext = function() {
                        return new Promise(function(O) {
                            Dn(),
                            O(Wt("getContext"))
                        }
                        ).then(function(O) {
                            return Oe(O)
                        })
                    }
                    ,
                    t.notifyAppLoaded = function() {
                        Dn(),
                        m(t.Messages.AppLoaded, [we])
                    }
                    ,
                    t.notifySuccess = function() {
                        Dn(),
                        m(t.Messages.Success, [we])
                    }
                    ,
                    t.notifyFailure = function(O) {
                        Dn(),
                        m(t.Messages.Failure, [O.reason, O.message])
                    }
                    ,
                    t.notifyExpectedFailure = function(O) {
                        Dn(),
                        m(t.Messages.ExpectedFailure, [O.reason, O.message])
                    }
                    ,
                    t.registerOnThemeChangeHandler = E,
                    t.openLink = function(O) {
                        return new Promise(function(dt) {
                            _(f, l.content, l.sidePanel, l.settings, l.task, l.stage, l.meetingStage),
                            dt(Kt("executeDeepLink", O))
                        }
                        )
                    }
                }(ee || (ee = {})),
                function(t) {
                    function u(c) {
                        if (_(f, l.content),
                        !r())
                            throw R;
                        m("setFrameContext", [c])
                    }
                    function r() {
                        return !(!_(f) || !f.supports.pages)
                    }
                    t.returnFocus = function(c) {
                        if (_(f),
                        !r())
                            throw R;
                        m("returnFocus", [c])
                    }
                    ,
                    t.registerFocusEnterHandler = function(c) {
                        Pn("focusEnter", c, [], function() {
                            if (!r())
                                throw R
                        })
                    }
                    ,
                    t.setCurrentFrame = u,
                    t.initializeWithFrameContext = function(c, p, E) {
                        ee.initialize(E).then(function() {
                            return p && p()
                        }),
                        u(c)
                    }
                    ,
                    t.getConfig = function() {
                        return new Promise(function(c) {
                            if (_(f, l.content, l.settings, l.remove, l.sidePanel),
                            !r())
                                throw R;
                            c(Wt("settings.getSettings"))
                        }
                        )
                    }
                    ,
                    t.navigateCrossDomain = function(c) {
                        return new Promise(function(p) {
                            if (_(f, l.content, l.sidePanel, l.settings, l.remove, l.task, l.stage, l.meetingStage),
                            !r())
                                throw R;
                            p(Vn("navigateCrossDomain", "Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.", c))
                        }
                        )
                    }
                    ,
                    t.navigateToApp = function(c) {
                        return new Promise(function(p) {
                            if (_(f, l.content, l.sidePanel, l.settings, l.task, l.stage, l.meetingStage),
                            !r())
                                throw R;
                            f.isLegacyTeams ? p(Kt("executeDeepLink", Z(c))) : p(Kt("pages.navigateToApp", c))
                        }
                        )
                    }
                    ,
                    t.shareDeepLink = function(c) {
                        if (_(f, l.content, l.sidePanel, l.meetingStage),
                        !r())
                            throw R;
                        m("shareDeepLink", [c.subPageId, c.subPageLabel, c.subPageWebUrl])
                    }
                    ,
                    t.registerFullScreenHandler = function(c) {
                        Pn("fullScreenChange", c, [], function() {
                            if (c && !r())
                                throw R
                        })
                    }
                    ,
                    t.isSupported = r,
                    function(c) {
                        function p() {
                            return !(!_(f) || !f.supports.pages) && !!f.supports.pages.tabs
                        }
                        c.navigateToTab = function(E) {
                            return new Promise(function(O) {
                                if (_(f),
                                !p())
                                    throw R;
                                O(Vn("navigateToTab", "Invalid internalTabInstanceId and/or channelId were/was provided", E))
                            }
                            )
                        }
                        ,
                        c.getTabInstances = function(E) {
                            return new Promise(function(O) {
                                if (_(f),
                                !p())
                                    throw R;
                                O(Wt("getTabInstances", E))
                            }
                            )
                        }
                        ,
                        c.getMruTabInstances = function(E) {
                            return new Promise(function(O) {
                                if (_(f),
                                !p())
                                    throw R;
                                O(Wt("getMruTabInstances", E))
                            }
                            )
                        }
                        ,
                        c.isSupported = p
                    }(t.tabs || (t.tabs = {})),
                    function(c) {
                        var p, E;
                        function O(kn, Xn) {
                            kn && _(f, l.settings),
                            Xn && Xn(),
                            p = kn,
                            kn && m("registerHandler", ["save"])
                        }
                        function dt(kn, Xn) {
                            kn && _(f, l.remove, l.settings),
                            Xn && Xn(),
                            E = kn,
                            kn && m("registerHandler", ["remove"])
                        }
                        function jt(kn) {
                            var Xn = new kt(kn);
                            p ? p(Xn) : h.childWindow ? ke("settings.save", [kn]) : Xn.notifySuccess()
                        }
                        c.initialize = function() {
                            Ct("settings.save", jt, !1),
                            Ct("settings.remove", On, !1)
                        }
                        ,
                        c.setValidityState = function(kn) {
                            if (_(f, l.settings, l.remove),
                            !Ce())
                                throw R;
                            m("settings.setValidityState", [kn])
                        }
                        ,
                        c.setConfig = function(kn) {
                            return new Promise(function(Xn) {
                                if (_(f, l.content, l.settings, l.sidePanel),
                                !Ce())
                                    throw R;
                                Xn(Kt("settings.setSettings", kn))
                            }
                            )
                        }
                        ,
                        c.registerOnSaveHandler = function(kn) {
                            O(kn, function() {
                                if (kn && !Ce())
                                    throw R
                            })
                        }
                        ,
                        c.registerOnSaveHandlerHelper = O,
                        c.registerOnRemoveHandler = function(kn) {
                            dt(kn, function() {
                                if (kn && !Ce())
                                    throw R
                            })
                        }
                        ,
                        c.registerOnRemoveHandlerHelper = dt,
                        c.registerChangeConfigHandler = function(kn) {
                            Pn("changeSettings", kn, [l.content], function() {
                                if (!Ce())
                                    throw R
                            })
                        }
                        ;
                        var kt = function() {
                            function kn(Xn) {
                                this.notified = !1,
                                this.result = Xn || {}
                            }
                            return kn.prototype.notifySuccess = function() {
                                this.ensureNotNotified(),
                                m("settings.save.success"),
                                this.notified = !0
                            }
                            ,
                            kn.prototype.notifyFailure = function(Xn) {
                                this.ensureNotNotified(),
                                m("settings.save.failure", [Xn]),
                                this.notified = !0
                            }
                            ,
                            kn.prototype.ensureNotNotified = function() {
                                if (this.notified)
                                    throw new Error("The SaveEvent may only notify success or failure once.")
                            }
                            ,
                            kn
                        }();
                        function On() {
                            var kn = new se;
                            E ? E(kn) : h.childWindow ? ke("settings.remove", []) : kn.notifySuccess()
                        }
                        var se = function() {
                            function kn() {
                                this.notified = !1
                            }
                            return kn.prototype.notifySuccess = function() {
                                this.ensureNotNotified(),
                                m("settings.remove.success"),
                                this.notified = !0
                            }
                            ,
                            kn.prototype.notifyFailure = function(Xn) {
                                this.ensureNotNotified(),
                                m("settings.remove.failure", [Xn]),
                                this.notified = !0
                            }
                            ,
                            kn.prototype.ensureNotNotified = function() {
                                if (this.notified)
                                    throw new Error("The removeEvent may only notify success or failure once.")
                            }
                            ,
                            kn
                        }();
                        function Ce() {
                            return !(!_(f) || !f.supports.pages) && !!f.supports.pages.config
                        }
                        c.isSupported = Ce
                    }(t.config || (t.config = {})),
                    function(c) {
                        var p;
                        function E() {
                            return new Promise(function(kt) {
                                if (_(f),
                                !jt())
                                    throw R;
                                kt(Vn("navigateBack", "Back navigation is not supported in the current client or context."))
                            }
                            )
                        }
                        function O(kt, On) {
                            kt && _(f),
                            On && On(),
                            p = kt,
                            kt && m("registerHandler", ["backButton"])
                        }
                        function dt() {
                            p && p() || (h.childWindow ? ke("backButtonPress", []) : E())
                        }
                        function jt() {
                            return !(!_(f) || !f.supports.pages) && !!f.supports.pages.backStack
                        }
                        c._initialize = function() {
                            Ct("backButtonPress", dt, !1)
                        }
                        ,
                        c.navigateBack = E,
                        c.registerBackButtonHandler = function(kt) {
                            O(kt, function() {
                                if (kt && !jt())
                                    throw R
                            })
                        }
                        ,
                        c.registerBackButtonHandlerHelper = O,
                        c.isSupported = jt
                    }(t.backStack || (t.backStack = {})),
                    function(c) {
                        function p() {
                            return !(!_(f) || !f.supports.pages) && !!f.supports.pages.fullTrust
                        }
                        c.enterFullscreen = function() {
                            if (_(f, l.content),
                            !p())
                                throw R;
                            m("enterFullscreen", [])
                        }
                        ,
                        c.exitFullscreen = function() {
                            if (_(f, l.content),
                            !p())
                                throw R;
                            m("exitFullscreen", [])
                        }
                        ,
                        c.isSupported = p
                    }(t.fullTrust || (t.fullTrust = {})),
                    function(c) {
                        function p() {
                            return !(!_(f) || !f.supports.pages) && !!f.supports.pages.appButton
                        }
                        c.onClick = function(E) {
                            Pn("appButtonClick", E, [l.content], function() {
                                if (!p())
                                    throw R
                            })
                        }
                        ,
                        c.onHoverEnter = function(E) {
                            Pn("appButtonHoverEnter", E, [l.content], function() {
                                if (!p())
                                    throw R
                            })
                        }
                        ,
                        c.onHoverLeave = function(E) {
                            Pn("appButtonHoverLeave", E, [l.content], function() {
                                if (!p())
                                    throw R
                            })
                        }
                        ,
                        c.isSupported = p
                    }(t.appButton || (t.appButton = {})),
                    function(c) {
                        function p() {
                            return !(!_(f) || !f.supports.pages) && !!f.supports.pages.currentApp
                        }
                        c.navigateTo = function(E) {
                            return new Promise(function(O) {
                                if (_(f, l.content, l.sidePanel, l.settings, l.task, l.stage, l.meetingStage),
                                !p())
                                    throw R;
                                O(qt("pages.currentApp.navigateTo", E))
                            }
                            )
                        }
                        ,
                        c.navigateToDefaultPage = function() {
                            return new Promise(function(E) {
                                if (_(f, l.content, l.sidePanel, l.settings, l.task, l.stage, l.meetingStage),
                                !p())
                                    throw R;
                                E(qt("pages.currentApp.navigateToDefaultPage"))
                            }
                            )
                        }
                        ,
                        c.isSupported = p
                    }(t.currentApp || (t.currentApp = {}))
                }(Jn || (Jn = {}));
                var He = function(t, u, r) {
                    if (r || arguments.length === 2)
                        for (var c, p = 0, E = u.length; p < E; p++)
                            !c && p in u || (c || (c = Array.prototype.slice.call(u, 0, p)),
                            c[p] = u[p]);
                    return t.concat(c || Array.prototype.slice.call(u))
                }
                  , Xe = bt("handlers")
                  , Ee = function() {
                    function t() {}
                    return t.handlers = {},
                    t
                }();
                function ar() {
                    Ee.handlers.themeChange = $n,
                    Ee.handlers.load = Ne,
                    Ee.handlers.beforeUnload = Tn,
                    Jn.backStack._initialize()
                }
                var rr = Xe.extend("callHandler");
                function W(t, u) {
                    var r = Ee.handlers[t];
                    return r ? (rr("Invoking the registered handler for message %s with arguments %o", t, u),
                    [!0, r.apply(this, u)]) : h.childWindow ? (ke(t, [u]),
                    [!1, void 0]) : (rr("Handler for action message %s not found.", t),
                    [!1, void 0])
                }
                function Ct(t, u, r, c) {
                    r === void 0 && (r = !0),
                    c === void 0 && (c = []),
                    u ? (Ee.handlers[t] = u,
                    r && m("registerHandler", He([t], c, !0))) : delete Ee.handlers[t]
                }
                function Ht(t) {
                    delete Ee.handlers[t]
                }
                function pn(t) {
                    return Ee.handlers[t] != null
                }
                function Pn(t, u, r, c) {
                    u && _.apply(void 0, He([f], r, !1)),
                    c && c(),
                    Ct(t, u)
                }
                function An(t) {
                    Ee.themeChangeHandler = t,
                    t && m("registerHandler", ["themeChange"])
                }
                function $n(t) {
                    Ee.themeChangeHandler && Ee.themeChangeHandler(t),
                    h.childWindow && ke("themeChange", [t])
                }
                function Re(t) {
                    Ee.loadHandler = t,
                    t && m("registerHandler", ["load"])
                }
                function Ne(t) {
                    Ee.loadHandler && Ee.loadHandler(t),
                    h.childWindow && ke("load", [t])
                }
                function vn(t) {
                    Ee.beforeUnloadHandler = t,
                    t && m("registerHandler", ["beforeUnload"])
                }
                function Tn() {
                    var t = function() {
                        m("readyToUnload", [])
                    };
                    Ee.beforeUnloadHandler && Ee.beforeUnloadHandler(t) || (h.childWindow ? ke("beforeUnload") : t())
                }
                var w = function(t, u, r) {
                    if (r || arguments.length === 2)
                        for (var c, p = 0, E = u.length; p < E; p++)
                            !c && p in u || (c || (c = Array.prototype.slice.call(u, 0, p)),
                            c[p] = u[p]);
                    return t.concat(c || Array.prototype.slice.call(u))
                }
                  , I = bt("communication")
                  , h = function() {
                    return function() {}
                }()
                  , j = function() {
                    function t() {}
                    return t.parentMessageQueue = [],
                    t.childMessageQueue = [],
                    t.nextMessageId = 0,
                    t.callbacks = {},
                    t.promiseCallbacks = {},
                    t
                }();
                function q(t) {
                    if (j.messageListener = function(r) {
                        return vt(r)
                    }
                    ,
                    h.currentWindow = h.currentWindow || window,
                    h.parentWindow = h.currentWindow.parent !== h.currentWindow.self ? h.currentWindow.parent : h.currentWindow.opener,
                    (h.parentWindow || t) && h.currentWindow.addEventListener("message", j.messageListener, !1),
                    !h.parentWindow) {
                        var u = h.currentWindow;
                        if (!u.nativeInterface)
                            return Promise.reject(new Error("Initialization Failed. No Parent window found."));
                        g.isFramelessWindow = !0,
                        u.onNativeMessage = _n
                    }
                    try {
                        return h.parentOrigin = "*",
                        En("initialize", [we, At]).then(function(r) {
                            return {
                                context: r[0],
                                clientType: r[1],
                                runtimeConfig: r[2],
                                clientSupportedSDKVersion: r[3]
                            }
                        })
                    } finally {
                        h.parentOrigin = null
                    }
                }
                function ut() {
                    h.currentWindow && h.currentWindow.removeEventListener("message", j.messageListener, !1),
                    h.currentWindow = null,
                    h.parentWindow = null,
                    h.parentOrigin = null,
                    h.childWindow = null,
                    h.childOrigin = null,
                    j.parentMessageQueue = [],
                    j.childMessageQueue = [],
                    j.nextMessageId = 0,
                    j.callbacks = {},
                    j.promiseCallbacks = {}
                }
                function Wt(t) {
                    for (var u = [], r = 1; r < arguments.length; r++)
                        u[r - 1] = arguments[r];
                    return En(t, u).then(function(c) {
                        return c[0]
                    })
                }
                function Kt(t) {
                    for (var u = [], r = 1; r < arguments.length; r++)
                        u[r - 1] = arguments[r];
                    return En(t, u).then(function(c) {
                        var p = c[0]
                          , E = c[1];
                        if (!p)
                            throw new Error(E)
                    })
                }
                function Vn(t, u) {
                    for (var r = [], c = 2; c < arguments.length; c++)
                        r[c - 2] = arguments[c];
                    return En(t, r).then(function(p) {
                        var E = p[0]
                          , O = p[1];
                        if (!E)
                            throw new Error(O || u)
                    })
                }
                function qt(t) {
                    for (var u = [], r = 1; r < arguments.length; r++)
                        u[r - 1] = arguments[r];
                    return En(t, u).then(function(c) {
                        var p = c[0]
                          , E = c[1];
                        if (p)
                            throw p;
                        return E
                    })
                }
                function En(t, u) {
                    return u === void 0 && (u = void 0),
                    new Promise(function(r) {
                        r(at(ct(t, u).id))
                    }
                    )
                }
                function at(t) {
                    return new Promise(function(u) {
                        j.promiseCallbacks[t] = u
                    }
                    )
                }
                function m(t, u, r) {
                    var c;
                    u instanceof Function ? r = u : u instanceof Array && (c = u);
                    var p = ct(t, c);
                    r && (j.callbacks[p.id] = r)
                }
                var Y = I.extend("sendMessageToParentHelper");
                function ct(t, u) {
                    var r = Y
                      , c = h.parentWindow
                      , p = Ke(t, u);
                    if (r("Message %i information: %o", p.id, {
                        actionName: t,
                        args: u
                    }),
                    g.isFramelessWindow)
                        h.currentWindow && h.currentWindow.nativeInterface && (r("Sending message %i to parent via framelessPostMessage interface", p.id),
                        h.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(p)));
                    else {
                        var E = xn(c);
                        c && E ? (r("Sending message %i to parent via postMessage", p.id),
                        c.postMessage(p, E)) : (r("Adding message %i to parent message queue", p.id),
                        Ln(c).push(p))
                    }
                    return p
                }
                function vt(t) {
                    if (t && t.data && typeof t.data == "object") {
                        var u = t.source || t.originalEvent && t.originalEvent.source
                          , r = t.origin || t.originalEvent && t.originalEvent.origin;
                        zt(u, r) && (xt(u, r),
                        u === h.parentWindow ? _n(t) : u === h.childWindow && Qt(t))
                    }
                }
                function zt(t, u) {
                    return (!h.currentWindow || t !== h.currentWindow) && (!!(h.currentWindow && h.currentWindow.location && u && u === h.currentWindow.location.origin) || Yt(new URL(u)))
                }
                function xt(t, u) {
                    g.isFramelessWindow || h.parentWindow && !h.parentWindow.closed && t !== h.parentWindow ? h.childWindow && !h.childWindow.closed && t !== h.childWindow || (h.childWindow = t,
                    h.childOrigin = u) : (h.parentWindow = t,
                    h.parentOrigin = u),
                    h.parentWindow && h.parentWindow.closed && (h.parentWindow = null,
                    h.parentOrigin = null),
                    h.childWindow && h.childWindow.closed && (h.childWindow = null,
                    h.childOrigin = null),
                    qn(h.parentWindow),
                    qn(h.childWindow)
                }
                var nn = I.extend("handleParentMessage");
                function _n(t) {
                    var u = nn;
                    if ("id"in t.data && typeof t.data.id == "number") {
                        var r = t.data
                          , c = j.callbacks[r.id];
                        u("Received a response from parent for message %i", r.id),
                        c && (u("Invoking the registered callback for message %i with arguments %o", r.id, r.args),
                        c.apply(null, w(w([], r.args, !0), [r.isPartialResponse], !1)),
                        Mn(t) || (u("Removing registered callback for message %i", r.id),
                        delete j.callbacks[r.id]));
                        var p = j.promiseCallbacks[r.id];
                        p && (u("Invoking the registered promise callback for message %i with arguments %o", r.id, r.args),
                        p(r.args),
                        u("Removing registered promise callback for message %i", r.id),
                        delete j.promiseCallbacks[r.id])
                    } else
                        "func"in t.data && typeof t.data.func == "string" ? (u("Received an action message %s from parent", (r = t.data).func),
                        W(r.func, r.args)) : u("Received an unknown message: %O", t)
                }
                function Mn(t) {
                    return t.data.isPartialResponse === !0
                }
                function Qt(t) {
                    if ("id"in t.data && "func"in t.data) {
                        var u = t.data
                          , r = W(u.func, u.args)
                          , c = r[0]
                          , p = r[1];
                        c && p !== void 0 ? We(u.id, Array.isArray(p) ? p : [p]) : m(u.func, u.args, function() {
                            for (var E = [], O = 0; O < arguments.length; O++)
                                E[O] = arguments[O];
                            if (h.childWindow) {
                                var dt = E.pop();
                                We(u.id, E, dt)
                            }
                        })
                    }
                }
                function Ln(t) {
                    return t === h.parentWindow ? j.parentMessageQueue : t === h.childWindow ? j.childMessageQueue : []
                }
                function xn(t) {
                    return t === h.parentWindow ? h.parentOrigin : t === h.childWindow ? h.childOrigin : null
                }
                var tn, Rt, Nt, Un, fn, wn = I.extend("flushMessageQueue");
                function qn(t) {
                    for (var u = xn(t), r = Ln(t), c = t == h.parentWindow ? "parent" : "child"; t && u && r.length > 0; ) {
                        var p = r.shift();
                        wn("Flushing message %i from " + c + " message queue via postMessage.", p.id),
                        t.postMessage(p, u)
                    }
                }
                function Ue(t, u) {
                    var r = h.currentWindow.setInterval(function() {
                        Ln(t).length === 0 && (clearInterval(r),
                        u())
                    }, 100)
                }
                function We(t, u, r) {
                    var c = h.childWindow
                      , p = Qe(t, u, r)
                      , E = xn(c);
                    c && E && c.postMessage(p, E)
                }
                function ke(t, u) {
                    var r = h.childWindow
                      , c = qe(t, u)
                      , p = xn(r);
                    r && p ? r.postMessage(c, p) : Ln(r).push(c)
                }
                function Ke(t, u) {
                    return {
                        id: j.nextMessageId++,
                        func: t,
                        timestamp: Date.now(),
                        args: u || []
                    }
                }
                function Qe(t, u, r) {
                    return {
                        id: t,
                        args: u || [],
                        isPartialResponse: r
                    }
                }
                function qe(t, u) {
                    return {
                        func: t,
                        args: u || []
                    }
                }
                function ye(t, u) {
                    _(f),
                    m("uploadCustomApp", [t], u || st())
                }
                function gr(t, u, r) {
                    _(f),
                    m(t, u, r)
                }
                function $e(t, u) {
                    if (_(f),
                    !h.childWindow)
                        throw new Error("The child window has not yet been initialized or is not present");
                    ke(t, u)
                }
                function ze(t, u) {
                    var r = this;
                    _(f),
                    Ct(t, function() {
                        for (var c = [], p = 0; p < arguments.length; p++)
                            c[p] = arguments[p];
                        return u.apply(r, c)
                    })
                }
                function fe(t, u) {
                    _(f),
                    Ct("userSettingsChange", u, !0, [t])
                }
                function or(t) {
                    _(f, l.content, l.task),
                    m("openFilePreview", [t.entityId, t.title, t.description, t.type, t.objectUrl, t.downloadUrl, t.webPreviewUrl, t.webEditUrl, t.baseUrl, t.editFile, t.subEntityId, t.viewerAction, t.fileOpenPreference, t.conversationId])
                }
                (function(t) {
                    function u() {
                        return !(!_(f) || !f.supports.logs)
                    }
                    t.registerGetLogHandler = function(r) {
                        if (r && _(f),
                        r && !u())
                            throw R;
                        r ? Ct("log.request", function() {
                            m("log.receive", [r()])
                        }) : Ht("log.request")
                    }
                    ,
                    t.isSupported = u
                }
                )(tn || (tn = {})),
                function(t) {
                    t.fileDownloadStart = "fileDownloadStart",
                    t.fileDownloadComplete = "fileDownloadComplete"
                }(Rt || (Rt = {})),
                function(t) {
                    t.view = "view",
                    t.edit = "edit",
                    t.editNew = "editNew"
                }(Nt || (Nt = {})),
                function(t) {
                    t.fileOpenPreference = "fileOpenPreference",
                    t.theme = "theme"
                }(Un || (Un = {})),
                function(t) {
                    function u() {
                        return !(!_(f) || !f.supports.conversations)
                    }
                    t.openConversation = function(r) {
                        return new Promise(function(c) {
                            if (_(f, l.content),
                            !u())
                                throw R;
                            var p = Kt("conversations.openConversation", {
                                title: r.title,
                                subEntityId: r.subEntityId,
                                conversationId: r.conversationId,
                                channelId: r.channelId,
                                entityId: r.entityId
                            });
                            r.onStartConversation && Ct("startConversation", function(E, O, dt, jt) {
                                return r.onStartConversation({
                                    subEntityId: E,
                                    conversationId: O,
                                    channelId: dt,
                                    entityId: jt
                                })
                            }),
                            r.onCloseConversation && Ct("closeConversation", function(E, O, dt, jt) {
                                return r.onCloseConversation({
                                    subEntityId: E,
                                    conversationId: O,
                                    channelId: dt,
                                    entityId: jt
                                })
                            }),
                            c(p)
                        }
                        )
                    }
                    ,
                    t.closeConversation = function() {
                        if (_(f, l.content),
                        !u())
                            throw R;
                        m("conversations.closeConversation"),
                        Ht("startConversation"),
                        Ht("closeConversation")
                    }
                    ,
                    t.getChatMembers = function() {
                        return new Promise(function(r) {
                            if (_(f),
                            !u())
                                throw R;
                            r(Wt("getChatMembers"))
                        }
                        )
                    }
                    ,
                    t.isSupported = u
                }(fn || (fn = {}));
                var Je, sr = "/l/app/", ur = "/l/meeting/new", Ir = "attendees", Pr = "startTime", tr = "endTime", Dr = "subject", Er = "content", Fr = "/l/call/0/0", Cr = "source", cr = "withVideo", Be = "/l/chat/0/0", pr = "users", ot = "topicName", Bt = "message";
                function Zt(t, u, r) {
                    if (t.length === 0)
                        throw new Error("Must have at least one user when creating a chat deep link");
                    var c = "".concat(pr, "=") + t.map(function(O) {
                        return encodeURIComponent(O)
                    }).join(",")
                      , p = u === void 0 ? "" : "&".concat(ot, "=").concat(encodeURIComponent(u))
                      , E = r === void 0 ? "" : "&".concat(Bt, "=").concat(encodeURIComponent(r));
                    return "".concat(L, "://").concat(V).concat(Be, "?").concat(c).concat(p).concat(E)
                }
                function an(t, u, r) {
                    if (t.length === 0)
                        throw new Error("Must have at least one target when creating a call deep link");
                    var c = "".concat(pr, "=") + t.map(function(O) {
                        return encodeURIComponent(O)
                    }).join(",")
                      , p = u === void 0 ? "" : "&".concat(cr, "=").concat(encodeURIComponent(u))
                      , E = r === void 0 ? "" : "&".concat(Cr, "=").concat(encodeURIComponent(r));
                    return "".concat(L, "://").concat(V).concat(Fr, "?").concat(c).concat(p).concat(E)
                }
                function In(t, u, r, c, p) {
                    var E = t === void 0 ? "" : "".concat(Ir, "=") + t.map(function(On) {
                        return encodeURIComponent(On)
                    }).join(",")
                      , O = u === void 0 ? "" : "&".concat(Pr, "=").concat(encodeURIComponent(u))
                      , dt = r === void 0 ? "" : "&".concat(tr, "=").concat(encodeURIComponent(r))
                      , jt = c === void 0 ? "" : "&".concat(Dr, "=").concat(encodeURIComponent(c))
                      , kt = p === void 0 ? "" : "&".concat(Er, "=").concat(encodeURIComponent(p));
                    return "".concat(L, "://").concat(V).concat(ur, "?").concat(E).concat(O).concat(dt).concat(jt).concat(kt)
                }
                function Hn(t) {
                    if (!t)
                        throw new Error("App ID must be set when creating an app install dialog deep link");
                    return "".concat(L, "://").concat(V).concat(sr).concat(encodeURIComponent(t))
                }
                (function(t) {
                    function u() {
                        return !(!_(f) || !f.supports.appInstallDialog)
                    }
                    t.openAppInstallDialog = function(r) {
                        return new Promise(function(c) {
                            if (_(f, l.content, l.sidePanel, l.settings, l.task, l.stage, l.meetingStage),
                            !u())
                                throw new Error("Not supported");
                            f.isLegacyTeams ? c(Kt("executeDeepLink", Hn(r.appId))) : (m("appInstallDialog.openAppInstallDialog", [r]),
                            c())
                        }
                        )
                    }
                    ,
                    t.isSupported = u
                }
                )(Je || (Je = {}));
                var jn, rt, wt, It, on = function() {
                    var t = function(u, r) {
                        return t = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(c, p) {
                            c.__proto__ = p
                        }
                        || function(c, p) {
                            for (var E in p)
                                Object.prototype.hasOwnProperty.call(p, E) && (c[E] = p[E])
                        }
                        ,
                        t(u, r)
                    };
                    return function(u, r) {
                        if (typeof r != "function" && r !== null)
                            throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                        function c() {
                            this.constructor = u
                        }
                        t(u, r),
                        u.prototype = r === null ? Object.create(r) : (c.prototype = r.prototype,
                        new c)
                    }
                }();
                function mn(t, u) {
                    if (t == null || u == null || t.length <= 0)
                        return null;
                    var r, c = 1;
                    return t.sort(function(p, E) {
                        return p.sequence > E.sequence ? 1 : -1
                    }),
                    t.forEach(function(p) {
                        p.sequence == c && (r = r ? new Blob([r, p.file],{
                            type: u
                        }) : new Blob([p.file],{
                            type: u
                        }),
                        c++)
                    }),
                    r
                }
                function Wn(t, u) {
                    if (t == null || u == null)
                        return null;
                    for (var r = atob(t.chunk), c = new Array(r.length), p = 0; p < r.length; p++)
                        c[p] = r.charCodeAt(p);
                    var E = new Uint8Array(c)
                      , O = new Blob([E],{
                        type: u
                    });
                    return {
                        sequence: t.chunkSequence,
                        file: O
                    }
                }
                function ne(t) {
                    mr(t) ? ve(o) : wr(t) ? ve(T) : Tr(t) && ve(v)
                }
                function ie(t) {
                    return !(t.mediaType != jn.MediaType.Video || !t.videoProps || !t.videoProps.videoController)
                }
                function ge(t) {
                    return !(t == null || t.maxMediaCount > 10)
                }
                function Tr(t) {
                    var u;
                    return !((t == null ? void 0 : t.mediaType) != jn.MediaType.Image || !(!((u = t == null ? void 0 : t.imageProps) === null || u === void 0) && u.imageOutputFormats))
                }
                function mr(t) {
                    return !(!t || t.mediaType != jn.MediaType.VideoAndImage && !t.videoAndImageProps)
                }
                function wr(t) {
                    return !(!t || t.mediaType != jn.MediaType.Video || !t.videoProps || t.videoProps.isFullScreenMode)
                }
                function nr(t, u, r) {
                    return t != null && u != null && u == jn.FileFormat.ID && r != null
                }
                function Or(t) {
                    return !(t == null || t.length <= 0 || t.length > 10)
                }
                function Ur(t) {
                    return !t || !(t.timeOutIntervalInSec === null || t.timeOutIntervalInSec <= 0 || t.timeOutIntervalInSec > 60)
                }
                function ki(t) {
                    return !(t && (t.title && typeof t.title != "string" || t.setSelected && typeof t.setSelected != "object" || t.openOrgWideSearchInChatOrChannel && typeof t.openOrgWideSearchInChatOrChannel != "boolean" || t.singleSelect && typeof t.singleSelect != "boolean"))
                }
                function Zr() {
                    return f.hostVersionsInfo ? f.hostVersionsInfo.adaptiveCardSchemaVersion : void 0
                }
                (function(t) {
                    (function(O) {
                        O.Base64 = "base64",
                        O.ID = "id"
                    }
                    )(t.FileFormat || (t.FileFormat = {}));
                    var u = function() {
                        return function() {}
                    }();
                    t.File = u,
                    t.captureImage = function(O) {
                        if (!O)
                            throw new Error("[captureImage] Callback cannot be null");
                        _(f, l.content, l.task),
                        g.isFramelessWindow ? bn(gt) ? m("captureImage", O) : O({
                            errorCode: F.OLD_PLATFORM
                        }, void 0) : O({
                            errorCode: F.NOT_SUPPORTED_ON_PLATFORM
                        }, void 0)
                    }
                    ;
                    var r = function(O) {
                        function dt(jt) {
                            jt === void 0 && (jt = null);
                            var kt = O.call(this) || this;
                            return jt && (kt.content = jt.content,
                            kt.format = jt.format,
                            kt.mimeType = jt.mimeType,
                            kt.name = jt.name,
                            kt.preview = jt.preview,
                            kt.size = jt.size),
                            kt
                        }
                        return on(dt, O),
                        dt.prototype.getMedia = function(jt) {
                            if (!jt)
                                throw new Error("[get Media] Callback cannot be null");
                            _(f, l.content, l.task),
                            bn(ht) ? nr(this.mimeType, this.format, this.content) ? bn("2.0.0") ? this.getMediaViaCallback(jt) : this.getMediaViaHandler(jt) : jt({
                                errorCode: F.INVALID_ARGUMENTS
                            }, null) : jt({
                                errorCode: F.OLD_PLATFORM
                            }, null)
                        }
                        ,
                        dt.prototype.getMediaViaCallback = function(jt) {
                            var kt = {
                                mediaMimeType: this.mimeType,
                                assembleAttachment: []
                            };
                            m("getMedia", [this.content], function(On) {
                                if (jt)
                                    if (On && On.error)
                                        jt(On.error, null);
                                    else if (On && On.mediaChunk)
                                        if (On.mediaChunk.chunkSequence <= 0) {
                                            var se = mn(kt.assembleAttachment, kt.mediaMimeType);
                                            jt(On.error, se)
                                        } else {
                                            var Ce = Wn(On.mediaChunk, kt.mediaMimeType);
                                            kt.assembleAttachment.push(Ce)
                                        }
                                    else
                                        jt({
                                            errorCode: F.INTERNAL_ERROR,
                                            message: "data received is null"
                                        }, null)
                            })
                        }
                        ,
                        dt.prototype.getMediaViaHandler = function(jt) {
                            var kt = it()
                              , On = {
                                mediaMimeType: this.mimeType,
                                assembleAttachment: []
                            }
                              , se = [kt, this.content];
                            this.content && jt && m("getMedia", se),
                            Ct("getMedia" + kt, function(Ce) {
                                if (jt) {
                                    var kn = JSON.parse(Ce);
                                    if (kn.error)
                                        jt(kn.error, null),
                                        Ht("getMedia" + kt);
                                    else if (kn.mediaChunk)
                                        if (kn.mediaChunk.chunkSequence <= 0) {
                                            var Xn = mn(On.assembleAttachment, On.mediaMimeType);
                                            jt(kn.error, Xn),
                                            Ht("getMedia" + kt)
                                        } else {
                                            var Cn = Wn(kn.mediaChunk, On.mediaMimeType);
                                            On.assembleAttachment.push(Cn)
                                        }
                                    else
                                        jt({
                                            errorCode: F.INTERNAL_ERROR,
                                            message: "data received is null"
                                        }, null),
                                        Ht("getMedia" + kt)
                                }
                            })
                        }
                        ,
                        dt
                    }(u);
                    t.Media = r;
                    var c, p, E = function(O) {
                        function dt() {
                            return O !== null && O.apply(this, arguments) || this
                        }
                        return on(dt, O),
                        dt.prototype.getMediaType = function() {
                            return p.Video
                        }
                        ,
                        dt.prototype.notifyEventToApp = function(jt) {
                            if (this.controllerCallback)
                                switch (jt) {
                                case c.StartRecording:
                                    if (this.controllerCallback.onRecordingStarted) {
                                        this.controllerCallback.onRecordingStarted();
                                        break
                                    }
                                }
                        }
                        ,
                        dt
                    }(function() {
                        function O(dt) {
                            this.controllerCallback = dt
                        }
                        return O.prototype.notifyEventToHost = function(dt, jt) {
                            _(f, l.content, l.task);
                            try {
                                ve(T)
                            } catch (kt) {
                                return void (jt && jt(kt))
                            }
                            m("media.controller", [{
                                mediaType: this.getMediaType(),
                                mediaControllerEvent: dt
                            }], function(kt) {
                                jt && jt(kt)
                            })
                        }
                        ,
                        O.prototype.stop = function(dt) {
                            this.notifyEventToHost(c.StopRecording, dt)
                        }
                        ,
                        O
                    }());
                    t.VideoController = E,
                    function(O) {
                        O[O.StartRecording = 1] = "StartRecording",
                        O[O.StopRecording = 2] = "StopRecording"
                    }(c = t.MediaControllerEvent || (t.MediaControllerEvent = {})),
                    function(O) {
                        O[O.Photo = 1] = "Photo",
                        O[O.Document = 2] = "Document",
                        O[O.Whiteboard = 3] = "Whiteboard",
                        O[O.BusinessCard = 4] = "BusinessCard"
                    }(t.CameraStartMode || (t.CameraStartMode = {})),
                    function(O) {
                        O[O.Camera = 1] = "Camera",
                        O[O.Gallery = 2] = "Gallery"
                    }(t.Source || (t.Source = {})),
                    function(O) {
                        O[O.Image = 1] = "Image",
                        O[O.Video = 2] = "Video",
                        O[O.VideoAndImage = 3] = "VideoAndImage",
                        O[O.Audio = 4] = "Audio"
                    }(p = t.MediaType || (t.MediaType = {})),
                    function(O) {
                        O[O.ID = 1] = "ID",
                        O[O.URL = 2] = "URL"
                    }(t.ImageUriType || (t.ImageUriType = {})),
                    function(O) {
                        O[O.IMAGE = 1] = "IMAGE",
                        O[O.PDF = 2] = "PDF"
                    }(t.ImageOutputFormats || (t.ImageOutputFormats = {})),
                    t.selectMedia = function(O, dt) {
                        if (!dt)
                            throw new Error("[select Media] Callback cannot be null");
                        if (_(f, l.content, l.task),
                        bn(ht)) {
                            try {
                                ne(O)
                            } catch (On) {
                                return void dt(On, null)
                            }
                            if (ge(O))
                                m("selectMedia", [O], function(On, se, Ce) {
                                    if (Ce)
                                        ie(O) && O.videoProps.videoController.notifyEventToApp(Ce);
                                    else if (se) {
                                        for (var kn = [], Xn = 0, Cn = se; Xn < Cn.length; Xn++) {
                                            var Bn = Cn[Xn];
                                            kn.push(new r(Bn))
                                        }
                                        dt(On, kn)
                                    } else
                                        dt(On, null)
                                });
                            else {
                                var jt = {
                                    errorCode: F.INVALID_ARGUMENTS
                                };
                                dt(jt, null)
                            }
                        } else {
                            var kt = {
                                errorCode: F.OLD_PLATFORM
                            };
                            dt(kt, null)
                        }
                    }
                    ,
                    t.viewImages = function(O, dt) {
                        if (!dt)
                            throw new Error("[view images] Callback cannot be null");
                        _(f, l.content, l.task),
                        bn(ht) ? Or(O) ? m("viewImages", [O], dt) : dt({
                            errorCode: F.INVALID_ARGUMENTS
                        }) : dt({
                            errorCode: F.OLD_PLATFORM
                        })
                    }
                    ,
                    t.scanBarCode = function(O, dt) {
                        if (!O)
                            throw new Error("[media.scanBarCode] Callback cannot be null");
                        _(f, l.content, l.task),
                        g.hostClientType !== P.desktop && g.hostClientType !== P.web && g.hostClientType !== P.rigel && g.hostClientType !== P.teamsRoomsWindows && g.hostClientType !== P.teamsRoomsAndroid && g.hostClientType !== P.teamsPhones && g.hostClientType !== P.teamsDisplays ? bn(yt) ? Ur(dt) ? m("media.scanBarCode", [dt], O) : O({
                            errorCode: F.INVALID_ARGUMENTS
                        }, null) : O({
                            errorCode: F.OLD_PLATFORM
                        }, null) : O({
                            errorCode: F.NOT_SUPPORTED_ON_PLATFORM
                        }, null)
                    }
                }
                )(jn || (jn = {})),
                function(t) {
                    function u() {
                        return !!(_(f) && f.supports.barCode && f.supports.permissions)
                    }
                    t.scanBarCode = function(r) {
                        return new Promise(function(c) {
                            if (_(f, l.content, l.task),
                            !u())
                                throw R;
                            if (!Ur(r))
                                throw {
                                    errorCode: F.INVALID_ARGUMENTS
                                };
                            c(qt("media.scanBarCode", r))
                        }
                        )
                    }
                    ,
                    t.hasPermission = function() {
                        if (_(f, l.content, l.task),
                        !u())
                            throw R;
                        var r = Et.Media;
                        return new Promise(function(c) {
                            c(qt("permissions.has", r))
                        }
                        )
                    }
                    ,
                    t.requestPermission = function() {
                        if (_(f, l.content, l.task),
                        !u())
                            throw R;
                        var r = Et.Media;
                        return new Promise(function(c) {
                            c(qt("permissions.request", r))
                        }
                        )
                    }
                    ,
                    t.isSupported = u
                }(rt || (rt = {})),
                function(t) {
                    function u(c) {
                        return new Promise(function(p) {
                            if (_(f, l.content, l.task),
                            !r())
                                throw R;
                            f.isLegacyTeams ? p(Kt("executeDeepLink", Zt([c.user], void 0, c.message))) : p(Kt("chat.openChat", {
                                members: c.user,
                                message: c.message
                            }))
                        }
                        )
                    }
                    function r() {
                        return !(!_(f) || !f.supports.chat)
                    }
                    t.openChat = u,
                    t.openGroupChat = function(c) {
                        return new Promise(function(p) {
                            if (c.users.length < 1)
                                throw Error("OpenGroupChat Failed: No users specified");
                            if (c.users.length === 1)
                                u({
                                    user: c.users[0],
                                    message: c.message
                                });
                            else {
                                if (_(f, l.content, l.task),
                                !r())
                                    throw R;
                                f.isLegacyTeams ? p(Kt("executeDeepLink", Zt(c.users, c.topic, c.message))) : p(Kt("chat.openChat", {
                                    members: c.users,
                                    message: c.message,
                                    topic: c.topic
                                }))
                            }
                        }
                        )
                    }
                    ,
                    t.isSupported = r
                }(wt || (wt = {})),
                function(t) {
                    function u() {
                        return !!(_(f) && f.supports.geoLocation && f.supports.permissions)
                    }
                    t.getCurrentLocation = function() {
                        if (_(f, l.content, l.task),
                        !u())
                            throw R;
                        return qt("location.getLocation", {
                            allowChooseLocation: !1,
                            showMap: !1
                        })
                    }
                    ,
                    t.hasPermission = function() {
                        if (_(f, l.content, l.task),
                        !u())
                            throw R;
                        var r = Et.GeoLocation;
                        return new Promise(function(c) {
                            c(qt("permissions.has", r))
                        }
                        )
                    }
                    ,
                    t.requestPermission = function() {
                        if (_(f, l.content, l.task),
                        !u())
                            throw R;
                        var r = Et.GeoLocation;
                        return new Promise(function(c) {
                            c(qt("permissions.request", r))
                        }
                        )
                    }
                    ,
                    t.isSupported = u,
                    function(r) {
                        function c() {
                            return !!(_(f) && f.supports.geoLocation && f.supports.geoLocation.map && f.supports.permissions)
                        }
                        r.chooseLocation = function() {
                            if (_(f, l.content, l.task),
                            !c())
                                throw R;
                            return qt("location.getLocation", {
                                allowChooseLocation: !0,
                                showMap: !0
                            })
                        }
                        ,
                        r.showLocation = function(p) {
                            if (_(f, l.content, l.task),
                            !c())
                                throw R;
                            if (!p)
                                throw {
                                    errorCode: F.INVALID_ARGUMENTS
                                };
                            return qt("location.showLocation", p)
                        }
                        ,
                        r.isSupported = c
                    }(t.map || (t.map = {}))
                }(It || (It = {}));
                var ai, yi = function() {
                    function t() {}
                    return t.prototype.postMessage = function(u, r) {
                        _(f),
                        m("messageForChild", [u], r || st())
                    }
                    ,
                    t.prototype.addEventListener = function(u, r) {
                        _(f),
                        u === "message" && Ct("messageForParent", r)
                    }
                    ,
                    t
                }(), Xr = function() {
                    function t() {}
                    return Object.defineProperty(t, "Instance", {
                        get: function() {
                            return this._instance || (this._instance = new this)
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    t.prototype.postMessage = function(u, r) {
                        _(f, l.task),
                        m("messageForParent", [u], r || st())
                    }
                    ,
                    t.prototype.addEventListener = function(u, r) {
                        _(f, l.task),
                        u === "message" && Ct("messageForChild", r)
                    }
                    ,
                    t
                }();
                (function(t) {
                    function u() {
                        return !(!_(f) || !f.supports.location)
                    }
                    t.getLocation = function(r, c) {
                        if (!c)
                            throw new Error("[location.getLocation] Callback cannot be null");
                        if (_(f, l.content, l.task),
                        !bn(J))
                            throw {
                                errorCode: F.OLD_PLATFORM
                            };
                        if (!r)
                            throw {
                                errorCode: F.INVALID_ARGUMENTS
                            };
                        if (!u())
                            throw R;
                        m("location.getLocation", [r], c)
                    }
                    ,
                    t.showLocation = function(r, c) {
                        if (!c)
                            throw new Error("[location.showLocation] Callback cannot be null");
                        if (_(f, l.content, l.task),
                        !bn(J))
                            throw {
                                errorCode: F.OLD_PLATFORM
                            };
                        if (!r)
                            throw {
                                errorCode: F.INVALID_ARGUMENTS
                            };
                        if (!u())
                            throw R;
                        m("location.showLocation", [r], c)
                    }
                    ,
                    t.isSupported = u
                }
                )(ai || (ai = {}));
                var kr, Nr, xr, Hr, br, Ar, lr, Wr, Vr, jr, Ii, Ve, ir, fr, Ze = function(t, u, r, c) {
                    function p(E) {
                        return E instanceof r ? E : new r(function(O) {
                            O(E)
                        }
                        )
                    }
                    return new (r || (r = Promise))(function(E, O) {
                        function dt(On) {
                            try {
                                kt(c.next(On))
                            } catch (se) {
                                O(se)
                            }
                        }
                        function jt(On) {
                            try {
                                kt(c.throw(On))
                            } catch (se) {
                                O(se)
                            }
                        }
                        function kt(On) {
                            On.done ? E(On.value) : p(On.value).then(dt, jt)
                        }
                        kt((c = c.apply(t, u || [])).next())
                    }
                    )
                }, Sr = function(t, u) {
                    var r, c, p, E, O = {
                        label: 0,
                        sent: function() {
                            if (1 & p[0])
                                throw p[1];
                            return p[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return E = {
                        next: dt(0),
                        throw: dt(1),
                        return: dt(2)
                    },
                    typeof Symbol == "function" && (E[Symbol.iterator] = function() {
                        return this
                    }
                    ),
                    E;
                    function dt(kt) {
                        return function(On) {
                            return jt([kt, On])
                        }
                    }
                    function jt(kt) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; O; )
                            try {
                                if (r = 1,
                                c && (p = 2 & kt[0] ? c.return : kt[0] ? c.throw || ((p = c.return) && p.call(c),
                                0) : c.next) && !(p = p.call(c, kt[1])).done)
                                    return p;
                                switch (c = 0,
                                p && (kt = [2 & kt[0], p.value]),
                                kt[0]) {
                                case 0:
                                case 1:
                                    p = kt;
                                    break;
                                case 4:
                                    return O.label++,
                                    {
                                        value: kt[1],
                                        done: !1
                                    };
                                case 5:
                                    O.label++,
                                    c = kt[1],
                                    kt = [0];
                                    continue;
                                case 7:
                                    kt = O.ops.pop(),
                                    O.trys.pop();
                                    continue;
                                default:
                                    if (p = O.trys,
                                    !((p = p.length > 0 && p[p.length - 1]) || kt[0] !== 6 && kt[0] !== 2)) {
                                        O = 0;
                                        continue
                                    }
                                    if (kt[0] === 3 && (!p || kt[1] > p[0] && kt[1] < p[3])) {
                                        O.label = kt[1];
                                        break
                                    }
                                    if (kt[0] === 6 && O.label < p[1]) {
                                        O.label = p[1],
                                        p = kt;
                                        break
                                    }
                                    if (p && O.label < p[2]) {
                                        O.label = p[2],
                                        O.ops.push(kt);
                                        break
                                    }
                                    p[2] && O.ops.pop(),
                                    O.trys.pop();
                                    continue
                                }
                                kt = u.call(t, O)
                            } catch (On) {
                                kt = [6, On],
                                c = 0
                            } finally {
                                r = p = 0
                            }
                        if (5 & kt[0])
                            throw kt[1];
                        return {
                            value: kt[0] ? kt[1] : void 0,
                            done: !0
                        }
                    }
                };
                function Qr(t) {
                    return t ? t.modality && typeof t.modality != "string" ? [!1, "modality must be a string"] : t.targetElementBoundingRect && typeof t.targetElementBoundingRect == "object" ? t.triggerType && typeof t.triggerType == "string" ? oi(t.persona) : [!1, "triggerType must be a valid string"] : [!1, "targetElementBoundingRect must be a DOMRect"] : [!1, "A request object is required"]
                }
                function oi(t) {
                    return t ? t.displayName && typeof t.displayName != "string" ? [!1, "displayName must be a string"] : t.identifiers && typeof t.identifiers == "object" ? t.identifiers.AadObjectId || t.identifiers.Smtp || t.identifiers.Upn ? t.identifiers.AadObjectId && typeof t.identifiers.AadObjectId != "string" ? [!1, "AadObjectId identifier must be a string"] : t.identifiers.Smtp && typeof t.identifiers.Smtp != "string" ? [!1, "Smtp identifier must be a string"] : t.identifiers.Upn && typeof t.identifiers.Upn != "string" ? [!1, "Upn identifier must be a string"] : [!0, void 0] : [!1, "at least one valid identifier must be provided"] : [!1, "persona identifiers object must be provided"] : [!1, "persona object must be provided"]
                }
                function _r(t, u) {
                    ee.initialize(u).then(function() {
                        t && t()
                    })
                }
                function si() {
                    Se.enablePrintCapability()
                }
                function ui() {
                    Se.print()
                }
                function Rr(t) {
                    Dn(),
                    m("getContext", function(u) {
                        u.frameContext || (u.frameContext = g.frameContext),
                        t(u)
                    })
                }
                function Pi(t) {
                    ee.registerOnThemeChangeHandler(t)
                }
                function ci(t) {
                    Pn("fullScreenChange", t, [])
                }
                function Yr(t) {
                    Pn("appButtonClick", t, [l.content])
                }
                function li(t) {
                    Pn("appButtonHoverEnter", t, [l.content])
                }
                function fi(t) {
                    Pn("appButtonHoverLeave", t, [l.content])
                }
                function di(t) {
                    Jn.backStack.registerBackButtonHandlerHelper(t)
                }
                function vi(t) {
                    Se.registerOnLoadHandlerHelper(t)
                }
                function Di(t) {
                    Se.registerBeforeUnloadHandlerHelper(t)
                }
                function gi(t) {
                    Pn("focusEnter", t, [])
                }
                function $r(t) {
                    Pn("changeSettings", t, [l.content])
                }
                function hr(t, u) {
                    _(f),
                    Jn.tabs.getTabInstances(u).then(function(r) {
                        t(r)
                    })
                }
                function Kr(t, u) {
                    _(f),
                    Jn.tabs.getMruTabInstances(u).then(function(r) {
                        t(r)
                    })
                }
                function wi(t) {
                    Jn.shareDeepLink({
                        subPageId: t.subEntityId,
                        subPageLabel: t.subEntityLabel,
                        subPageWebUrl: t.subEntityWebUrl
                    })
                }
                function Oi(t, u) {
                    _(f, l.content, l.sidePanel, l.settings, l.task, l.stage, l.meetingStage),
                    u = u || st(),
                    ee.openLink(t).then(function() {
                        u(!0)
                    }).catch(function(r) {
                        u(!1, r.message)
                    })
                }
                function qr(t) {
                    Jn.setCurrentFrame(t)
                }
                function pi(t, u, r) {
                    Jn.initializeWithFrameContext(t, u, r)
                }
                function Ni(t) {
                    Jn.returnFocus(t)
                }
                function xi(t, u) {
                    _(f),
                    u = u || st(),
                    Jn.tabs.navigateToTab(t).then(function() {
                        u(!0)
                    }).catch(function(r) {
                        u(!1, r.message)
                    })
                }
                function Gr(t, u) {
                    _(f, l.content, l.sidePanel, l.settings, l.remove, l.task, l.stage, l.meetingStage),
                    u = u || st(),
                    Jn.navigateCrossDomain(t).then(function() {
                        u(!0)
                    }).catch(function(r) {
                        u(!1, r.message)
                    })
                }
                function Hi(t) {
                    _(f),
                    t = t || st(),
                    Jn.backStack.navigateBack().then(function() {
                        t(!0)
                    }).catch(function(u) {
                        t(!1, u.message)
                    })
                }
                (function(t) {
                    var u;
                    function r(E, O) {
                        var dt = this;
                        m("meeting.requestAppAudioHandling", [E.isAppHandlingAudio], function(jt, kt) {
                            if (jt && kt != null)
                                throw new Error("[requestAppAudioHandling] Callback response - both parameters cannot be set");
                            if (jt)
                                throw new Error("[requestAppAudioHandling] Callback response - SDK error ".concat(jt.errorCode, " ").concat(jt.message));
                            if (typeof kt != "boolean")
                                throw new Error("[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean");
                            Ct("meeting.micStateChanged", function(On) {
                                return Ze(dt, void 0, void 0, function() {
                                    var se, Ce;
                                    return Sr(this, function(kn) {
                                        switch (kn.label) {
                                        case 0:
                                            return kn.trys.push([0, 2, , 3]),
                                            [4, E.micMuteStateChangedCallback(On)];
                                        case 1:
                                            return se = kn.sent(),
                                            Ce = se.isMicMuted === On.isMicMuted,
                                            p(se, Ce ? u.HostInitiated : u.AppDeclinedToChange),
                                            [3, 3];
                                        case 2:
                                            return kn.sent(),
                                            p(On, u.AppFailedToChange),
                                            [3, 3];
                                        case 3:
                                            return [2]
                                        }
                                    })
                                })
                            }),
                            O(kt)
                        })
                    }
                    function c(E, O) {
                        m("meeting.requestAppAudioHandling", [E.isAppHandlingAudio], function(dt, jt) {
                            if (dt && jt != null)
                                throw new Error("[requestAppAudioHandling] Callback response - both parameters cannot be set");
                            if (dt)
                                throw new Error("[requestAppAudioHandling] Callback response - SDK error ".concat(dt.errorCode, " ").concat(dt.message));
                            if (typeof jt != "boolean")
                                throw new Error("[requestAppAudioHandling] Callback response - isHostAudioless must be a boolean");
                            pn("meeting.micStateChanged") && Ht("meeting.micStateChanged"),
                            O(jt)
                        })
                    }
                    function p(E, O) {
                        _(f, l.sidePanel, l.meetingStage),
                        m("meeting.updateMicState", [E, O])
                    }
                    (function(E) {
                        E[E.HostInitiated = 0] = "HostInitiated",
                        E[E.AppInitiated = 1] = "AppInitiated",
                        E[E.AppDeclinedToChange = 2] = "AppDeclinedToChange",
                        E[E.AppFailedToChange = 3] = "AppFailedToChange"
                    }
                    )(u || (u = {})),
                    function(E) {
                        E.like = "like",
                        E.heart = "heart",
                        E.laugh = "laugh",
                        E.surprised = "surprised",
                        E.applause = "applause"
                    }(t.MeetingReactionType || (t.MeetingReactionType = {})),
                    function(E) {
                        E.Unknown = "Unknown",
                        E.Adhoc = "Adhoc",
                        E.Scheduled = "Scheduled",
                        E.Recurring = "Recurring",
                        E.Broadcast = "Broadcast",
                        E.MeetNow = "MeetNow"
                    }(t.MeetingType || (t.MeetingType = {})),
                    function(E) {
                        E.OneOnOneCall = "oneOnOneCall",
                        E.GroupCall = "groupCall"
                    }(t.CallType || (t.CallType = {})),
                    t.getIncomingClientAudioState = function(E) {
                        if (!E)
                            throw new Error("[get incoming client audio state] Callback cannot be null");
                        _(f, l.sidePanel, l.meetingStage),
                        m("getIncomingClientAudioState", E)
                    }
                    ,
                    t.toggleIncomingClientAudio = function(E) {
                        if (!E)
                            throw new Error("[toggle incoming client audio] Callback cannot be null");
                        _(f, l.sidePanel, l.meetingStage),
                        m("toggleIncomingClientAudio", E)
                    }
                    ,
                    t.getMeetingDetails = function(E) {
                        if (!E)
                            throw new Error("[get meeting details] Callback cannot be null");
                        _(f, l.sidePanel, l.meetingStage, l.settings, l.content),
                        m("meeting.getMeetingDetails", E)
                    }
                    ,
                    t.getAuthenticationTokenForAnonymousUser = function(E) {
                        if (!E)
                            throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");
                        _(f, l.sidePanel, l.meetingStage),
                        m("meeting.getAuthenticationTokenForAnonymousUser", E)
                    }
                    ,
                    t.getLiveStreamState = function(E) {
                        if (!E)
                            throw new Error("[get live stream state] Callback cannot be null");
                        _(f, l.sidePanel),
                        m("meeting.getLiveStreamState", E)
                    }
                    ,
                    t.requestStartLiveStreaming = function(E, O, dt) {
                        if (!E)
                            throw new Error("[request start live streaming] Callback cannot be null");
                        _(f, l.sidePanel),
                        m("meeting.requestStartLiveStreaming", [O, dt], E)
                    }
                    ,
                    t.requestStopLiveStreaming = function(E) {
                        if (!E)
                            throw new Error("[request stop live streaming] Callback cannot be null");
                        _(f, l.sidePanel),
                        m("meeting.requestStopLiveStreaming", E)
                    }
                    ,
                    t.registerLiveStreamChangedHandler = function(E) {
                        if (!E)
                            throw new Error("[register live stream changed handler] Handler cannot be null");
                        _(f, l.sidePanel),
                        Ct("meeting.liveStreamChanged", E)
                    }
                    ,
                    t.shareAppContentToStage = function(E, O) {
                        if (!E)
                            throw new Error("[share app content to stage] Callback cannot be null");
                        _(f, l.sidePanel, l.meetingStage),
                        m("meeting.shareAppContentToStage", [O], E)
                    }
                    ,
                    t.getAppContentStageSharingCapabilities = function(E) {
                        if (!E)
                            throw new Error("[get app content stage sharing capabilities] Callback cannot be null");
                        _(f, l.sidePanel, l.meetingStage),
                        m("meeting.getAppContentStageSharingCapabilities", E)
                    }
                    ,
                    t.stopSharingAppContentToStage = function(E) {
                        if (!E)
                            throw new Error("[stop sharing app content to stage] Callback cannot be null");
                        _(f, l.sidePanel, l.meetingStage),
                        m("meeting.stopSharingAppContentToStage", E)
                    }
                    ,
                    t.getAppContentStageSharingState = function(E) {
                        if (!E)
                            throw new Error("[get app content stage sharing state] Callback cannot be null");
                        _(f, l.sidePanel, l.meetingStage),
                        m("meeting.getAppContentStageSharingState", E)
                    }
                    ,
                    t.registerSpeakingStateChangeHandler = function(E) {
                        if (!E)
                            throw new Error("[registerSpeakingStateChangeHandler] Handler cannot be null");
                        _(f, l.sidePanel, l.meetingStage),
                        Ct("meeting.speakingStateChanged", E)
                    }
                    ,
                    t.registerRaiseHandStateChangedHandler = function(E) {
                        if (!E)
                            throw new Error("[registerRaiseHandStateChangedHandler] Handler cannot be null");
                        _(f, l.sidePanel, l.meetingStage),
                        Ct("meeting.raiseHandStateChanged", E)
                    }
                    ,
                    t.registerMeetingReactionReceivedHandler = function(E) {
                        if (!E)
                            throw new Error("[registerMeetingReactionReceivedHandler] Handler cannot be null");
                        _(f, l.sidePanel, l.meetingStage),
                        Ct("meeting.meetingReactionReceived", E)
                    }
                    ,
                    function(E) {
                        E.setOptions = function(O) {
                            _(f, l.sidePanel),
                            O.contentUrl && new URL(O.contentUrl),
                            m("meeting.appShareButton.setOptions", [O])
                        }
                    }(t.appShareButton || (t.appShareButton = {})),
                    t.requestAppAudioHandling = function(E, O) {
                        if (!O)
                            throw new Error("[requestAppAudioHandling] Callback response cannot be null");
                        if (!E.micMuteStateChangedCallback)
                            throw new Error("[requestAppAudioHandling] Callback Mic mute state handler cannot be null");
                        _(f, l.sidePanel, l.meetingStage),
                        E.isAppHandlingAudio ? r(E, O) : c(E, O)
                    }
                    ,
                    t.updateMicState = function(E) {
                        p(E, u.AppInitiated)
                    }
                }
                )(kr || (kr = {})),
                function(t) {
                    function u() {
                        return !(!_(f) || !f.supports.monetization)
                    }
                    t.openPurchaseExperience = function(r, c) {
                        var p, E;
                        return typeof r == "function" ? (p = r,
                        E = c) : E = r,
                        _(f, l.content),
                        Ut(function() {
                            return new Promise(function(O) {
                                if (!u())
                                    throw R;
                                O(qt("monetization.openPurchaseExperience", E))
                            }
                            )
                        }, p)
                    }
                    ,
                    t.isSupported = u
                }(Nr || (Nr = {})),
                function(t) {
                    function u() {
                        return !(!_(f) || !f.supports.calendar)
                    }
                    t.openCalendarItem = function(r) {
                        return new Promise(function(c) {
                            if (_(f, l.content),
                            !u())
                                throw new Error("Not supported");
                            if (!r.itemId || !r.itemId.trim())
                                throw new Error("Must supply an itemId to openCalendarItem");
                            c(Kt("calendar.openCalendarItem", r))
                        }
                        )
                    }
                    ,
                    t.composeMeeting = function(r) {
                        return new Promise(function(c) {
                            if (_(f, l.content),
                            !u())
                                throw new Error("Not supported");
                            f.isLegacyTeams ? c(Kt("executeDeepLink", In(r.attendees, r.startTime, r.endTime, r.subject, r.content))) : c(Kt("calendar.composeMeeting", r))
                        }
                        )
                    }
                    ,
                    t.isSupported = u
                }(xr || (xr = {})),
                function(t) {
                    function u() {
                        return !(!_(f) || !f.supports.mail)
                    }
                    t.openMailItem = function(r) {
                        return new Promise(function(c) {
                            if (_(f, l.content),
                            !u())
                                throw new Error("Not supported");
                            if (!r.itemId || !r.itemId.trim())
                                throw new Error("Must supply an itemId to openMailItem");
                            c(Kt("mail.openMailItem", r))
                        }
                        )
                    }
                    ,
                    t.composeMail = function(r) {
                        return new Promise(function(c) {
                            if (_(f, l.content),
                            !u())
                                throw new Error("Not supported");
                            c(Kt("mail.composeMail", r))
                        }
                        )
                    }
                    ,
                    t.isSupported = u,
                    function(r) {
                        r.New = "new",
                        r.Reply = "reply",
                        r.ReplyAll = "replyAll",
                        r.Forward = "forward"
                    }(t.ComposeMailType || (t.ComposeMailType = {}))
                }(Hr || (Hr = {})),
                function(t) {
                    function u(c) {
                        return new Promise(function(p) {
                            if (!bn(ft))
                                throw {
                                    errorCode: F.OLD_PLATFORM
                                };
                            if (!ki(c))
                                throw {
                                    errorCode: F.INVALID_ARGUMENTS
                                };
                            if (!r())
                                throw R;
                            p(qt("people.selectPeople", c))
                        }
                        )
                    }
                    function r() {
                        return !(!_(f) || !f.supports.people)
                    }
                    t.selectPeople = function(c, p) {
                        var E, O, dt;
                        return _(f, l.content, l.task, l.settings),
                        typeof c == "function" ? (O = (E = [c, p])[0],
                        dt = E[1]) : dt = c,
                        $(u, O, dt)
                    }
                    ,
                    t.isSupported = r
                }(br || (br = {})),
                function(t) {
                    t.showProfile = function(u) {
                        return _(f, l.content),
                        new Promise(function(r) {
                            var c = Qr(u)
                              , p = c[0]
                              , E = c[1];
                            if (!p)
                                throw {
                                    errorCode: F.INVALID_ARGUMENTS,
                                    message: E
                                };
                            r(qt("profile.showProfile", {
                                modality: u.modality,
                                persona: u.persona,
                                triggerType: u.triggerType,
                                targetRectangle: {
                                    x: u.targetElementBoundingRect.x,
                                    y: u.targetElementBoundingRect.y,
                                    width: u.targetElementBoundingRect.width,
                                    height: u.targetElementBoundingRect.height
                                }
                            }))
                        }
                        )
                    }
                    ,
                    t.isSupported = function() {
                        return !(!_(f) || !f.supports.profile)
                    }
                }(Ar || (Ar = {})),
                function(t) {
                    var u;
                    function r(E) {
                        m("video.videoFrameProcessed", [E])
                    }
                    function c(E) {
                        m("video.notifyError", [E])
                    }
                    function p() {
                        return !(!_(f) || !f.supports.video)
                    }
                    (function(E) {
                        E[E.NV12 = 0] = "NV12"
                    }
                    )(t.VideoFrameFormat || (t.VideoFrameFormat = {})),
                    function(E) {
                        E[E.EffectChanged = 0] = "EffectChanged",
                        E[E.EffectDisabled = 1] = "EffectDisabled"
                    }(t.EffectChangeType || (t.EffectChangeType = {})),
                    function(E) {
                        E.InvalidEffectId = "InvalidEffectId",
                        E.InitializationFailure = "InitializationFailure"
                    }(u = t.EffectFailureReason || (t.EffectFailureReason = {})),
                    t.registerForVideoFrame = function(E, O) {
                        if (_(f, l.sidePanel),
                        !p())
                            throw R;
                        Ct("video.newVideoFrame", function(dt) {
                            if (dt) {
                                var jt = dt.timestamp;
                                E(dt, function() {
                                    r(jt)
                                }, c)
                            }
                        }, !1),
                        m("video.registerForVideoFrame", [O])
                    }
                    ,
                    t.notifySelectedVideoEffectChanged = function(E, O) {
                        if (_(f, l.sidePanel),
                        !p())
                            throw R;
                        m("video.videoEffectChanged", [E, O])
                    }
                    ,
                    t.registerForVideoEffect = function(E) {
                        if (_(f, l.sidePanel),
                        !p())
                            throw R;
                        Ct("video.effectParameterChange", function(O) {
                            E(O).then(function() {
                                m("video.videoEffectReadiness", [!0, O])
                            }).catch(function(dt) {
                                var jt = dt in u ? dt : u.InitializationFailure;
                                m("video.videoEffectReadiness", [!1, O, jt])
                            })
                        }, !1),
                        m("video.registerForVideoEffect")
                    }
                    ,
                    t.isSupported = p
                }(lr || (lr = {})),
                function(t) {
                    var u = "search.queryChange"
                      , r = "search.queryClose"
                      , c = "search.queryExecute";
                    function p() {
                        return !(!_(f) || !f.supports.search)
                    }
                    t.registerHandlers = function(E, O, dt) {
                        if (_(f, l.content),
                        !p())
                            throw R;
                        Ct(r, E),
                        Ct(c, O),
                        dt && Ct(u, dt)
                    }
                    ,
                    t.unregisterHandlers = function() {
                        if (_(f, l.content),
                        !p())
                            throw R;
                        m("search.unregister"),
                        Ht(u),
                        Ht(r),
                        Ht(c)
                    }
                    ,
                    t.isSupported = p
                }(Wr || (Wr = {})),
                function(t) {
                    function u(O) {
                        return new Promise(function(dt) {
                            if (!E())
                                throw R;
                            dt(qt(t.SharingAPIMessages.shareWebContent, O))
                        }
                        )
                    }
                    function r(O) {
                        if (!(O && O.content && O.content.length))
                            throw {
                                errorCode: F.INVALID_ARGUMENTS,
                                message: "Shared content is missing"
                            }
                    }
                    function c(O) {
                        if (O.content.some(function(dt) {
                            return !dt.type
                        }))
                            throw {
                                errorCode: F.INVALID_ARGUMENTS,
                                message: "Shared content type cannot be undefined"
                            };
                        if (O.content.some(function(dt) {
                            return dt.type !== O.content[0].type
                        }))
                            throw {
                                errorCode: F.INVALID_ARGUMENTS,
                                message: "Shared content must be of the same type"
                            }
                    }
                    function p(O) {
                        if (O.content[0].type !== "URL")
                            throw {
                                errorCode: F.INVALID_ARGUMENTS,
                                message: "Content type is unsupported"
                            };
                        if (O.content.some(function(dt) {
                            return !dt.url
                        }))
                            throw {
                                errorCode: F.INVALID_ARGUMENTS,
                                message: "URLs are required for URL content types"
                            }
                    }
                    function E() {
                        return !(!_(f) || !f.supports.sharing)
                    }
                    t.SharingAPIMessages = {
                        shareWebContent: "sharing.shareWebContent"
                    },
                    t.shareWebContent = function(O, dt) {
                        try {
                            r(O),
                            c(O),
                            p(O)
                        } catch (jt) {
                            return Ot(function() {
                                return Promise.reject(jt)
                            }, dt)
                        }
                        return _(f, l.content, l.sidePanel, l.task, l.stage, l.meetingStage),
                        Ot(u, dt, O)
                    }
                    ,
                    t.isSupported = E
                }(Vr || (Vr = {})),
                function(t) {
                    function u() {
                        return !(!_(f) || !f.supports.stageView)
                    }
                    t.open = function(r) {
                        return new Promise(function(c) {
                            if (_(f, l.content),
                            !u())
                                throw R;
                            if (!r)
                                throw new Error("[stageView.open] Stage view params cannot be null");
                            c(qt("stageView.open", r))
                        }
                        )
                    }
                    ,
                    t.isSupported = u
                }(jr || (jr = {})),
                function(t) {
                    function u() {
                        return !(!_(f) || !f.supports.webStorage)
                    }
                    t.isWebStorageClearedOnUserLogOut = function() {
                        return _(f),
                        u()
                    }
                    ,
                    t.isSupported = u
                }(Ii || (Ii = {})),
                function(t) {
                    var u;
                    function r() {
                        return !(!_(f) || !f.supports.call)
                    }
                    (function(c) {
                        c.Unknown = "unknown",
                        c.Audio = "audio",
                        c.Video = "video",
                        c.VideoBasedScreenSharing = "videoBasedScreenSharing",
                        c.Data = "data"
                    }
                    )(u = t.CallModalities || (t.CallModalities = {})),
                    t.startCall = function(c) {
                        return new Promise(function(p) {
                            var E;
                            if (_(f, l.content, l.task),
                            !r())
                                throw R;
                            if (!f.isLegacyTeams)
                                return m("call.startCall", [c], p);
                            p(qt("executeDeepLink", an(c.targets, (E = c.requestedModalities) === null || E === void 0 ? void 0 : E.includes(u.Video), c.source)))
                        }
                        )
                    }
                    ,
                    t.isSupported = r
                }(Ve || (Ve = {})),
                function(t) {
                    t.Messages = ee.Messages,
                    t.FailedReason = ee.FailedReason,
                    t.ExpectedFailureReason = ee.ExpectedFailureReason,
                    t.notifyAppLoaded = function() {
                        ee.notifyAppLoaded()
                    }
                    ,
                    t.notifySuccess = function() {
                        ee.notifySuccess()
                    }
                    ,
                    t.notifyFailure = function(u) {
                        ee.notifyFailure(u)
                    }
                    ,
                    t.notifyExpectedFailure = function(u) {
                        ee.notifyExpectedFailure(u)
                    }
                }(ir || (ir = {})),
                function(t) {
                    t.setValidityState = function(u) {
                        Jn.config.setValidityState(u)
                    }
                    ,
                    t.getSettings = function(u) {
                        _(f, l.content, l.settings, l.remove, l.sidePanel),
                        Jn.getConfig().then(function(r) {
                            u(r)
                        })
                    }
                    ,
                    t.setSettings = function(u, r) {
                        _(f, l.content, l.settings, l.sidePanel),
                        r = r || st(),
                        Jn.config.setConfig(u).then(function() {
                            r(!0)
                        }).catch(function(c) {
                            r(!1, c.message)
                        })
                    }
                    ,
                    t.registerOnSaveHandler = function(u) {
                        Jn.config.registerOnSaveHandlerHelper(u)
                    }
                    ,
                    t.registerOnRemoveHandler = function(u) {
                        Jn.config.registerOnRemoveHandlerHelper(u)
                    }
                }(fr || (fr = {}));
                var Mr, zr, Lr, bi = function(t, u) {
                    var r = {};
                    for (var c in t)
                        Object.prototype.hasOwnProperty.call(t, c) && u.indexOf(c) < 0 && (r[c] = t[c]);
                    if (t != null && typeof Object.getOwnPropertySymbols == "function") {
                        var p = 0;
                        for (c = Object.getOwnPropertySymbols(t); p < c.length; p++)
                            u.indexOf(c[p]) < 0 && Object.prototype.propertyIsEnumerable.call(t, c[p]) && (r[c[p]] = t[c[p]])
                    }
                    return r
                };
                (function(t) {
                    function u(p) {
                        return {
                            url: p.url,
                            size: {
                                height: p.height ? p.height : tt.Small,
                                width: p.width ? p.width : tt.Small
                            },
                            title: p.title,
                            fallbackUrl: p.fallbackUrl
                        }
                    }
                    function r(p) {
                        return {
                            url: p.url,
                            size: {
                                height: p.height ? p.height : tt.Small,
                                width: p.width ? p.width : tt.Small
                            },
                            title: p.title,
                            fallbackUrl: p.fallbackUrl,
                            completionBotId: p.completionBotId
                        }
                    }
                    function c(p) {
                        return p.height = p.height ? p.height : tt.Small,
                        p.width = p.width ? p.width : tt.Small,
                        p
                    }
                    t.startTask = function(p, E) {
                        var O = E ? function(dt) {
                            return E(dt.err, dt.result)
                        }
                        : void 0;
                        return p.card === void 0 && p.url === void 0 || p.card ? (_(f, l.content, l.sidePanel, l.meetingStage),
                        m("tasks.startTask", [p], E)) : p.completionBotId !== void 0 ? Te.url.bot.open(r(p), O) : Te.url.open(u(p), O),
                        new yi
                    }
                    ,
                    t.updateTask = function(p) {
                        (p = c(p)).width,
                        p.height;
                        var E = bi(p, ["width", "height"]);
                        if (Object.keys(E).length)
                            throw new Error("resize requires a TaskInfo argument containing only width and height");
                        Te.update.resize(p)
                    }
                    ,
                    t.submitTask = function(p, E) {
                        Te.url.submit(p, E)
                    }
                    ,
                    t.getDefaultSizeIfNotProvided = c
                }
                )(Mr || (Mr = {})),
                function(t) {
                    t.guest = "Guest",
                    t.attendee = "Attendee",
                    t.presenter = "Presenter",
                    t.organizer = "Organizer"
                }(zr || (zr = {})),
                function(t) {
                    t.added = "Added",
                    t.alreadyExists = "AlreadyExists",
                    t.conflict = "Conflict",
                    t.notFound = "NotFound"
                }(Lr || (Lr = {}));
                var mi, hi, ti, ni, Ei, Ci, ei, Wi = function() {
                    function t() {}
                    return t.prototype.getFluidTenantInfo = function() {
                        return new Promise(function(u) {
                            _(f, l.meetingStage, l.sidePanel),
                            u(qt("interactive.getFluidTenantInfo"))
                        }
                        )
                    }
                    ,
                    t.prototype.getFluidToken = function(u) {
                        return new Promise(function(r) {
                            _(f, l.meetingStage, l.sidePanel),
                            r(qt("interactive.getFluidToken", u))
                        }
                        )
                    }
                    ,
                    t.prototype.getFluidContainerId = function() {
                        return new Promise(function(u) {
                            _(f, l.meetingStage, l.sidePanel),
                            u(qt("interactive.getFluidContainerId"))
                        }
                        )
                    }
                    ,
                    t.prototype.setFluidContainerId = function(u) {
                        return new Promise(function(r) {
                            _(f, l.meetingStage, l.sidePanel),
                            r(qt("interactive.setFluidContainerId", u))
                        }
                        )
                    }
                    ,
                    t.prototype.getNtpTime = function() {
                        return new Promise(function(u) {
                            _(f, l.meetingStage, l.sidePanel),
                            u(qt("interactive.getNtpTime"))
                        }
                        )
                    }
                    ,
                    t.prototype.registerClientId = function(u) {
                        return new Promise(function(r) {
                            _(f, l.meetingStage, l.sidePanel),
                            r(qt("interactive.registerClientId", u))
                        }
                        )
                    }
                    ,
                    t.prototype.getClientRoles = function(u) {
                        return new Promise(function(r) {
                            _(f, l.meetingStage, l.sidePanel),
                            r(qt("interactive.getClientRoles", u))
                        }
                        )
                    }
                    ,
                    t.create = function() {
                        return _(f, l.meetingStage, l.sidePanel),
                        new t
                    }
                    ,
                    t
                }();
                (function(t) {
                    function u(r, c) {
                        return {
                            errorCode: r,
                            message: c
                        }
                    }
                    (function(r) {
                        r.Dropbox = "DROPBOX",
                        r.Box = "BOX",
                        r.Sharefile = "SHAREFILE",
                        r.GoogleDrive = "GOOGLEDRIVE",
                        r.Egnyte = "EGNYTE",
                        r.SharePoint = "SharePoint"
                    }
                    )(t.CloudStorageProvider || (t.CloudStorageProvider = {})),
                    function(r) {
                        r[r.Sharepoint = 0] = "Sharepoint",
                        r[r.WopiIntegration = 1] = "WopiIntegration",
                        r[r.Google = 2] = "Google",
                        r[r.OneDrive = 3] = "OneDrive",
                        r[r.Recent = 4] = "Recent",
                        r[r.Aggregate = 5] = "Aggregate",
                        r[r.FileSystem = 6] = "FileSystem",
                        r[r.Search = 7] = "Search",
                        r[r.AllFiles = 8] = "AllFiles",
                        r[r.SharedWithMe = 9] = "SharedWithMe"
                    }(t.CloudStorageProviderType || (t.CloudStorageProviderType = {})),
                    function(r) {
                        r.ClassMaterials = "classMaterials"
                    }(t.SpecialDocumentLibraryType || (t.SpecialDocumentLibraryType = {})),
                    function(r) {
                        r.Readonly = "readonly"
                    }(t.DocumentLibraryAccessType || (t.DocumentLibraryAccessType = {})),
                    function(r) {
                        r.Downloaded = "Downloaded",
                        r.Downloading = "Downloading",
                        r.Failed = "Failed"
                    }(t.FileDownloadStatus || (t.FileDownloadStatus = {})),
                    function(r) {
                        r.Download = "DOWNLOAD",
                        r.Upload = "UPLOAD",
                        r.Delete = "DELETE"
                    }(t.CloudStorageProviderFileAction || (t.CloudStorageProviderFileAction = {})),
                    t.getCloudStorageFolders = function(r, c) {
                        if (_(f, l.content),
                        !r || r.length === 0)
                            throw new Error("[files.getCloudStorageFolders] channelId name cannot be null or empty");
                        if (!c)
                            throw new Error("[files.getCloudStorageFolders] Callback cannot be null");
                        m("files.getCloudStorageFolders", [r], c)
                    }
                    ,
                    t.addCloudStorageFolder = function(r, c) {
                        if (_(f, l.content),
                        !r || r.length === 0)
                            throw new Error("[files.addCloudStorageFolder] channelId name cannot be null or empty");
                        if (!c)
                            throw new Error("[files.addCloudStorageFolder] Callback cannot be null");
                        m("files.addCloudStorageFolder", [r], c)
                    }
                    ,
                    t.deleteCloudStorageFolder = function(r, c, p) {
                        if (_(f, l.content),
                        !r)
                            throw new Error("[files.deleteCloudStorageFolder] channelId name cannot be null or empty");
                        if (!c)
                            throw new Error("[files.deleteCloudStorageFolder] folderToDelete cannot be null or empty");
                        if (!p)
                            throw new Error("[files.deleteCloudStorageFolder] Callback cannot be null");
                        m("files.deleteCloudStorageFolder", [r, c], p)
                    }
                    ,
                    t.getCloudStorageFolderContents = function(r, c, p) {
                        if (_(f, l.content),
                        !r || !c)
                            throw new Error("[files.getCloudStorageFolderContents] folder/providerCode name cannot be null or empty");
                        if (!p)
                            throw new Error("[files.getCloudStorageFolderContents] Callback cannot be null");
                        if ("isSubdirectory"in r && !r.isSubdirectory)
                            throw new Error("[files.getCloudStorageFolderContents] provided folder is not a subDirectory");
                        m("files.getCloudStorageFolderContents", [r, c], p)
                    }
                    ,
                    t.openCloudStorageFile = function(r, c, p) {
                        if (_(f, l.content),
                        !r || !c)
                            throw new Error("[files.openCloudStorageFile] file/providerCode cannot be null or empty");
                        if (r.isSubdirectory)
                            throw new Error("[files.openCloudStorageFile] provided file is a subDirectory");
                        m("files.openCloudStorageFile", [r, c, p])
                    }
                    ,
                    t.getExternalProviders = function(r, c) {
                        if (r === void 0 && (r = !1),
                        _(f, l.content),
                        !c)
                            throw new Error("[files.getExternalProviders] Callback cannot be null");
                        m("files.getExternalProviders", [r], c)
                    }
                    ,
                    t.copyMoveFiles = function(r, c, p, E, O, dt) {
                        if (O === void 0 && (O = !1),
                        _(f, l.content),
                        !r || r.length === 0)
                            throw new Error("[files.copyMoveFiles] selectedFiles cannot be null or empty");
                        if (!c)
                            throw new Error("[files.copyMoveFiles] providerCode cannot be null or empty");
                        if (!p)
                            throw new Error("[files.copyMoveFiles] destinationFolder cannot be null or empty");
                        if (!E)
                            throw new Error("[files.copyMoveFiles] destinationProviderCode cannot be null or empty");
                        if (!dt)
                            throw new Error("[files.copyMoveFiles] callback cannot be null");
                        m("files.copyMoveFiles", [r, c, p, E, O], dt)
                    }
                    ,
                    t.getFileDownloads = function(r) {
                        if (_(f, l.content),
                        !r)
                            throw new Error("[files.getFileDownloads] Callback cannot be null");
                        m("files.getFileDownloads", [], r)
                    }
                    ,
                    t.openDownloadFolder = function(r, c) {
                        if (r === void 0 && (r = void 0),
                        _(f, l.content),
                        !c)
                            throw new Error("[files.openDownloadFolder] Callback cannot be null");
                        m("files.openDownloadFolder", [r], c)
                    }
                    ,
                    t.addCloudStorageProvider = function(r) {
                        if (_(f, l.content),
                        !r)
                            throw u(F.INVALID_ARGUMENTS, "[files.addCloudStorageProvider] callback cannot be null");
                        m("files.addCloudStorageProvider", [], r)
                    }
                    ,
                    t.removeCloudStorageProvider = function(r, c) {
                        if (_(f, l.content),
                        !c)
                            throw u(F.INVALID_ARGUMENTS, "[files.removeCloudStorageProvider] callback cannot be null");
                        if (!r || !r.content)
                            throw u(F.INVALID_ARGUMENTS, "[files.removeCloudStorageProvider] 3P cloud storage provider request content is missing");
                        m("files.removeCloudStorageProvider", [r], c)
                    }
                    ,
                    t.addCloudStorageProviderFile = function(r, c) {
                        if (_(f, l.content),
                        !c)
                            throw u(F.INVALID_ARGUMENTS, "[files.addCloudStorageProviderFile] callback cannot be null");
                        if (!r || !r.content)
                            throw u(F.INVALID_ARGUMENTS, "[files.addCloudStorageProviderFile] 3P cloud storage provider request content is missing");
                        m("files.addCloudStorageProviderFile", [r], c)
                    }
                    ,
                    t.renameCloudStorageProviderFile = function(r, c) {
                        if (_(f, l.content),
                        !c)
                            throw u(F.INVALID_ARGUMENTS, "[files.renameCloudStorageProviderFile] callback cannot be null");
                        if (!r || !r.content)
                            throw u(F.INVALID_ARGUMENTS, "[files.renameCloudStorageProviderFile] 3P cloud storage provider request content is missing");
                        m("files.renameCloudStorageProviderFile", [r], c)
                    }
                    ,
                    t.deleteCloudStorageProviderFile = function(r, c) {
                        if (_(f, l.content),
                        !c)
                            throw u(F.INVALID_ARGUMENTS, "[files.deleteCloudStorageProviderFile] callback cannot be null");
                        if (!(r && r.content && r.content.itemList && r.content.itemList.length > 0))
                            throw u(F.INVALID_ARGUMENTS, "[files.deleteCloudStorageProviderFile] 3P cloud storage provider request content details are missing");
                        m("files.deleteCloudStorageProviderFile", [r], c)
                    }
                    ,
                    t.downloadCloudStorageProviderFile = function(r, c) {
                        if (_(f, l.content),
                        !c)
                            throw u(F.INVALID_ARGUMENTS, "[files.downloadCloudStorageProviderFile] callback cannot be null");
                        if (!(r && r.content && r.content.itemList && r.content.itemList.length > 0))
                            throw u(F.INVALID_ARGUMENTS, "[files.downloadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");
                        m("files.downloadCloudStorageProviderFile", [r], c)
                    }
                    ,
                    t.uploadCloudStorageProviderFile = function(r, c) {
                        if (_(f, l.content),
                        !c)
                            throw u(F.INVALID_ARGUMENTS, "[files.uploadCloudStorageProviderFile] callback cannot be null");
                        if (!(r && r.content && r.content.itemList && r.content.itemList.length > 0))
                            throw u(F.INVALID_ARGUMENTS, "[files.uploadCloudStorageProviderFile] 3P cloud storage provider request content details are missing");
                        if (!r.content.destinationFolder)
                            throw u(F.INVALID_ARGUMENTS, "[files.uploadCloudStorageProviderFile] Invalid destination folder details");
                        m("files.uploadCloudStorageProviderFile", [r], c)
                    }
                    ,
                    t.registerCloudStorageProviderListChangeHandler = function(r) {
                        if (_(f),
                        !r)
                            throw new Error("[registerCloudStorageProviderListChangeHandler] Handler cannot be null");
                        Ct("files.cloudStorageProviderListChange", r)
                    }
                    ,
                    t.registerCloudStorageProviderContentChangeHandler = function(r) {
                        if (_(f),
                        !r)
                            throw new Error("[registerCloudStorageProviderContentChangeHandler] Handler cannot be null");
                        Ct("files.cloudStorageProviderContentChange", r)
                    }
                }
                )(mi || (mi = {})),
                function(t) {
                    function u() {
                        return !(!_(f) || !f.supports.meetingRoom)
                    }
                    t.getPairedMeetingRoomInfo = function() {
                        return new Promise(function(r) {
                            if (_(f),
                            !u())
                                throw R;
                            r(qt("meetingRoom.getPairedMeetingRoomInfo"))
                        }
                        )
                    }
                    ,
                    t.sendCommandToPairedMeetingRoom = function(r) {
                        return new Promise(function(c) {
                            if (!r || r.length == 0)
                                throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");
                            if (_(f),
                            !u())
                                throw R;
                            c(qt("meetingRoom.sendCommandToPairedMeetingRoom", r))
                        }
                        )
                    }
                    ,
                    t.registerMeetingRoomCapabilitiesUpdateHandler = function(r) {
                        if (!r)
                            throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");
                        if (_(f),
                        !u())
                            throw R;
                        Ct("meetingRoom.meetingRoomCapabilitiesUpdate", function(c) {
                            _(f),
                            r(c)
                        })
                    }
                    ,
                    t.registerMeetingRoomStatesUpdateHandler = function(r) {
                        if (!r)
                            throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");
                        if (_(f),
                        !u())
                            throw R;
                        Ct("meetingRoom.meetingRoomStatesUpdate", function(c) {
                            _(f),
                            r(c)
                        })
                    }
                    ,
                    t.isSupported = u
                }(hi || (hi = {})),
                function(t) {
                    function u() {
                        return !(!_(f) || !f.supports.notifications)
                    }
                    t.showNotification = function(r) {
                        if (_(f, l.content),
                        !u())
                            throw R;
                        m("notifications.showNotification", [r])
                    }
                    ,
                    t.isSupported = u
                }(ti || (ti = {})),
                function(t) {
                    function u() {
                        return !(!_(f) || !f.supports.remoteCamera)
                    }
                    (function(r) {
                        r.Reset = "Reset",
                        r.ZoomIn = "ZoomIn",
                        r.ZoomOut = "ZoomOut",
                        r.PanLeft = "PanLeft",
                        r.PanRight = "PanRight",
                        r.TiltUp = "TiltUp",
                        r.TiltDown = "TiltDown"
                    }
                    )(t.ControlCommand || (t.ControlCommand = {})),
                    function(r) {
                        r[r.CommandResetError = 0] = "CommandResetError",
                        r[r.CommandZoomInError = 1] = "CommandZoomInError",
                        r[r.CommandZoomOutError = 2] = "CommandZoomOutError",
                        r[r.CommandPanLeftError = 3] = "CommandPanLeftError",
                        r[r.CommandPanRightError = 4] = "CommandPanRightError",
                        r[r.CommandTiltUpError = 5] = "CommandTiltUpError",
                        r[r.CommandTiltDownError = 6] = "CommandTiltDownError",
                        r[r.SendDataError = 7] = "SendDataError"
                    }(t.ErrorReason || (t.ErrorReason = {})),
                    function(r) {
                        r[r.None = 0] = "None",
                        r[r.ControlDenied = 1] = "ControlDenied",
                        r[r.ControlNoResponse = 2] = "ControlNoResponse",
                        r[r.ControlBusy = 3] = "ControlBusy",
                        r[r.AckTimeout = 4] = "AckTimeout",
                        r[r.ControlTerminated = 5] = "ControlTerminated",
                        r[r.ControllerTerminated = 6] = "ControllerTerminated",
                        r[r.DataChannelError = 7] = "DataChannelError",
                        r[r.ControllerCancelled = 8] = "ControllerCancelled",
                        r[r.ControlDisabled = 9] = "ControlDisabled",
                        r[r.ControlTerminatedToAllowOtherController = 10] = "ControlTerminatedToAllowOtherController"
                    }(t.SessionTerminatedReason || (t.SessionTerminatedReason = {})),
                    t.getCapableParticipants = function(r) {
                        if (!r)
                            throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");
                        if (_(f, l.sidePanel),
                        !u())
                            throw R;
                        m("remoteCamera.getCapableParticipants", r)
                    }
                    ,
                    t.requestControl = function(r, c) {
                        if (!r)
                            throw new Error("[remoteCamera.requestControl] Participant cannot be null");
                        if (!c)
                            throw new Error("[remoteCamera.requestControl] Callback cannot be null");
                        if (_(f, l.sidePanel),
                        !u())
                            throw R;
                        m("remoteCamera.requestControl", [r], c)
                    }
                    ,
                    t.sendControlCommand = function(r, c) {
                        if (!r)
                            throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");
                        if (!c)
                            throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");
                        if (_(f, l.sidePanel),
                        !u())
                            throw R;
                        m("remoteCamera.sendControlCommand", [r], c)
                    }
                    ,
                    t.terminateSession = function(r) {
                        if (!r)
                            throw new Error("[remoteCamera.terminateSession] Callback cannot be null");
                        if (_(f, l.sidePanel),
                        !u())
                            throw R;
                        m("remoteCamera.terminateSession", r)
                    }
                    ,
                    t.registerOnCapableParticipantsChangeHandler = function(r) {
                        if (!r)
                            throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");
                        if (_(f, l.sidePanel),
                        !u())
                            throw R;
                        Ct("remoteCamera.capableParticipantsChange", r)
                    }
                    ,
                    t.registerOnErrorHandler = function(r) {
                        if (!r)
                            throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");
                        if (_(f, l.sidePanel),
                        !u())
                            throw R;
                        Ct("remoteCamera.handlerError", r)
                    }
                    ,
                    t.registerOnDeviceStateChangeHandler = function(r) {
                        if (!r)
                            throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");
                        if (_(f, l.sidePanel),
                        !u())
                            throw R;
                        Ct("remoteCamera.deviceStateChange", r)
                    }
                    ,
                    t.registerOnSessionStatusChangeHandler = function(r) {
                        if (!r)
                            throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");
                        if (_(f, l.sidePanel),
                        !u())
                            throw R;
                        Ct("remoteCamera.sessionStatusChange", r)
                    }
                    ,
                    t.isSupported = u
                }(ni || (ni = {})),
                function(t) {
                    function u() {
                        return !(!_(f) || !f.supports.appEntity)
                    }
                    t.selectAppEntity = function(r, c, p, E) {
                        if (_(f, l.content),
                        !u())
                            throw R;
                        if (!r || r.length == 0)
                            throw new Error("[appEntity.selectAppEntity] threadId name cannot be null or empty");
                        if (!E)
                            throw new Error("[appEntity.selectAppEntity] Callback cannot be null");
                        m("appEntity.selectAppEntity", [r, c, p], E)
                    }
                    ,
                    t.isSupported = u
                }(Ei || (Ei = {})),
                function(t) {
                    function u() {
                        return !(!_(f) || !f.supports.teams)
                    }
                    (function(r) {
                        r[r.Regular = 0] = "Regular",
                        r[r.Private = 1] = "Private",
                        r[r.Shared = 2] = "Shared"
                    }
                    )(t.ChannelType || (t.ChannelType = {})),
                    t.getTeamChannels = function(r, c) {
                        if (_(f, l.content),
                        !u())
                            throw R;
                        if (!r)
                            throw new Error("[teams.getTeamChannels] groupId cannot be null or empty");
                        if (!c)
                            throw new Error("[teams.getTeamChannels] Callback cannot be null");
                        m("teams.getTeamChannels", [r], c)
                    }
                    ,
                    t.refreshSiteUrl = function(r, c) {
                        if (_(f),
                        !u())
                            throw R;
                        if (!r)
                            throw new Error("[teams.refreshSiteUrl] threadId cannot be null or empty");
                        if (!c)
                            throw new Error("[teams.refreshSiteUrl] Callback cannot be null");
                        m("teams.refreshSiteUrl", [r], c)
                    }
                    ,
                    t.isSupported = u,
                    function(r) {
                        function c() {
                            return !(!_(f) || !f.supports.teams) && !!f.supports.teams.fullTrust
                        }
                        (function(p) {
                            function E() {
                                return !(!_(f) || !f.supports.teams) && !!f.supports.teams.fullTrust && !!f.supports.teams.fullTrust.joinedTeams
                            }
                            p.getUserJoinedTeams = function(O) {
                                return new Promise(function(dt) {
                                    if (_(f),
                                    !E())
                                        throw R;
                                    if ((g.hostClientType === P.android || g.hostClientType === P.teamsRoomsAndroid || g.hostClientType === P.teamsPhones || g.hostClientType === P.teamsDisplays) && !bn(a)) {
                                        var jt = {
                                            errorCode: F.OLD_PLATFORM
                                        };
                                        throw new Error(JSON.stringify(jt))
                                    }
                                    dt(Wt("getUserJoinedTeams", O))
                                }
                                )
                            }
                            ,
                            p.isSupported = E
                        }
                        )(r.joinedTeams || (r.joinedTeams = {})),
                        r.getConfigSetting = function(p) {
                            return new Promise(function(E) {
                                if (_(f),
                                !c())
                                    throw R;
                                E(Wt("getConfigSetting", p))
                            }
                            )
                        }
                        ,
                        r.isSupported = c
                    }(t.fullTrust || (t.fullTrust = {}))
                }(Ci || (Ci = {})),
                function(t) {
                    var u;
                    function r() {
                        return _(f),
                        lr.isSupported()
                    }
                    function c(E) {
                        m("video.videoFrameProcessed", [E])
                    }
                    function p(E, O) {
                        O === void 0 && (O = u.Warn),
                        m("video.notifyError", [E, O])
                    }
                    (function(E) {
                        E.Fatal = "fatal",
                        E.Warn = "warn"
                    }
                    )(u = t.ErrorLevel || (t.ErrorLevel = {})),
                    t.registerForVideoFrame = function(E, O) {
                        if (_(f, l.sidePanel),
                        !r())
                            throw R;
                        Ct("video.newVideoFrame", function(dt) {
                            if (dt) {
                                var jt = dt.timestamp;
                                E(dt, function() {
                                    c(jt)
                                }, p)
                            }
                        }, !1),
                        m("video.registerForVideoFrame", [O])
                    }
                    ,
                    t.notifySelectedVideoEffectChanged = function(E, O, dt) {
                        if (_(f, l.sidePanel),
                        !r())
                            throw R;
                        m("video.videoEffectChanged", [E, O, dt])
                    }
                    ,
                    t.registerForVideoEffect = function(E) {
                        if (_(f, l.sidePanel),
                        !r())
                            throw R;
                        Ct("video.effectParameterChange", E, !1),
                        m("video.registerForVideoEffect")
                    }
                    ,
                    t.updatePersonalizedEffects = function(E) {
                        if (_(f, l.sidePanel),
                        !lr.isSupported())
                            throw R;
                        m("video.personalizedEffectsChanged", [E])
                    }
                    ,
                    t.isSupported = r,
                    t.notifyFatalError = function(E) {
                        if (_(f),
                        !lr.isSupported())
                            throw R;
                        p(E, u.Fatal)
                    }
                }(ei || (ei = {}))
            }
            )(),
            y
        }
        )())
    }
}]);
