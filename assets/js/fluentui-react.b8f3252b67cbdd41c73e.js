"use strict";
(self.webpackChunk_plhvc_entrypoint = self.webpackChunk_plhvc_entrypoint || []).push([[16710], {
    53841: (mt,Ne,e)=>{
        e.d(Ne, {
            b: ()=>c
        });
        var c = {
            topLeftEdge: 0,
            topCenter: 1,
            topRightEdge: 2,
            topAutoEdge: 3,
            bottomLeftEdge: 4,
            bottomCenter: 5,
            bottomRightEdge: 6,
            bottomAutoEdge: 7,
            leftTopEdge: 8,
            leftCenter: 9,
            leftBottomEdge: 10,
            rightTopEdge: 11,
            rightCenter: 12,
            rightBottomEdge: 13
        }
    }
    ,
    71568: (mt,Ne,e)=>{
        e.d(Ne, {
            K: ()=>K
        });
        var c = e(56996)
          , t = e(2784)
          , r = e(93631)
          , v = e(53217)
          , Se = e(38085)
          , Q = e(75649)
          , be = e(32523)
          , he = e(42752)
          , ie = "40px"
          , te = "0 4px"
          , ue = (0,
        be.NF)(function(re, g) {
            var ee, O, U, J = (0,
            he.W)(re), $ = {
                root: {
                    padding: te,
                    height: ie,
                    color: re.palette.neutralPrimary,
                    backgroundColor: "transparent",
                    border: "1px solid transparent",
                    selectors: (ee = {},
                    ee[Q.qJ] = {
                        borderColor: "Window"
                    },
                    ee)
                },
                rootHovered: {
                    color: re.palette.themePrimary,
                    selectors: (O = {},
                    O[Q.qJ] = {
                        color: "Highlight"
                    },
                    O)
                },
                iconHovered: {
                    color: re.palette.themePrimary
                },
                rootPressed: {
                    color: re.palette.black
                },
                rootExpanded: {
                    color: re.palette.themePrimary
                },
                iconPressed: {
                    color: re.palette.themeDarker
                },
                rootDisabled: {
                    color: re.palette.neutralTertiary,
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    selectors: (U = {},
                    U[Q.qJ] = {
                        color: "GrayText"
                    },
                    U)
                },
                rootChecked: {
                    color: re.palette.black
                },
                iconChecked: {
                    color: re.palette.themeDarker
                },
                flexContainer: {
                    justifyContent: "flex-start"
                },
                icon: {
                    color: re.palette.themeDarkAlt
                },
                iconDisabled: {
                    color: "inherit"
                },
                menuIcon: {
                    color: re.palette.neutralSecondary
                },
                textContainer: {
                    flexGrow: 0
                }
            };
            return (0,
            Q.E$)(J, $, g)
        })
          , K = function(re) {
            (0,
            c.ZT)(g, re);
            function g() {
                return re !== null && re.apply(this, arguments) || this
            }
            return g.prototype.render = function() {
                var ee = this.props
                  , O = ee.styles
                  , U = ee.theme;
                return t.createElement(r.Y, (0,
                c.pi)({}, this.props, {
                    variantClassName: "ms-Button--action ms-Button--command",
                    styles: ue(U, O),
                    onRenderDescription: v.S
                }))
            }
            ,
            g = (0,
            c.gn)([(0,
            Se.a)("ActionButton", ["theme", "styles"], !0)], g),
            g
        }(t.Component)
    }
    ,
    93631: (mt,Ne,e)=>{
        e.d(Ne, {
            Y: ()=>Dn
        });
        var c = e(56996), t = e(2784), r = e(54255), v = e(32523), Se = e(51370), Q = e(2899), be = e(18690), he = e(62910), ie = e(85758), te = e(61676), ue = e(47321), K = e(63592), re = e(74805), g = e(35577), ee = e(88642), O = e(86316), U = e(53217), J = e(65272), $ = e(33902), W = e(36775), P = e(23324), oe = e(82601), V = e(36312), ae = function(S) {
            var x = S.className
              , p = S.imageProps
              , n = (0,
            ee.pq)(S, ee.iY, ["aria-label", "aria-labelledby", "title", "aria-describedby"])
              , s = p.alt || S["aria-label"]
              , E = s || S["aria-labelledby"] || S.title || p["aria-label"] || p["aria-labelledby"] || p.title
              , se = {
                "aria-labelledby": S["aria-labelledby"],
                "aria-describedby": S["aria-describedby"],
                title: S.title
            }
              , ve = E ? {} : {
                "aria-hidden": !0
            };
            return t.createElement("div", (0,
            c.pi)({}, ve, n, {
                className: (0,
                Se.i)(V.Sk, V.AK.root, V.AK.image, x)
            }), t.createElement(oe.E, (0,
            c.pi)({}, se, p, {
                alt: E ? s : ""
            })))
        }, X = e(53841), pe = e(1238), b = e(63119), T;
        (function(S) {
            S[S.Normal = 0] = "Normal",
            S[S.Divider = 1] = "Divider",
            S[S.Header = 2] = "Header",
            S[S.Section = 3] = "Section"
        }
        )(T || (T = {}));
        var N = e(78619)
          , D = e(4295)
          , H = e(57312)
          , l = e(8422)
          , d = e(66297)
          , a = e(83558)
          , u = e(3272)
          , C = e(15196)
          , h = e(51169);
        function f(S) {
            return S.canCheck ? !!(S.isChecked || S.checked) : typeof S.isChecked == "boolean" ? S.isChecked : typeof S.checked == "boolean" ? S.checked : null
        }
        function i(S) {
            return !!(S.subMenuProps || S.items)
        }
        function m(S) {
            return !!(S.isDisabled || S.disabled)
        }
        function R(S) {
            var x = f(S)
              , p = x !== null;
            return p ? "menuitemcheckbox" : "menuitem"
        }
        var L = e(98663), Z = function(S) {
            var x = S.item
              , p = S.classNames
              , n = x.iconProps;
            return t.createElement(W.J, (0,
            c.pi)({}, n, {
                className: p.icon
            }))
        }, F = function(S) {
            var x = S.item
              , p = S.hasIcons;
            return p ? x.onRenderIcon ? x.onRenderIcon(S, Z) : Z(S) : null
        }, A = function(S) {
            var x = S.onCheckmarkClick
              , p = S.item
              , n = S.classNames
              , s = f(p);
            if (x) {
                var E = function(se) {
                    return x(p, se)
                };
                return t.createElement(W.J, {
                    iconName: p.canCheck !== !1 && s ? "CheckMark" : "",
                    className: n.checkmarkIcon,
                    onClick: E
                })
            }
            return null
        }, j = function(S) {
            var x = S.item
              , p = S.classNames;
            return x.text || x.name ? t.createElement("span", {
                className: p.label
            }, x.text || x.name) : null
        }, G = function(S) {
            var x = S.item
              , p = S.classNames;
            return x.secondaryText ? t.createElement("span", {
                className: p.secondaryText
            }, x.secondaryText) : null
        }, le = function(S) {
            var x = S.item
              , p = S.classNames
              , n = S.theme;
            return i(x) ? t.createElement(W.J, (0,
            c.pi)({
                iconName: (0,
                l.zg)(n) ? "ChevronLeft" : "ChevronRight"
            }, x.submenuIconProps, {
                className: p.subMenuIcon
            })) : null
        }, Ee = function(S) {
            (0,
            c.ZT)(x, S);
            function x(p) {
                var n = S.call(this, p) || this;
                return n.openSubMenu = function() {
                    var s = n.props
                      , E = s.item
                      , se = s.openSubMenu
                      , ve = s.getSubmenuTarget;
                    if (ve) {
                        var Ie = ve();
                        i(E) && se && Ie && se(E, Ie)
                    }
                }
                ,
                n.dismissSubMenu = function() {
                    var s = n.props
                      , E = s.item
                      , se = s.dismissSubMenu;
                    i(E) && se && se()
                }
                ,
                n.dismissMenu = function(s) {
                    var E = n.props.dismissMenu;
                    E && E(void 0, s)
                }
                ,
                (0,
                ie.l)(n),
                n
            }
            return x.prototype.render = function() {
                var p = this.props
                  , n = p.item
                  , s = p.classNames
                  , E = n.onRenderContent || this._renderLayout;
                return t.createElement("div", {
                    className: n.split ? s.linkContentMenu : s.linkContent
                }, E(this.props, {
                    renderCheckMarkIcon: A,
                    renderItemIcon: F,
                    renderItemName: j,
                    renderSecondaryText: G,
                    renderSubMenuIcon: le
                }))
            }
            ,
            x.prototype._renderLayout = function(p, n) {
                return t.createElement(t.Fragment, null, n.renderCheckMarkIcon(p), n.renderItemIcon(p), n.renderItemName(p), n.renderSecondaryText(p), n.renderSubMenuIcon(p))
            }
            ,
            x
        }(t.Component), de = e(75649), Ce = (0,
        v.NF)(function(S) {
            return (0,
            de.ZC)({
                wrapper: {
                    display: "inline-flex",
                    height: "100%",
                    alignItems: "center"
                },
                divider: {
                    width: 1,
                    height: "100%",
                    backgroundColor: S.palette.neutralTertiaryAlt
                }
            })
        }), Be = 36, Oe = (0,
        de.sK)(0, de.yp), at = (0,
        v.NF)(function(S) {
            var x, p, n, s, E, se = S.semanticColors, ve = S.fonts, Ie = S.palette, Ue = se.menuItemBackgroundHovered, Ae = se.menuItemTextHovered, Re = se.menuItemBackgroundPressed, je = se.bodyDivider, tt = {
                item: [ve.medium, {
                    color: se.bodyText,
                    position: "relative",
                    boxSizing: "border-box"
                }],
                divider: {
                    display: "block",
                    height: "1px",
                    backgroundColor: je,
                    position: "relative"
                },
                root: [(0,
                de.GL)(S), ve.medium, {
                    color: se.bodyText,
                    backgroundColor: "transparent",
                    border: "none",
                    width: "100%",
                    height: Be,
                    lineHeight: Be,
                    display: "block",
                    cursor: "pointer",
                    padding: "0px 8px 0 4px",
                    textAlign: "left"
                }],
                rootDisabled: {
                    color: se.disabledBodyText,
                    cursor: "default",
                    pointerEvents: "none",
                    selectors: (x = {},
                    x[de.qJ] = {
                        color: "GrayText",
                        opacity: 1
                    },
                    x)
                },
                rootHovered: {
                    backgroundColor: Ue,
                    color: Ae,
                    selectors: {
                        ".ms-ContextualMenu-icon": {
                            color: Ie.themeDarkAlt
                        },
                        ".ms-ContextualMenu-submenuIcon": {
                            color: Ie.neutralPrimary
                        }
                    }
                },
                rootFocused: {
                    backgroundColor: Ie.white
                },
                rootChecked: {
                    selectors: {
                        ".ms-ContextualMenu-checkmarkIcon": {
                            color: Ie.neutralPrimary
                        }
                    }
                },
                rootPressed: {
                    backgroundColor: Re,
                    selectors: {
                        ".ms-ContextualMenu-icon": {
                            color: Ie.themeDark
                        },
                        ".ms-ContextualMenu-submenuIcon": {
                            color: Ie.neutralPrimary
                        }
                    }
                },
                rootExpanded: {
                    backgroundColor: Re,
                    color: se.bodyTextChecked,
                    selectors: (p = {
                        ".ms-ContextualMenu-submenuIcon": (n = {},
                        n[de.qJ] = {
                            color: "inherit"
                        },
                        n)
                    },
                    p[de.qJ] = (0,
                    c.pi)({}, (0,
                    de.xM)()),
                    p)
                },
                linkContent: {
                    whiteSpace: "nowrap",
                    height: "inherit",
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "100%"
                },
                anchorLink: {
                    padding: "0px 8px 0 4px",
                    textRendering: "auto",
                    color: "inherit",
                    letterSpacing: "normal",
                    wordSpacing: "normal",
                    textTransform: "none",
                    textIndent: "0px",
                    textShadow: "none",
                    textDecoration: "none",
                    boxSizing: "border-box"
                },
                label: {
                    margin: "0 4px",
                    verticalAlign: "middle",
                    display: "inline-block",
                    flexGrow: "1",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden"
                },
                secondaryText: {
                    color: S.palette.neutralSecondary,
                    paddingLeft: "20px",
                    textAlign: "right"
                },
                icon: {
                    display: "inline-block",
                    minHeight: "1px",
                    maxHeight: Be,
                    fontSize: de.ld.medium,
                    width: de.ld.medium,
                    margin: "0 4px",
                    verticalAlign: "middle",
                    flexShrink: "0",
                    selectors: (s = {},
                    s[Oe] = {
                        fontSize: de.ld.large,
                        width: de.ld.large
                    },
                    s)
                },
                iconColor: {
                    color: se.menuIcon
                },
                iconDisabled: {
                    color: se.disabledBodyText
                },
                checkmarkIcon: {
                    color: se.bodySubtext
                },
                subMenuIcon: {
                    height: Be,
                    lineHeight: Be,
                    color: Ie.neutralSecondary,
                    textAlign: "center",
                    display: "inline-block",
                    verticalAlign: "middle",
                    flexShrink: "0",
                    fontSize: de.ld.small,
                    selectors: (E = {
                        ":hover": {
                            color: Ie.neutralPrimary
                        },
                        ":active": {
                            color: Ie.neutralPrimary
                        }
                    },
                    E[Oe] = {
                        fontSize: de.ld.medium
                    },
                    E)
                },
                splitButtonFlexContainer: [(0,
                de.GL)(S), {
                    display: "flex",
                    height: Be,
                    flexWrap: "nowrap",
                    justifyContent: "center",
                    alignItems: "flex-start"
                }]
            };
            return (0,
            de.E$)(tt)
        }), $e = "28px", et = (0,
        de.sK)(0, de.yp), ht = (0,
        v.NF)(function(S) {
            var x;
            return (0,
            de.ZC)(Ce(S), {
                wrapper: {
                    position: "absolute",
                    right: 28,
                    selectors: (x = {},
                    x[et] = {
                        right: 32
                    },
                    x)
                },
                divider: {
                    height: 16,
                    width: 1
                }
            })
        }), Ct = {
            item: "ms-ContextualMenu-item",
            divider: "ms-ContextualMenu-divider",
            root: "ms-ContextualMenu-link",
            isChecked: "is-checked",
            isExpanded: "is-expanded",
            isDisabled: "is-disabled",
            linkContent: "ms-ContextualMenu-linkContent",
            linkContentMenu: "ms-ContextualMenu-linkContent",
            icon: "ms-ContextualMenu-icon",
            iconColor: "ms-ContextualMenu-iconColor",
            checkmarkIcon: "ms-ContextualMenu-checkmarkIcon",
            subMenuIcon: "ms-ContextualMenu-submenuIcon",
            label: "ms-ContextualMenu-itemText",
            secondaryText: "ms-ContextualMenu-secondaryText",
            splitMenu: "ms-ContextualMenu-splitMenu",
            screenReaderText: "ms-ContextualMenu-screenReaderText"
        }, dt = (0,
        v.NF)(function(S, x, p, n, s, E, se, ve, Ie, Ue, Ae, Re) {
            var je, tt, ft, vt, Je = at(S), yt = (0,
            de.Cn)(Ct, S);
            return (0,
            de.ZC)({
                item: [yt.item, Je.item, se],
                divider: [yt.divider, Je.divider, ve],
                root: [yt.root, Je.root, n && [yt.isChecked, Je.rootChecked], s && Je.anchorLink, p && [yt.isExpanded, Je.rootExpanded], x && [yt.isDisabled, Je.rootDisabled], !x && !p && [{
                    selectors: (je = {
                        ":hover": Je.rootHovered,
                        ":active": Je.rootPressed
                    },
                    je["." + he.G$ + " &:focus, ." + he.G$ + " &:focus:hover"] = Je.rootFocused,
                    je["." + he.G$ + " &:hover"] = {
                        background: "inherit;"
                    },
                    je)
                }], Re],
                splitPrimary: [Je.root, {
                    width: "calc(100% - " + $e + ")"
                }, n && ["is-checked", Je.rootChecked], (x || Ae) && ["is-disabled", Je.rootDisabled], !(x || Ae) && !n && [{
                    selectors: (tt = {
                        ":hover": Je.rootHovered
                    },
                    tt[":hover ~ ." + yt.splitMenu] = Je.rootHovered,
                    tt[":active"] = Je.rootPressed,
                    tt["." + he.G$ + " &:focus, ." + he.G$ + " &:focus:hover"] = Je.rootFocused,
                    tt["." + he.G$ + " &:hover"] = {
                        background: "inherit;"
                    },
                    tt)
                }]],
                splitMenu: [yt.splitMenu, Je.root, {
                    flexBasis: "0",
                    padding: "0 8px",
                    minWidth: $e
                }, p && ["is-expanded", Je.rootExpanded], x && ["is-disabled", Je.rootDisabled], !x && !p && [{
                    selectors: (ft = {
                        ":hover": Je.rootHovered,
                        ":active": Je.rootPressed
                    },
                    ft["." + he.G$ + " &:focus, ." + he.G$ + " &:focus:hover"] = Je.rootFocused,
                    ft["." + he.G$ + " &:hover"] = {
                        background: "inherit;"
                    },
                    ft)
                }]],
                anchorLink: Je.anchorLink,
                linkContent: [yt.linkContent, Je.linkContent],
                linkContentMenu: [yt.linkContentMenu, Je.linkContent, {
                    justifyContent: "center"
                }],
                icon: [yt.icon, E && Je.iconColor, Je.icon, Ie, x && [yt.isDisabled, Je.iconDisabled]],
                iconColor: Je.iconColor,
                checkmarkIcon: [yt.checkmarkIcon, E && Je.checkmarkIcon, Je.icon, Ie],
                subMenuIcon: [yt.subMenuIcon, Je.subMenuIcon, Ue, p && {
                    color: S.palette.neutralPrimary
                }, x && [Je.iconDisabled]],
                label: [yt.label, Je.label],
                secondaryText: [yt.secondaryText, Je.secondaryText],
                splitContainer: [Je.splitButtonFlexContainer, !x && !n && [{
                    selectors: (vt = {},
                    vt["." + he.G$ + " &:focus, ." + he.G$ + " &:focus:hover"] = Je.rootFocused,
                    vt)
                }]],
                screenReaderText: [yt.screenReaderText, Je.screenReaderText, de.ul, {
                    visibility: "hidden"
                }]
            })
        }), ze = function(S) {
            var x = S.theme
              , p = S.disabled
              , n = S.expanded
              , s = S.checked
              , E = S.isAnchorLink
              , se = S.knownIcon
              , ve = S.itemClassName
              , Ie = S.dividerClassName
              , Ue = S.iconClassName
              , Ae = S.subMenuClassName
              , Re = S.primaryDisabled
              , je = S.className;
            return dt(x, p, n, s, E, se, ve, Ie, Ue, Ae, Re, je)
        }, pt = (0,
        pe.z)(Ee, ze, void 0, {
            scope: "ContextualMenuItem"
        }), It = function(S) {
            (0,
            c.ZT)(x, S);
            function x(p) {
                var n = S.call(this, p) || this;
                return n._onItemMouseEnter = function(s) {
                    var E = n.props
                      , se = E.item
                      , ve = E.onItemMouseEnter;
                    ve && ve(se, s, s.currentTarget)
                }
                ,
                n._onItemClick = function(s) {
                    var E = n.props
                      , se = E.item
                      , ve = E.onItemClickBase;
                    ve && ve(se, s, s.currentTarget)
                }
                ,
                n._onItemMouseLeave = function(s) {
                    var E = n.props
                      , se = E.item
                      , ve = E.onItemMouseLeave;
                    ve && ve(se, s)
                }
                ,
                n._onItemKeyDown = function(s) {
                    var E = n.props
                      , se = E.item
                      , ve = E.onItemKeyDown;
                    ve && ve(se, s)
                }
                ,
                n._onItemMouseMove = function(s) {
                    var E = n.props
                      , se = E.item
                      , ve = E.onItemMouseMove;
                    ve && ve(se, s, s.currentTarget)
                }
                ,
                n._getSubmenuTarget = function() {}
                ,
                (0,
                ie.l)(n),
                n
            }
            return x.prototype.shouldComponentUpdate = function(p) {
                return !(0,
                O.Vv)(p, this.props)
            }
            ,
            x
        }(t.Component), w = "ktp", ce = "-", B = w + ce, _ = "data-ktp-target", ye = "data-ktp-execute-target", z = "data-ktp-aria-target", ne = "ktp-layer-id", I = ", ", o;
        (function(S) {
            S.KEYTIP_ADDED = "keytipAdded",
            S.KEYTIP_REMOVED = "keytipRemoved",
            S.KEYTIP_UPDATED = "keytipUpdated",
            S.PERSISTED_KEYTIP_ADDED = "persistedKeytipAdded",
            S.PERSISTED_KEYTIP_REMOVED = "persistedKeytipRemoved",
            S.PERSISTED_KEYTIP_EXECUTE = "persistedKeytipExecute",
            S.ENTER_KEYTIP_MODE = "enterKeytipMode",
            S.EXIT_KEYTIP_MODE = "exitKeytipMode"
        }
        )(o || (o = {}));
        var me = e(91062)
          , De = e(76295)
          , xe = e(17096)
          , ke = function() {
            function S() {
                this.keytips = {},
                this.persistedKeytips = {},
                this.sequenceMapping = {},
                this.inKeytipMode = !1,
                this.shouldEnterKeytipMode = !0,
                this.delayUpdatingKeytipChange = !1
            }
            return S.getInstance = function() {
                return this._instance
            }
            ,
            S.prototype.init = function(x) {
                this.delayUpdatingKeytipChange = x
            }
            ,
            S.prototype.register = function(x, p) {
                p === void 0 && (p = !1);
                var n = x;
                p || (n = this.addParentOverflow(x),
                this.sequenceMapping[n.keySequences.toString()] = n);
                var s = this._getUniqueKtp(n);
                if (p ? this.persistedKeytips[s.uniqueID] = s : this.keytips[s.uniqueID] = s,
                this.inKeytipMode || !this.delayUpdatingKeytipChange) {
                    var E = p ? o.PERSISTED_KEYTIP_ADDED : o.KEYTIP_ADDED;
                    ue.r.raise(this, E, {
                        keytip: n,
                        uniqueID: s.uniqueID
                    })
                }
                return s.uniqueID
            }
            ,
            S.prototype.update = function(x, p) {
                var n = this.addParentOverflow(x)
                  , s = this._getUniqueKtp(n, p)
                  , E = this.keytips[p];
                E && (s.keytip.visible = E.keytip.visible,
                this.keytips[p] = s,
                delete this.sequenceMapping[E.keytip.keySequences.toString()],
                this.sequenceMapping[s.keytip.keySequences.toString()] = s.keytip,
                (this.inKeytipMode || !this.delayUpdatingKeytipChange) && ue.r.raise(this, o.KEYTIP_UPDATED, {
                    keytip: s.keytip,
                    uniqueID: s.uniqueID
                }))
            }
            ,
            S.prototype.unregister = function(x, p, n) {
                n === void 0 && (n = !1),
                n ? delete this.persistedKeytips[p] : delete this.keytips[p],
                !n && delete this.sequenceMapping[x.keySequences.toString()];
                var s = n ? o.PERSISTED_KEYTIP_REMOVED : o.KEYTIP_REMOVED;
                (this.inKeytipMode || !this.delayUpdatingKeytipChange) && ue.r.raise(this, s, {
                    keytip: x,
                    uniqueID: p
                })
            }
            ,
            S.prototype.enterKeytipMode = function() {
                ue.r.raise(this, o.ENTER_KEYTIP_MODE)
            }
            ,
            S.prototype.exitKeytipMode = function() {
                ue.r.raise(this, o.EXIT_KEYTIP_MODE)
            }
            ,
            S.prototype.getKeytips = function() {
                var x = this;
                return Object.keys(this.keytips).map(function(p) {
                    return x.keytips[p].keytip
                })
            }
            ,
            S.prototype.addParentOverflow = function(x) {
                var p = (0,
                c.ev)([], x.keySequences);
                if (p.pop(),
                p.length !== 0) {
                    var n = this.sequenceMapping[p.toString()];
                    if (n && n.overflowSetSequence)
                        return (0,
                        c.pi)((0,
                        c.pi)({}, x), {
                            overflowSetSequence: n.overflowSetSequence
                        })
                }
                return x
            }
            ,
            S.prototype.menuExecute = function(x, p) {
                ue.r.raise(this, o.PERSISTED_KEYTIP_EXECUTE, {
                    overflowButtonSequences: x,
                    keytipSequences: p
                })
            }
            ,
            S.prototype._getUniqueKtp = function(x, p) {
                return p === void 0 && (p = (0,
                g.z)()),
                {
                    keytip: (0,
                    c.pi)({}, x),
                    uniqueID: p
                }
            }
            ,
            S._instance = new S,
            S
        }()
          , we = e(32367);
        function nt(S) {
            return S.reduce(function(x, p) {
                return x + ce + p.split("").join(ce)
            }, w)
        }
        function He(S, x) {
            var p = x.length
              , n = (0,
            c.ev)([], x).pop()
              , s = (0,
            c.ev)([], S);
            return (0,
            we.OA)(s, p - 1, n)
        }
        function Qe(S) {
            return "[" + DATAKTP_TARGET + '="' + nt(S) + '"]'
        }
        function Y(S) {
            return "[" + DATAKTP_EXECUTE_TARGET + '="' + S + '"]'
        }
        function Me(S) {
            var x = " " + ne;
            return S.length ? x + " " + nt(S) : x
        }
        function Le(S) {
            var x = t.useRef()
              , p = S.keytipProps ? (0,
            c.pi)({
                disabled: S.disabled
            }, S.keytipProps) : void 0
              , n = (0,
            me.B)(ke.getInstance())
              , s = (0,
            De.D)(S);
            (0,
            xe.L)(function() {
                x.current && p && ((s == null ? void 0 : s.keytipProps) !== S.keytipProps || (s == null ? void 0 : s.disabled) !== S.disabled) && n.update(p, x.current)
            }),
            (0,
            xe.L)(function() {
                return p && (x.current = n.register(p)),
                function() {
                    p && n.unregister(p, x.current)
                }
            }, []);
            var E = {
                ariaDescribedBy: void 0,
                keytipId: void 0
            };
            return p && (E = We(n, p, S.ariaDescribedBy)),
            E
        }
        function We(S, x, p) {
            var n = S.addParentOverflow(x)
              , s = (0,
            $.I)(p, Me(n.keySequences))
              , E = (0,
            c.ev)([], n.keySequences);
            n.overflowSetSequence && (E = He(E, n.overflowSetSequence));
            var se = nt(E);
            return {
                ariaDescribedBy: s,
                keytipId: se
            }
        }
        var Ge = function(S) {
            var x, p = S.children, n = (0,
            c._T)(S, ["children"]), s = Le(n), E = s.keytipId, se = s.ariaDescribedBy;
            return p((x = {},
            x[_] = E,
            x[ye] = E,
            x["aria-describedby"] = se,
            x))
        }
          , Ze = function(S) {
            (0,
            c.ZT)(x, S);
            function x() {
                var p = S !== null && S.apply(this, arguments) || this;
                return p._anchor = t.createRef(),
                p._getMemoizedMenuButtonKeytipProps = (0,
                v.NF)(function(n) {
                    return (0,
                    c.pi)((0,
                    c.pi)({}, n), {
                        hasMenu: !0
                    })
                }),
                p._getSubmenuTarget = function() {
                    return p._anchor.current ? p._anchor.current : void 0
                }
                ,
                p._onItemClick = function(n) {
                    var s = p.props
                      , E = s.item
                      , se = s.onItemClick;
                    se && se(E, n)
                }
                ,
                p._renderAriaDescription = function(n, s) {
                    return n ? t.createElement("span", {
                        id: p._ariaDescriptionId,
                        className: s
                    }, n) : null
                }
                ,
                p
            }
            return x.prototype.render = function() {
                var p = this
                  , n = this.props
                  , s = n.item
                  , E = n.classNames
                  , se = n.index
                  , ve = n.focusableElementIndex
                  , Ie = n.totalItemCount
                  , Ue = n.hasCheckmarks
                  , Ae = n.hasIcons
                  , Re = n.contextualMenuItemAs
                  , je = Re === void 0 ? pt : Re
                  , tt = n.expandedMenuItemKey
                  , ft = n.onItemClick
                  , vt = n.openSubMenu
                  , Je = n.dismissSubMenu
                  , yt = n.dismissMenu
                  , Ft = s.rel;
                s.target && s.target.toLowerCase() === "_blank" && (Ft = Ft || "nofollow noopener noreferrer");
                var wt = i(s)
                  , it = (0,
                ee.pq)(s, ee.h2)
                  , Mt = m(s)
                  , Tt = s.itemProps
                  , ot = s.ariaDescription
                  , xt = s.keytipProps;
                xt && wt && (xt = this._getMemoizedMenuButtonKeytipProps(xt)),
                ot && (this._ariaDescriptionId = (0,
                g.z)());
                var Bt = (0,
                $.I)(s.ariaDescribedBy, ot ? this._ariaDescriptionId : void 0, it["aria-describedby"])
                  , Ut = {
                    "aria-describedby": Bt
                };
                return t.createElement("div", null, t.createElement(Ge, {
                    keytipProps: s.keytipProps,
                    ariaDescribedBy: Bt,
                    disabled: Mt
                }, function(tn) {
                    return t.createElement("a", (0,
                    c.pi)({}, Ut, it, tn, {
                        ref: p._anchor,
                        href: s.href,
                        target: s.target,
                        rel: Ft,
                        className: E.root,
                        role: "menuitem",
                        "aria-haspopup": wt || void 0,
                        "aria-expanded": wt ? s.key === tt : void 0,
                        "aria-posinset": ve + 1,
                        "aria-setsize": Ie,
                        "aria-disabled": m(s),
                        style: s.style,
                        onClick: p._onItemClick,
                        onMouseEnter: p._onItemMouseEnter,
                        onMouseLeave: p._onItemMouseLeave,
                        onMouseMove: p._onItemMouseMove,
                        onKeyDown: wt ? p._onItemKeyDown : void 0
                    }), t.createElement(je, (0,
                    c.pi)({
                        componentRef: s.componentRef,
                        item: s,
                        classNames: E,
                        index: se,
                        onCheckmarkClick: Ue && ft ? ft : void 0,
                        hasIcons: Ae,
                        openSubMenu: vt,
                        dismissSubMenu: Je,
                        dismissMenu: yt,
                        getSubmenuTarget: p._getSubmenuTarget
                    }, Tt)), p._renderAriaDescription(ot, E.screenReaderText))
                }))
            }
            ,
            x
        }(It)
          , Xe = function(S) {
            var x = S.theme
              , p = S.getClassNames
              , n = S.className;
            if (!x)
                throw new Error("Theme is undefined or null.");
            if (p) {
                var s = p(x);
                return {
                    wrapper: [s.wrapper],
                    divider: [s.divider]
                }
            }
            return {
                wrapper: [{
                    display: "inline-flex",
                    height: "100%",
                    alignItems: "center"
                }, n],
                divider: [{
                    width: 1,
                    height: "100%",
                    backgroundColor: x.palette.neutralTertiaryAlt
                }]
            }
        }
          , Ve = (0,
        H.y)()
          , ut = t.forwardRef(function(S, x) {
            var p = S.styles
              , n = S.theme
              , s = S.getClassNames
              , E = S.className
              , se = Ve(p, {
                theme: n,
                getClassNames: s,
                className: E
            });
            return t.createElement("span", {
                className: se.wrapper,
                ref: x
            }, t.createElement("span", {
                className: se.divider
            }))
        });
        ut.displayName = "VerticalDividerBase";
        var St = (0,
        pe.z)(ut, Xe, void 0, {
            scope: "VerticalDivider"
        })
          , Dt = 500
          , gt = function(S) {
            (0,
            c.ZT)(x, S);
            function x(p) {
                var n = S.call(this, p) || this;
                return n._getMemoizedMenuButtonKeytipProps = (0,
                v.NF)(function(s) {
                    return (0,
                    c.pi)((0,
                    c.pi)({}, s), {
                        hasMenu: !0
                    })
                }),
                n._onItemKeyDown = function(s) {
                    var E = n.props
                      , se = E.item
                      , ve = E.onItemKeyDown;
                    s.which === be.m.enter ? (n._executeItemClick(s),
                    s.preventDefault(),
                    s.stopPropagation()) : ve && ve(se, s)
                }
                ,
                n._getSubmenuTarget = function() {
                    return n._splitButton
                }
                ,
                n._renderAriaDescription = function(s, E) {
                    return s ? t.createElement("span", {
                        id: n._ariaDescriptionId,
                        className: E
                    }, s) : null
                }
                ,
                n._onItemMouseEnterPrimary = function(s) {
                    var E = n.props
                      , se = E.item
                      , ve = E.onItemMouseEnter;
                    ve && ve((0,
                    c.pi)((0,
                    c.pi)({}, se), {
                        subMenuProps: void 0,
                        items: void 0
                    }), s, n._splitButton)
                }
                ,
                n._onItemMouseEnterIcon = function(s) {
                    var E = n.props
                      , se = E.item
                      , ve = E.onItemMouseEnter;
                    ve && ve(se, s, n._splitButton)
                }
                ,
                n._onItemMouseMovePrimary = function(s) {
                    var E = n.props
                      , se = E.item
                      , ve = E.onItemMouseMove;
                    ve && ve((0,
                    c.pi)((0,
                    c.pi)({}, se), {
                        subMenuProps: void 0,
                        items: void 0
                    }), s, n._splitButton)
                }
                ,
                n._onItemMouseMoveIcon = function(s) {
                    var E = n.props
                      , se = E.item
                      , ve = E.onItemMouseMove;
                    ve && ve(se, s, n._splitButton)
                }
                ,
                n._onIconItemClick = function(s) {
                    var E = n.props
                      , se = E.item
                      , ve = E.onItemClickBase;
                    ve && ve(se, s, n._splitButton ? n._splitButton : s.currentTarget)
                }
                ,
                n._executeItemClick = function(s) {
                    var E = n.props
                      , se = E.item
                      , ve = E.executeItemClick
                      , Ie = E.onItemClick;
                    if (!(se.disabled || se.isDisabled)) {
                        if (n._processingTouch && Ie)
                            return Ie(se, s);
                        ve && ve(se, s)
                    }
                }
                ,
                n._onTouchStart = function(s) {
                    n._splitButton && !("onpointerdown"in n._splitButton) && n._handleTouchAndPointerEvent(s)
                }
                ,
                n._onPointerDown = function(s) {
                    s.pointerType === "touch" && (n._handleTouchAndPointerEvent(s),
                    s.preventDefault(),
                    s.stopImmediatePropagation())
                }
                ,
                n._async = new te.e(n),
                n._events = new ue.r(n),
                n
            }
            return x.prototype.componentDidMount = function() {
                this._splitButton && "onpointerdown"in this._splitButton && this._events.on(this._splitButton, "pointerdown", this._onPointerDown, !0)
            }
            ,
            x.prototype.componentWillUnmount = function() {
                this._async.dispose(),
                this._events.dispose()
            }
            ,
            x.prototype.render = function() {
                var p = this
                  , n = this.props
                  , s = n.item
                  , E = n.classNames
                  , se = n.index
                  , ve = n.focusableElementIndex
                  , Ie = n.totalItemCount
                  , Ue = n.hasCheckmarks
                  , Ae = n.hasIcons
                  , Re = n.onItemMouseLeave
                  , je = n.expandedMenuItemKey
                  , tt = i(s)
                  , ft = s.keytipProps;
                ft && (ft = this._getMemoizedMenuButtonKeytipProps(ft));
                var vt = s.ariaDescription;
                return vt && (this._ariaDescriptionId = (0,
                g.z)()),
                t.createElement(Ge, {
                    keytipProps: ft,
                    disabled: m(s)
                }, function(Je) {
                    return t.createElement("div", {
                        "data-ktp-target": Je["data-ktp-target"],
                        ref: function(yt) {
                            return p._splitButton = yt
                        },
                        role: R(s),
                        "aria-label": s.ariaLabel,
                        className: E.splitContainer,
                        "aria-disabled": m(s),
                        "aria-expanded": tt ? s.key === je : void 0,
                        "aria-haspopup": !0,
                        "aria-describedby": (0,
                        $.I)(s.ariaDescribedBy, vt ? p._ariaDescriptionId : void 0, Je["aria-describedby"]),
                        "aria-checked": s.isChecked || s.checked,
                        "aria-posinset": ve + 1,
                        "aria-setsize": Ie,
                        onMouseEnter: p._onItemMouseEnterPrimary,
                        onMouseLeave: Re ? Re.bind(p, (0,
                        c.pi)((0,
                        c.pi)({}, s), {
                            subMenuProps: null,
                            items: null
                        })) : void 0,
                        onMouseMove: p._onItemMouseMovePrimary,
                        onKeyDown: p._onItemKeyDown,
                        onClick: p._executeItemClick,
                        onTouchStart: p._onTouchStart,
                        tabIndex: 0,
                        "data-is-focusable": !0,
                        "aria-roledescription": s["aria-roledescription"]
                    }, p._renderSplitPrimaryButton(s, E, se, Ue, Ae), p._renderSplitDivider(s), p._renderSplitIconButton(s, E, se, Je), p._renderAriaDescription(vt, E.screenReaderText))
                })
            }
            ,
            x.prototype._renderSplitPrimaryButton = function(p, n, s, E, se) {
                var ve = this.props
                  , Ie = ve.contextualMenuItemAs
                  , Ue = Ie === void 0 ? pt : Ie
                  , Ae = ve.onItemClick
                  , Re = {
                    key: p.key,
                    disabled: m(p) || p.primaryDisabled,
                    name: p.name,
                    text: p.text || p.name,
                    secondaryText: p.secondaryText,
                    className: n.splitPrimary,
                    canCheck: p.canCheck,
                    isChecked: p.isChecked,
                    checked: p.checked,
                    iconProps: p.iconProps,
                    onRenderIcon: p.onRenderIcon,
                    data: p.data,
                    "data-is-focusable": !1
                }
                  , je = p.itemProps;
                return t.createElement("button", (0,
                c.pi)({}, (0,
                ee.pq)(Re, ee.Yq)), t.createElement(Ue, (0,
                c.pi)({
                    "data-is-focusable": !1,
                    item: Re,
                    classNames: n,
                    index: s,
                    onCheckmarkClick: E && Ae ? Ae : void 0,
                    hasIcons: se
                }, je)))
            }
            ,
            x.prototype._renderSplitDivider = function(p) {
                var n = p.getSplitButtonVerticalDividerClassNames || ht;
                return t.createElement(St, {
                    getClassNames: n
                })
            }
            ,
            x.prototype._renderSplitIconButton = function(p, n, s, E) {
                var se = this.props
                  , ve = se.contextualMenuItemAs
                  , Ie = ve === void 0 ? pt : ve
                  , Ue = se.onItemMouseLeave
                  , Ae = se.onItemMouseDown
                  , Re = se.openSubMenu
                  , je = se.dismissSubMenu
                  , tt = se.dismissMenu
                  , ft = {
                    onClick: this._onIconItemClick,
                    disabled: m(p),
                    className: n.splitMenu,
                    subMenuProps: p.subMenuProps,
                    submenuIconProps: p.submenuIconProps,
                    split: !0,
                    key: p.key
                }
                  , vt = (0,
                c.pi)((0,
                c.pi)({}, (0,
                ee.pq)(ft, ee.Yq)), {
                    onMouseEnter: this._onItemMouseEnterIcon,
                    onMouseLeave: Ue ? Ue.bind(this, p) : void 0,
                    onMouseDown: function(yt) {
                        return Ae ? Ae(p, yt) : void 0
                    },
                    onMouseMove: this._onItemMouseMoveIcon,
                    "data-is-focusable": !1,
                    "data-ktp-execute-target": E["data-ktp-execute-target"],
                    "aria-hidden": !0
                })
                  , Je = p.itemProps;
                return t.createElement("button", (0,
                c.pi)({}, vt), t.createElement(Ie, (0,
                c.pi)({
                    componentRef: p.componentRef,
                    item: ft,
                    classNames: n,
                    index: s,
                    hasIcons: !1,
                    openSubMenu: Re,
                    dismissSubMenu: je,
                    dismissMenu: tt,
                    getSubmenuTarget: this._getSubmenuTarget
                }, Je)))
            }
            ,
            x.prototype._handleTouchAndPointerEvent = function(p) {
                var n = this
                  , s = this.props.onTap;
                s && s(p),
                this._lastTouchTimeoutId && (this._async.clearTimeout(this._lastTouchTimeoutId),
                this._lastTouchTimeoutId = void 0),
                this._processingTouch = !0,
                this._lastTouchTimeoutId = this._async.setTimeout(function() {
                    n._processingTouch = !1,
                    n._lastTouchTimeoutId = void 0
                }, Dt)
            }
            ,
            x
        }(It)
          , rt = function(S) {
            (0,
            c.ZT)(x, S);
            function x() {
                var p = S !== null && S.apply(this, arguments) || this;
                return p._btn = t.createRef(),
                p._getMemoizedMenuButtonKeytipProps = (0,
                v.NF)(function(n) {
                    return (0,
                    c.pi)((0,
                    c.pi)({}, n), {
                        hasMenu: !0
                    })
                }),
                p._renderAriaDescription = function(n, s) {
                    return n ? t.createElement("span", {
                        id: p._ariaDescriptionId,
                        className: s
                    }, n) : null
                }
                ,
                p._getSubmenuTarget = function() {
                    return p._btn.current ? p._btn.current : void 0
                }
                ,
                p
            }
            return x.prototype.render = function() {
                var p = this
                  , n = this.props
                  , s = n.item
                  , E = n.classNames
                  , se = n.index
                  , ve = n.focusableElementIndex
                  , Ie = n.totalItemCount
                  , Ue = n.hasCheckmarks
                  , Ae = n.hasIcons
                  , Re = n.contextualMenuItemAs
                  , je = Re === void 0 ? pt : Re
                  , tt = n.expandedMenuItemKey
                  , ft = n.onItemMouseDown
                  , vt = n.onItemClick
                  , Je = n.openSubMenu
                  , yt = n.dismissSubMenu
                  , Ft = n.dismissMenu
                  , wt = f(s)
                  , it = wt !== null
                  , Mt = R(s)
                  , Tt = i(s)
                  , ot = s.itemProps
                  , xt = s.ariaLabel
                  , Bt = s.ariaDescription
                  , Ut = (0,
                ee.pq)(s, ee.Yq);
                delete Ut.disabled;
                var tn = s.role || Mt;
                Bt && (this._ariaDescriptionId = (0,
                g.z)());
                var In = (0,
                $.I)(s.ariaDescribedBy, Bt ? this._ariaDescriptionId : void 0, Ut["aria-describedby"])
                  , xn = {
                    className: E.root,
                    onClick: this._onItemClick,
                    onKeyDown: Tt ? this._onItemKeyDown : void 0,
                    onMouseEnter: this._onItemMouseEnter,
                    onMouseLeave: this._onItemMouseLeave,
                    onMouseDown: function(Yt) {
                        return ft ? ft(s, Yt) : void 0
                    },
                    onMouseMove: this._onItemMouseMove,
                    href: s.href,
                    title: s.title,
                    "aria-label": xt,
                    "aria-describedby": In,
                    "aria-haspopup": Tt || void 0,
                    "aria-expanded": Tt ? s.key === tt : void 0,
                    "aria-posinset": ve + 1,
                    "aria-setsize": Ie,
                    "aria-disabled": m(s),
                    "aria-checked": (tn === "menuitemcheckbox" || tn === "menuitemradio") && it ? !!wt : void 0,
                    "aria-selected": tn === "menuitem" && it ? !!wt : void 0,
                    role: tn,
                    style: s.style
                }
                  , cn = s.keytipProps;
                return cn && Tt && (cn = this._getMemoizedMenuButtonKeytipProps(cn)),
                t.createElement(Ge, {
                    keytipProps: cn,
                    ariaDescribedBy: In,
                    disabled: m(s)
                }, function(Yt) {
                    return t.createElement("button", (0,
                    c.pi)({
                        ref: p._btn
                    }, Ut, xn, Yt), t.createElement(je, (0,
                    c.pi)({
                        componentRef: s.componentRef,
                        item: s,
                        classNames: E,
                        index: se,
                        onCheckmarkClick: Ue && vt ? vt : void 0,
                        hasIcons: Ae,
                        openSubMenu: Je,
                        dismissSubMenu: yt,
                        dismissMenu: Ft,
                        getSubmenuTarget: p._getSubmenuTarget
                    }, ot)), p._renderAriaDescription(Bt, E.screenReaderText))
                })
            }
            ,
            x
        }(It)
          , Pt = e(73823)
          , Ye = e(35926)
          , Et = e(34829)
          , kt = e(34743)
          , y = e(96441)
          , M = e(42958)
          , k = t.createContext({})
          , q = function() {
            return React.useContext(k)
        }
          , ge = (0,
        H.y)()
          , fe = (0,
        H.y)()
          , Te = {
            items: [],
            shouldFocusOnMount: !0,
            gapSpace: 0,
            directionalHint: X.b.bottomAutoEdge,
            beakWidth: 16
        };
        function Pe(S, x) {
            var p = x == null ? void 0 : x.target
              , n = S.subMenuProps ? S.subMenuProps.items : S.items;
            if (n) {
                for (var s = [], E = 0, se = n; E < se.length; E++) {
                    var ve = se[E];
                    if (ve.preferMenuTargetAsEventTarget) {
                        var Ie = ve.onClick
                          , Ue = (0,
                        c._T)(ve, ["onClick"]);
                        s.push((0,
                        c.pi)((0,
                        c.pi)({}, Ue), {
                            onClick: rn(Ie, p)
                        }))
                    } else
                        s.push(ve)
                }
                return s
            }
        }
        function Fe(S) {
            return S.some(function(x) {
                return !!(x.canCheck || x.sectionProps && x.sectionProps.items.some(function(p) {
                    return p.canCheck === !0
                }))
            })
        }
        var _e = 250
          , lt = "ContextualMenu"
          , qe = (0,
        v.NF)(function() {
            for (var S = [], x = 0; x < arguments.length; x++)
                S[x] = arguments[x];
            return function(p) {
                return de.l7.apply(void 0, (0,
                c.ev)([p, ze], S))
            }
        });
        function st(S, x) {
            var p = S.hidden
              , n = p === void 0 ? !1 : p
              , s = S.onMenuDismissed
              , E = S.onMenuOpened
              , se = (0,
            De.D)(n)
              , ve = t.useRef(E)
              , Ie = t.useRef(s)
              , Ue = t.useRef(S);
            ve.current = E,
            Ie.current = s,
            Ue.current = S,
            t.useEffect(function() {
                var Ae, Re;
                n && se === !1 ? (Ae = Ie.current) === null || Ae === void 0 || Ae.call(Ie, Ue.current) : !n && se !== !1 && ((Re = ve.current) === null || Re === void 0 || Re.call(ve, Ue.current))
            }, [n, se]),
            t.useEffect(function() {
                return function() {
                    var Ae;
                    return (Ae = Ie.current) === null || Ae === void 0 ? void 0 : Ae.call(Ie, Ue.current)
                }
            }, [])
        }
        function bt(S, x) {
            var p = S.hidden
              , n = S.items
              , s = S.theme
              , E = S.className
              , se = S.id
              , ve = S.target
              , Ie = t.useState()
              , Ue = Ie[0]
              , Ae = Ie[1]
              , Re = t.useState()
              , je = Re[0]
              , tt = Re[1]
              , ft = t.useState()
              , vt = ft[0]
              , Je = ft[1]
              , yt = (0,
            Pt.M)(lt, se)
              , Ft = t.useCallback(function() {
                Je(void 0),
                Ae(void 0),
                tt(void 0)
            }, [])
              , wt = t.useCallback(function(Tt, ot, xt) {
                var Bt = Tt.key;
                Ue !== Bt && (ot.focus(),
                Je(xt),
                Ae(Bt),
                tt(ot))
            }, [Ue]);
            t.useEffect(function() {
                p && Ft()
            }, [p, Ft]);
            var it = Ht(x, Ft)
              , Mt = function() {
                var Tt = $t(Ue, n)
                  , ot = null;
                if (Tt && (ot = {
                    items: Pe(Tt, {
                        target: ve
                    }),
                    target: je,
                    onDismiss: it,
                    isSubMenu: !0,
                    id: yt,
                    shouldFocusOnMount: !0,
                    shouldFocusOnContainer: vt,
                    directionalHint: (0,
                    l.zg)(s) ? X.b.leftTopEdge : X.b.rightTopEdge,
                    className: E,
                    gapSpace: 0,
                    isBeakVisible: !1
                },
                Tt.subMenuProps && (0,
                O.f0)(ot, Tt.subMenuProps),
                Tt.preferMenuTargetAsEventTarget)) {
                    var xt = Tt.onItemClick;
                    ot.onItemClick = rn(xt, ve)
                }
                return ot
            };
            return [Ue, wt, Mt, it]
        }
        function _t(S) {
            var x = S.delayUpdateFocusOnHover
              , p = S.hidden
              , n = t.useRef(!x)
              , s = t.useRef(!1);
            t.useEffect(function() {
                n.current = !x,
                s.current = p ? !1 : !x && s.current
            }, [x, p]);
            var E = t.useCallback(function() {
                x && (n.current = !1)
            }, [x]);
            return [n, s, E]
        }
        function At(S, x, p) {
            var n = S.hidden
              , s = S.onRestoreFocus
              , E = t.useRef()
              , se = t.useCallback(function(ve) {
                var Ie, Ue;
                s ? s(ve) : ve != null && ve.documentContainsFocus && ((Ue = (Ie = E.current) === null || Ie === void 0 ? void 0 : Ie.focus) === null || Ue === void 0 || Ue.call(Ie))
            }, [s]);
            return (0,
            xe.L)(function() {
                var ve, Ie;
                if (n)
                    E.current && (se({
                        originalElement: E.current,
                        containsFocus: !0,
                        documentContainsFocus: ((Ie = (0,
                        d.M)()) === null || Ie === void 0 ? void 0 : Ie.hasFocus()) || !1
                    }),
                    E.current = void 0);
                else {
                    var Ue = x == null ? void 0 : x.document.activeElement;
                    !(!((ve = p.current) === null || ve === void 0) && ve.contains(Ue)) && Ue.tagName !== "BODY" && (E.current = Ue)
                }
            }, [n, x == null ? void 0 : x.document.activeElement, se, p]),
            [se]
        }
        function jt(S, x, p, n) {
            var s = S.theme
              , E = S.isSubMenu
              , se = S.focusZoneProps
              , ve = se === void 0 ? {} : se
              , Ie = ve.checkForNoWrap
              , Ue = ve.direction
              , Ae = Ue === void 0 ? N.U.vertical : Ue
              , Re = t.useRef()
              , je = function(it, Mt, Tt) {
                var ot = !1;
                return Mt(it) && (x(it, Tt),
                it.preventDefault(),
                it.stopPropagation(),
                ot = !0),
                ot
            }
              , tt = function(it) {
                var Mt = (0,
                l.zg)(s) ? be.m.right : be.m.left;
                return it.which !== Mt || !E ? !1 : !!(Ae === N.U.vertical || Ie && !(0,
                a.mM)(it.target, "data-no-horizontal-wrap"))
            }
              , ft = function(it) {
                return it.which === be.m.escape || tt(it) || it.which === be.m.up && (it.altKey || it.metaKey)
            }
              , vt = function(it) {
                Re.current = en(it);
                var Mt = it.which === be.m.escape && ((0,
                u.V)() || (0,
                C.g)());
                return je(it, ft, Mt)
            }
              , Je = function(it) {
                var Mt = Re.current && en(it);
                return Re.current = !1,
                !!Mt && !((0,
                C.g)() || (0,
                u.V)())
            }
              , yt = function(it) {
                return je(it, Je, !0)
            }
              , Ft = function(it) {
                var Mt = vt(it);
                if (!(Mt || !p.current)) {
                    var Tt = !!(it.altKey || it.metaKey)
                      , ot = it.which === be.m.up
                      , xt = it.which === be.m.down;
                    if (!Tt && (ot || xt)) {
                        var Bt = ot ? (0,
                        a.TE)(p.current, p.current.lastChild, !0) : (0,
                        a.ft)(p.current, p.current.firstChild, !0);
                        Bt && (Bt.focus(),
                        it.preventDefault(),
                        it.stopPropagation())
                    }
                }
            }
              , wt = function(it, Mt) {
                var Tt = (0,
                l.zg)(s) ? be.m.left : be.m.right;
                !it.disabled && (Mt.which === Tt || Mt.which === be.m.enter || Mt.which === be.m.down && (Mt.altKey || Mt.metaKey)) && (n(it, Mt.currentTarget),
                Mt.preventDefault())
            };
            return [vt, yt, Ft, wt]
        }
        function Vt(S) {
            var x = t.useRef(!0)
              , p = t.useRef()
              , n = function() {
                !x.current && p.current !== void 0 ? (S.clearTimeout(p.current),
                p.current = void 0) : x.current = !1,
                p.current = S.setTimeout(function() {
                    x.current = !0
                }, _e)
            };
            return [n, x]
        }
        function Ht(S, x) {
            var p = t.useRef(!1);
            t.useEffect(function() {
                return p.current = !0,
                function() {
                    p.current = !1
                }
            }, []);
            var n = function(s, E) {
                E ? S(s, E) : p.current && x()
            };
            return n
        }
        function Gt(S, x) {
            var p = S.subMenuHoverDelay
              , n = p === void 0 ? _e : p
              , s = t.useRef(void 0)
              , E = function() {
                s.current !== void 0 && (x.clearTimeout(s.current),
                s.current = void 0)
            }
              , se = function(ve) {
                s.current = x.setTimeout(function() {
                    ve(),
                    E()
                }, n)
            };
            return [E, se, s]
        }
        function Xt(S, x, p, n, s, E, se, ve, Ie, Ue, Ae, Re, je) {
            var tt = S.target
              , ft = function(ot, xt, Bt) {
                s.current && (E.current = !0),
                !Je() && Ft(ot, xt, Bt)
            }
              , vt = function(ot, xt, Bt) {
                var Ut = xt.currentTarget;
                if (s.current)
                    E.current = !0;
                else
                    return;
                !x.current || p.current !== void 0 || Ut === (n == null ? void 0 : n.document.activeElement) || Ft(ot, xt, Bt)
            }
              , Je = function() {
                return !x.current || !E.current
            }
              , yt = function(ot, xt) {
                var Bt;
                if (!Je() && (Ue(),
                se === void 0))
                    if (ve.current.setActive)
                        try {
                            ve.current.setActive()
                        } catch (Ut) {}
                    else
                        (Bt = ve.current) === null || Bt === void 0 || Bt.focus()
            }
              , Ft = function(ot, xt, Bt) {
                var Ut = Bt || xt.currentTarget;
                ot.key !== se && (Ue(),
                se === void 0 && Ut.focus(),
                i(ot) ? (xt.stopPropagation(),
                Ie(function() {
                    Ut.focus(),
                    Ae(ot, Ut, !0)
                })) : Ie(function() {
                    Re(xt),
                    Ut.focus()
                }))
            }
              , wt = function(ot, xt) {
                it(ot, xt, xt.currentTarget)
            }
              , it = function(ot, xt, Bt) {
                var Ut = Pe(ot, {
                    target: tt
                });
                if (Ue(),
                !i(ot) && (!Ut || !Ut.length))
                    Tt(ot, xt);
                else if (ot.key !== se) {
                    var tn = typeof S.shouldFocusOnContainer == "boolean" ? S.shouldFocusOnContainer : xt.nativeEvent.pointerType === "mouse";
                    Ae(ot, Bt, tn)
                }
                xt.stopPropagation(),
                xt.preventDefault()
            }
              , Mt = function(ot, xt) {
                Tt(ot, xt),
                xt.stopPropagation()
            }
              , Tt = function(ot, xt) {
                if (!(ot.disabled || ot.isDisabled)) {
                    ot.preferMenuTargetAsEventTarget && En(xt, tt);
                    var Bt = !1;
                    ot.onClick ? Bt = !!ot.onClick(xt, ot) : S.onItemClick && (Bt = !!S.onItemClick(xt, ot)),
                    (Bt || !xt.defaultPrevented) && je(xt, !0)
                }
            };
            return [ft, vt, yt, wt, Mt, Tt, it]
        }
        var Jt = t.memo(t.forwardRef(function(S, x) {
            var p, n = (0,
            h.j)(Te, S), s = n.ref, E = (0,
            c._T)(n, ["ref"]), se = t.useRef(null), ve = (0,
            Ye.r)(), Ie = (0,
            Pt.M)(lt, E.id);
            (0,
            Et.N)({
                name: lt,
                props: E,
                deprecations: {
                    getMenuClassNames: "styles"
                }
            });
            var Ue = function(Ke, Nt) {
                var zt;
                return (zt = E.onDismiss) === null || zt === void 0 ? void 0 : zt.call(E, Ke, Nt)
            }
              , Ae = (0,
            kt.e)(E.target, se)
              , Re = Ae[0]
              , je = Ae[1]
              , tt = At(E, je, se)[0]
              , ft = bt(E, Ue)
              , vt = ft[0]
              , Je = ft[1]
              , yt = ft[2]
              , Ft = ft[3]
              , wt = _t(E)
              , it = wt[0]
              , Mt = wt[1]
              , Tt = wt[2]
              , ot = Vt(ve)
              , xt = ot[0]
              , Bt = ot[1]
              , Ut = Gt(E, ve)
              , tn = Ut[0]
              , In = Ut[1]
              , xn = Ut[2]
              , cn = (0,
            y.q)(se, E.responsiveMode);
            st(E, je);
            var Yt = jt(E, Ue, se, Je)
              , Rn = Yt[0]
              , hn = Yt[1]
              , Mn = Yt[2]
              , Hn = Yt[3]
              , ln = Xt(E, Bt, xn, je, it, Mt, vt, se, In, tn, Je, Ft, Ue)
              , An = ln[0]
              , Nn = ln[1]
              , kn = ln[2]
              , Pn = ln[3]
              , mo = ln[4]
              , fo = ln[5]
              , Jn = ln[6]
              , jn = function(Ke, Nt, zt) {
                var Lt = 0
                  , Qt = Ke.items
                  , qt = Ke.totalItemCount
                  , Ot = Ke.hasCheckmarks
                  , nn = Ke.hasIcons;
                return t.createElement("ul", {
                    className: Nt.list,
                    onKeyDown: Rn,
                    onKeyUp: hn,
                    role: "presentation"
                }, Qt.map(function(Kt, on) {
                    var dn = Wn(Kt, on, Lt, qt, Ot, nn, Nt);
                    if (Kt.itemType !== T.Divider && Kt.itemType !== T.Header) {
                        var Sn = Kt.customOnRenderListLength ? Kt.customOnRenderListLength : 1;
                        Lt += Sn
                    }
                    return dn
                }))
            }
              , vo = function(Ke, Nt) {
                var zt = E.focusZoneAs
                  , Lt = zt === void 0 ? D.k : zt;
                return t.createElement(Lt, (0,
                c.pi)({}, Nt), Ke)
            }
              , Wn = function(Ke, Nt, zt, Lt, Qt, qt, Ot) {
                var nn, Kt = [], on = Ke.iconProps || {
                    iconName: "None"
                }, dn = Ke.getItemClassNames, Sn = Ke.itemProps, Ln = Sn ? Sn.styles : void 0, Fn = Ke.itemType === T.Divider ? Ke.className : void 0, Bn = Ke.submenuIconProps ? Ke.submenuIconProps.className : "", mn;
                if (dn)
                    mn = dn(E.theme, m(Ke), vt === Ke.key, !!f(Ke), !!Ke.href, on.iconName !== "None", Ke.className, Fn, on.className, Bn, Ke.primaryDisabled);
                else {
                    var Ko = {
                        theme: E.theme,
                        disabled: m(Ke),
                        expanded: vt === Ke.key,
                        checked: !!f(Ke),
                        isAnchorLink: !!Ke.href,
                        knownIcon: on.iconName !== "None",
                        itemClassName: Ke.className,
                        dividerClassName: Fn,
                        iconClassName: on.className,
                        subMenuClassName: Bn,
                        primaryDisabled: Ke.primaryDisabled
                    };
                    mn = fe(qe((nn = Ot.subComponentStyles) === null || nn === void 0 ? void 0 : nn.menuItem, Ln), Ko)
                }
                switch ((Ke.text === "-" || Ke.name === "-") && (Ke.itemType = T.Divider),
                Ke.itemType) {
                case T.Divider:
                    Kt.push(zn(Nt, mn));
                    break;
                case T.Header:
                    Kt.push(zn(Nt, mn));
                    var Uo = Zn(Ke, mn, Ot, Nt, Qt, qt);
                    Kt.push(Kn(Uo, Ke.key || Nt, mn, Ke.title));
                    break;
                case T.Section:
                    Kt.push(po(Ke, mn, Ot, Nt, Qt, qt));
                    break;
                default:
                    var co = function() {
                        return go(Ke, mn, Nt, zt, Lt, Qt, qt)
                    }
                      , _o = E.onRenderContextualMenuItem ? E.onRenderContextualMenuItem(Ke, co) : co();
                    Kt.push(Kn(_o, Ke.key || Nt, mn, Ke.title));
                    break
                }
                return t.createElement(t.Fragment, {
                    key: Ke.key
                }, Kt)
            }
              , ho = function(Ke, Nt) {
                var zt = Ke.index
                  , Lt = Ke.focusableElementIndex
                  , Qt = Ke.totalItemCount
                  , qt = Ke.hasCheckmarks
                  , Ot = Ke.hasIcons;
                return Wn(Ke, zt, Lt, Qt, qt, Ot, Nt)
            }
              , po = function(Ke, Nt, zt, Lt, Qt, qt) {
                var Ot = Ke.sectionProps;
                if (!!Ot) {
                    var nn, Kt;
                    if (Ot.title) {
                        var on = void 0
                          , dn = "";
                        if (typeof Ot.title == "string") {
                            var Sn = Ie + Ot.title.replace(/\s/g, "");
                            on = {
                                key: "section-" + Ot.title + "-title",
                                itemType: T.Header,
                                text: Ot.title,
                                id: Sn
                            },
                            dn = Sn
                        } else {
                            var Ln = Ot.title.id || Ie + Ot.title.key.replace(/\s/g, "");
                            on = (0,
                            c.pi)((0,
                            c.pi)({}, Ot.title), {
                                id: Ln
                            }),
                            dn = Ln
                        }
                        on && (Kt = {
                            role: "group",
                            "aria-labelledby": dn
                        },
                        nn = Zn(on, Nt, zt, Lt, Qt, qt))
                    }
                    if (Ot.items && Ot.items.length > 0)
                        return t.createElement("li", {
                            role: "presentation",
                            key: Ot.key || Ke.key || "section-" + Lt
                        }, t.createElement("div", (0,
                        c.pi)({}, Kt), t.createElement("ul", {
                            className: zt.list,
                            role: "presentation"
                        }, Ot.topDivider && zn(Lt, Nt, !0, !0), nn && Kn(nn, Ke.key || Lt, Nt, Ke.title), Ot.items.map(function(Fn, Bn) {
                            return Wn(Fn, Bn, Bn, Ot.items.length, Qt, qt, zt)
                        }), Ot.bottomDivider && zn(Lt, Nt, !1, !0))))
                }
            }
              , Kn = function(Ke, Nt, zt, Lt) {
                return t.createElement("li", {
                    role: "presentation",
                    title: Lt,
                    key: Nt,
                    className: zt.item
                }, Ke)
            }
              , zn = function(Ke, Nt, zt, Lt) {
                return Lt || Ke > 0 ? t.createElement("li", {
                    role: "separator",
                    key: "separator-" + Ke + (zt === void 0 ? "" : zt ? "-top" : "-bottom"),
                    className: Nt.divider,
                    "aria-hidden": "true"
                }) : null
            }
              , go = function(Ke, Nt, zt, Lt, Qt, qt, Ot) {
                if (Ke.onRender)
                    return Ke.onRender((0,
                    c.pi)({
                        "aria-posinset": Lt + 1,
                        "aria-setsize": Qt
                    }, Ke), Ue);
                var nn = E.contextualMenuItemAs
                  , Kt = {
                    item: Ke,
                    classNames: Nt,
                    index: zt,
                    focusableElementIndex: Lt,
                    totalItemCount: Qt,
                    hasCheckmarks: qt,
                    hasIcons: Ot,
                    contextualMenuItemAs: nn,
                    onItemMouseEnter: An,
                    onItemMouseLeave: kn,
                    onItemMouseMove: Nn,
                    onItemMouseDown: Rt,
                    executeItemClick: fo,
                    onItemKeyDown: Hn,
                    expandedMenuItemKey: vt,
                    openSubMenu: Je,
                    dismissSubMenu: Ft,
                    dismissMenu: Ue
                };
                return Ke.href ? t.createElement(Ze, (0,
                c.pi)({}, Kt, {
                    onItemClick: mo
                })) : Ke.split && i(Ke) ? t.createElement(gt, (0,
                c.pi)({}, Kt, {
                    onItemClick: Pn,
                    onItemClickBase: Jn,
                    onTap: tn
                })) : t.createElement(rt, (0,
                c.pi)({}, Kt, {
                    onItemClick: Pn,
                    onItemClickBase: Jn
                }))
            }
              , Zn = function(Ke, Nt, zt, Lt, Qt, qt) {
                var Ot = E.contextualMenuItemAs
                  , nn = Ot === void 0 ? pt : Ot
                  , Kt = Ke.itemProps
                  , on = Ke.id
                  , dn = Kt && (0,
                ee.pq)(Kt, ee.n7);
                return t.createElement("div", (0,
                c.pi)({
                    id: on,
                    className: zt.header
                }, dn, {
                    style: Ke.style
                }), t.createElement(nn, (0,
                c.pi)({
                    item: Ke,
                    classNames: Nt,
                    index: Lt,
                    onCheckmarkClick: Qt ? Pn : void 0,
                    hasIcons: qt
                }, Kt)))
            }
              , On = E.isBeakVisible
              , pn = E.items
              , Yn = E.labelElementId
              , bo = E.id
              , Qn = E.className
              , yo = E.beakWidth
              , Co = E.directionalHint
              , xo = E.directionalHintForRTL
              , So = E.alignTargetEdge
              , Eo = E.gapSpace
              , To = E.coverTarget
              , Xn = E.ariaLabel
              , Io = E.doNotLayer
              , No = E.target
              , Do = E.bounds
              , $n = E.useTargetWidth
              , qn = E.useTargetAsMinWidth
              , Mo = E.directionalHintFixed
              , Po = E.shouldFocusOnMount
              , Bo = E.shouldFocusOnContainer
              , eo = E.title
              , Ro = E.styles
              , to = E.theme
              , Un = E.calloutProps
              , no = E.onRenderSubMenu
              , ko = no === void 0 ? Zt : no
              , oo = E.onRenderMenuList
              , zo = oo === void 0 ? function(Ke, Nt) {
                return jn(Ke, gn, Nt)
            }
            : oo
              , Oo = E.focusZoneProps
              , ro = E.getMenuClassNames
              , gn = ro ? ro(to, Qn) : ge(Ro, {
                theme: to,
                className: Qn
            })
              , wo = io(pn);
            function io(Ke) {
                for (var Nt = 0, zt = Ke; Nt < zt.length; Nt++) {
                    var Lt = zt[Nt];
                    if (Lt.iconProps || Lt.itemType === T.Section && Lt.sectionProps && io(Lt.sectionProps.items))
                        return !0
                }
                return !1
            }
            var Lo = (0,
            c.pi)((0,
            c.pi)({
                direction: N.U.vertical,
                handleTabKey: N.J.all,
                isCircularNavigation: !0
            }, Oo), {
                className: (0,
                Se.i)(gn.root, (p = E.focusZoneProps) === null || p === void 0 ? void 0 : p.className)
            })
              , Fo = Fe(pn)
              , ao = vt && E.hidden !== !0 ? yt() : null;
            On = On === void 0 ? cn <= M.eD.medium : On;
            var _n, Gn = Re.current;
            if (($n || qn) && Gn && Gn.offsetWidth) {
                var Ho = Gn.getBoundingClientRect()
                  , so = Ho.width - 2;
                $n ? _n = {
                    width: so
                } : qn && (_n = {
                    minWidth: so
                })
            }
            if (pn && pn.length > 0) {
                for (var lo = 0, Vn = 0, uo = pn; Vn < uo.length; Vn++) {
                    var wn = uo[Vn];
                    if (wn.itemType !== T.Divider && wn.itemType !== T.Header) {
                        var Ao = wn.customOnRenderListLength ? wn.customOnRenderListLength : 1;
                        lo += Ao
                    }
                }
                var Wo = gn.subComponentStyles ? gn.subComponentStyles.callout : void 0;
                return t.createElement(k.Consumer, null, function(Ke) {
                    return t.createElement(L.U, (0,
                    c.pi)({
                        styles: Wo,
                        onRestoreFocus: tt
                    }, Un, {
                        target: No || Ke.target,
                        isBeakVisible: On,
                        beakWidth: yo,
                        directionalHint: Co,
                        directionalHintForRTL: xo,
                        gapSpace: Eo,
                        coverTarget: To,
                        doNotLayer: Io,
                        className: (0,
                        Se.i)("ms-ContextualMenu-Callout", Un && Un.className),
                        setInitialFocus: Po,
                        onDismiss: E.onDismiss || Ke.onDismiss,
                        onScroll: xt,
                        bounds: Do,
                        directionalHintFixed: Mo,
                        alignTargetEdge: So,
                        hidden: E.hidden || Ke.hidden,
                        ref: x
                    }), t.createElement("div", {
                        style: _n,
                        ref: se,
                        id: bo,
                        className: gn.container,
                        tabIndex: Bo ? 0 : -1,
                        onKeyDown: Mn,
                        onKeyUp: hn,
                        onFocusCapture: Tt,
                        "aria-label": Xn,
                        "aria-labelledby": Yn,
                        role: "menu"
                    }, eo && t.createElement("div", {
                        className: gn.title
                    }, " ", eo, " "), pn && pn.length ? vo(zo({
                        ariaLabel: Xn,
                        items: pn,
                        totalItemCount: lo,
                        hasCheckmarks: Fo,
                        hasIcons: wo,
                        defaultMenuItemRenderer: function(Nt) {
                            return ho(Nt, gn)
                        },
                        labelElementId: Yn
                    }, function(Nt, zt) {
                        return jn(Nt, gn, zt)
                    }), Lo) : null, ao && ko(ao, Zt)), t.createElement(J.u, null))
                })
            } else
                return null
        }), function(S, x) {
            return !x.shouldUpdateWhenHidden && S.hidden && x.hidden ? !0 : (0,
            O.Vv)(S, x)
        });
        Jt.displayName = "ContextualMenuBase";
        function en(S) {
            return S.which === be.m.alt || S.key === "Meta"
        }
        function Rt(S, x) {
            var p;
            (p = S.onMouseDown) === null || p === void 0 || p.call(S, S, x)
        }
        function Zt(S, x) {
            throw Error("ContextualMenuBase: onRenderSubMenu callback is null or undefined. Please ensure to set `onRenderSubMenu` property either manually or with `styled` helper.")
        }
        function $t(S, x) {
            for (var p = 0, n = x; p < n.length; p++) {
                var s = n[p];
                if (s.itemType === T.Section && s.sectionProps) {
                    var E = $t(S, s.sectionProps.items);
                    if (E)
                        return E
                } else if (s.key && s.key === S)
                    return s
            }
        }
        function rn(S, x) {
            return S && function(p, n) {
                return En(p, x),
                S(p, n)
            }
        }
        function En(S, x) {
            S && x && (S.persist(),
            x instanceof Event ? S.target = x.target : x instanceof Element && (S.target = x))
        }
        var fn = {
            root: "ms-ContextualMenu",
            container: "ms-ContextualMenu-container",
            list: "ms-ContextualMenu-list",
            header: "ms-ContextualMenu-header",
            title: "ms-ContextualMenu-title",
            isopen: "is-open"
        }
          , bn = function(S) {
            var x = S.className
              , p = S.theme
              , n = (0,
            de.Cn)(fn, p)
              , s = p.fonts
              , E = p.semanticColors
              , se = p.effects;
            return {
                root: [p.fonts.medium, n.root, n.isopen, {
                    backgroundColor: E.menuBackground,
                    minWidth: "180px"
                }, x],
                container: [n.container, {
                    selectors: {
                        ":focus": {
                            outline: 0
                        }
                    }
                }],
                list: [n.list, n.isopen, {
                    listStyleType: "none",
                    margin: "0",
                    padding: "0"
                }],
                header: [n.header, s.small, {
                    fontWeight: de.lq.semibold,
                    color: E.menuHeader,
                    background: "none",
                    backgroundColor: "transparent",
                    border: "none",
                    height: Be,
                    lineHeight: Be,
                    cursor: "default",
                    padding: "0px 6px",
                    userSelect: "none",
                    textAlign: "left"
                }],
                title: [n.title, {
                    fontSize: s.mediumPlus.fontSize,
                    paddingRight: "14px",
                    paddingLeft: "14px",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                    backgroundColor: E.menuItemBackgroundPressed
                }],
                subComponentStyles: {
                    callout: {
                        root: {
                            boxShadow: se.elevation8
                        }
                    },
                    menuItem: {}
                }
            }
        };
        function un(S) {
            return t.createElement(Tn, (0,
            c.pi)({}, S))
        }
        var Tn = (0,
        pe.z)(Jt, bn, function(S) {
            return {
                onRenderSubMenu: S.onRenderSubMenu ? (0,
                b.k)(S.onRenderSubMenu, un) : un
            }
        }, {
            scope: "ContextualMenu"
        })
          , an = Tn;
        an.displayName = "ContextualMenu";
        var ct = {
            msButton: "ms-Button",
            msButtonHasMenu: "ms-Button--hasMenu",
            msButtonIcon: "ms-Button-icon",
            msButtonMenuIcon: "ms-Button-menuIcon",
            msButtonLabel: "ms-Button-label",
            msButtonDescription: "ms-Button-description",
            msButtonScreenReaderText: "ms-Button-screenReaderText",
            msButtonFlexContainer: "ms-Button-flexContainer",
            msButtonTextContainer: "ms-Button-textContainer"
        }
          , vn = (0,
        v.NF)(function(S, x, p, n, s, E, se, ve, Ie, Ue, Ae) {
            var Re, je, tt = (0,
            de.Cn)(ct, S || {}), ft = Ue && !Ae;
            return (0,
            de.ZC)({
                root: [tt.msButton, x.root, n, Ie && ["is-checked", x.rootChecked], ft && ["is-expanded", x.rootExpanded, {
                    selectors: (Re = {},
                    Re[":hover ." + tt.msButtonIcon] = x.iconExpandedHovered,
                    Re[":hover ." + tt.msButtonMenuIcon] = x.menuIconExpandedHovered || x.rootExpandedHovered,
                    Re[":hover"] = x.rootExpandedHovered,
                    Re)
                }], ve && [ct.msButtonHasMenu, x.rootHasMenu], se && ["is-disabled", x.rootDisabled], !se && !ft && !Ie && {
                    selectors: (je = {
                        ":hover": x.rootHovered
                    },
                    je[":hover ." + tt.msButtonLabel] = x.labelHovered,
                    je[":hover ." + tt.msButtonIcon] = x.iconHovered,
                    je[":hover ." + tt.msButtonDescription] = x.descriptionHovered,
                    je[":hover ." + tt.msButtonMenuIcon] = x.menuIconHovered,
                    je[":focus"] = x.rootFocused,
                    je[":active"] = x.rootPressed,
                    je[":active ." + tt.msButtonIcon] = x.iconPressed,
                    je[":active ." + tt.msButtonDescription] = x.descriptionPressed,
                    je[":active ." + tt.msButtonMenuIcon] = x.menuIconPressed,
                    je)
                }, se && Ie && [x.rootCheckedDisabled], !se && Ie && {
                    selectors: {
                        ":hover": x.rootCheckedHovered,
                        ":active": x.rootCheckedPressed
                    }
                }, p],
                flexContainer: [tt.msButtonFlexContainer, x.flexContainer],
                textContainer: [tt.msButtonTextContainer, x.textContainer],
                icon: [tt.msButtonIcon, s, x.icon, ft && x.iconExpanded, Ie && x.iconChecked, se && x.iconDisabled],
                label: [tt.msButtonLabel, x.label, Ie && x.labelChecked, se && x.labelDisabled],
                menuIcon: [tt.msButtonMenuIcon, E, x.menuIcon, Ie && x.menuIconChecked, se && !Ae && x.menuIconDisabled, !se && !ft && !Ie && {
                    selectors: {
                        ":hover": x.menuIconHovered,
                        ":active": x.menuIconPressed
                    }
                }, ft && ["is-expanded", x.menuIconExpanded]],
                description: [tt.msButtonDescription, x.description, Ie && x.descriptionChecked, se && x.descriptionDisabled],
                screenReaderText: [tt.msButtonScreenReaderText, x.screenReaderText]
            })
        })
          , yn = (0,
        v.NF)(function(S, x, p, n, s) {
            return {
                root: (0,
                de.y0)(S.splitButtonMenuButton, p && [S.splitButtonMenuButtonExpanded], x && [S.splitButtonMenuButtonDisabled], n && !x && [S.splitButtonMenuButtonChecked], s && !x && [{
                    selectors: {
                        ":focus": S.splitButtonMenuFocused
                    }
                }]),
                splitButtonContainer: (0,
                de.y0)(S.splitButtonContainer, !x && n && [S.splitButtonContainerChecked, {
                    selectors: {
                        ":hover": S.splitButtonContainerCheckedHovered
                    }
                }], !x && !n && [{
                    selectors: {
                        ":hover": S.splitButtonContainerHovered,
                        ":focus": S.splitButtonContainerFocused
                    }
                }], x && S.splitButtonContainerDisabled),
                icon: (0,
                de.y0)(S.splitButtonMenuIcon, x && S.splitButtonMenuIconDisabled, !x && s && S.splitButtonMenuIcon),
                flexContainer: (0,
                de.y0)(S.splitButtonFlexContainer),
                divider: (0,
                de.y0)(S.splitButtonDivider, (s || x) && S.splitButtonDividerDisabled)
            }
        })
          , Cn = e(46311)
          , sn = 500
          , Wt = "BaseButton"
          , Dn = function(S) {
            (0,
            c.ZT)(x, S);
            function x(p) {
                var n = S.call(this, p) || this;
                return n._buttonElement = t.createRef(),
                n._splitButtonContainer = t.createRef(),
                n._mergedRef = (0,
                r.S)(),
                n._renderedVisibleMenu = !1,
                n._getMemoizedMenuButtonKeytipProps = (0,
                v.NF)(function(s) {
                    return (0,
                    c.pi)((0,
                    c.pi)({}, s), {
                        hasMenu: !0
                    })
                }),
                n._onRenderIcon = function(s, E) {
                    var se = n.props.iconProps;
                    if (se && (se.iconName !== void 0 || se.imageProps)) {
                        var ve = se.className
                          , Ie = se.imageProps
                          , Ue = (0,
                        c._T)(se, ["className", "imageProps"]);
                        if (se.styles)
                            return t.createElement(W.J, (0,
                            c.pi)({
                                className: (0,
                                Se.i)(n._classNames.icon, ve),
                                imageProps: Ie
                            }, Ue));
                        if (se.iconName)
                            return t.createElement(P.xu, (0,
                            c.pi)({
                                className: (0,
                                Se.i)(n._classNames.icon, ve)
                            }, Ue));
                        if (Ie)
                            return t.createElement(ae, (0,
                            c.pi)({
                                className: (0,
                                Se.i)(n._classNames.icon, ve),
                                imageProps: Ie
                            }, Ue))
                    }
                    return null
                }
                ,
                n._onRenderTextContents = function() {
                    var s = n.props
                      , E = s.text
                      , se = s.children
                      , ve = s.secondaryText
                      , Ie = ve === void 0 ? n.props.description : ve
                      , Ue = s.onRenderText
                      , Ae = Ue === void 0 ? n._onRenderText : Ue
                      , Re = s.onRenderDescription
                      , je = Re === void 0 ? n._onRenderDescription : Re;
                    return E || typeof se == "string" || Ie ? t.createElement("span", {
                        className: n._classNames.textContainer
                    }, Ae(n.props, n._onRenderText), je(n.props, n._onRenderDescription)) : [Ae(n.props, n._onRenderText), je(n.props, n._onRenderDescription)]
                }
                ,
                n._onRenderText = function() {
                    var s = n.props.text
                      , E = n.props.children;
                    return s === void 0 && typeof E == "string" && (s = E),
                    n._hasText() ? t.createElement("span", {
                        key: n._labelId,
                        className: n._classNames.label,
                        id: n._labelId
                    }, s) : null
                }
                ,
                n._onRenderChildren = function() {
                    var s = n.props.children;
                    return typeof s == "string" ? null : s
                }
                ,
                n._onRenderDescription = function(s) {
                    var E = s.secondaryText
                      , se = E === void 0 ? n.props.description : E;
                    return se ? t.createElement("span", {
                        key: n._descriptionId,
                        className: n._classNames.description,
                        id: n._descriptionId
                    }, se) : null
                }
                ,
                n._onRenderAriaDescription = function() {
                    var s = n.props.ariaDescription;
                    return s ? t.createElement("span", {
                        className: n._classNames.screenReaderText,
                        id: n._ariaDescriptionId
                    }, s) : null
                }
                ,
                n._onRenderMenuIcon = function(s) {
                    var E = n.props.menuIconProps;
                    return t.createElement(P.xu, (0,
                    c.pi)({
                        iconName: "ChevronDown"
                    }, E, {
                        className: n._classNames.menuIcon
                    }))
                }
                ,
                n._onRenderMenu = function(s) {
                    var E = n.props.menuAs ? (0,
                    Cn.Z)(n.props.menuAs, an) : an;
                    return t.createElement(E, (0,
                    c.pi)({}, s))
                }
                ,
                n._onDismissMenu = function(s) {
                    var E = n.props.menuProps;
                    E && E.onDismiss && E.onDismiss(s),
                    (!s || !s.defaultPrevented) && n._dismissMenu()
                }
                ,
                n._dismissMenu = function() {
                    n._menuShouldFocusOnMount = void 0,
                    n._menuShouldFocusOnContainer = void 0,
                    n.setState({
                        menuHidden: !0
                    })
                }
                ,
                n._openMenu = function(s, E) {
                    E === void 0 && (E = !0),
                    n.props.menuProps && (n._menuShouldFocusOnContainer = s,
                    n._menuShouldFocusOnMount = E,
                    n._renderedVisibleMenu = !0,
                    n.setState({
                        menuHidden: !1
                    }))
                }
                ,
                n._onToggleMenu = function(s) {
                    var E = !0;
                    n.props.menuProps && n.props.menuProps.shouldFocusOnMount === !1 && (E = !1),
                    n.state.menuHidden ? n._openMenu(s, E) : n._dismissMenu()
                }
                ,
                n._onSplitContainerFocusCapture = function(s) {
                    var E = n._splitButtonContainer.current;
                    !E || s.target && (0,
                    Q.w)(s.target, E) || E.focus()
                }
                ,
                n._onSplitButtonPrimaryClick = function(s) {
                    n.state.menuHidden || n._dismissMenu(),
                    !n._processingTouch && n.props.onClick ? n.props.onClick(s) : n._processingTouch && n._onMenuClick(s)
                }
                ,
                n._onKeyDown = function(s) {
                    n.props.disabled && (s.which === be.m.enter || s.which === be.m.space) ? (s.preventDefault(),
                    s.stopPropagation()) : n.props.disabled || (n.props.menuProps ? n._onMenuKeyDown(s) : n.props.onKeyDown !== void 0 && n.props.onKeyDown(s))
                }
                ,
                n._onKeyUp = function(s) {
                    !n.props.disabled && n.props.onKeyUp !== void 0 && n.props.onKeyUp(s)
                }
                ,
                n._onKeyPress = function(s) {
                    !n.props.disabled && n.props.onKeyPress !== void 0 && n.props.onKeyPress(s)
                }
                ,
                n._onMouseUp = function(s) {
                    !n.props.disabled && n.props.onMouseUp !== void 0 && n.props.onMouseUp(s)
                }
                ,
                n._onMouseDown = function(s) {
                    !n.props.disabled && n.props.onMouseDown !== void 0 && n.props.onMouseDown(s)
                }
                ,
                n._onClick = function(s) {
                    n.props.disabled || (n.props.menuProps ? n._onMenuClick(s) : n.props.onClick !== void 0 && n.props.onClick(s))
                }
                ,
                n._onSplitButtonContainerKeyDown = function(s) {
                    s.which === be.m.enter || s.which === be.m.space ? n._buttonElement.current && (n._buttonElement.current.click(),
                    s.preventDefault(),
                    s.stopPropagation()) : n._onMenuKeyDown(s)
                }
                ,
                n._onMenuKeyDown = function(s) {
                    var E;
                    if (!n.props.disabled) {
                        n.props.onKeyDown && n.props.onKeyDown(s);
                        var se = s.which === be.m.up
                          , ve = s.which === be.m.down;
                        if (!s.defaultPrevented && n._isValidMenuOpenKey(s)) {
                            var Ie = n.props.onMenuClick;
                            Ie && Ie(s, n.props),
                            n._onToggleMenu(!1),
                            s.preventDefault(),
                            s.stopPropagation()
                        }
                        if ((s.which === be.m.enter || s.which === be.m.space) && (0,
                        he.MU)(!0, s.target, (E = n.context) === null || E === void 0 ? void 0 : E.registeredProviders),
                        !(s.altKey || s.metaKey) && (se || ve) && !n.state.menuHidden && n.props.menuProps) {
                            var Ue = n._menuShouldFocusOnMount !== void 0 ? n._menuShouldFocusOnMount : n.props.menuProps.shouldFocusOnMount;
                            Ue || (s.preventDefault(),
                            s.stopPropagation(),
                            n._menuShouldFocusOnMount = !0,
                            n.forceUpdate())
                        }
                    }
                }
                ,
                n._onTouchStart = function() {
                    n._isSplitButton && n._splitButtonContainer.current && !("onpointerdown"in n._splitButtonContainer.current) && n._handleTouchAndPointerEvent()
                }
                ,
                n._onMenuClick = function(s) {
                    var E = n.props
                      , se = E.onMenuClick
                      , ve = E.menuProps;
                    se && se(s, n.props);
                    var Ie = typeof (ve == null ? void 0 : ve.shouldFocusOnContainer) == "boolean" ? ve.shouldFocusOnContainer : s.nativeEvent.pointerType === "mouse";
                    s.defaultPrevented || (n._onToggleMenu(Ie),
                    s.preventDefault(),
                    s.stopPropagation())
                }
                ,
                (0,
                ie.l)(n),
                n._async = new te.e(n),
                n._events = new ue.r(n),
                (0,
                K.w)(Wt, p, ["menuProps", "onClick"], "split", n.props.split),
                (0,
                re.b)(Wt, p, {
                    rootProps: void 0,
                    description: "secondaryText",
                    toggled: "checked"
                }),
                n._labelId = (0,
                g.z)(),
                n._descriptionId = (0,
                g.z)(),
                n._ariaDescriptionId = (0,
                g.z)(),
                n.state = {
                    menuHidden: !0
                },
                n
            }
            return Object.defineProperty(x.prototype, "_isSplitButton", {
                get: function() {
                    return !!this.props.menuProps && !!this.props.onClick && this.props.split === !0
                },
                enumerable: !1,
                configurable: !0
            }),
            x.prototype.render = function() {
                var p, n = this.props, s = n.ariaDescription, E = n.ariaLabel, se = n.ariaHidden, ve = n.className, Ie = n.disabled, Ue = n.allowDisabledFocus, Ae = n.primaryDisabled, Re = n.secondaryText, je = Re === void 0 ? this.props.description : Re, tt = n.href, ft = n.iconProps, vt = n.menuIconProps, Je = n.styles, yt = n.checked, Ft = n.variantClassName, wt = n.theme, it = n.toggle, Mt = n.getClassNames, Tt = n.role, ot = this.state.menuHidden, xt = Ie || Ae;
                this._classNames = Mt ? Mt(wt, ve, Ft, ft && ft.className, vt && vt.className, xt, yt, !ot, !!this.props.menuProps, this.props.split, !!Ue) : vn(wt, Je, ve, Ft, ft && ft.className, vt && vt.className, xt, !!this.props.menuProps, yt, !ot, this.props.split);
                var Bt = this
                  , Ut = Bt._ariaDescriptionId
                  , tn = Bt._labelId
                  , In = Bt._descriptionId
                  , xn = !xt && !!tt
                  , cn = xn ? "a" : "button"
                  , Yt = (0,
                ee.pq)((0,
                O.f0)(xn ? {} : {
                    type: "button"
                }, this.props.rootProps, this.props), xn ? ee.h2 : ee.Yq, ["disabled"])
                  , Rn = E || Yt["aria-label"]
                  , hn = void 0;
                s ? hn = Ut : je && this.props.onRenderDescription !== U.S ? hn = In : Yt["aria-describedby"] && (hn = Yt["aria-describedby"]);
                var Mn = void 0;
                Yt["aria-labelledby"] ? Mn = Yt["aria-labelledby"] : hn && !Rn && (Mn = this._hasText() ? tn : void 0);
                var Hn = !(this.props["data-is-focusable"] === !1 || Ie && !Ue || this._isSplitButton)
                  , ln = Tt === "menuitemcheckbox" || Tt === "checkbox"
                  , An = ln || it === !0 ? !!yt : void 0
                  , Nn = (0,
                O.f0)(Yt, (p = {
                    className: this._classNames.root,
                    ref: this._mergedRef(this.props.elementRef, this._buttonElement),
                    disabled: xt && !Ue,
                    onKeyDown: this._onKeyDown,
                    onKeyPress: this._onKeyPress,
                    onKeyUp: this._onKeyUp,
                    onMouseDown: this._onMouseDown,
                    onMouseUp: this._onMouseUp,
                    onClick: this._onClick,
                    "aria-label": Rn,
                    "aria-labelledby": Mn,
                    "aria-describedby": hn,
                    "aria-disabled": xt,
                    "data-is-focusable": Hn
                },
                p[ln ? "aria-checked" : "aria-pressed"] = An,
                p));
                if (se && (Nn["aria-hidden"] = !0),
                this._isSplitButton)
                    return this._onRenderSplitButtonContent(cn, Nn);
                if (this.props.menuProps) {
                    var kn = this.props.menuProps.id
                      , Pn = kn === void 0 ? this._labelId + "-menu" : kn;
                    (0,
                    O.f0)(Nn, {
                        "aria-expanded": !ot,
                        "aria-controls": ot ? null : Pn,
                        "aria-haspopup": !0
                    })
                }
                return this._onRenderContent(cn, Nn)
            }
            ,
            x.prototype.componentDidMount = function() {
                this._isSplitButton && this._splitButtonContainer.current && ("onpointerdown"in this._splitButtonContainer.current && this._events.on(this._splitButtonContainer.current, "pointerdown", this._onPointerDown, !0),
                "onpointerup"in this._splitButtonContainer.current && this.props.onPointerUp && this._events.on(this._splitButtonContainer.current, "pointerup", this.props.onPointerUp, !0))
            }
            ,
            x.prototype.componentDidUpdate = function(p, n) {
                this.props.onAfterMenuDismiss && !n.menuHidden && this.state.menuHidden && this.props.onAfterMenuDismiss()
            }
            ,
            x.prototype.componentWillUnmount = function() {
                this._async.dispose(),
                this._events.dispose()
            }
            ,
            x.prototype.focus = function() {
                var p, n;
                this._isSplitButton && this._splitButtonContainer.current ? ((0,
                he.MU)(!0, void 0, (p = this.context) === null || p === void 0 ? void 0 : p.registeredProviders),
                this._splitButtonContainer.current.focus()) : this._buttonElement.current && ((0,
                he.MU)(!0, void 0, (n = this.context) === null || n === void 0 ? void 0 : n.registeredProviders),
                this._buttonElement.current.focus())
            }
            ,
            x.prototype.dismissMenu = function() {
                this._dismissMenu()
            }
            ,
            x.prototype.openMenu = function(p, n) {
                this._openMenu(p, n)
            }
            ,
            x.prototype._onRenderContent = function(p, n) {
                var s = this
                  , E = this.props
                  , se = p
                  , ve = E.menuIconProps
                  , Ie = E.menuProps
                  , Ue = E.onRenderIcon
                  , Ae = Ue === void 0 ? this._onRenderIcon : Ue
                  , Re = E.onRenderAriaDescription
                  , je = Re === void 0 ? this._onRenderAriaDescription : Re
                  , tt = E.onRenderChildren
                  , ft = tt === void 0 ? this._onRenderChildren : tt
                  , vt = E.onRenderMenu
                  , Je = vt === void 0 ? this._onRenderMenu : vt
                  , yt = E.onRenderMenuIcon
                  , Ft = yt === void 0 ? this._onRenderMenuIcon : yt
                  , wt = E.disabled
                  , it = E.keytipProps;
                it && Ie && (it = this._getMemoizedMenuButtonKeytipProps(it));
                var Mt = function(ot) {
                    return t.createElement(se, (0,
                    c.pi)({}, n, ot), t.createElement("span", {
                        className: s._classNames.flexContainer,
                        "data-automationid": "splitbuttonprimary"
                    }, Ae(E, s._onRenderIcon), s._onRenderTextContents(), je(E, s._onRenderAriaDescription), ft(E, s._onRenderChildren), !s._isSplitButton && (Ie || ve || s.props.onRenderMenuIcon) && Ft(s.props, s._onRenderMenuIcon), Ie && !Ie.doNotLayer && s._shouldRenderMenu() && Je(s._getMenuProps(Ie), s._onRenderMenu)))
                }
                  , Tt = it ? t.createElement(Ge, {
                    keytipProps: this._isSplitButton ? void 0 : it,
                    ariaDescribedBy: n["aria-describedby"],
                    disabled: wt
                }, function(ot) {
                    return Mt(ot)
                }) : Mt();
                return Ie && Ie.doNotLayer ? t.createElement(t.Fragment, null, Tt, this._shouldRenderMenu() && Je(this._getMenuProps(Ie), this._onRenderMenu)) : t.createElement(t.Fragment, null, Tt, t.createElement(J.u, null))
            }
            ,
            x.prototype._shouldRenderMenu = function() {
                var p = this.state.menuHidden
                  , n = this.props
                  , s = n.persistMenu
                  , E = n.renderPersistedMenuHiddenOnMount;
                if (p) {
                    if (s && (this._renderedVisibleMenu || E))
                        return !0
                } else
                    return !0;
                return !1
            }
            ,
            x.prototype._hasText = function() {
                return this.props.text !== null && (this.props.text !== void 0 || typeof this.props.children == "string")
            }
            ,
            x.prototype._getMenuProps = function(p) {
                var n = this.props.persistMenu
                  , s = this.state.menuHidden;
                return !p.ariaLabel && !p.labelElementId && this._hasText() && (p = (0,
                c.pi)((0,
                c.pi)({}, p), {
                    labelElementId: this._labelId
                })),
                (0,
                c.pi)((0,
                c.pi)({
                    id: this._labelId + "-menu",
                    directionalHint: X.b.bottomLeftEdge
                }, p), {
                    shouldFocusOnContainer: this._menuShouldFocusOnContainer,
                    shouldFocusOnMount: this._menuShouldFocusOnMount,
                    hidden: n ? s : void 0,
                    className: (0,
                    Se.i)("ms-BaseButton-menuhost", p.className),
                    target: this._isSplitButton ? this._splitButtonContainer.current : this._buttonElement.current,
                    onDismiss: this._onDismissMenu
                })
            }
            ,
            x.prototype._onRenderSplitButtonContent = function(p, n) {
                var s = this
                  , E = this.props
                  , se = E.styles
                  , ve = se === void 0 ? {} : se
                  , Ie = E.disabled
                  , Ue = E.allowDisabledFocus
                  , Ae = E.checked
                  , Re = E.getSplitButtonClassNames
                  , je = E.primaryDisabled
                  , tt = E.menuProps
                  , ft = E.toggle
                  , vt = E.role
                  , Je = E.primaryActionButtonProps
                  , yt = this.props.keytipProps
                  , Ft = this.state.menuHidden
                  , wt = Re ? Re(!!Ie, !Ft, !!Ae, !!Ue) : ve && yn(ve, !!Ie, !Ft, !!Ae, !!je);
                (0,
                O.f0)(n, {
                    onClick: void 0,
                    onPointerDown: void 0,
                    onPointerUp: void 0,
                    tabIndex: -1,
                    "data-is-focusable": !1
                }),
                yt && tt && (yt = this._getMemoizedMenuButtonKeytipProps(yt));
                var it = (0,
                ee.pq)(n, [], ["disabled"]);
                Je && (0,
                O.f0)(n, Je);
                var Mt = function(Tt) {
                    return t.createElement("div", (0,
                    c.pi)({}, it, {
                        "data-ktp-target": Tt ? Tt["data-ktp-target"] : void 0,
                        role: vt || "button",
                        "aria-disabled": Ie,
                        "aria-haspopup": !0,
                        "aria-expanded": !Ft,
                        "aria-pressed": ft ? !!Ae : void 0,
                        "aria-describedby": (0,
                        $.I)(n["aria-describedby"], Tt ? Tt["aria-describedby"] : void 0),
                        className: wt && wt.splitButtonContainer,
                        onKeyDown: s._onSplitButtonContainerKeyDown,
                        onTouchStart: s._onTouchStart,
                        ref: s._splitButtonContainer,
                        "data-is-focusable": !0,
                        onClick: !Ie && !je ? s._onSplitButtonPrimaryClick : void 0,
                        tabIndex: !Ie && !je || Ue ? 0 : void 0,
                        "aria-roledescription": n["aria-roledescription"],
                        onFocusCapture: s._onSplitContainerFocusCapture
                    }), t.createElement("span", {
                        style: {
                            display: "flex",
                            width: "100%"
                        }
                    }, s._onRenderContent(p, n), s._onRenderSplitButtonMenuButton(wt, Tt), s._onRenderSplitButtonDivider(wt)))
                };
                return yt ? t.createElement(Ge, {
                    keytipProps: yt,
                    disabled: Ie
                }, function(Tt) {
                    return Mt(Tt)
                }) : Mt()
            }
            ,
            x.prototype._onRenderSplitButtonDivider = function(p) {
                if (p && p.divider) {
                    var n = function(s) {
                        s.stopPropagation()
                    };
                    return t.createElement("span", {
                        className: p.divider,
                        "aria-hidden": !0,
                        onClick: n
                    })
                }
                return null
            }
            ,
            x.prototype._onRenderSplitButtonMenuButton = function(p, n) {
                var s = this.props
                  , E = s.allowDisabledFocus
                  , se = s.checked
                  , ve = s.disabled
                  , Ie = s.splitButtonMenuProps
                  , Ue = s.splitButtonAriaLabel
                  , Ae = s.primaryDisabled
                  , Re = this.state.menuHidden
                  , je = this.props.menuIconProps;
                je === void 0 && (je = {
                    iconName: "ChevronDown"
                });
                var tt = (0,
                c.pi)((0,
                c.pi)({}, Ie), {
                    styles: p,
                    checked: se,
                    disabled: ve,
                    allowDisabledFocus: E,
                    onClick: this._onMenuClick,
                    menuProps: void 0,
                    iconProps: (0,
                    c.pi)((0,
                    c.pi)({}, je), {
                        className: this._classNames.menuIcon
                    }),
                    ariaLabel: Ue,
                    "aria-haspopup": !0,
                    "aria-expanded": !Re,
                    "data-is-focusable": !1
                });
                return t.createElement(x, (0,
                c.pi)({}, tt, {
                    "data-ktp-execute-target": n && n["data-ktp-execute-target"],
                    onMouseDown: this._onMouseDown,
                    tabIndex: Ae && !E ? 0 : -1
                }))
            }
            ,
            x.prototype._onPointerDown = function(p) {
                var n = this.props.onPointerDown;
                n && n(p),
                p.pointerType === "touch" && (this._handleTouchAndPointerEvent(),
                p.preventDefault(),
                p.stopImmediatePropagation())
            }
            ,
            x.prototype._handleTouchAndPointerEvent = function() {
                var p = this;
                this._lastTouchTimeoutId !== void 0 && (this._async.clearTimeout(this._lastTouchTimeoutId),
                this._lastTouchTimeoutId = void 0),
                this._processingTouch = !0,
                this._lastTouchTimeoutId = this._async.setTimeout(function() {
                    p._processingTouch = !1,
                    p._lastTouchTimeoutId = void 0,
                    p.state.menuHidden && p.focus()
                }, sn)
            }
            ,
            x.prototype._isValidMenuOpenKey = function(p) {
                return this.props.menuTriggerKeyCode ? p.which === this.props.menuTriggerKeyCode : this.props.menuProps ? p.which === be.m.down && (p.altKey || p.metaKey) : !1
            }
            ,
            x.defaultProps = {
                baseClassName: "ms-Button",
                styles: {},
                split: !1
            },
            x.contextType = J.uK,
            x
        }(t.Component)
    }
    ,
    42752: (mt,Ne,e)=>{
        e.d(Ne, {
            W: ()=>Se
        });
        var c = e(32523)
          , t = e(75649)
          , r = {
            outline: 0
        }
          , v = function(Q) {
            return {
                fontSize: Q,
                margin: "0 4px",
                height: "16px",
                lineHeight: "16px",
                textAlign: "center",
                flexShrink: 0
            }
        }
          , Se = (0,
        c.NF)(function(Q) {
            var be, he, ie = Q.semanticColors, te = Q.effects, ue = Q.fonts, K = ie.buttonBorder, re = ie.disabledBackground, g = ie.disabledText, ee = {
                left: -2,
                top: -2,
                bottom: -2,
                right: -2,
                outlineColor: "ButtonText"
            };
            return {
                root: [(0,
                t.GL)(Q, {
                    inset: 1,
                    highContrastStyle: ee,
                    borderColor: "transparent"
                }), Q.fonts.medium, {
                    border: "1px solid " + K,
                    borderRadius: te.roundedCorner2,
                    boxSizing: "border-box",
                    cursor: "pointer",
                    display: "inline-block",
                    padding: "0 16px",
                    textDecoration: "none",
                    textAlign: "center",
                    userSelect: "none",
                    selectors: {
                        ":active > span": {
                            position: "relative",
                            left: 0,
                            top: 0
                        }
                    }
                }],
                rootDisabled: [(0,
                t.GL)(Q, {
                    inset: 1,
                    highContrastStyle: ee,
                    borderColor: "transparent"
                }), {
                    backgroundColor: re,
                    borderColor: re,
                    color: g,
                    cursor: "default",
                    selectors: {
                        ":hover": r,
                        ":focus": r
                    }
                }],
                iconDisabled: {
                    color: g,
                    selectors: (be = {},
                    be[t.qJ] = {
                        color: "GrayText"
                    },
                    be)
                },
                menuIconDisabled: {
                    color: g,
                    selectors: (he = {},
                    he[t.qJ] = {
                        color: "GrayText"
                    },
                    he)
                },
                flexContainer: {
                    display: "flex",
                    height: "100%",
                    flexWrap: "nowrap",
                    justifyContent: "center",
                    alignItems: "center"
                },
                description: {
                    display: "block"
                },
                textContainer: {
                    flexGrow: 1,
                    display: "block"
                },
                icon: v(ue.mediumPlus.fontSize),
                menuIcon: v(ue.small.fontSize),
                label: {
                    margin: "0 4px",
                    lineHeight: "100%",
                    display: "block"
                },
                screenReaderText: t.ul
            }
        })
    }
    ,
    94109: (mt,Ne,e)=>{
        e.d(Ne, {
            a: ()=>U
        });
        var c = e(56996)
          , t = e(2784)
          , r = e(93631)
          , v = e(53217)
          , Se = e(38085)
          , Q = e(75649)
          , be = e(32523)
          , he = e(42752)
          , ie = e(78945)
          , te = e(62910)
          , ue = function() {
            return {
                position: "absolute",
                width: 1,
                right: 31,
                top: 8,
                bottom: 8
            }
        };
        function K(J) {
            var $, W, P, oe, V, ae = J.semanticColors, X = J.palette, pe = ae.buttonBackground, b = ae.buttonBackgroundPressed, T = ae.buttonBackgroundHovered, N = ae.buttonBackgroundDisabled, D = ae.buttonText, H = ae.buttonTextHovered, l = ae.buttonTextDisabled, d = ae.buttonTextChecked, a = ae.buttonTextCheckedHovered;
            return {
                root: {
                    backgroundColor: pe,
                    color: D
                },
                rootHovered: {
                    backgroundColor: T,
                    color: H,
                    selectors: ($ = {},
                    $[Q.qJ] = {
                        borderColor: "Highlight",
                        color: "Highlight"
                    },
                    $)
                },
                rootPressed: {
                    backgroundColor: b,
                    color: d
                },
                rootExpanded: {
                    backgroundColor: b,
                    color: d
                },
                rootChecked: {
                    backgroundColor: b,
                    color: d
                },
                rootCheckedHovered: {
                    backgroundColor: b,
                    color: a
                },
                rootDisabled: {
                    color: l,
                    backgroundColor: N,
                    selectors: (W = {},
                    W[Q.qJ] = {
                        color: "GrayText",
                        borderColor: "GrayText",
                        backgroundColor: "Window"
                    },
                    W)
                },
                splitButtonContainer: {
                    selectors: (P = {},
                    P[Q.qJ] = {
                        border: "none"
                    },
                    P)
                },
                splitButtonMenuButton: {
                    color: X.white,
                    backgroundColor: "transparent",
                    selectors: {
                        ":hover": {
                            backgroundColor: X.neutralLight,
                            selectors: (oe = {},
                            oe[Q.qJ] = {
                                color: "Highlight"
                            },
                            oe)
                        }
                    }
                },
                splitButtonMenuButtonDisabled: {
                    backgroundColor: ae.buttonBackgroundDisabled,
                    selectors: {
                        ":hover": {
                            backgroundColor: ae.buttonBackgroundDisabled
                        }
                    }
                },
                splitButtonDivider: (0,
                c.pi)((0,
                c.pi)({}, ue()), {
                    backgroundColor: X.neutralTertiaryAlt,
                    selectors: (V = {},
                    V[Q.qJ] = {
                        backgroundColor: "WindowText"
                    },
                    V)
                }),
                splitButtonDividerDisabled: {
                    backgroundColor: J.palette.neutralTertiaryAlt
                },
                splitButtonMenuButtonChecked: {
                    backgroundColor: X.neutralQuaternaryAlt,
                    selectors: {
                        ":hover": {
                            backgroundColor: X.neutralQuaternaryAlt
                        }
                    }
                },
                splitButtonMenuButtonExpanded: {
                    backgroundColor: X.neutralQuaternaryAlt,
                    selectors: {
                        ":hover": {
                            backgroundColor: X.neutralQuaternaryAlt
                        }
                    }
                },
                splitButtonMenuIcon: {
                    color: ae.buttonText
                },
                splitButtonMenuIconDisabled: {
                    color: ae.buttonTextDisabled
                }
            }
        }
        function re(J) {
            var $, W, P, oe, V, ae, X, pe, b, T = J.palette, N = J.semanticColors;
            return {
                root: {
                    backgroundColor: N.primaryButtonBackground,
                    border: "1px solid " + N.primaryButtonBackground,
                    color: N.primaryButtonText,
                    selectors: ($ = {},
                    $[Q.qJ] = (0,
                    c.pi)({
                        color: "Window",
                        backgroundColor: "WindowText",
                        borderColor: "WindowText"
                    }, (0,
                    Q.xM)()),
                    $["." + te.G$ + " &:focus"] = {
                        selectors: {
                            ":after": {
                                border: "none",
                                outlineColor: T.white
                            }
                        }
                    },
                    $)
                },
                rootHovered: {
                    backgroundColor: N.primaryButtonBackgroundHovered,
                    border: "1px solid " + N.primaryButtonBackgroundHovered,
                    color: N.primaryButtonTextHovered,
                    selectors: (W = {},
                    W[Q.qJ] = {
                        color: "Window",
                        backgroundColor: "Highlight",
                        borderColor: "Highlight"
                    },
                    W)
                },
                rootPressed: {
                    backgroundColor: N.primaryButtonBackgroundPressed,
                    border: "1px solid " + N.primaryButtonBackgroundPressed,
                    color: N.primaryButtonTextPressed,
                    selectors: (P = {},
                    P[Q.qJ] = (0,
                    c.pi)({
                        color: "Window",
                        backgroundColor: "WindowText",
                        borderColor: "WindowText"
                    }, (0,
                    Q.xM)()),
                    P)
                },
                rootExpanded: {
                    backgroundColor: N.primaryButtonBackgroundPressed,
                    color: N.primaryButtonTextPressed
                },
                rootChecked: {
                    backgroundColor: N.primaryButtonBackgroundPressed,
                    color: N.primaryButtonTextPressed
                },
                rootCheckedHovered: {
                    backgroundColor: N.primaryButtonBackgroundPressed,
                    color: N.primaryButtonTextPressed
                },
                rootDisabled: {
                    color: N.primaryButtonTextDisabled,
                    backgroundColor: N.primaryButtonBackgroundDisabled,
                    selectors: (oe = {},
                    oe[Q.qJ] = {
                        color: "GrayText",
                        borderColor: "GrayText",
                        backgroundColor: "Window"
                    },
                    oe)
                },
                splitButtonContainer: {
                    selectors: (V = {},
                    V[Q.qJ] = {
                        border: "none"
                    },
                    V)
                },
                splitButtonDivider: (0,
                c.pi)((0,
                c.pi)({}, ue()), {
                    backgroundColor: T.white,
                    selectors: (ae = {},
                    ae[Q.qJ] = {
                        backgroundColor: "Window"
                    },
                    ae)
                }),
                splitButtonMenuButton: {
                    backgroundColor: N.primaryButtonBackground,
                    color: N.primaryButtonText,
                    selectors: (X = {},
                    X[Q.qJ] = {
                        backgroundColor: "Canvas"
                    },
                    X[":hover"] = {
                        backgroundColor: N.primaryButtonBackgroundHovered,
                        selectors: (pe = {},
                        pe[Q.qJ] = {
                            color: "Highlight"
                        },
                        pe)
                    },
                    X)
                },
                splitButtonMenuButtonDisabled: {
                    backgroundColor: N.primaryButtonBackgroundDisabled,
                    selectors: {
                        ":hover": {
                            backgroundColor: N.primaryButtonBackgroundDisabled
                        }
                    }
                },
                splitButtonMenuButtonChecked: {
                    backgroundColor: N.primaryButtonBackgroundPressed,
                    selectors: {
                        ":hover": {
                            backgroundColor: N.primaryButtonBackgroundPressed
                        }
                    }
                },
                splitButtonMenuButtonExpanded: {
                    backgroundColor: N.primaryButtonBackgroundPressed,
                    selectors: {
                        ":hover": {
                            backgroundColor: N.primaryButtonBackgroundPressed
                        }
                    }
                },
                splitButtonMenuIcon: {
                    color: N.primaryButtonText
                },
                splitButtonMenuIconDisabled: {
                    color: T.neutralTertiary,
                    selectors: (b = {},
                    b[Q.qJ] = {
                        color: "GrayText"
                    },
                    b)
                }
            }
        }
        var g = "32px"
          , ee = "80px"
          , O = (0,
        be.NF)(function(J, $, W) {
            var P = (0,
            he.W)(J)
              , oe = (0,
            ie.W)(J)
              , V = {
                root: {
                    minWidth: ee,
                    height: g
                },
                label: {
                    fontWeight: Q.lq.semibold
                }
            };
            return (0,
            Q.E$)(P, V, W ? re(J) : K(J), oe, $)
        })
          , U = function(J) {
            (0,
            c.ZT)($, J);
            function $() {
                return J !== null && J.apply(this, arguments) || this
            }
            return $.prototype.render = function() {
                var W = this.props
                  , P = W.primary
                  , oe = P === void 0 ? !1 : P
                  , V = W.styles
                  , ae = W.theme;
                return t.createElement(r.Y, (0,
                c.pi)({}, this.props, {
                    variantClassName: oe ? "ms-Button--primary" : "ms-Button--default",
                    styles: O(ae, V, oe),
                    onRenderDescription: v.S
                }))
            }
            ,
            $ = (0,
            c.gn)([(0,
            Se.a)("DefaultButton", ["theme", "styles"], !0)], $),
            $
        }(t.Component)
    }
    ,
    76984: (mt,Ne,e)=>{
        e.d(Ne, {
            h: ()=>ue
        });
        var c = e(56996)
          , t = e(2784)
          , r = e(93631)
          , v = e(53217)
          , Se = e(38085)
          , Q = e(75649)
          , be = e(32523)
          , he = e(42752)
          , ie = e(78945)
          , te = (0,
        be.NF)(function(K, re) {
            var g, ee = (0,
            he.W)(K), O = (0,
            ie.W)(K), U = K.palette, J = K.semanticColors, $ = {
                root: {
                    padding: "0 4px",
                    width: "32px",
                    height: "32px",
                    backgroundColor: "transparent",
                    border: "none",
                    color: J.link
                },
                rootHovered: {
                    color: U.themeDarkAlt,
                    backgroundColor: U.neutralLighter,
                    selectors: (g = {},
                    g[Q.qJ] = {
                        borderColor: "Highlight",
                        color: "Highlight"
                    },
                    g)
                },
                rootHasMenu: {
                    width: "auto"
                },
                rootPressed: {
                    color: U.themeDark,
                    backgroundColor: U.neutralLight
                },
                rootExpanded: {
                    color: U.themeDark,
                    backgroundColor: U.neutralLight
                },
                rootChecked: {
                    color: U.themeDark,
                    backgroundColor: U.neutralLight
                },
                rootCheckedHovered: {
                    color: U.themeDark,
                    backgroundColor: U.neutralQuaternaryAlt
                },
                rootDisabled: {
                    color: U.neutralTertiaryAlt
                }
            };
            return (0,
            Q.E$)(ee, $, O, re)
        })
          , ue = function(K) {
            (0,
            c.ZT)(re, K);
            function re() {
                return K !== null && K.apply(this, arguments) || this
            }
            return re.prototype.render = function() {
                var g = this.props
                  , ee = g.styles
                  , O = g.theme;
                return t.createElement(r.Y, (0,
                c.pi)({}, this.props, {
                    variantClassName: "ms-Button--icon",
                    styles: te(O, ee),
                    onRenderText: v.S,
                    onRenderDescription: v.S
                }))
            }
            ,
            re = (0,
            c.gn)([(0,
            Se.a)("IconButton", ["theme", "styles"], !0)], re),
            re
        }(t.Component)
    }
    ,
    73054: (mt,Ne,e)=>{
        e.d(Ne, {
            K: ()=>Q
        });
        var c = e(56996)
          , t = e(2784)
          , r = e(53217)
          , v = e(38085)
          , Se = e(94109)
          , Q = function(be) {
            (0,
            c.ZT)(he, be);
            function he() {
                return be !== null && be.apply(this, arguments) || this
            }
            return he.prototype.render = function() {
                return t.createElement(Se.a, (0,
                c.pi)({}, this.props, {
                    primary: !0,
                    onRenderDescription: r.S
                }))
            }
            ,
            he = (0,
            c.gn)([(0,
            v.a)("PrimaryButton", ["theme", "styles"], !0)], he),
            he
        }(t.Component)
    }
    ,
    78945: (mt,Ne,e)=>{
        e.d(Ne, {
            W: ()=>v
        });
        var c = e(56996)
          , t = e(75649)
          , r = e(32523)
          , v = (0,
        r.NF)(function(Se, Q) {
            var be, he, ie, te, ue, K, re, g, ee, O, U, J, $, W = Se.effects, P = Se.palette, oe = Se.semanticColors, V = {
                left: -2,
                top: -2,
                bottom: -2,
                right: -2,
                border: "none"
            }, ae = {
                position: "absolute",
                width: 1,
                right: 31,
                top: 8,
                bottom: 8
            }, X = {
                splitButtonContainer: [(0,
                t.GL)(Se, {
                    highContrastStyle: V,
                    inset: 2,
                    pointerEvents: "none"
                }), {
                    display: "inline-flex",
                    selectors: {
                        ".ms-Button--default": {
                            borderTopRightRadius: "0",
                            borderBottomRightRadius: "0",
                            borderRight: "none",
                            flexGrow: "1"
                        },
                        ".ms-Button--primary": {
                            borderTopRightRadius: "0",
                            borderBottomRightRadius: "0",
                            border: "none",
                            flexGrow: "1",
                            selectors: (be = {},
                            be[t.qJ] = (0,
                            c.pi)({
                                color: "WindowText",
                                backgroundColor: "Window",
                                border: "1px solid WindowText",
                                borderRightWidth: "0"
                            }, (0,
                            t.xM)()),
                            be[":hover"] = {
                                border: "none"
                            },
                            be[":active"] = {
                                border: "none"
                            },
                            be)
                        },
                        ".ms-Button--primary + .ms-Button": {
                            border: "none",
                            selectors: (he = {},
                            he[t.qJ] = {
                                border: "1px solid WindowText",
                                borderLeftWidth: "0"
                            },
                            he)
                        }
                    }
                }],
                splitButtonContainerHovered: {
                    selectors: {
                        ".ms-Button--primary": {
                            selectors: (ie = {},
                            ie[t.qJ] = {
                                color: "Window",
                                backgroundColor: "Highlight"
                            },
                            ie)
                        },
                        ".ms-Button.is-disabled": {
                            color: oe.buttonTextDisabled,
                            selectors: (te = {},
                            te[t.qJ] = {
                                color: "GrayText",
                                borderColor: "GrayText",
                                backgroundColor: "Window"
                            },
                            te)
                        }
                    }
                },
                splitButtonContainerChecked: {
                    selectors: {
                        ".ms-Button--primary": {
                            selectors: (ue = {},
                            ue[t.qJ] = (0,
                            c.pi)({
                                color: "Window",
                                backgroundColor: "WindowText"
                            }, (0,
                            t.xM)()),
                            ue)
                        }
                    }
                },
                splitButtonContainerCheckedHovered: {
                    selectors: {
                        ".ms-Button--primary": {
                            selectors: (K = {},
                            K[t.qJ] = (0,
                            c.pi)({
                                color: "Window",
                                backgroundColor: "WindowText"
                            }, (0,
                            t.xM)()),
                            K)
                        }
                    }
                },
                splitButtonContainerFocused: {
                    outline: "none!important"
                },
                splitButtonMenuButton: (re = {
                    padding: 6,
                    height: "auto",
                    boxSizing: "border-box",
                    borderRadius: 0,
                    borderTopRightRadius: W.roundedCorner2,
                    borderBottomRightRadius: W.roundedCorner2,
                    border: "1px solid " + P.neutralSecondaryAlt,
                    borderLeft: "none",
                    outline: "transparent",
                    userSelect: "none",
                    display: "inline-block",
                    textDecoration: "none",
                    textAlign: "center",
                    cursor: "pointer",
                    verticalAlign: "top",
                    width: 32,
                    marginLeft: -1,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                },
                re[t.qJ] = {
                    ".ms-Button-menuIcon": {
                        color: "WindowText"
                    }
                },
                re),
                splitButtonDivider: (0,
                c.pi)((0,
                c.pi)({}, ae), {
                    selectors: (g = {},
                    g[t.qJ] = {
                        backgroundColor: "WindowText"
                    },
                    g)
                }),
                splitButtonDividerDisabled: (0,
                c.pi)((0,
                c.pi)({}, ae), {
                    selectors: (ee = {},
                    ee[t.qJ] = {
                        backgroundColor: "GrayText"
                    },
                    ee)
                }),
                splitButtonMenuButtonDisabled: {
                    pointerEvents: "none",
                    border: "none",
                    selectors: (O = {
                        ":hover": {
                            cursor: "default"
                        },
                        ".ms-Button--primary": {
                            selectors: (U = {},
                            U[t.qJ] = {
                                color: "GrayText",
                                borderColor: "GrayText",
                                backgroundColor: "Window"
                            },
                            U)
                        },
                        ".ms-Button-menuIcon": {
                            selectors: (J = {},
                            J[t.qJ] = {
                                color: "GrayText"
                            },
                            J)
                        }
                    },
                    O[t.qJ] = {
                        color: "GrayText",
                        border: "1px solid GrayText",
                        backgroundColor: "Window"
                    },
                    O)
                },
                splitButtonFlexContainer: {
                    display: "flex",
                    height: "100%",
                    flexWrap: "nowrap",
                    justifyContent: "center",
                    alignItems: "center"
                },
                splitButtonContainerDisabled: {
                    outline: "none",
                    border: "none",
                    selectors: ($ = {},
                    $[t.qJ] = (0,
                    c.pi)({
                        color: "GrayText",
                        borderColor: "GrayText",
                        backgroundColor: "Window"
                    }, (0,
                    t.xM)()),
                    $)
                },
                splitButtonMenuFocused: (0,
                c.pi)({}, (0,
                t.GL)(Se, {
                    highContrastStyle: V,
                    inset: 2
                }))
            };
            return (0,
            t.E$)(X, Q)
        })
    }
    ,
    98663: (mt,Ne,e)=>{
        e.d(Ne, {
            U: ()=>kt
        });
        var c = e(56996), t = e(2784), r = e(1238), v = e(53841), Se = e(83558), Q = e(95562), be = e(97280), he = e(51169), ie = e(88642), te = e(51370), ue = e(86316), K = e(10627), re = e(8422), g = e(18003), ee = e(60737), O;
        function U(y, M, k) {
            return {
                targetEdge: y,
                alignmentEdge: M,
                isAuto: k
            }
        }
        var J = (O = {},
        O[v.b.topLeftEdge] = U(K.z.top, K.z.left),
        O[v.b.topCenter] = U(K.z.top),
        O[v.b.topRightEdge] = U(K.z.top, K.z.right),
        O[v.b.topAutoEdge] = U(K.z.top, void 0, !0),
        O[v.b.bottomLeftEdge] = U(K.z.bottom, K.z.left),
        O[v.b.bottomCenter] = U(K.z.bottom),
        O[v.b.bottomRightEdge] = U(K.z.bottom, K.z.right),
        O[v.b.bottomAutoEdge] = U(K.z.bottom, void 0, !0),
        O[v.b.leftTopEdge] = U(K.z.left, K.z.top),
        O[v.b.leftCenter] = U(K.z.left),
        O[v.b.leftBottomEdge] = U(K.z.left, K.z.bottom),
        O[v.b.rightTopEdge] = U(K.z.right, K.z.top),
        O[v.b.rightCenter] = U(K.z.right),
        O[v.b.rightBottomEdge] = U(K.z.right, K.z.bottom),
        O);
        function $(y, M) {
            return !(y.top < M.top || y.bottom > M.bottom || y.left < M.left || y.right > M.right)
        }
        function W(y, M) {
            var k = [];
            return y.top < M.top && k.push(K.z.top),
            y.bottom > M.bottom && k.push(K.z.bottom),
            y.left < M.left && k.push(K.z.left),
            y.right > M.right && k.push(K.z.right),
            k
        }
        function P(y, M) {
            return y[K.z[M]]
        }
        function oe(y, M, k) {
            return y[K.z[M]] = k,
            y
        }
        function V(y, M) {
            var k = f(M);
            return (P(y, k.positiveEdge) + P(y, k.negativeEdge)) / 2
        }
        function ae(y, M) {
            return y > 0 ? M : M * -1
        }
        function X(y, M) {
            return ae(y, P(M, y))
        }
        function pe(y, M, k) {
            var q = P(y, k) - P(M, k);
            return ae(k, q)
        }
        function b(y, M, k, q) {
            q === void 0 && (q = !0);
            var ge = P(y, M) - k
              , fe = oe(y, M, k);
            return q && (fe = oe(y, M * -1, P(y, M * -1) - ge)),
            fe
        }
        function T(y, M, k, q) {
            return q === void 0 && (q = 0),
            b(y, k, P(M, k) + ae(k, q))
        }
        function N(y, M, k, q) {
            q === void 0 && (q = 0);
            var ge = k * -1
              , fe = ae(ge, q);
            return b(y, k * -1, P(M, k) + fe)
        }
        function D(y, M, k) {
            var q = X(k, y);
            return q > X(k, M)
        }
        function H(y, M) {
            for (var k = W(y, M), q = 0, ge = 0, fe = k; ge < fe.length; ge++) {
                var Te = fe[ge];
                q += Math.pow(pe(y, M, Te), 2)
            }
            return q
        }
        function l(y, M, k, q, ge) {
            ge === void 0 && (ge = 0);
            var fe = [K.z.left, K.z.right, K.z.bottom, K.z.top];
            (0,
            re.zg)() && (fe[0] *= -1,
            fe[1] *= -1);
            for (var Te = y, Pe = q.targetEdge, Fe = q.alignmentEdge, _e, lt = Pe, qe = Fe, st = 0; st < 4; st++) {
                if (D(Te, k, Pe))
                    return {
                        elementRectangle: Te,
                        targetEdge: Pe,
                        alignmentEdge: Fe
                    };
                var bt = H(Te, k);
                (!_e || bt < _e) && (_e = bt,
                lt = Pe,
                qe = Fe),
                fe.splice(fe.indexOf(Pe), 1),
                fe.length > 0 && (fe.indexOf(Pe * -1) > -1 ? Pe = Pe * -1 : (Fe = Pe,
                Pe = fe.slice(-1)[0]),
                Te = h(y, M, {
                    targetEdge: Pe,
                    alignmentEdge: Fe
                }, ge))
            }
            return Te = h(y, M, {
                targetEdge: lt,
                alignmentEdge: qe
            }, ge),
            {
                elementRectangle: Te,
                targetEdge: lt,
                alignmentEdge: qe
            }
        }
        function d(y, M, k, q) {
            var ge = y.alignmentEdge
              , fe = y.targetEdge
              , Te = y.elementRectangle
              , Pe = ge * -1
              , Fe = h(Te, M, {
                targetEdge: fe,
                alignmentEdge: Pe
            }, k, q);
            return {
                elementRectangle: Fe,
                targetEdge: fe,
                alignmentEdge: Pe
            }
        }
        function a(y, M, k, q, ge, fe, Te) {
            ge === void 0 && (ge = 0);
            var Pe = q.alignmentEdge
              , Fe = q.alignTargetEdge
              , _e = {
                elementRectangle: y,
                targetEdge: q.targetEdge,
                alignmentEdge: Pe
            };
            !fe && !Te && (_e = l(y, M, k, q, ge));
            var lt = W(_e.elementRectangle, k)
              , qe = fe ? -_e.targetEdge : void 0;
            if (lt.length > 0)
                if (Fe)
                    if (_e.alignmentEdge && lt.indexOf(_e.alignmentEdge * -1) > -1) {
                        var st = d(_e, M, ge, Te);
                        if ($(st.elementRectangle, k))
                            return st;
                        _e = u(W(st.elementRectangle, k), _e, k, qe)
                    } else
                        _e = u(lt, _e, k, qe);
                else
                    _e = u(lt, _e, k, qe);
            return _e
        }
        function u(y, M, k, q) {
            for (var ge = 0, fe = y; ge < fe.length; ge++) {
                var Te = fe[ge]
                  , Pe = void 0;
                if (q && q === Te * -1)
                    Pe = b(M.elementRectangle, Te, P(k, Te), !1),
                    M.forcedInBounds = !0;
                else {
                    Pe = T(M.elementRectangle, k, Te);
                    var Fe = D(Pe, k, Te * -1);
                    Fe || (Pe = b(Pe, Te * -1, P(k, Te * -1), !1),
                    M.forcedInBounds = !0)
                }
                M.elementRectangle = Pe
            }
            return M
        }
        function C(y, M, k) {
            var q = f(M).positiveEdge
              , ge = V(y, M)
              , fe = ge - P(y, q);
            return b(y, q, k - fe)
        }
        function h(y, M, k, q, ge) {
            q === void 0 && (q = 0);
            var fe = new ee.A(y.left,y.right,y.top,y.bottom)
              , Te = k.alignmentEdge
              , Pe = k.targetEdge
              , Fe = ge ? Pe : Pe * -1;
            if (fe = ge ? T(fe, M, Pe, q) : N(fe, M, Pe, q),
            Te)
                fe = T(fe, M, Te);
            else {
                var _e = V(M, Pe);
                fe = C(fe, Fe, _e)
            }
            return fe
        }
        function f(y) {
            return y === K.z.top || y === K.z.bottom ? {
                positiveEdge: K.z.left,
                negativeEdge: K.z.right
            } : {
                positiveEdge: K.z.top,
                negativeEdge: K.z.bottom
            }
        }
        function i(y, M, k) {
            return k && Math.abs(pe(y, k, M)) > Math.abs(pe(y, k, M * -1)) ? M * -1 : M
        }
        function m(y, M, k) {
            return k !== void 0 && P(y, M) === P(k, M)
        }
        function R(y, M, k, q, ge, fe, Te, Pe) {
            var Fe = {}
              , _e = Ee(M)
              , lt = fe ? k : k * -1
              , qe = ge || f(k).positiveEdge;
            return (!Te || m(y, w(qe), q)) && (qe = i(y, qe, q)),
            Fe[K.z[lt]] = pe(y, _e, lt),
            Fe[K.z[qe]] = pe(y, _e, qe),
            Pe && (Fe[K.z[lt * -1]] = pe(y, _e, lt * -1),
            Fe[K.z[qe * -1]] = pe(y, _e, qe * -1)),
            Fe
        }
        function L(y) {
            return Math.sqrt(y * y * 2)
        }
        function Z(y, M, k) {
            if (y === void 0 && (y = v.b.bottomAutoEdge),
            k)
                return {
                    alignmentEdge: k.alignmentEdge,
                    isAuto: k.isAuto,
                    targetEdge: k.targetEdge
                };
            var q = (0,
            c.pi)({}, J[y]);
            return (0,
            re.zg)() ? (q.alignmentEdge && q.alignmentEdge % 2 === 0 && (q.alignmentEdge = q.alignmentEdge * -1),
            M !== void 0 ? J[M] : q) : q
        }
        function F(y, M, k, q, ge) {
            return y.isAuto && (y.alignmentEdge = A(y.targetEdge, M, k)),
            y.alignTargetEdge = ge,
            y
        }
        function A(y, M, k) {
            var q = V(M, y)
              , ge = V(k, y)
              , fe = f(y)
              , Te = fe.positiveEdge
              , Pe = fe.negativeEdge;
            return q <= ge ? Te : Pe
        }
        function j(y, M, k, q, ge, fe, Te) {
            var Pe = h(y, M, q, ge, Te);
            return $(Pe, k) ? {
                elementRectangle: Pe,
                targetEdge: q.targetEdge,
                alignmentEdge: q.alignmentEdge
            } : a(Pe, M, k, q, ge, fe, Te)
        }
        function G(y, M, k) {
            var q = y.targetEdge * -1
              , ge = new ee.A(0,y.elementRectangle.width,0,y.elementRectangle.height)
              , fe = {}
              , Te = i(y.elementRectangle, y.alignmentEdge ? y.alignmentEdge : f(q).positiveEdge, k)
              , Pe = pe(y.elementRectangle, y.targetRectangle, q)
              , Fe = Pe > Math.abs(P(M, q));
            return fe[K.z[q]] = P(M, q),
            fe[K.z[Te]] = pe(M, ge, Te),
            {
                elementPosition: (0,
                c.pi)({}, fe),
                closestEdge: A(y.targetEdge, M, ge),
                targetEdge: q,
                hideBeak: !Fe
            }
        }
        function le(y, M) {
            var k = M.targetRectangle
              , q = f(M.targetEdge)
              , ge = q.positiveEdge
              , fe = q.negativeEdge
              , Te = V(k, M.targetEdge)
              , Pe = new ee.A(y / 2,M.elementRectangle.width - y / 2,y / 2,M.elementRectangle.height - y / 2)
              , Fe = new ee.A(0,y,0,y);
            return Fe = b(Fe, M.targetEdge * -1, -y / 2),
            Fe = C(Fe, M.targetEdge * -1, Te - X(ge, M.elementRectangle)),
            D(Fe, Pe, ge) ? D(Fe, Pe, fe) || (Fe = T(Fe, Pe, fe)) : Fe = T(Fe, Pe, ge),
            Fe
        }
        function Ee(y) {
            var M = y.getBoundingClientRect();
            return new ee.A(M.left,M.right,M.top,M.bottom)
        }
        function de(y) {
            return new ee.A(y.left,y.right,y.top,y.bottom)
        }
        function Ce(y, M) {
            var k;
            if (M) {
                if (M.preventDefault) {
                    var q = M;
                    k = new ee.A(q.clientX,q.clientX,q.clientY,q.clientY)
                } else if (M.getBoundingClientRect)
                    k = Ee(M);
                else {
                    var ge = M
                      , fe = ge.left || ge.x
                      , Te = ge.top || ge.y
                      , Pe = ge.right || fe
                      , Fe = ge.bottom || Te;
                    k = new ee.A(fe,Pe,Te,Fe)
                }
                if (!$(k, y))
                    for (var _e = W(k, y), lt = 0, qe = _e; lt < qe.length; lt++) {
                        var st = qe[lt];
                        k[K.z[st]] = y[K.z[st]]
                    }
            } else
                k = new ee.A(0,0,0,0);
            return k
        }
        function Be(y, M, k, q, ge) {
            var fe = 0
              , Te = J[M]
              , Pe = ge ? Te.targetEdge * -1 : Te.targetEdge;
            return Pe === K.z.top ? fe = P(y, Te.targetEdge) - q.top - k : Pe === K.z.bottom ? fe = q.bottom - P(y, Te.targetEdge) - k : fe = q.bottom - y.top - k,
            fe > 0 ? fe : q.height
        }
        function Oe(y, M, k, q) {
            var ge = y.gapSpace ? y.gapSpace : 0
              , fe = Ce(k, y.target)
              , Te = F(Z(y.directionalHint, y.directionalHintForRTL, q), fe, k, y.coverTarget, y.alignTargetEdge)
              , Pe = j(Ee(M), fe, k, Te, ge, y.directionalHintFixed, y.coverTarget);
            return (0,
            c.pi)((0,
            c.pi)({}, Pe), {
                targetRectangle: fe
            })
        }
        function at(y, M, k, q, ge) {
            var fe = R(y.elementRectangle, M, y.targetEdge, k, y.alignmentEdge, q, ge, y.forcedInBounds);
            return {
                elementPosition: fe,
                targetEdge: y.targetEdge,
                alignmentEdge: y.alignmentEdge
            }
        }
        function $e(y, M, k, q) {
            var ge = y.bounds ? de(y.bounds) : new Rectangle(0,window.innerWidth - getScrollbarWidth(),0,window.innerHeight)
              , fe = Oe(y, k, ge, q);
            return at(fe, M, ge, y.coverTarget)
        }
        function et(y, M, k, q, ge) {
            var fe = y.isBeakVisible && y.beakWidth || 0
              , Te = L(fe) / 2 + (y.gapSpace ? y.gapSpace : 0)
              , Pe = y;
            Pe.gapSpace = Te;
            var Fe = y.bounds ? de(y.bounds) : new ee.A(0,window.innerWidth - (0,
            g.np)(),0,window.innerHeight)
              , _e = Oe(Pe, k, Fe, q)
              , lt = le(fe, _e)
              , qe = G(_e, lt, Fe);
            return (0,
            c.pi)((0,
            c.pi)({}, at(_e, M, Fe, y.coverTarget, ge)), {
                beakPosition: qe
            })
        }
        function ht(y, M, k, q) {
            return et(y, M, k, q, !0)
        }
        var Ct = {
            _finalizePositionData: at,
            _finalizeBeakPosition: G,
            _calculateActualBeakWidthInPixels: L,
            _positionElementWithinBounds: j,
            _positionBeak: le,
            _getPositionData: Z,
            _getMaxHeightFromTargetRectangle: Be
        };
        function dt(y, M, k, q) {
            return $e(y, M, k, q)
        }
        function ze(y, M, k, q) {
            return et(y, M, k, q)
        }
        function pt(y, M, k, q) {
            return ht(y, M, k, q)
        }
        function It(y, M, k, q, ge) {
            k === void 0 && (k = 0);
            var fe = y, Te = y, Pe = y, Fe, _e = q ? de(q) : new Rectangle(0,window.innerWidth - getScrollbarWidth(),0,window.innerHeight), lt = Pe.left || Pe.x, qe = Pe.top || Pe.y, st = Pe.right || lt, bt = Pe.bottom || qe;
            return fe.stopPropagation ? Fe = new Rectangle(fe.clientX,fe.clientX,fe.clientY,fe.clientY) : lt !== void 0 && qe !== void 0 ? Fe = new Rectangle(lt,st,qe,bt) : Fe = Ee(Te),
            Be(Fe, M, k, _e, ge)
        }
        function w(y) {
            return y * -1
        }
        function ce(y, M) {
            var k = void 0;
            if (M.getWindowSegments && (k = M.getWindowSegments()),
            k === void 0 || k.length <= 1)
                return {
                    top: 0,
                    left: 0,
                    right: M.innerWidth,
                    bottom: M.innerHeight,
                    width: M.innerWidth,
                    height: M.innerHeight
                };
            var q = 0
              , ge = 0;
            if (y !== null && !!y.getBoundingClientRect) {
                var fe = y.getBoundingClientRect();
                q = (fe.left + fe.right) / 2,
                ge = (fe.top + fe.bottom) / 2
            } else
                y !== null && (q = y.left || y.x,
                ge = y.top || y.y);
            for (var Te = {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: 0,
                height: 0
            }, Pe = 0, Fe = k; Pe < Fe.length; Pe++) {
                var _e = Fe[Pe];
                q && _e.left <= q && _e.right >= q && ge && _e.top <= ge && _e.bottom >= ge && (Te = {
                    top: _e.top,
                    left: _e.left,
                    right: _e.right,
                    bottom: _e.bottom,
                    width: _e.width,
                    height: _e.height
                })
            }
            return Te
        }
        function B(y, M) {
            return ce(y, M)
        }
        var _ = e(76938), ye = e(57312), z = e(75649), ne = e(35926), I = e(36844), o = e(91062), me = e(87891), De = e(34743), xe, ke = "CalloutContentBase", we = (xe = {},
        xe[K.z.top] = z.k4.slideUpIn10,
        xe[K.z.bottom] = z.k4.slideDownIn10,
        xe[K.z.left] = z.k4.slideLeftIn10,
        xe[K.z.right] = z.k4.slideRightIn10,
        xe), nt = {
            top: 0,
            left: 0
        }, He = {
            opacity: 0,
            filter: "opacity(0)",
            pointerEvents: "none"
        }, Qe = ["role", "aria-roledescription"], Y = {
            preventDismissOnLostFocus: !1,
            preventDismissOnScroll: !1,
            preventDismissOnResize: !1,
            isBeakVisible: !0,
            beakWidth: 16,
            gapSpace: 0,
            minPagePadding: 8,
            directionalHint: v.b.bottomAutoEdge
        }, Me = (0,
        ye.y)({
            disableCaching: !0
        });
        function Le(y, M, k) {
            var q = y.bounds
              , ge = y.minPagePadding
              , fe = ge === void 0 ? Y.minPagePadding : ge
              , Te = y.target
              , Pe = t.useState(!1)
              , Fe = Pe[0]
              , _e = Pe[1]
              , lt = t.useRef()
              , qe = t.useCallback(function() {
                if (!lt.current || Fe) {
                    var bt = typeof q == "function" ? k ? q(Te, k) : void 0 : q;
                    !bt && k && (bt = B(M.current, k),
                    bt = {
                        top: bt.top + fe,
                        left: bt.left + fe,
                        right: bt.right - fe,
                        bottom: bt.bottom - fe,
                        width: bt.width - fe * 2,
                        height: bt.height - fe * 2
                    }),
                    lt.current = bt,
                    Fe && _e(!1)
                }
                return lt.current
            }, [q, fe, Te, M, k, Fe])
              , st = (0,
            ne.r)();
            return (0,
            I.d)(k, "resize", st.debounce(function() {
                _e(!0)
            }, 500, {
                leading: !0
            })),
            qe
        }
        function We(y, M, k) {
            var q, ge = y.calloutMaxHeight, fe = y.finalHeight, Te = y.directionalHint, Pe = y.directionalHintFixed, Fe = y.hidden, _e = t.useState(), lt = _e[0], qe = _e[1], st = (q = k == null ? void 0 : k.elementPosition) !== null && q !== void 0 ? q : {}, bt = st.top, _t = st.bottom;
            return t.useEffect(function() {
                var At, jt = (At = M()) !== null && At !== void 0 ? At : {}, Vt = jt.top, Ht = jt.bottom;
                !ge && !Fe ? typeof bt == "number" && Ht ? qe(Ht - bt) : typeof _t == "number" && typeof Vt == "number" && Ht && qe(Ht - Vt - _t) : qe(ge || void 0)
            }, [_t, ge, fe, Te, Pe, M, Fe, k, bt]),
            lt
        }
        function Ge(y, M, k, q, ge) {
            var fe = t.useState()
              , Te = fe[0]
              , Pe = fe[1]
              , Fe = t.useRef(0)
              , _e = t.useRef()
              , lt = (0,
            ne.r)()
              , qe = y.hidden
              , st = y.target
              , bt = y.finalHeight
              , _t = y.calloutMaxHeight
              , At = y.onPositioned
              , jt = y.directionalHint;
            return t.useEffect(function() {
                if (qe)
                    Pe(void 0),
                    Fe.current = 0;
                else {
                    var Vt = lt.requestAnimationFrame(function() {
                        var Ht, Gt;
                        if (M.current && k) {
                            var Xt = (0,
                            c.pi)((0,
                            c.pi)({}, y), {
                                target: q.current,
                                bounds: ge()
                            })
                              , Jt = k.cloneNode(!0);
                            Jt.style.maxHeight = _t ? "" + _t : "",
                            Jt.style.visibility = "hidden",
                            (Ht = k.parentElement) === null || Ht === void 0 || Ht.appendChild(Jt);
                            var en = _e.current === st ? Te : void 0
                              , Rt = bt ? pt(Xt, M.current, Jt, en) : ze(Xt, M.current, Jt, en);
                            (Gt = k.parentElement) === null || Gt === void 0 || Gt.removeChild(Jt),
                            !Te && Rt || Te && Rt && !St(Te, Rt) && Fe.current < 5 ? (Fe.current++,
                            Pe(Rt)) : Fe.current > 0 && (Fe.current = 0,
                            At == null || At(Te))
                        }
                    }, k);
                    return _e.current = st,
                    function() {
                        lt.cancelAnimationFrame(Vt),
                        _e.current = void 0
                    }
                }
            }, [qe, jt, lt, k, _t, M, q, bt, ge, At, Te, y, st]),
            Te
        }
        function Ze(y, M, k) {
            var q = y.hidden
              , ge = y.setInitialFocus
              , fe = (0,
            ne.r)()
              , Te = !!M;
            t.useEffect(function() {
                if (!q && ge && Te && k) {
                    var Pe = fe.requestAnimationFrame(function() {
                        return (0,
                        Se.uo)(k)
                    }, k);
                    return function() {
                        return fe.cancelAnimationFrame(Pe)
                    }
                }
            }, [q, Te, fe, k, ge])
        }
        function Xe(y, M, k, q, ge) {
            var fe = y.hidden
              , Te = y.onDismiss
              , Pe = y.preventDismissOnScroll
              , Fe = y.preventDismissOnResize
              , _e = y.preventDismissOnLostFocus
              , lt = y.dismissOnTargetClick
              , qe = y.shouldDismissOnWindowFocus
              , st = y.preventDismissOnEvent
              , bt = t.useRef(!1)
              , _t = (0,
            ne.r)()
              , At = (0,
            o.B)([function() {
                bt.current = !0
            }
            , function() {
                bt.current = !1
            }
            ])
              , jt = !!M;
            return t.useEffect(function() {
                var Vt = function(Rt) {
                    jt && !Pe && Xt(Rt)
                }
                  , Ht = function(Rt) {
                    !Fe && !(st && st(Rt)) && (Te == null || Te(Rt))
                }
                  , Gt = function(Rt) {
                    _e || Xt(Rt)
                }
                  , Xt = function(Rt) {
                    var Zt = Rt.composedPath ? Rt.composedPath() : []
                      , $t = Zt.length > 0 ? Zt[0] : Rt.target
                      , rn = k.current && !(0,
                    Q.t)(k.current, $t);
                    if (rn && bt.current) {
                        bt.current = !1;
                        return
                    }
                    if (!q.current && rn || Rt.target !== ge && rn && (!q.current || "stopPropagation"in q.current || lt || $t !== q.current && !(0,
                    Q.t)(q.current, $t))) {
                        if (st && st(Rt))
                            return;
                        Te == null || Te(Rt)
                    }
                }
                  , Jt = function(Rt) {
                    !qe || (st && !st(Rt) || !st && !_e) && !(ge != null && ge.document.hasFocus()) && Rt.relatedTarget === null && (Te == null || Te(Rt))
                }
                  , en = new Promise(function(Rt) {
                    _t.setTimeout(function() {
                        if (!fe && ge) {
                            var Zt = [(0,
                            be.on)(ge, "scroll", Vt, !0), (0,
                            be.on)(ge, "resize", Ht, !0), (0,
                            be.on)(ge.document.documentElement, "focus", Gt, !0), (0,
                            be.on)(ge.document.documentElement, "click", Gt, !0), (0,
                            be.on)(ge, "blur", Jt, !0)];
                            Rt(function() {
                                Zt.forEach(function($t) {
                                    return $t()
                                })
                            })
                        }
                    }, 0)
                }
                );
                return function() {
                    en.then(function(Rt) {
                        return Rt()
                    })
                }
            }, [fe, _t, k, q, ge, Te, qe, lt, _e, Fe, Pe, jt, st]),
            At
        }
        var Ve = t.memo(t.forwardRef(function(y, M) {
            var k = (0,
            he.j)(Y, y)
              , q = k.styles
              , ge = k.style
              , fe = k.ariaLabel
              , Te = k.ariaDescribedBy
              , Pe = k.ariaLabelledBy
              , Fe = k.className
              , _e = k.isBeakVisible
              , lt = k.children
              , qe = k.beakWidth
              , st = k.calloutWidth
              , bt = k.calloutMaxWidth
              , _t = k.calloutMinWidth
              , At = k.doNotLayer
              , jt = k.finalHeight
              , Vt = k.hideOverflow
              , Ht = Vt === void 0 ? !!jt : Vt
              , Gt = k.backgroundColor
              , Xt = k.calloutMaxHeight
              , Jt = k.onScroll
              , en = k.shouldRestoreFocus
              , Rt = en === void 0 ? !0 : en
              , Zt = k.target
              , $t = k.hidden
              , rn = k.onLayerMounted
              , En = k.popupProps
              , fn = t.useRef(null)
              , bn = t.useState(null)
              , un = bn[0]
              , Tn = bn[1]
              , an = t.useCallback(function(Ae) {
                Tn(Ae)
            }, [])
              , ct = (0,
            me.r)(fn, M)
              , vn = (0,
            De.e)(k.target, {
                current: un
            })
              , yn = vn[0]
              , Cn = vn[1]
              , sn = Le(k, yn, Cn)
              , Wt = Ge(k, fn, un, yn, sn)
              , Dn = We(k, sn, Wt)
              , S = Xe(k, Wt, fn, yn, Cn)
              , x = S[0]
              , p = S[1]
              , n = (Wt == null ? void 0 : Wt.elementPosition.top) && (Wt == null ? void 0 : Wt.elementPosition.bottom)
              , s = (0,
            c.pi)((0,
            c.pi)({}, Wt == null ? void 0 : Wt.elementPosition), {
                maxHeight: Dn
            });
            if (n && (s.bottom = void 0),
            Ze(k, Wt, un),
            t.useEffect(function() {
                $t || rn == null || rn()
            }, [$t]),
            !Cn)
                return null;
            var E = Ht
              , se = _e && !!Zt
              , ve = Me(q, {
                theme: k.theme,
                className: Fe,
                overflowYHidden: E,
                calloutWidth: st,
                positions: Wt,
                beakWidth: qe,
                backgroundColor: Gt,
                calloutMaxWidth: bt,
                calloutMinWidth: _t,
                doNotLayer: At
            })
              , Ie = (0,
            c.pi)((0,
            c.pi)({
                maxHeight: Xt || "100%"
            }, ge), E && {
                overflowY: "hidden"
            })
              , Ue = k.hidden ? {
                visibility: "hidden"
            } : void 0;
            return t.createElement("div", {
                ref: ct,
                className: ve.container,
                style: Ue
            }, t.createElement("div", (0,
            c.pi)({}, (0,
            ie.pq)(k, ie.n7, Qe), {
                className: (0,
                te.i)(ve.root, Wt && Wt.targetEdge && we[Wt.targetEdge]),
                style: Wt ? (0,
                c.pi)({}, s) : He,
                tabIndex: -1,
                ref: an
            }), se && t.createElement("div", {
                className: ve.beak,
                style: ut(Wt)
            }), se && t.createElement("div", {
                className: ve.beakCurtain
            }), t.createElement(_.G, (0,
            c.pi)({
                role: k.role,
                "aria-roledescription": k["aria-roledescription"],
                ariaDescribedBy: Te,
                ariaLabel: fe,
                ariaLabelledBy: Pe,
                className: ve.calloutMain,
                onDismiss: k.onDismiss,
                onMouseDown: x,
                onMouseUp: p,
                onRestoreFocus: k.onRestoreFocus,
                onScroll: Jt,
                shouldRestoreFocus: Rt,
                style: Ie
            }, En), lt)))
        }), function(y, M) {
            return !M.shouldUpdateWhenHidden && y.hidden && M.hidden ? !0 : (0,
            ue.Vv)(y, M)
        });
        function ut(y) {
            var M, k, q = (0,
            c.pi)((0,
            c.pi)({}, (M = y == null ? void 0 : y.beakPosition) === null || M === void 0 ? void 0 : M.elementPosition), {
                display: !((k = y == null ? void 0 : y.beakPosition) === null || k === void 0) && k.hideBeak ? "none" : void 0
            });
            return !q.top && !q.bottom && !q.left && !q.right && (q.left = nt.left,
            q.top = nt.top),
            q
        }
        function St(y, M) {
            return Dt(y.elementPosition, M.elementPosition) && Dt(y.beakPosition.elementPosition, M.beakPosition.elementPosition)
        }
        function Dt(y, M) {
            for (var k in M)
                if (M.hasOwnProperty(k)) {
                    var q = y[k]
                      , ge = M[k];
                    if (q !== void 0 && ge !== void 0) {
                        if (q.toFixed(2) !== ge.toFixed(2))
                            return !1
                    } else
                        return !1
                }
            return !0
        }
        Ve.displayName = ke;
        function gt(y) {
            return {
                height: y,
                width: y
            }
        }
        var rt = {
            container: "ms-Callout-container",
            root: "ms-Callout",
            beak: "ms-Callout-beak",
            beakCurtain: "ms-Callout-beakCurtain",
            calloutMain: "ms-Callout-main"
        }
          , Pt = function(y) {
            var M, k = y.theme, q = y.className, ge = y.overflowYHidden, fe = y.calloutWidth, Te = y.beakWidth, Pe = y.backgroundColor, Fe = y.calloutMaxWidth, _e = y.calloutMinWidth, lt = y.doNotLayer, qe = (0,
            z.Cn)(rt, k), st = k.semanticColors, bt = k.effects;
            return {
                container: [qe.container, {
                    position: "relative"
                }],
                root: [qe.root, k.fonts.medium, {
                    position: "absolute",
                    display: "flex",
                    zIndex: lt ? z.bR.Layer : void 0,
                    boxSizing: "border-box",
                    borderRadius: bt.roundedCorner2,
                    boxShadow: bt.elevation16,
                    selectors: (M = {},
                    M[z.qJ] = {
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "WindowText"
                    },
                    M)
                }, (0,
                z.e2)(), q, !!fe && {
                    width: fe
                }, !!Fe && {
                    maxWidth: Fe
                }, !!_e && {
                    minWidth: _e
                }],
                beak: [qe.beak, {
                    position: "absolute",
                    backgroundColor: st.menuBackground,
                    boxShadow: "inherit",
                    border: "inherit",
                    boxSizing: "border-box",
                    transform: "rotate(45deg)"
                }, gt(Te), Pe && {
                    backgroundColor: Pe
                }],
                beakCurtain: [qe.beakCurtain, {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: st.menuBackground,
                    borderRadius: bt.roundedCorner2
                }],
                calloutMain: [qe.calloutMain, {
                    backgroundColor: st.menuBackground,
                    overflowX: "hidden",
                    overflowY: "auto",
                    position: "relative",
                    width: "100%",
                    borderRadius: bt.roundedCorner2
                }, ge && {
                    overflowY: "hidden"
                }, Pe && {
                    backgroundColor: Pe
                }]
            }
        }
          , Ye = (0,
        r.z)(Ve, Pt, void 0, {
            scope: "CalloutContent"
        })
          , Et = e(39940)
          , kt = t.forwardRef(function(y, M) {
            var k = y.layerProps
              , q = y.doNotLayer
              , ge = (0,
            c._T)(y, ["layerProps", "doNotLayer"])
              , fe = t.createElement(Ye, (0,
            c.pi)({}, ge, {
                doNotLayer: q,
                ref: M
            }));
            return q ? fe : t.createElement(Et.m, (0,
            c.pi)({}, k), fe)
        });
        kt.displayName = "Callout"
    }
    ,
    48961: (mt,Ne,e)=>{
        e.d(Ne, {
            J: ()=>re
        });
        var c = e(1238)
          , t = e(2784)
          , r = e(23324)
          , v = e(36775)
          , Se = e(57312)
          , Q = (0,
        Se.y)()
          , be = t.forwardRef(function(g, ee) {
            var O = g.checked
              , U = O === void 0 ? !1 : O
              , J = g.className
              , $ = g.theme
              , W = g.styles
              , P = g.useFastIcons
              , oe = P === void 0 ? !0 : P
              , V = Q(W, {
                theme: $,
                className: J,
                checked: U
            })
              , ae = oe ? r.xu : v.J;
            return t.createElement("div", {
                className: V.root,
                ref: ee
            }, t.createElement(ae, {
                iconName: "CircleRing",
                className: V.circle
            }), t.createElement(ae, {
                iconName: "StatusCircleCheckmark",
                className: V.check
            }))
        });
        be.displayName = "CheckBase";
        var he = e(56996)
          , ie = e(75649)
          , te = e(8422)
          , ue = {
            root: "ms-Check",
            circle: "ms-Check-circle",
            check: "ms-Check-check",
            checkHost: "ms-Check-checkHost"
        }
          , K = function(g) {
            var ee, O, U, J, $, W = g.height, P = W === void 0 ? g.checkBoxHeight || "18px" : W, oe = g.checked, V = g.className, ae = g.theme, X = ae.palette, pe = ae.semanticColors, b = ae.fonts, T = (0,
            te.zg)(ae), N = (0,
            ie.Cn)(ue, ae), D = {
                fontSize: P,
                position: "absolute",
                left: 0,
                top: 0,
                width: P,
                height: P,
                textAlign: "center",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                verticalAlign: "middle"
            };
            return {
                root: [N.root, b.medium, {
                    lineHeight: "1",
                    width: P,
                    height: P,
                    verticalAlign: "top",
                    position: "relative",
                    userSelect: "none",
                    selectors: (ee = {
                        ":before": {
                            content: '""',
                            position: "absolute",
                            top: "1px",
                            right: "1px",
                            bottom: "1px",
                            left: "1px",
                            borderRadius: "50%",
                            opacity: 1,
                            background: pe.bodyBackground
                        }
                    },
                    ee["." + N.checkHost + ":hover &, ." + N.checkHost + ":focus &, &:hover, &:focus"] = {
                        opacity: 1
                    },
                    ee)
                }, oe && ["is-checked", {
                    selectors: {
                        ":before": {
                            background: X.themePrimary,
                            opacity: 1,
                            selectors: (O = {},
                            O[ie.qJ] = {
                                background: "Window"
                            },
                            O)
                        }
                    }
                }], V],
                circle: [N.circle, D, {
                    color: X.neutralSecondary,
                    selectors: (U = {},
                    U[ie.qJ] = {
                        color: "WindowText"
                    },
                    U)
                }, oe && {
                    color: X.white
                }],
                check: [N.check, D, {
                    opacity: 0,
                    color: X.neutralSecondary,
                    fontSize: ie.ld.medium,
                    left: T ? "-0.5px" : ".5px",
                    top: "-1px",
                    selectors: (J = {
                        ":hover": {
                            opacity: 1
                        }
                    },
                    J[ie.qJ] = (0,
                    he.pi)({}, (0,
                    ie.xM)()),
                    J)
                }, oe && {
                    opacity: 1,
                    color: X.white,
                    fontWeight: 900,
                    selectors: ($ = {},
                    $[ie.qJ] = {
                        border: "none",
                        color: "WindowText"
                    },
                    $)
                }],
                checkHost: N.checkHost
            }
        }
          , re = (0,
        c.z)(be, K, void 0, {
            scope: "Check"
        }, !0)
    }
    ,
    81232: (mt,Ne,e)=>{
        e.d(Ne, {
            V: ()=>It
        });
        var c = e(1238)
          , t = e(56996)
          , r = e(2784)
          , v = e(57312)
          , Se = e(35577)
          , Q = e(62231)
          , be = e(51169)
          , he = e(47321)
          , ie = e(18003)
          , te = e(18690)
          , ue = e(95562)
          , K = e(51370)
          , re = e(73661)
          , g = e(75649)
          , ee = g.D1.durationValue2
          , O = {
            root: "ms-Modal",
            main: "ms-Dialog-main",
            scrollableContent: "ms-Modal-scrollableContent",
            isOpen: "is-open",
            layer: "ms-Modal-Layer"
        }
          , U = function(w) {
            var ce, B = w.className, _ = w.containerClassName, ye = w.scrollableContentClassName, z = w.isOpen, ne = w.isVisible, I = w.hasBeenOpened, o = w.modalRectangleTop, me = w.theme, De = w.topOffsetFixed, xe = w.isModeless, ke = w.layerClassName, we = w.isDefaultDragHandle, nt = w.windowInnerHeight, He = me.palette, Qe = me.effects, Y = me.fonts, Me = (0,
            g.Cn)(O, me);
            return {
                root: [Me.root, Y.medium, {
                    backgroundColor: "transparent",
                    position: "fixed",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    pointerEvents: "none",
                    transition: "opacity " + ee
                }, De && typeof o == "number" && I && {
                    alignItems: "flex-start"
                }, z && Me.isOpen, ne && {
                    opacity: 1
                }, ne && !xe && {
                    pointerEvents: "auto"
                }, B],
                main: [Me.main, {
                    boxShadow: Qe.elevation64,
                    borderRadius: Qe.roundedCorner2,
                    backgroundColor: He.white,
                    boxSizing: "border-box",
                    position: "relative",
                    textAlign: "left",
                    outline: "3px solid transparent",
                    maxHeight: "calc(100% - 32px)",
                    maxWidth: "calc(100% - 32px)",
                    minHeight: "176px",
                    minWidth: "288px",
                    overflowY: "auto",
                    zIndex: xe ? g.bR.Layer : void 0
                }, xe && {
                    pointerEvents: "auto"
                }, De && typeof o == "number" && I && {
                    top: o
                }, we && {
                    cursor: "move"
                }, _],
                scrollableContent: [Me.scrollableContent, {
                    overflowY: "auto",
                    flexGrow: 1,
                    maxHeight: "100vh",
                    selectors: (ce = {},
                    ce["@supports (-webkit-overflow-scrolling: touch)"] = {
                        maxHeight: nt
                    },
                    ce)
                }, ye],
                layer: xe && [ke, Me.layer, {
                    pointerEvents: "none"
                }],
                keyboardMoveIconContainer: {
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    padding: "3px 0px"
                },
                keyboardMoveIcon: {
                    fontSize: Y.xLargePlus.fontSize,
                    width: "24px"
                }
            }
        }
          , J = e(64121)
          , $ = e(39940)
          , W = e(76938)
          , P = e(96441)
          , oe = e(42958)
          , V = e(53841)
          , ae = e(36775)
          , X = e(32523)
          , pe = (0,
        X.NF)(function(w, ce) {
            return {
                root: (0,
                g.y0)(w, ce && {
                    touchAction: "none",
                    selectors: {
                        "& *": {
                            userSelect: "none"
                        }
                    }
                })
            }
        })
          , b = e(97280)
          , T = {
            touch: {
                start: "touchstart",
                move: "touchmove",
                stop: "touchend"
            },
            mouse: {
                start: "mousedown",
                move: "mousemove",
                stop: "mouseup"
            }
        }
          , N = function(w) {
            (0,
            t.ZT)(ce, w);
            function ce(B) {
                var _ = w.call(this, B) || this;
                return _._currentEventType = T.mouse,
                _._events = [],
                _._onMouseDown = function(ye) {
                    var z = r.Children.only(_.props.children).props.onMouseDown;
                    return z && z(ye),
                    _._currentEventType = T.mouse,
                    _._onDragStart(ye)
                }
                ,
                _._onMouseUp = function(ye) {
                    var z = r.Children.only(_.props.children).props.onMouseUp;
                    return z && z(ye),
                    _._currentEventType = T.mouse,
                    _._onDragStop(ye)
                }
                ,
                _._onTouchStart = function(ye) {
                    var z = r.Children.only(_.props.children).props.onTouchStart;
                    return z && z(ye),
                    _._currentEventType = T.touch,
                    _._onDragStart(ye)
                }
                ,
                _._onTouchEnd = function(ye) {
                    var z = r.Children.only(_.props.children).props.onTouchEnd;
                    z && z(ye),
                    _._currentEventType = T.touch,
                    _._onDragStop(ye)
                }
                ,
                _._onDragStart = function(ye) {
                    if (typeof ye.button == "number" && ye.button !== 0)
                        return !1;
                    if (!(_.props.handleSelector && !_._matchesSelector(ye.target, _.props.handleSelector) || _.props.preventDragSelector && _._matchesSelector(ye.target, _.props.preventDragSelector))) {
                        _._touchId = _._getTouchId(ye);
                        var z = _._getControlPosition(ye);
                        if (z !== void 0) {
                            var ne = _._createDragDataFromPosition(z);
                            _.props.onStart && _.props.onStart(ye, ne),
                            _.setState({
                                isDragging: !0,
                                lastPosition: z
                            }),
                            _._events = [(0,
                            b.on)(document.body, _._currentEventType.move, _._onDrag, !0), (0,
                            b.on)(document.body, _._currentEventType.stop, _._onDragStop, !0)]
                        }
                    }
                }
                ,
                _._onDrag = function(ye) {
                    ye.type === "touchmove" && ye.preventDefault();
                    var z = _._getControlPosition(ye);
                    if (!!z) {
                        var ne = _._createUpdatedDragData(_._createDragDataFromPosition(z))
                          , I = ne.position;
                        _.props.onDragChange && _.props.onDragChange(ye, ne),
                        _.setState({
                            position: I,
                            lastPosition: z
                        })
                    }
                }
                ,
                _._onDragStop = function(ye) {
                    if (!!_.state.isDragging) {
                        var z = _._getControlPosition(ye);
                        if (!!z) {
                            var ne = _._createDragDataFromPosition(z);
                            _.setState({
                                isDragging: !1,
                                lastPosition: void 0
                            }),
                            _.props.onStop && _.props.onStop(ye, ne),
                            _.props.position && _.setState({
                                position: _.props.position
                            }),
                            _._events.forEach(function(I) {
                                return I()
                            })
                        }
                    }
                }
                ,
                _.state = {
                    isDragging: !1,
                    position: _.props.position || {
                        x: 0,
                        y: 0
                    },
                    lastPosition: void 0
                },
                _
            }
            return ce.prototype.componentDidUpdate = function(B) {
                this.props.position && (!B.position || this.props.position !== B.position) && this.setState({
                    position: this.props.position
                })
            }
            ,
            ce.prototype.componentWillUnmount = function() {
                this._events.forEach(function(B) {
                    return B()
                })
            }
            ,
            ce.prototype.render = function() {
                var B = r.Children.only(this.props.children)
                  , _ = B.props
                  , ye = this.props.position
                  , z = this.state
                  , ne = z.position
                  , I = z.isDragging
                  , o = ne.x
                  , me = ne.y;
                return ye && !I && (o = ye.x,
                me = ye.y),
                r.cloneElement(B, {
                    style: (0,
                    t.pi)((0,
                    t.pi)({}, _.style), {
                        transform: "translate(" + o + "px, " + me + "px)"
                    }),
                    className: pe(_.className, this.state.isDragging).root,
                    onMouseDown: this._onMouseDown,
                    onMouseUp: this._onMouseUp,
                    onTouchStart: this._onTouchStart,
                    onTouchEnd: this._onTouchEnd
                })
            }
            ,
            ce.prototype._getControlPosition = function(B) {
                var _ = this._getActiveTouch(B);
                if (!(this._touchId !== void 0 && !_)) {
                    var ye = _ || B;
                    return {
                        x: ye.clientX,
                        y: ye.clientY
                    }
                }
            }
            ,
            ce.prototype._getActiveTouch = function(B) {
                return B.targetTouches && this._findTouchInTouchList(B.targetTouches) || B.changedTouches && this._findTouchInTouchList(B.changedTouches)
            }
            ,
            ce.prototype._getTouchId = function(B) {
                var _ = B.targetTouches && B.targetTouches[0] || B.changedTouches && B.changedTouches[0];
                if (_)
                    return _.identifier
            }
            ,
            ce.prototype._matchesSelector = function(B, _) {
                if (!B || B === document.body)
                    return !1;
                var ye = B.matches || B.webkitMatchesSelector || B.msMatchesSelector;
                return ye ? ye.call(B, _) || this._matchesSelector(B.parentElement, _) : !1
            }
            ,
            ce.prototype._findTouchInTouchList = function(B) {
                if (this._touchId !== void 0) {
                    for (var _ = 0; _ < B.length; _++)
                        if (B[_].identifier === this._touchId)
                            return B[_]
                }
            }
            ,
            ce.prototype._createDragDataFromPosition = function(B) {
                var _ = this.state.lastPosition;
                return _ === void 0 ? {
                    delta: {
                        x: 0,
                        y: 0
                    },
                    lastPosition: B,
                    position: B
                } : {
                    delta: {
                        x: B.x - _.x,
                        y: B.y - _.y
                    },
                    lastPosition: _,
                    position: B
                }
            }
            ,
            ce.prototype._createUpdatedDragData = function(B) {
                var _ = this.state.position;
                return {
                    position: {
                        x: _.x + B.delta.x,
                        y: _.y + B.delta.y
                    },
                    delta: B.delta,
                    lastPosition: _
                }
            }
            ,
            ce
        }(r.Component)
          , D = e(57412)
          , H = e(87891)
          , l = e(73823)
          , d = e(91264)
          , a = e(72948)
          , u = e(91062)
          , C = e(27883)
          , h = {
            x: 0,
            y: 0
        }
          , f = {
            isOpen: !1,
            isDarkOverlay: !0,
            className: "",
            containerClassName: "",
            enableAriaHiddenSiblings: !0
        }
          , i = (0,
        v.y)()
          , m = function(w) {
            var ce = 10;
            return w.shiftKey ? w.ctrlKey || (ce = 50) : w.ctrlKey && (ce = 1),
            ce
        }
          , R = function(w, ce) {
            r.useImperativeHandle(w.componentRef, function() {
                return {
                    focus: function() {
                        ce.current && ce.current.focus()
                    }
                }
            }, [ce])
        }
          , L = r.forwardRef(function(w, ce) {
            var B, _, ye, z, ne, I = (0,
            be.j)(f, w), o = I.allowTouchBodyScroll, me = I.className, De = I.children, xe = I.containerClassName, ke = I.scrollableContentClassName, we = I.elementToFocusOnDismiss, nt = I.firstFocusableSelector, He = I.focusTrapZoneProps, Qe = I.forceFocusInsideTrap, Y = I.disableRestoreFocus, Me = Y === void 0 ? I.ignoreExternalFocusing : Y, Le = I.isBlocking, We = I.isAlert, Ge = I.isClickableOutsideFocusTrap, Ze = I.isDarkOverlay, Xe = I.onDismiss, Ve = I.layerProps, ut = I.overlay, St = I.isOpen, Dt = I.titleAriaId, gt = I.styles, rt = I.subtitleAriaId, Pt = I.theme, Ye = I.topOffsetFixed, Et = I.responsiveMode, kt = I.onLayerDidMount, y = I.isModeless, M = I.dragOptions, k = I.onDismissed, q = I.enableAriaHiddenSiblings, ge = I.popupProps, fe = r.useRef(null), Te = r.useRef(null), Pe = (0,
            H.r)(Te, He == null ? void 0 : He.componentRef), Fe = r.useRef(null), _e = (0,
            H.r)(fe, ce), lt = (0,
            P.q)(_e), qe = (0,
            l.M)("ModalFocusTrapZone", He == null ? void 0 : He.id), st = (0,
            D.zY)(), bt = (0,
            d.L)(), _t = bt.setTimeout, At = bt.clearTimeout, jt = r.useState(St), Vt = jt[0], Ht = jt[1], Gt = r.useState(St), Xt = Gt[0], Jt = Gt[1], en = r.useState(h), Rt = en[0], Zt = en[1], $t = r.useState(), rn = $t[0], En = $t[1], fn = (0,
            a.k)(!1), bn = fn[0], un = fn[1], Tn = un.toggle, an = un.setFalse, ct = (0,
            u.B)(function() {
                return {
                    onModalCloseTimer: 0,
                    allowTouchBodyScroll: o,
                    scrollableContent: null,
                    lastSetCoordinates: h,
                    events: new he.r({})
                }
            }), vn = (M || {}).keepInBounds, yn = We != null ? We : Le && !y, Cn = Ve === void 0 ? "" : Ve.className, sn = i(gt, {
                theme: Pt,
                className: me,
                containerClassName: xe,
                scrollableContentClassName: ke,
                isOpen: St,
                isVisible: Xt,
                hasBeenOpened: ct.hasBeenOpened,
                modalRectangleTop: rn,
                topOffsetFixed: Ye,
                isModeless: y,
                layerClassName: Cn,
                windowInnerHeight: st == null ? void 0 : st.innerHeight,
                isDefaultDragHandle: M && !M.dragHandleSelector
            }), Wt = (0,
            t.pi)((0,
            t.pi)({
                eventBubblingEnabled: !1
            }, Ve), {
                onLayerDidMount: Ve && Ve.onLayerDidMount ? Ve.onLayerDidMount : kt,
                insertFirst: (Ve == null ? void 0 : Ve.insertFirst) || y,
                className: sn.layer
            }), Dn = r.useCallback(function(Ae) {
                Ae ? ct.allowTouchBodyScroll ? (0,
                ie.eC)(Ae, ct.events) : (0,
                ie.C7)(Ae, ct.events) : ct.events.off(ct.scrollableContent),
                ct.scrollableContent = Ae
            }, [ct]), S = function() {
                var Ae = Fe.current
                  , Re = Ae == null ? void 0 : Ae.getBoundingClientRect();
                Re && (Ye && En(Re.top),
                vn && (ct.minPosition = {
                    x: -Re.left,
                    y: -Re.top
                },
                ct.maxPosition = {
                    x: Re.left,
                    y: Re.top
                }))
            }, x = r.useCallback(function(Ae, Re) {
                var je = ct.minPosition
                  , tt = ct.maxPosition;
                return vn && je && tt && (Re = Math.max(je[Ae], Re),
                Re = Math.min(tt[Ae], Re)),
                Re
            }, [vn, ct]), p = function() {
                var Ae;
                ct.lastSetCoordinates = h,
                an(),
                ct.isInKeyboardMoveMode = !1,
                Ht(!1),
                Zt(h),
                (Ae = ct.disposeOnKeyUp) === null || Ae === void 0 || Ae.call(ct),
                k == null || k()
            }, n = r.useCallback(function() {
                an(),
                ct.isInKeyboardMoveMode = !1
            }, [ct, an]), s = r.useCallback(function(Ae, Re) {
                Zt(function(je) {
                    return {
                        x: x("x", je.x + Re.delta.x),
                        y: x("y", je.y + Re.delta.y)
                    }
                })
            }, [x]), E = r.useCallback(function() {
                Te.current && Te.current.focus()
            }, []), se = function() {
                var Ae = function(Re) {
                    if (Re.altKey && Re.ctrlKey && Re.keyCode === te.m.space) {
                        Re.preventDefault(),
                        Re.stopPropagation();
                        return
                    }
                    var je = Re.altKey || Re.keyCode === te.m.escape;
                    if (bn && je && an(),
                    ct.isInKeyboardMoveMode && (Re.keyCode === te.m.escape || Re.keyCode === te.m.enter) && (ct.isInKeyboardMoveMode = !1,
                    Re.preventDefault(),
                    Re.stopPropagation()),
                    ct.isInKeyboardMoveMode) {
                        var tt = !0
                          , ft = m(Re);
                        switch (Re.keyCode) {
                        case te.m.escape:
                            Zt(ct.lastSetCoordinates);
                        case te.m.enter:
                            {
                                ct.lastSetCoordinates = h;
                                break
                            }
                        case te.m.up:
                            {
                                Zt(function(vt) {
                                    return {
                                        x: vt.x,
                                        y: x("y", vt.y - ft)
                                    }
                                });
                                break
                            }
                        case te.m.down:
                            {
                                Zt(function(vt) {
                                    return {
                                        x: vt.x,
                                        y: x("y", vt.y + ft)
                                    }
                                });
                                break
                            }
                        case te.m.left:
                            {
                                Zt(function(vt) {
                                    return {
                                        x: x("x", vt.x - ft),
                                        y: vt.y
                                    }
                                });
                                break
                            }
                        case te.m.right:
                            {
                                Zt(function(vt) {
                                    return {
                                        x: x("x", vt.x + ft),
                                        y: vt.y
                                    }
                                });
                                break
                            }
                        default:
                            tt = !1
                        }
                        tt && (Re.preventDefault(),
                        Re.stopPropagation())
                    }
                };
                ct.lastSetCoordinates = Rt,
                an(),
                ct.isInKeyboardMoveMode = !0,
                ct.events.on(st, "keydown", Ae, !0),
                ct.disposeOnKeyDown = function() {
                    ct.events.off(st, "keydown", Ae, !0),
                    ct.disposeOnKeyDown = void 0
                }
            }, ve = function(Ae) {
                var Re, je;
                (Re = He == null ? void 0 : He.onBlur) === null || Re === void 0 || Re.call(He, Ae),
                ct.lastSetCoordinates = h,
                ct.isInKeyboardMoveMode = !1,
                (je = ct.disposeOnKeyDown) === null || je === void 0 || je.call(ct)
            }, Ie = function() {
                var Ae = function(Re) {
                    Re.altKey && Re.ctrlKey && Re.keyCode === te.m.space && (0,
                    ue.t)(ct.scrollableContent, Re.target) && (Tn(),
                    Re.preventDefault(),
                    Re.stopPropagation())
                };
                ct.disposeOnKeyUp || (ct.events.on(st, "keyup", Ae, !0),
                ct.disposeOnKeyUp = function() {
                    ct.events.off(st, "keyup", Ae, !0),
                    ct.disposeOnKeyUp = void 0
                }
                )
            };
            r.useEffect(function() {
                At(ct.onModalCloseTimer),
                St && (requestAnimationFrame(function() {
                    return _t(S, 0)
                }),
                Ht(!0),
                M && Ie(),
                ct.hasBeenOpened = !0,
                Jt(!0)),
                !St && Vt && (ct.onModalCloseTimer = _t(p, parseFloat(ee) * 1e3),
                Jt(!1))
            }, [Vt, St]),
            (0,
            C.k)(function() {
                ct.events.dispose()
            }),
            R(I, Te);
            var Ue = r.createElement(re.P, (0,
            t.pi)({}, He, {
                id: qe,
                ref: Fe,
                componentRef: Pe,
                className: (0,
                K.i)(sn.main, He == null ? void 0 : He.className),
                elementToFocusOnDismiss: (B = He == null ? void 0 : He.elementToFocusOnDismiss) !== null && B !== void 0 ? B : we,
                isClickableOutsideFocusTrap: (_ = He == null ? void 0 : He.isClickableOutsideFocusTrap) !== null && _ !== void 0 ? _ : y || Ge || !Le,
                disableRestoreFocus: (ye = He == null ? void 0 : He.disableRestoreFocus) !== null && ye !== void 0 ? ye : Me,
                forceFocusInsideTrap: ((z = He == null ? void 0 : He.forceFocusInsideTrap) !== null && z !== void 0 ? z : Qe) && !y,
                firstFocusableSelector: (He == null ? void 0 : He.firstFocusableSelector) || nt,
                focusPreviouslyFocusedInnerElement: (ne = He == null ? void 0 : He.focusPreviouslyFocusedInnerElement) !== null && ne !== void 0 ? ne : !0,
                onBlur: ct.isInKeyboardMoveMode ? ve : void 0
            }), M && ct.isInKeyboardMoveMode && r.createElement("div", {
                className: sn.keyboardMoveIconContainer
            }, M.keyboardMoveIconProps ? r.createElement(ae.J, (0,
            t.pi)({}, M.keyboardMoveIconProps)) : r.createElement(ae.J, {
                iconName: "move",
                className: sn.keyboardMoveIcon
            })), r.createElement("div", {
                ref: Dn,
                className: sn.scrollableContent,
                "data-is-scrollable": !0
            }, M && bn && r.createElement(M.menu, {
                items: [{
                    key: "move",
                    text: M.moveMenuItemText,
                    onClick: se
                }, {
                    key: "close",
                    text: M.closeMenuItemText,
                    onClick: p
                }],
                onDismiss: an,
                alignTargetEdge: !0,
                coverTarget: !0,
                directionalHint: V.b.topLeftEdge,
                directionalHintFixed: !0,
                shouldFocusOnMount: !0,
                target: ct.scrollableContent
            }), De));
            return Vt && lt >= (Et || oe.eD.small) && r.createElement($.m, (0,
            t.pi)({
                ref: _e
            }, Wt), r.createElement(W.G, (0,
            t.pi)({
                role: yn ? "alertdialog" : "dialog",
                ariaLabelledBy: Dt,
                ariaDescribedBy: rt,
                onDismiss: Xe,
                shouldRestoreFocus: !Me,
                enableAriaHiddenSiblings: q,
                "aria-modal": !y
            }, ge), r.createElement("div", {
                className: sn.root,
                role: y ? void 0 : "document"
            }, !y && r.createElement(J.a, (0,
            t.pi)({
                "aria-hidden": !0,
                isDarkThemed: Ze,
                onClick: Le ? void 0 : Xe,
                allowTouchBodyScroll: o
            }, ut)), M ? r.createElement(N, {
                handleSelector: M.dragHandleSelector || "#" + qe,
                preventDragSelector: "button",
                onStart: n,
                onDragChange: s,
                onStop: E,
                position: Rt
            }, Ue) : Ue))) || null
        });
        L.displayName = "Modal";
        function Z(w) {}
        var F = (0,
        c.z)(L, U, void 0, {
            scope: "Modal",
            fields: ["theme", "styles", "enableAriaHiddenSiblings"]
        });
        F.displayName = "Modal";
        var A = e(85758)
          , j = e(74805)
          , G = e(76984)
          , le = e(38643)
          , Ee = (0,
        v.y)()
          , de = r.createElement(le.c, null).type
          , Ce = "DialogContent"
          , Be = function(w) {
            (0,
            t.ZT)(ce, w);
            function ce(B) {
                var _ = w.call(this, B) || this;
                return (0,
                A.l)(_),
                (0,
                j.b)(Ce, B, {
                    titleId: "titleProps.id"
                }),
                _
            }
            return ce.prototype.render = function() {
                var B = this.props, _ = B.showCloseButton, ye = B.className, z = B.closeButtonAriaLabel, ne = B.onDismiss, I = B.subTextId, o = B.subText, me = B.titleProps, De = me === void 0 ? {} : me, xe = B.titleId, ke = B.title, we = B.type, nt = B.styles, He = B.theme, Qe = B.draggableHeaderClassName, Y = Ee(nt, {
                    theme: He,
                    className: ye,
                    isLargeHeader: we === Q.i.largeHeader,
                    isClose: we === Q.i.close,
                    draggableHeaderClassName: Qe
                }), Me = this._groupChildren(), Le;
                return o && (Le = r.createElement("p", {
                    className: Y.subText,
                    id: I
                }, o)),
                r.createElement("div", {
                    className: Y.content
                }, r.createElement("div", {
                    className: Y.header
                }, r.createElement("div", (0,
                t.pi)({
                    id: xe,
                    role: "heading",
                    "aria-level": 1
                }, De, {
                    className: (0,
                    K.i)(Y.title, De.className)
                }), ke), r.createElement("div", {
                    className: Y.topButton
                }, this.props.topButtonsProps.map(function(We, Ge) {
                    return r.createElement(G.h, (0,
                    t.pi)({
                        key: We.uniqueId || Ge
                    }, We))
                }), (we === Q.i.close || _ && we !== Q.i.largeHeader) && r.createElement(G.h, {
                    className: Y.button,
                    iconProps: {
                        iconName: "Cancel"
                    },
                    ariaLabel: z,
                    onClick: ne
                }))), r.createElement("div", {
                    className: Y.inner
                }, r.createElement("div", {
                    className: Y.innerContent
                }, Le, Me.contents), Me.footers))
            }
            ,
            ce.prototype._groupChildren = function() {
                var B = {
                    footers: [],
                    contents: []
                };
                return r.Children.map(this.props.children, function(_) {
                    typeof _ == "object" && _ !== null && _.type === de ? B.footers.push(_) : B.contents.push(_)
                }),
                B
            }
            ,
            ce.defaultProps = {
                showCloseButton: !1,
                className: "",
                topButtonsProps: [],
                closeButtonAriaLabel: "Close"
            },
            ce = (0,
            t.gn)([oe.Ae], ce),
            ce
        }(r.Component)
          , Oe = {
            contentLgHeader: "ms-Dialog-lgHeader",
            close: "ms-Dialog--close",
            subText: "ms-Dialog-subText",
            header: "ms-Dialog-header",
            headerLg: "ms-Dialog--lgHeader",
            button: "ms-Dialog-button ms-Dialog-button--close",
            inner: "ms-Dialog-inner",
            content: "ms-Dialog-content",
            title: "ms-Dialog-title"
        }
          , at = function(w) {
            var ce, B, _, ye = w.className, z = w.theme, ne = w.isLargeHeader, I = w.isClose, o = w.hidden, me = w.isMultiline, De = w.draggableHeaderClassName, xe = z.palette, ke = z.fonts, we = z.effects, nt = z.semanticColors, He = (0,
            g.Cn)(Oe, z);
            return {
                content: [ne && [He.contentLgHeader, {
                    borderTop: "4px solid " + xe.themePrimary
                }], I && He.close, {
                    flexGrow: 1,
                    overflowY: "hidden"
                }, ye],
                subText: [He.subText, ke.medium, {
                    margin: "0 0 24px 0",
                    color: nt.bodySubtext,
                    lineHeight: "1.5",
                    wordWrap: "break-word",
                    fontWeight: g.lq.regular
                }],
                header: [He.header, {
                    position: "relative",
                    width: "100%",
                    boxSizing: "border-box"
                }, I && He.close, De && [De, {
                    cursor: "move"
                }]],
                button: [He.button, o && {
                    selectors: {
                        ".ms-Icon.ms-Icon--Cancel": {
                            color: nt.buttonText,
                            fontSize: g.ld.medium
                        }
                    }
                }],
                inner: [He.inner, {
                    padding: "0 24px 24px",
                    selectors: (ce = {},
                    ce["@media (min-width: " + g.QQ + "px) and (max-width: " + g.mV + "px)"] = {
                        padding: "0 16px 16px"
                    },
                    ce)
                }],
                innerContent: [He.content, {
                    position: "relative",
                    width: "100%"
                }],
                title: [He.title, ke.xLarge, {
                    color: nt.bodyText,
                    margin: "0",
                    minHeight: ke.xLarge.fontSize,
                    padding: "16px 46px 20px 24px",
                    lineHeight: "normal",
                    selectors: (B = {},
                    B["@media (min-width: " + g.QQ + "px) and (max-width: " + g.mV + "px)"] = {
                        padding: "16px 46px 16px 16px"
                    },
                    B)
                }, ne && {
                    color: nt.menuHeader
                }, me && {
                    fontSize: ke.xxLarge.fontSize
                }],
                topButton: [{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    padding: "15px 15px 0 0",
                    selectors: (_ = {
                        "> *": {
                            flex: "0 0 auto"
                        },
                        ".ms-Dialog-button": {
                            color: nt.buttonText
                        },
                        ".ms-Dialog-button:hover": {
                            color: nt.buttonTextHovered,
                            borderRadius: we.roundedCorner2
                        }
                    },
                    _["@media (min-width: " + g.QQ + "px) and (max-width: " + g.mV + "px)"] = {
                        padding: "15px 8px 0 0"
                    },
                    _)
                }]
            }
        }
          , $e = (0,
        c.z)(Be, at, void 0, {
            scope: "DialogContent"
        })
          , et = (0,
        v.y)()
          , ht = {
            isDarkOverlay: !1,
            isBlocking: !1,
            className: "",
            containerClassName: "",
            topOffsetFixed: !1,
            enableAriaHiddenSiblings: !0
        }
          , Ct = {
            type: Q.i.normal,
            className: "",
            topButtonsProps: []
        }
          , dt = function(w) {
            (0,
            t.ZT)(ce, w);
            function ce(B) {
                var _ = w.call(this, B) || this;
                return _._getSubTextId = function() {
                    var ye = _.props
                      , z = ye.ariaDescribedById
                      , ne = ye.modalProps
                      , I = ye.dialogContentProps
                      , o = ye.subText
                      , me = ne && ne.subtitleAriaId || z;
                    return me || (me = (I && I.subText || o) && _._defaultSubTextId),
                    me
                }
                ,
                _._getTitleTextId = function() {
                    var ye = _.props
                      , z = ye.ariaLabelledById
                      , ne = ye.modalProps
                      , I = ye.dialogContentProps
                      , o = ye.title
                      , me = ne && ne.titleAriaId || z;
                    return me || (me = (I && I.title || o) && _._defaultTitleTextId),
                    me
                }
                ,
                _._id = (0,
                Se.z)("Dialog"),
                _._defaultTitleTextId = _._id + "-title",
                _._defaultSubTextId = _._id + "-subText",
                _
            }
            return ce.prototype.render = function() {
                var B, _, ye, z = this.props, ne = z.className, I = z.containerClassName, o = z.contentClassName, me = z.elementToFocusOnDismiss, De = z.firstFocusableSelector, xe = z.forceFocusInsideTrap, ke = z.styles, we = z.hidden, nt = z.disableRestoreFocus, He = nt === void 0 ? z.ignoreExternalFocusing : nt, Qe = z.isBlocking, Y = z.isClickableOutsideFocusTrap, Me = z.isDarkOverlay, Le = z.isOpen, We = Le === void 0 ? !we : Le, Ge = z.onDismiss, Ze = z.onDismissed, Xe = z.onLayerDidMount, Ve = z.responsiveMode, ut = z.subText, St = z.theme, Dt = z.title, gt = z.topButtonsProps, rt = z.type, Pt = z.minWidth, Ye = z.maxWidth, Et = z.modalProps, kt = (0,
                t.pi)({
                    onLayerDidMount: Xe
                }, Et == null ? void 0 : Et.layerProps), y, M;
                (Et == null ? void 0 : Et.dragOptions) && !(!((B = Et.dragOptions) === null || B === void 0) && B.dragHandleSelector) && (M = (0,
                t.pi)({}, Et.dragOptions),
                y = "ms-Dialog-draggable-header",
                M.dragHandleSelector = "." + y);
                var k = (0,
                t.pi)((0,
                t.pi)((0,
                t.pi)((0,
                t.pi)({}, ht), {
                    elementToFocusOnDismiss: me,
                    firstFocusableSelector: De,
                    forceFocusInsideTrap: xe,
                    disableRestoreFocus: He,
                    isClickableOutsideFocusTrap: Y,
                    responsiveMode: Ve,
                    className: ne,
                    containerClassName: I,
                    isBlocking: Qe,
                    isDarkOverlay: Me,
                    onDismissed: Ze
                }), Et), {
                    dragOptions: M,
                    layerProps: kt,
                    isOpen: We
                })
                  , q = (0,
                t.pi)((0,
                t.pi)((0,
                t.pi)({
                    className: o,
                    subText: ut,
                    title: Dt,
                    topButtonsProps: gt,
                    type: rt
                }, Ct), z.dialogContentProps), {
                    draggableHeaderClassName: y,
                    titleProps: (0,
                    t.pi)({
                        id: ((_ = z.dialogContentProps) === null || _ === void 0 ? void 0 : _.titleId) || this._defaultTitleTextId
                    }, (ye = z.dialogContentProps) === null || ye === void 0 ? void 0 : ye.titleProps)
                })
                  , ge = et(ke, {
                    theme: St,
                    className: k.className,
                    containerClassName: k.containerClassName,
                    hidden: we,
                    dialogDefaultMinWidth: Pt,
                    dialogDefaultMaxWidth: Ye
                });
                return r.createElement(F, (0,
                t.pi)({}, k, {
                    className: ge.root,
                    containerClassName: ge.main,
                    onDismiss: Ge || k.onDismiss,
                    subtitleAriaId: this._getSubTextId(),
                    titleAriaId: this._getTitleTextId()
                }), r.createElement($e, (0,
                t.pi)({
                    subTextId: this._defaultSubTextId,
                    showCloseButton: k.isBlocking,
                    onDismiss: Ge
                }, q), z.children))
            }
            ,
            ce.defaultProps = {
                hidden: !0
            },
            ce = (0,
            t.gn)([oe.Ae], ce),
            ce
        }(r.Component)
          , ze = {
            root: "ms-Dialog"
        }
          , pt = function(w) {
            var ce, B = w.className, _ = w.containerClassName, ye = w.dialogDefaultMinWidth, z = ye === void 0 ? "288px" : ye, ne = w.dialogDefaultMaxWidth, I = ne === void 0 ? "340px" : ne, o = w.hidden, me = w.theme, De = (0,
            g.Cn)(ze, me);
            return {
                root: [De.root, me.fonts.medium, B],
                main: [{
                    width: z,
                    outline: "3px solid transparent",
                    selectors: (ce = {},
                    ce["@media (min-width: " + g.dd + "px)"] = {
                        width: "auto",
                        maxWidth: I,
                        minWidth: z
                    },
                    ce)
                }, !o && {
                    display: "flex"
                }, _]
            }
        }
          , It = (0,
        c.z)(dt, pt, void 0, {
            scope: "Dialog"
        });
        It.displayName = "Dialog"
    }
    ,
    62231: (mt,Ne,e)=>{
        e.d(Ne, {
            i: ()=>c
        });
        var c;
        (function(t) {
            t[t.normal = 0] = "normal",
            t[t.largeHeader = 1] = "largeHeader",
            t[t.close = 2] = "close"
        }
        )(c || (c = {}))
    }
    ,
    38643: (mt,Ne,e)=>{
        e.d(Ne, {
            c: ()=>ue
        });
        var c = e(1238)
          , t = e(56996)
          , r = e(2784)
          , v = e(57312)
          , Se = e(85758)
          , Q = (0,
        v.y)()
          , be = function(K) {
            (0,
            t.ZT)(re, K);
            function re(g) {
                var ee = K.call(this, g) || this;
                return (0,
                Se.l)(ee),
                ee
            }
            return re.prototype.render = function() {
                var g = this.props
                  , ee = g.className
                  , O = g.styles
                  , U = g.theme;
                return this._classNames = Q(O, {
                    theme: U,
                    className: ee
                }),
                r.createElement("div", {
                    className: this._classNames.actions
                }, r.createElement("div", {
                    className: this._classNames.actionsRight
                }, this._renderChildrenAsActions()))
            }
            ,
            re.prototype._renderChildrenAsActions = function() {
                var g = this;
                return r.Children.map(this.props.children, function(ee) {
                    return ee ? r.createElement("span", {
                        className: g._classNames.action
                    }, ee) : null
                })
            }
            ,
            re
        }(r.Component)
          , he = e(75649)
          , ie = {
            actions: "ms-Dialog-actions",
            action: "ms-Dialog-action",
            actionsRight: "ms-Dialog-actionsRight"
        }
          , te = function(K) {
            var re = K.className
              , g = K.theme
              , ee = (0,
            he.Cn)(ie, g);
            return {
                actions: [ee.actions, {
                    position: "relative",
                    width: "100%",
                    minHeight: "24px",
                    lineHeight: "24px",
                    margin: "16px 0 0",
                    fontSize: "0",
                    selectors: {
                        ".ms-Button": {
                            lineHeight: "normal",
                            verticalAlign: "middle"
                        }
                    }
                }, re],
                action: [ee.action, {
                    margin: "0 4px"
                }],
                actionsRight: [ee.actionsRight, {
                    alignItems: "center",
                    display: "flex",
                    fontSize: "0",
                    justifyContent: "flex-end",
                    marginRight: "-4px"
                }]
            }
        }
          , ue = (0,
        c.z)(be, te, void 0, {
            scope: "DialogFooter"
        })
    }
    ,
    50496: (mt,Ne,e)=>{
        e.d(Ne, {
            L: ()=>ye
        });
        var c = e(1238), t = e(56996), r = e(2784), v = e(57312), Se = e(32367), Q = e(24825), be = e(51370), he = e(66297), ie = e(18690), te = e(83558), ue = e(85758), K = e(35577), re = e(88642), g = e(33902), ee = e(3272), O = e(15196), U = e(98663), J = e(53841), $ = e(71568), W = $.K, P;
        (function(z) {
            z[z.Normal = 0] = "Normal",
            z[z.Divider = 1] = "Divider",
            z[z.Header = 2] = "Header",
            z[z.SelectAll = 3] = "SelectAll"
        }
        )(P || (P = {}));
        var oe = function() {
            function z() {
                this._size = 0
            }
            return z.prototype.updateOptions = function(ne) {
                for (var I = [], o = [], me = 0, De = 0; De < ne.length; De++) {
                    var xe = ne[De]
                      , ke = xe.itemType
                      , we = xe.hidden;
                    ke === P.Divider || ke === P.Header ? (I.push(De),
                    o.push(De)) : we ? o.push(De) : me++
                }
                this._size = me,
                this._displayOnlyOptionsCache = I,
                this._notSelectableOptionsCache = o,
                this._cachedOptions = (0,
                t.ev)([], ne)
            }
            ,
            Object.defineProperty(z.prototype, "optionSetSize", {
                get: function() {
                    return this._size
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(z.prototype, "cachedOptions", {
                get: function() {
                    return this._cachedOptions
                },
                enumerable: !1,
                configurable: !0
            }),
            z.prototype.positionInSet = function(ne) {
                if (ne !== void 0) {
                    for (var I = 0; ne > this._notSelectableOptionsCache[I]; )
                        I++;
                    if (this._displayOnlyOptionsCache[I] === ne)
                        throw new Error("Unexpected: Option at index " + ne + " is not a selectable element.");
                    if (this._notSelectableOptionsCache[I] !== ne)
                        return ne - I + 1
                }
            }
            ,
            z
        }()
          , V = e(4295)
          , ae = e(78619)
          , X = e(36775)
          , pe = e(553)
          , b = e(87630)
          , T = e(96441)
          , N = e(42958);
        function D(z, ne) {
            for (var I = [], o = 0, me = ne; o < me.length; o++) {
                var De = me[o]
                  , xe = z[De];
                xe && I.push(xe)
            }
            return I
        }
        var H = e(73823)
          , l = e(87891)
          , d = e(81365)
          , a = e(65272)
          , u = (0,
        v.y)()
          , C = r.forwardRef(function(z, ne) {
            var I = z.disabled
              , o = z.required
              , me = z.inputProps
              , De = z.name
              , xe = z.ariaLabel
              , ke = z.ariaLabelledBy
              , we = z.ariaDescribedBy
              , nt = z.ariaPositionInSet
              , He = z.ariaSetSize
              , Qe = z.title
              , Y = z.checkmarkIconProps
              , Me = z.styles
              , Le = z.theme
              , We = z.className
              , Ge = z.boxSide
              , Ze = Ge === void 0 ? "start" : Ge
              , Xe = (0,
            H.M)("checkbox-", z.id)
              , Ve = r.useRef(null)
              , ut = (0,
            l.r)(Ve, ne)
              , St = r.useRef(null)
              , Dt = (0,
            d.G)(z.checked, z.defaultChecked, z.onChange)
              , gt = Dt[0]
              , rt = Dt[1]
              , Pt = (0,
            d.G)(z.indeterminate, z.defaultIndeterminate)
              , Ye = Pt[0]
              , Et = Pt[1];
            (0,
            a.Pr)(Ve);
            var kt = u(Me, {
                theme: Le,
                className: We,
                disabled: I,
                indeterminate: Ye,
                checked: gt,
                reversed: Ze !== "start",
                isUsingCustomLabelRender: !!z.onRenderLabel
            })
              , y = r.useCallback(function(Te) {
                Ye ? (rt(!!gt, Te),
                Et(!1)) : rt(!gt, Te)
            }, [rt, Et, Ye, gt])
              , M = r.useCallback(function(Te) {
                return Te && Te.label ? r.createElement("span", {
                    className: kt.text,
                    title: Te.title
                }, Te.label) : null
            }, [kt.text])
              , k = r.useCallback(function(Te) {
                if (!!St.current) {
                    var Pe = !!Te;
                    St.current.indeterminate = Pe,
                    Et(Pe)
                }
            }, [Et]);
            f(z, gt, Ye, k, St),
            r.useEffect(function() {
                return k(Ye)
            }, [k, Ye]);
            var q = z.onRenderLabel || M
              , ge = Ye ? "mixed" : void 0
              , fe = (0,
            t.pi)((0,
            t.pi)({
                className: kt.input,
                type: "checkbox"
            }, me), {
                checked: !!gt,
                disabled: I,
                required: o,
                name: De,
                id: Xe,
                title: Qe,
                onChange: y,
                "aria-disabled": I,
                "aria-label": xe,
                "aria-labelledby": ke,
                "aria-describedby": we,
                "aria-posinset": nt,
                "aria-setsize": He,
                "aria-checked": ge
            });
            return r.createElement("div", {
                className: kt.root,
                title: Qe,
                ref: ut
            }, r.createElement("input", (0,
            t.pi)({}, fe, {
                ref: St,
                title: Qe,
                "data-ktp-execute-target": !0
            })), r.createElement("label", {
                className: kt.label,
                htmlFor: Xe
            }, r.createElement("div", {
                className: kt.checkbox,
                "data-ktp-target": !0
            }, r.createElement(X.J, (0,
            t.pi)({
                iconName: "CheckMark"
            }, Y, {
                className: kt.checkmark
            }))), q(z, M)))
        });
        C.displayName = "CheckboxBase";
        function h(z) {}
        function f(z, ne, I, o, me) {
            r.useImperativeHandle(z.componentRef, function() {
                return {
                    get checked() {
                        return !!ne
                    },
                    get indeterminate() {
                        return !!I
                    },
                    set indeterminate(De) {
                        o(De)
                    },
                    focus: function() {
                        me.current && me.current.focus()
                    }
                }
            }, [me, ne, I, o])
        }
        var i = e(75649)
          , m = e(62910)
          , R = {
            root: "ms-Checkbox",
            label: "ms-Checkbox-label",
            checkbox: "ms-Checkbox-checkbox",
            checkmark: "ms-Checkbox-checkmark",
            text: "ms-Checkbox-text"
        }
          , L = "20px"
          , Z = "200ms"
          , F = "cubic-bezier(.4, 0, .23, 1)"
          , A = function(z) {
            var ne, I, o, me, De, xe, ke, we, nt, He, Qe, Y, Me, Le, We, Ge, Ze, Xe, Ve = z.className, ut = z.theme, St = z.reversed, Dt = z.checked, gt = z.disabled, rt = z.isUsingCustomLabelRender, Pt = z.indeterminate, Ye = ut.semanticColors, Et = ut.effects, kt = ut.palette, y = ut.fonts, M = (0,
            i.Cn)(R, ut), k = Ye.inputForegroundChecked, q = kt.neutralSecondary, ge = kt.neutralPrimary, fe = Ye.inputBackgroundChecked, Te = Ye.inputBackgroundChecked, Pe = Ye.disabledBodySubtext, Fe = Ye.inputBorderHovered, _e = Ye.inputBackgroundCheckedHovered, lt = Ye.inputBackgroundChecked, qe = Ye.inputBackgroundCheckedHovered, st = Ye.inputBackgroundCheckedHovered, bt = Ye.inputTextHovered, _t = Ye.disabledBodySubtext, At = Ye.bodyText, jt = Ye.disabledText, Vt = [(ne = {
                content: '""',
                borderRadius: Et.roundedCorner2,
                position: "absolute",
                width: 10,
                height: 10,
                top: 4,
                left: 4,
                boxSizing: "border-box",
                borderWidth: 5,
                borderStyle: "solid",
                borderColor: gt ? Pe : fe,
                transitionProperty: "border-width, border, border-color",
                transitionDuration: Z,
                transitionTimingFunction: F
            },
            ne[i.qJ] = {
                borderColor: "WindowText"
            },
            ne)];
            return {
                root: [M.root, {
                    position: "relative",
                    display: "flex"
                }, St && "reversed", Dt && "is-checked", !gt && "is-enabled", gt && "is-disabled", !gt && [!Dt && (I = {},
                I[":hover ." + M.checkbox] = (o = {
                    borderColor: Fe
                },
                o[i.qJ] = {
                    borderColor: "Highlight"
                },
                o),
                I[":focus ." + M.checkbox] = {
                    borderColor: Fe
                },
                I[":hover ." + M.checkmark] = (me = {
                    color: q,
                    opacity: "1"
                },
                me[i.qJ] = {
                    color: "Highlight"
                },
                me),
                I), Dt && !Pt && (De = {},
                De[":hover ." + M.checkbox] = {
                    background: qe,
                    borderColor: st
                },
                De[":focus ." + M.checkbox] = {
                    background: qe,
                    borderColor: st
                },
                De[i.qJ] = (xe = {},
                xe[":hover ." + M.checkbox] = {
                    background: "Highlight",
                    borderColor: "Highlight"
                },
                xe[":focus ." + M.checkbox] = {
                    background: "Highlight"
                },
                xe[":focus:hover ." + M.checkbox] = {
                    background: "Highlight"
                },
                xe[":focus:hover ." + M.checkmark] = {
                    color: "Window"
                },
                xe[":hover ." + M.checkmark] = {
                    color: "Window"
                },
                xe),
                De), Pt && (ke = {},
                ke[":hover ." + M.checkbox + ", :hover ." + M.checkbox + ":after"] = (we = {
                    borderColor: _e
                },
                we[i.qJ] = {
                    borderColor: "WindowText"
                },
                we),
                ke[":focus ." + M.checkbox] = {
                    borderColor: _e
                },
                ke[":hover ." + M.checkmark] = {
                    opacity: "0"
                },
                ke), (nt = {},
                nt[":hover ." + M.text + ", :focus ." + M.text] = (He = {
                    color: bt
                },
                He[i.qJ] = {
                    color: gt ? "GrayText" : "WindowText"
                },
                He),
                nt)], Ve],
                input: (Qe = {
                    position: "absolute",
                    background: "none",
                    opacity: 0
                },
                Qe["." + m.G$ + " &:focus + label::before"] = (Y = {
                    outline: "1px solid " + ut.palette.neutralSecondary,
                    outlineOffset: "2px"
                },
                Y[i.qJ] = {
                    outline: "1px solid WindowText"
                },
                Y),
                Qe),
                label: [M.label, ut.fonts.medium, {
                    display: "flex",
                    alignItems: rt ? "center" : "flex-start",
                    cursor: gt ? "default" : "pointer",
                    position: "relative",
                    userSelect: "none"
                }, St && {
                    flexDirection: "row-reverse",
                    justifyContent: "flex-end"
                }, {
                    "&::before": {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        content: '""',
                        pointerEvents: "none"
                    }
                }],
                checkbox: [M.checkbox, (Me = {
                    position: "relative",
                    display: "flex",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    height: L,
                    width: L,
                    border: "1px solid " + ge,
                    borderRadius: Et.roundedCorner2,
                    boxSizing: "border-box",
                    transitionProperty: "background, border, border-color",
                    transitionDuration: Z,
                    transitionTimingFunction: F,
                    overflow: "hidden",
                    ":after": Pt ? Vt : null
                },
                Me[i.qJ] = (0,
                t.pi)({
                    borderColor: "WindowText"
                }, (0,
                i.xM)()),
                Me), Pt && {
                    borderColor: fe
                }, St ? {
                    marginLeft: 4
                } : {
                    marginRight: 4
                }, !gt && !Pt && Dt && (Le = {
                    background: lt,
                    borderColor: Te
                },
                Le[i.qJ] = {
                    background: "Highlight",
                    borderColor: "Highlight"
                },
                Le), gt && (We = {
                    borderColor: Pe
                },
                We[i.qJ] = {
                    borderColor: "GrayText"
                },
                We), Dt && gt && (Ge = {
                    background: _t,
                    borderColor: Pe
                },
                Ge[i.qJ] = {
                    background: "Window"
                },
                Ge)],
                checkmark: [M.checkmark, (Ze = {
                    opacity: Dt && !Pt ? "1" : "0",
                    color: k
                },
                Ze[i.qJ] = (0,
                t.pi)({
                    color: gt ? "GrayText" : "Window"
                }, (0,
                i.xM)()),
                Ze)],
                text: [M.text, (Xe = {
                    color: gt ? jt : At,
                    fontSize: y.medium.fontSize,
                    lineHeight: "20px"
                },
                Xe[i.qJ] = (0,
                t.pi)({
                    color: gt ? "GrayText" : "WindowText"
                }, (0,
                i.xM)()),
                Xe), St ? {
                    marginRight: 4
                } : {
                    marginLeft: 4
                }]
            }
        }
          , j = (0,
        c.z)(C, A, void 0, {
            scope: "Checkbox"
        })
          , G = e(51169)
          , le = e(76295)
          , Ee = "Dropdown"
          , de = (0,
        v.y)()
          , Ce = {
            options: []
        };
        function Be(z) {
            var ne = z.defaultSelectedKeys, I = z.selectedKeys, o = z.defaultSelectedKey, me = z.selectedKey, De = z.options, xe = z.multiSelect, ke = (0,
            le.D)(De), we = r.useState([]), nt = we[0], He = we[1], Qe, Y = De !== ke;
            xe ? Y && ne !== void 0 ? Qe = ne : Qe = I : Y && o !== void 0 ? Qe = o : Qe = me;
            var Me = (0,
            le.D)(Qe);
            return r.useEffect(function() {
                var Le = function() {
                    if (Qe === void 0) {
                        if (xe)
                            return We();
                        var Ze = Ge(null);
                        return Ze !== -1 ? [Ze] : []
                    } else if (!Array.isArray(Qe)) {
                        var Ze = Ge(Qe);
                        return Ze !== -1 ? [Ze] : []
                    }
                    for (var Xe = [], Ve = 0, ut = Qe; Ve < ut.length; Ve++) {
                        var St = ut[Ve]
                          , Ze = Ge(St);
                        Ze !== -1 && Xe.push(Ze)
                    }
                    return Xe
                }
                  , We = function() {
                    return De.map(function(Ze, Xe) {
                        return Ze.selected ? Xe : -1
                    }).filter(function(Ze) {
                        return Ze !== -1
                    })
                }
                  , Ge = function(Ze) {
                    return (0,
                    Se.cx)(De, function(Xe) {
                        return Ze != null ? Xe.key === Ze : !!Xe.selected || !!Xe.isSelected
                    })
                };
                (Qe !== void 0 || !ke) && (Qe !== Me || Y) && He(Le())
            }, [Y, xe, ke, Me, De, Qe]),
            [nt, He]
        }
        var Oe = r.forwardRef(function(z, ne) {
            var I = (0,
            G.j)(Ce, z)
              , o = r.useRef(null)
              , me = (0,
            l.r)(ne, o)
              , De = (0,
            T.q)(o, I.responsiveMode)
              , xe = Be(I)
              , ke = xe[0]
              , we = xe[1];
            return r.createElement(at, (0,
            t.pi)({}, I, {
                responsiveMode: De,
                hoisted: {
                    rootRef: me,
                    selectedIndices: ke,
                    setSelectedIndices: we
                }
            }))
        });
        Oe.displayName = "DropdownBase";
        var at = function(z) {
            (0,
            t.ZT)(ne, z);
            function ne(I) {
                var o = z.call(this, I) || this;
                o._host = r.createRef(),
                o._focusZone = r.createRef(),
                o._dropDown = r.createRef(),
                o._scrollIdleDelay = 250,
                o._sizePosCache = new oe,
                o._requestAnimationFrame = (0,
                Q.J)(o),
                o.dismissMenu = function() {
                    var Y = o.state.isOpen;
                    Y && o.setState({
                        isOpen: !1
                    })
                }
                ,
                o._onChange = function(Y, Me, Le, We, Ge) {
                    var Ze = o.props
                      , Xe = Ze.onChange
                      , Ve = Ze.onChanged;
                    if (Xe || Ve) {
                        var ut = Ge ? (0,
                        t.pi)((0,
                        t.pi)({}, Me[Le]), {
                            selected: !We
                        }) : Me[Le];
                        Xe && Xe((0,
                        t.pi)((0,
                        t.pi)({}, Y), {
                            target: o._dropDown.current
                        }), ut, Le),
                        Ve && Ve(ut, Le)
                    }
                }
                ,
                o._getPlaceholder = function() {
                    return o.props.placeholder || o.props.placeHolder
                }
                ,
                o._getTitle = function(Y, Me) {
                    var Le = o.props.multiSelectDelimiter
                      , We = Le === void 0 ? ", " : Le;
                    return Y.map(function(Ge) {
                        return Ge.text
                    }).join(We)
                }
                ,
                o._onRenderTitle = function(Y) {
                    return r.createElement(r.Fragment, null, o._getTitle(Y))
                }
                ,
                o._onRenderPlaceholder = function(Y) {
                    return o._getPlaceholder() ? r.createElement(r.Fragment, null, o._getPlaceholder()) : null
                }
                ,
                o._onRenderContainer = function(Y) {
                    var Me = Y.calloutProps
                      , Le = Y.panelProps
                      , We = o.props
                      , Ge = We.responsiveMode
                      , Ze = We.dropdownWidth
                      , Xe = Ge <= N.eD.medium
                      , Ve = {
                        firstFocusableTarget: "#" + o._listId + "1"
                    }
                      , ut = o._classNames.subComponentStyles ? o._classNames.subComponentStyles.panel : void 0
                      , St = void 0
                      , Dt = void 0;
                    return Ze === "auto" ? Dt = o._dropDown.current ? o._dropDown.current.clientWidth : 0 : St = Ze || (o._dropDown.current ? o._dropDown.current.clientWidth : 0),
                    Xe ? r.createElement(b.s, (0,
                    t.pi)({
                        closeButtonAriaLabel: "Close",
                        focusTrapZoneProps: Ve,
                        hasCloseButton: !0,
                        isOpen: !0,
                        isLightDismiss: !0,
                        onDismiss: o._onDismiss,
                        styles: ut
                    }, Le), o._renderFocusableList(Y)) : r.createElement(U.U, (0,
                    t.pi)({
                        isBeakVisible: !1,
                        gapSpace: 0,
                        doNotLayer: !1,
                        directionalHintFixed: !1,
                        directionalHint: J.b.bottomLeftEdge,
                        calloutWidth: St,
                        calloutMinWidth: Dt
                    }, Me, {
                        className: o._classNames.callout,
                        target: o._dropDown.current,
                        onDismiss: o._onDismiss,
                        onScroll: o._onScroll,
                        onPositioned: o._onPositioned
                    }), o._renderFocusableList(Y))
                }
                ,
                o._onRenderCaretDown = function(Y) {
                    return r.createElement(X.J, {
                        className: o._classNames.caretDown,
                        iconName: "ChevronDown",
                        "aria-hidden": !0
                    })
                }
                ,
                o._onRenderList = function(Y) {
                    var Me = Y.onRenderItem
                      , Le = Me === void 0 ? o._onRenderItem : Me
                      , We = {
                        items: []
                    }
                      , Ge = []
                      , Ze = function() {
                        var Ve = We.id ? [r.createElement("div", {
                            role: "group",
                            key: We.id,
                            "aria-labelledby": We.id
                        }, We.items)] : We.items;
                        Ge = (0,
                        t.ev)((0,
                        t.ev)([], Ge), Ve),
                        We = {
                            items: []
                        }
                    }
                      , Xe = function(Ve, ut) {
                        switch (Ve.itemType) {
                        case P.Header:
                            We.items.length > 0 && Ze();
                            var St = o._id + Ve.key;
                            We.items.push(Le((0,
                            t.pi)((0,
                            t.pi)({
                                id: St
                            }, Ve), {
                                index: ut
                            }), o._onRenderItem)),
                            We.id = St;
                            break;
                        case P.Divider:
                            ut > 0 && We.items.push(Le((0,
                            t.pi)((0,
                            t.pi)({}, Ve), {
                                index: ut
                            }), o._onRenderItem)),
                            We.items.length > 0 && Ze();
                            break;
                        default:
                            We.items.push(Le((0,
                            t.pi)((0,
                            t.pi)({}, Ve), {
                                index: ut
                            }), o._onRenderItem))
                        }
                    };
                    return Y.options.forEach(function(Ve, ut) {
                        Xe(Ve, ut)
                    }),
                    We.items.length > 0 && Ze(),
                    r.createElement(r.Fragment, null, Ge)
                }
                ,
                o._onRenderItem = function(Y) {
                    switch (Y.itemType) {
                    case P.Divider:
                        return o._renderSeparator(Y);
                    case P.Header:
                        return o._renderHeader(Y);
                    default:
                        return o._renderOption(Y)
                    }
                }
                ,
                o._renderOption = function(Y) {
                    var Me, Le = o.props, We = Le.onRenderOption, Ge = We === void 0 ? o._onRenderOption : We, Ze = Le.hoisted.selectedIndices, Xe = Ze === void 0 ? [] : Ze, Ve = Y.index !== void 0 && Xe ? Xe.indexOf(Y.index) > -1 : !1, ut = Y.hidden ? o._classNames.dropdownItemHidden : Ve && Y.disabled === !0 ? o._classNames.dropdownItemSelectedAndDisabled : Ve ? o._classNames.dropdownItemSelected : Y.disabled === !0 ? o._classNames.dropdownItemDisabled : o._classNames.dropdownItem, St = Y.title, Dt = o._listId + Y.index, gt = (Me = Y.id) !== null && Me !== void 0 ? Me : Dt + "-label", rt = o._classNames.subComponentStyles ? o._classNames.subComponentStyles.multiSelectItem : void 0;
                    return o.props.multiSelect ? r.createElement(j, {
                        id: Dt,
                        key: Y.key,
                        disabled: Y.disabled,
                        onChange: o._onItemClick(Y),
                        inputProps: (0,
                        t.pi)({
                            "aria-selected": Ve,
                            onMouseEnter: o._onItemMouseEnter.bind(o, Y),
                            onMouseLeave: o._onMouseItemLeave.bind(o, Y),
                            onMouseMove: o._onItemMouseMove.bind(o, Y),
                            role: "option"
                        }, {
                            "data-index": Y.index,
                            "data-is-focusable": !(Y.disabled || Y.hidden)
                        }),
                        label: Y.text,
                        title: St,
                        onRenderLabel: o._onRenderItemLabel.bind(o, (0,
                        t.pi)((0,
                        t.pi)({}, Y), {
                            id: gt
                        })),
                        className: (0,
                        be.i)(ut, "is-multi-select"),
                        checked: Ve,
                        styles: rt,
                        ariaPositionInSet: Y.hidden ? void 0 : o._sizePosCache.positionInSet(Y.index),
                        ariaSetSize: Y.hidden ? void 0 : o._sizePosCache.optionSetSize,
                        ariaLabel: Y.ariaLabel,
                        ariaLabelledBy: Y.ariaLabel ? void 0 : gt
                    }) : r.createElement(W, {
                        id: Dt,
                        key: Y.key,
                        "data-index": Y.index,
                        "data-is-focusable": !Y.disabled,
                        disabled: Y.disabled,
                        className: ut,
                        onClick: o._onItemClick(Y),
                        onMouseEnter: o._onItemMouseEnter.bind(o, Y),
                        onMouseLeave: o._onMouseItemLeave.bind(o, Y),
                        onMouseMove: o._onItemMouseMove.bind(o, Y),
                        role: "option",
                        "aria-selected": Ve ? "true" : "false",
                        ariaLabel: Y.ariaLabel,
                        title: St,
                        "aria-posinset": o._sizePosCache.positionInSet(Y.index),
                        "aria-setsize": o._sizePosCache.optionSetSize
                    }, Ge(Y, o._onRenderOption))
                }
                ,
                o._onRenderOption = function(Y) {
                    return r.createElement("span", {
                        className: o._classNames.dropdownOptionText
                    }, Y.text)
                }
                ,
                o._onRenderMultiselectOption = function(Y) {
                    return r.createElement("span", {
                        id: Y.id,
                        "aria-hidden": "true",
                        className: o._classNames.dropdownOptionText
                    }, Y.text)
                }
                ,
                o._onRenderItemLabel = function(Y) {
                    var Me = o.props.onRenderOption
                      , Le = Me === void 0 ? o._onRenderMultiselectOption : Me;
                    return Le(Y, o._onRenderMultiselectOption)
                }
                ,
                o._onPositioned = function(Y) {
                    o._focusZone.current && o._requestAnimationFrame(function() {
                        var Me = o.props.hoisted.selectedIndices;
                        if (o._focusZone.current)
                            if (!o._hasBeenPositioned && Me && Me[0] && !o.props.options[Me[0]].disabled) {
                                var Le = (0,
                                he.M)().getElementById(o._id + "-list" + Me[0]);
                                Le && o._focusZone.current.focusElement(Le),
                                o._hasBeenPositioned = !0
                            } else
                                o._focusZone.current.focus()
                    }),
                    (!o.state.calloutRenderEdge || o.state.calloutRenderEdge !== Y.targetEdge) && o.setState({
                        calloutRenderEdge: Y.targetEdge
                    })
                }
                ,
                o._onItemClick = function(Y) {
                    return function(Me) {
                        Y.disabled || (o.setSelectedIndex(Me, Y.index),
                        o.props.multiSelect || o.setState({
                            isOpen: !1
                        }))
                    }
                }
                ,
                o._onScroll = function() {
                    !o._isScrollIdle && o._scrollIdleTimeoutId !== void 0 ? (clearTimeout(o._scrollIdleTimeoutId),
                    o._scrollIdleTimeoutId = void 0) : o._isScrollIdle = !1,
                    o._scrollIdleTimeoutId = window.setTimeout(function() {
                        o._isScrollIdle = !0
                    }, o._scrollIdleDelay)
                }
                ,
                o._onMouseItemLeave = function(Y, Me) {
                    if (!o._shouldIgnoreMouseEvent() && o._host.current)
                        if (o._host.current.setActive)
                            try {
                                o._host.current.setActive()
                            } catch (Le) {}
                        else
                            o._host.current.focus()
                }
                ,
                o._onDismiss = function() {
                    o.setState({
                        isOpen: !1
                    })
                }
                ,
                o._onDropdownBlur = function(Y) {
                    var Me = o._isDisabled();
                    Me || o.state.isOpen || (o.setState({
                        hasFocus: !1
                    }),
                    o.props.onBlur && o.props.onBlur(Y))
                }
                ,
                o._onDropdownKeyDown = function(Y) {
                    var Me = o._isDisabled();
                    if (!Me && (o._lastKeyDownWasAltOrMeta = o._isAltOrMeta(Y),
                    !(o.props.onKeyDown && (o.props.onKeyDown(Y),
                    Y.defaultPrevented)))) {
                        var Le, We = o.props.hoisted.selectedIndices.length ? o.props.hoisted.selectedIndices[0] : -1, Ge = Y.altKey || Y.metaKey, Ze = o.state.isOpen;
                        switch (Y.which) {
                        case ie.m.enter:
                            o.setState({
                                isOpen: !Ze
                            });
                            break;
                        case ie.m.escape:
                            if (!Ze)
                                return;
                            o.setState({
                                isOpen: !1
                            });
                            break;
                        case ie.m.up:
                            if (Ge) {
                                if (Ze) {
                                    o.setState({
                                        isOpen: !1
                                    });
                                    break
                                }
                                return
                            }
                            o.props.multiSelect ? o.setState({
                                isOpen: !0
                            }) : o._isDisabled() || (Le = o._moveIndex(Y, -1, We - 1, We));
                            break;
                        case ie.m.down:
                            Ge && (Y.stopPropagation(),
                            Y.preventDefault()),
                            Ge && !Ze || o.props.multiSelect ? o.setState({
                                isOpen: !0
                            }) : o._isDisabled() || (Le = o._moveIndex(Y, 1, We + 1, We));
                            break;
                        case ie.m.home:
                            o.props.multiSelect || (Le = o._moveIndex(Y, 1, 0, We));
                            break;
                        case ie.m.end:
                            o.props.multiSelect || (Le = o._moveIndex(Y, -1, o.props.options.length - 1, We));
                            break;
                        case ie.m.space:
                            break;
                        default:
                            return
                        }
                        Le !== We && (Y.stopPropagation(),
                        Y.preventDefault())
                    }
                }
                ,
                o._onDropdownKeyUp = function(Y) {
                    var Me = o._isDisabled();
                    if (!Me) {
                        var Le = o._shouldHandleKeyUp(Y)
                          , We = o.state.isOpen;
                        if (!(o.props.onKeyUp && (o.props.onKeyUp(Y),
                        Y.defaultPrevented))) {
                            switch (Y.which) {
                            case ie.m.space:
                                o.setState({
                                    isOpen: !We
                                });
                                break;
                            default:
                                Le && We && o.setState({
                                    isOpen: !1
                                });
                                return
                            }
                            Y.stopPropagation(),
                            Y.preventDefault()
                        }
                    }
                }
                ,
                o._onZoneKeyDown = function(Y) {
                    var Me, Le, We;
                    o._lastKeyDownWasAltOrMeta = o._isAltOrMeta(Y);
                    var Ge = Y.altKey || Y.metaKey;
                    switch (Y.which) {
                    case ie.m.up:
                        Ge ? o.setState({
                            isOpen: !1
                        }) : o._host.current && (We = (0,
                        te.TE)(o._host.current, o._host.current.lastChild, !0));
                        break;
                    case ie.m.home:
                    case ie.m.end:
                    case ie.m.pageUp:
                    case ie.m.pageDown:
                        break;
                    case ie.m.down:
                        !Ge && o._host.current && (We = (0,
                        te.ft)(o._host.current, o._host.current.firstChild, !0));
                        break;
                    case ie.m.escape:
                        o.setState({
                            isOpen: !1
                        });
                        break;
                    case ie.m.tab:
                        o.setState({
                            isOpen: !1
                        });
                        var Ze = (0,
                        he.M)();
                        Ze && (Y.shiftKey ? (Me = (0,
                        te.TD)(Ze.body, o._dropDown.current, !1, !1, !0, !0)) === null || Me === void 0 || Me.focus() : (Le = (0,
                        te.dc)(Ze.body, o._dropDown.current, !1, !1, !0, !0)) === null || Le === void 0 || Le.focus());
                        break;
                    default:
                        return
                    }
                    We && We.focus(),
                    Y.stopPropagation(),
                    Y.preventDefault()
                }
                ,
                o._onZoneKeyUp = function(Y) {
                    var Me = o._shouldHandleKeyUp(Y);
                    Me && o.state.isOpen && (o.setState({
                        isOpen: !1
                    }),
                    Y.preventDefault())
                }
                ,
                o._onDropdownClick = function(Y) {
                    if (!(o.props.onClick && (o.props.onClick(Y),
                    Y.defaultPrevented))) {
                        var Me = o.state.isOpen
                          , Le = o._isDisabled();
                        !Le && !o._shouldOpenOnFocus() && o.setState({
                            isOpen: !Me
                        }),
                        o._isFocusedByClick = !1
                    }
                }
                ,
                o._onDropdownMouseDown = function() {
                    o._isFocusedByClick = !0
                }
                ,
                o._onFocus = function(Y) {
                    var Me = o._isDisabled();
                    if (!Me) {
                        o.props.onFocus && o.props.onFocus(Y);
                        var Le = {
                            hasFocus: !0
                        };
                        o._shouldOpenOnFocus() && (Le.isOpen = !0),
                        o.setState(Le)
                    }
                }
                ,
                o._isDisabled = function() {
                    var Y = o.props.disabled
                      , Me = o.props.isDisabled;
                    return Y === void 0 && (Y = Me),
                    Y
                }
                ,
                o._onRenderLabel = function(Y) {
                    var Me = Y.label
                      , Le = Y.required
                      , We = Y.disabled
                      , Ge = o._classNames.subComponentStyles ? o._classNames.subComponentStyles.label : void 0;
                    return Me ? r.createElement(pe._, {
                        className: o._classNames.label,
                        id: o._labelId,
                        required: Le,
                        styles: Ge,
                        disabled: We
                    }, Me) : null
                }
                ,
                (0,
                ue.l)(o);
                var me = I.multiSelect
                  , De = I.selectedKey
                  , xe = I.selectedKeys
                  , ke = I.defaultSelectedKey
                  , we = I.defaultSelectedKeys
                  , nt = I.options;
                if (!1)
                    var He, Qe;
                return o._id = I.id || (0,
                K.z)("Dropdown"),
                o._labelId = o._id + "-label",
                o._listId = o._id + "-list",
                o._optionId = o._id + "-option",
                o._isScrollIdle = !0,
                o._hasBeenPositioned = !1,
                o._sizePosCache.updateOptions(nt),
                o.state = {
                    isOpen: !1,
                    hasFocus: !1,
                    calloutRenderEdge: void 0
                },
                o
            }
            return Object.defineProperty(ne.prototype, "selectedOptions", {
                get: function() {
                    var I = this.props
                      , o = I.options
                      , me = I.hoisted.selectedIndices;
                    return D(o, me)
                },
                enumerable: !1,
                configurable: !0
            }),
            ne.prototype.componentWillUnmount = function() {
                clearTimeout(this._scrollIdleTimeoutId)
            }
            ,
            ne.prototype.componentDidUpdate = function(I, o) {
                o.isOpen === !0 && this.state.isOpen === !1 && (this._gotMouseMove = !1,
                this._hasBeenPositioned = !1,
                this.props.onDismiss && this.props.onDismiss())
            }
            ,
            ne.prototype.render = function() {
                var I = this._id
                  , o = this.props
                  , me = o.className
                  , De = o.label
                  , xe = o.options
                  , ke = o.ariaLabel
                  , we = o.required
                  , nt = o.errorMessage
                  , He = o.styles
                  , Qe = o.theme
                  , Y = o.panelProps
                  , Me = o.calloutProps
                  , Le = o.onRenderTitle
                  , We = Le === void 0 ? this._getTitle : Le
                  , Ge = o.onRenderContainer
                  , Ze = Ge === void 0 ? this._onRenderContainer : Ge
                  , Xe = o.onRenderCaretDown
                  , Ve = Xe === void 0 ? this._onRenderCaretDown : Xe
                  , ut = o.onRenderLabel
                  , St = ut === void 0 ? this._onRenderLabel : ut
                  , Dt = o.onRenderItem
                  , gt = Dt === void 0 ? this._onRenderItem : Dt
                  , rt = o.hoisted.selectedIndices
                  , Pt = this.state
                  , Ye = Pt.isOpen
                  , Et = Pt.calloutRenderEdge
                  , kt = Pt.hasFocus
                  , y = o.onRenderPlaceholder || o.onRenderPlaceHolder || this._getPlaceholder;
                xe !== this._sizePosCache.cachedOptions && this._sizePosCache.updateOptions(xe);
                var M = D(xe, rt)
                  , k = (0,
                re.pq)(o, re.n7)
                  , q = this._isDisabled()
                  , ge = I + "-errorMessage";
                this._classNames = de(He, {
                    theme: Qe,
                    className: me,
                    hasError: !!(nt && nt.length > 0),
                    hasLabel: !!De,
                    isOpen: Ye,
                    required: we,
                    disabled: q,
                    isRenderingPlaceholder: !M.length,
                    panelClassName: Y ? Y.className : void 0,
                    calloutClassName: Me ? Me.className : void 0,
                    calloutRenderEdge: Et
                });
                var fe = !!nt && nt.length > 0;
                return r.createElement("div", {
                    className: this._classNames.root,
                    ref: this.props.hoisted.rootRef,
                    "aria-owns": Ye ? this._listId : void 0
                }, St(this.props, this._onRenderLabel), r.createElement("div", (0,
                t.pi)({
                    "data-is-focusable": !q,
                    "data-ktp-target": !0,
                    ref: this._dropDown,
                    id: I,
                    tabIndex: q ? -1 : 0,
                    role: "combobox",
                    "aria-haspopup": "listbox",
                    "aria-expanded": Ye ? "true" : "false",
                    "aria-label": ke,
                    "aria-labelledby": De && !ke ? (0,
                    g.I)(this._labelId, this._optionId) : void 0,
                    "aria-describedby": fe ? this._id + "-errorMessage" : void 0,
                    "aria-required": we,
                    "aria-disabled": q,
                    "aria-controls": Ye ? this._listId : void 0
                }, k, {
                    className: this._classNames.dropdown,
                    onBlur: this._onDropdownBlur,
                    onKeyDown: this._onDropdownKeyDown,
                    onKeyUp: this._onDropdownKeyUp,
                    onClick: this._onDropdownClick,
                    onMouseDown: this._onDropdownMouseDown,
                    onFocus: this._onFocus
                }), r.createElement("span", {
                    id: this._optionId,
                    className: this._classNames.title,
                    "aria-live": kt ? "polite" : void 0,
                    "aria-atomic": kt ? !0 : void 0,
                    "aria-invalid": fe
                }, M.length ? We(M, this._onRenderTitle) : y(o, this._onRenderPlaceholder)), r.createElement("span", {
                    className: this._classNames.caretDownWrapper
                }, Ve(o, this._onRenderCaretDown))), Ye && Ze((0,
                t.pi)((0,
                t.pi)({}, o), {
                    onDismiss: this._onDismiss,
                    onRenderItem: gt
                }), this._onRenderContainer), fe && r.createElement("div", {
                    role: "alert",
                    id: ge,
                    className: this._classNames.errorMessage
                }, nt))
            }
            ,
            ne.prototype.focus = function(I) {
                this._dropDown.current && (this._dropDown.current.focus(),
                I && this.setState({
                    isOpen: !0
                }))
            }
            ,
            ne.prototype.setSelectedIndex = function(I, o) {
                var me = this.props
                  , De = me.options
                  , xe = me.selectedKey
                  , ke = me.selectedKeys
                  , we = me.multiSelect
                  , nt = me.notifyOnReselect
                  , He = me.hoisted.selectedIndices
                  , Qe = He === void 0 ? [] : He
                  , Y = Qe ? Qe.indexOf(o) > -1 : !1
                  , Me = [];
                if (o = Math.max(0, Math.min(De.length - 1, o)),
                xe !== void 0 || ke !== void 0) {
                    this._onChange(I, De, o, Y, we);
                    return
                }
                if (!(!we && !nt && o === Qe[0])) {
                    if (we)
                        if (Me = Qe ? this._copyArray(Qe) : [],
                        Y) {
                            var Le = Me.indexOf(o);
                            Le > -1 && Me.splice(Le, 1)
                        } else
                            Me.push(o);
                    else
                        Me = [o];
                    I.persist(),
                    this.props.hoisted.setSelectedIndices(Me),
                    this._onChange(I, De, o, Y, we)
                }
            }
            ,
            ne.prototype._copyArray = function(I) {
                for (var o = [], me = 0, De = I; me < De.length; me++) {
                    var xe = De[me];
                    o.push(xe)
                }
                return o
            }
            ,
            ne.prototype._moveIndex = function(I, o, me, De) {
                var xe = this.props.options;
                if (De === me || xe.length === 0)
                    return De;
                me >= xe.length ? me = 0 : me < 0 && (me = xe.length - 1);
                for (var ke = 0; xe[me].itemType === P.Header || xe[me].itemType === P.Divider || xe[me].disabled; ) {
                    if (ke >= xe.length)
                        return De;
                    me + o < 0 ? me = xe.length : me + o >= xe.length && (me = -1),
                    me = me + o,
                    ke++
                }
                return this.setSelectedIndex(I, me),
                me
            }
            ,
            ne.prototype._renderFocusableList = function(I) {
                var o = I.onRenderList
                  , me = o === void 0 ? this._onRenderList : o
                  , De = I.label
                  , xe = I.ariaLabel
                  , ke = I.multiSelect;
                return r.createElement("div", {
                    className: this._classNames.dropdownItemsWrapper,
                    onKeyDown: this._onZoneKeyDown,
                    onKeyUp: this._onZoneKeyUp,
                    ref: this._host,
                    tabIndex: 0
                }, r.createElement(V.k, {
                    ref: this._focusZone,
                    direction: ae.U.vertical,
                    id: this._listId,
                    className: this._classNames.dropdownItems,
                    role: "listbox",
                    "aria-label": xe,
                    "aria-labelledby": De && !xe ? this._labelId : void 0,
                    "aria-multiselectable": ke
                }, me(I, this._onRenderList)))
            }
            ,
            ne.prototype._renderSeparator = function(I) {
                var o = I.index
                  , me = I.key
                  , De = I.hidden ? this._classNames.dropdownDividerHidden : this._classNames.dropdownDivider;
                return o > 0 ? r.createElement("div", {
                    role: "separator",
                    key: me,
                    className: De
                }) : null
            }
            ,
            ne.prototype._renderHeader = function(I) {
                var o = this.props.onRenderOption
                  , me = o === void 0 ? this._onRenderOption : o
                  , De = I.key
                  , xe = I.id
                  , ke = I.hidden ? this._classNames.dropdownItemHeaderHidden : this._classNames.dropdownItemHeader;
                return r.createElement("div", {
                    id: xe,
                    key: De,
                    className: ke
                }, me(I, this._onRenderOption))
            }
            ,
            ne.prototype._onItemMouseEnter = function(I, o) {
                if (!this._shouldIgnoreMouseEvent()) {
                    var me = o.currentTarget;
                    me.focus()
                }
            }
            ,
            ne.prototype._onItemMouseMove = function(I, o) {
                var me = o.currentTarget;
                this._gotMouseMove = !0,
                !(!this._isScrollIdle || document.activeElement === me) && me.focus()
            }
            ,
            ne.prototype._shouldIgnoreMouseEvent = function() {
                return !this._isScrollIdle || !this._gotMouseMove
            }
            ,
            ne.prototype._isAltOrMeta = function(I) {
                return I.which === ie.m.alt || I.key === "Meta"
            }
            ,
            ne.prototype._shouldHandleKeyUp = function(I) {
                var o = this._lastKeyDownWasAltOrMeta && this._isAltOrMeta(I);
                return this._lastKeyDownWasAltOrMeta = !1,
                !!o && !((0,
                ee.V)() || (0,
                O.g)())
            }
            ,
            ne.prototype._shouldOpenOnFocus = function() {
                var I = this.state.hasFocus
                  , o = this.props.openOnKeyboardFocus;
                return !this._isFocusedByClick && o === !0 && !I
            }
            ,
            ne.defaultProps = {
                options: []
            },
            ne
        }(r.Component), $e = e(10627), et, ht, Ct, dt = {
            root: "ms-Dropdown-container",
            label: "ms-Dropdown-label",
            dropdown: "ms-Dropdown",
            title: "ms-Dropdown-title",
            caretDownWrapper: "ms-Dropdown-caretDownWrapper",
            caretDown: "ms-Dropdown-caretDown",
            callout: "ms-Dropdown-callout",
            panel: "ms-Dropdown-panel",
            dropdownItems: "ms-Dropdown-items",
            dropdownItem: "ms-Dropdown-item",
            dropdownDivider: "ms-Dropdown-divider",
            dropdownOptionText: "ms-Dropdown-optionText",
            dropdownItemHeader: "ms-Dropdown-header",
            titleIsPlaceHolder: "ms-Dropdown-titleIsPlaceHolder",
            titleHasError: "ms-Dropdown-title--hasError"
        }, ze = 32, pt = 36, It = (et = {},
        et[i.qJ + ", " + i.bO.replace("@media ", "")] = (0,
        t.pi)({}, (0,
        i.xM)()),
        et), w = {
            selectors: (0,
            t.pi)((ht = {},
            ht[i.qJ] = {
                backgroundColor: "Highlight",
                borderColor: "Highlight",
                color: "HighlightText"
            },
            ht), It)
        }, ce = {
            selectors: (Ct = {},
            Ct[i.qJ] = {
                borderColor: "Highlight"
            },
            Ct)
        }, B = (0,
        i.sK)(0, i.dd), _ = function(z) {
            var ne, I, o, me, De, xe, ke, we, nt, He, Qe, Y, Me = z.theme, Le = z.hasError, We = z.hasLabel, Ge = z.className, Ze = z.isOpen, Xe = z.disabled, Ve = z.required, ut = z.isRenderingPlaceholder, St = z.panelClassName, Dt = z.calloutClassName, gt = z.calloutRenderEdge;
            if (!Me)
                throw new Error("theme is undefined or null in base Dropdown getStyles function.");
            var rt = (0,
            i.Cn)(dt, Me)
              , Pt = Me.palette
              , Ye = Me.semanticColors
              , Et = Me.effects
              , kt = Me.fonts
              , y = {
                color: Ye.menuItemTextHovered
            }
              , M = {
                color: Ye.menuItemText
            }
              , k = {
                borderColor: Ye.errorText
            }
              , q = [rt.dropdownItem, {
                backgroundColor: "transparent",
                boxSizing: "border-box",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "0 8px",
                width: "100%",
                minHeight: pt,
                lineHeight: 20,
                height: 0,
                position: "relative",
                border: "1px solid transparent",
                borderRadius: 0,
                wordWrap: "break-word",
                overflowWrap: "break-word",
                textAlign: "left",
                ".ms-Button-flexContainer": {
                    width: "100%"
                }
            }]
              , ge = [rt.dropdownItemHeader, (0,
            t.pi)((0,
            t.pi)({}, kt.medium), {
                fontWeight: i.lq.semibold,
                color: Ye.menuHeader,
                background: "none",
                backgroundColor: "transparent",
                border: "none",
                height: pt,
                lineHeight: pt,
                cursor: "default",
                padding: "0 8px",
                userSelect: "none",
                textAlign: "left",
                selectors: (ne = {},
                ne[i.qJ] = (0,
                t.pi)({
                    color: "GrayText"
                }, (0,
                i.xM)()),
                ne)
            })]
              , fe = Ye.menuItemBackgroundPressed
              , Te = function(qe) {
                var st, bt;
                return qe === void 0 && (qe = !1),
                {
                    selectors: (st = {
                        "&:hover": [{
                            color: Ye.menuItemTextHovered,
                            backgroundColor: qe ? fe : Ye.menuItemBackgroundHovered
                        }, w],
                        "&.is-multi-select:hover": [{
                            backgroundColor: qe ? fe : "transparent"
                        }],
                        "&:active:hover": [{
                            color: Ye.menuItemTextHovered,
                            backgroundColor: qe ? Ye.menuItemBackgroundHovered : Ye.menuItemBackgroundPressed
                        }, w]
                    },
                    st["." + m.G$ + " &:focus:after"] = (bt = {
                        left: 0,
                        top: 0,
                        bottom: 0,
                        right: 0
                    },
                    bt[i.qJ] = {
                        inset: "2px"
                    },
                    bt),
                    st[i.qJ] = {
                        border: "none"
                    },
                    st)
                }
            }
              , Pe = (0,
            t.ev)((0,
            t.ev)([], q), [{
                backgroundColor: fe,
                color: Ye.menuItemTextHovered
            }, Te(!0), w])
              , Fe = (0,
            t.ev)((0,
            t.ev)([], q), [{
                color: Ye.disabledText,
                cursor: "default",
                selectors: (I = {},
                I[i.qJ] = {
                    color: "GrayText",
                    border: "none"
                },
                I)
            }])
              , _e = gt === $e.z.bottom ? Et.roundedCorner2 + " " + Et.roundedCorner2 + " 0 0" : "0 0 " + Et.roundedCorner2 + " " + Et.roundedCorner2
              , lt = gt === $e.z.bottom ? "0 0 " + Et.roundedCorner2 + " " + Et.roundedCorner2 : Et.roundedCorner2 + " " + Et.roundedCorner2 + " 0 0";
            return {
                root: [rt.root, Ge],
                label: rt.label,
                dropdown: [rt.dropdown, i.Fv, kt.medium, {
                    color: Ye.menuItemText,
                    borderColor: Ye.focusBorder,
                    position: "relative",
                    outline: 0,
                    userSelect: "none",
                    selectors: (o = {},
                    o["&:hover ." + rt.title] = [!Xe && y, {
                        borderColor: Ze ? Pt.neutralSecondary : Pt.neutralPrimary
                    }, ce],
                    o["&:focus ." + rt.title] = [!Xe && y, {
                        selectors: (me = {},
                        me[i.qJ] = {
                            color: "Highlight"
                        },
                        me)
                    }],
                    o["&:focus:after"] = [{
                        pointerEvents: "none",
                        content: "''",
                        position: "absolute",
                        boxSizing: "border-box",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        border: Xe ? "none" : "2px solid " + Pt.themePrimary,
                        borderRadius: "2px",
                        selectors: (De = {},
                        De[i.qJ] = {
                            color: "Highlight"
                        },
                        De)
                    }],
                    o["&:active ." + rt.title] = [!Xe && y, {
                        borderColor: Pt.themePrimary
                    }, ce],
                    o["&:hover ." + rt.caretDown] = !Xe && M,
                    o["&:focus ." + rt.caretDown] = [!Xe && M, {
                        selectors: (xe = {},
                        xe[i.qJ] = {
                            color: "Highlight"
                        },
                        xe)
                    }],
                    o["&:active ." + rt.caretDown] = !Xe && M,
                    o["&:hover ." + rt.titleIsPlaceHolder] = !Xe && M,
                    o["&:focus ." + rt.titleIsPlaceHolder] = !Xe && M,
                    o["&:active ." + rt.titleIsPlaceHolder] = !Xe && M,
                    o["&:hover ." + rt.titleHasError] = k,
                    o["&:active ." + rt.titleHasError] = k,
                    o)
                }, Ze && "is-open", Xe && "is-disabled", Ve && "is-required", Ve && !We && {
                    selectors: (ke = {
                        ":before": {
                            content: "'*'",
                            color: Ye.errorText,
                            position: "absolute",
                            top: -5,
                            right: -10
                        }
                    },
                    ke[i.qJ] = {
                        selectors: {
                            ":after": {
                                right: -14
                            }
                        }
                    },
                    ke)
                }],
                title: [rt.title, i.Fv, {
                    backgroundColor: Ye.inputBackground,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: Ye.inputBorder,
                    borderRadius: Ze ? _e : Et.roundedCorner2,
                    cursor: "pointer",
                    display: "block",
                    height: ze,
                    lineHeight: ze - 2,
                    padding: "0 28px 0 8px",
                    position: "relative",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis"
                }, ut && [rt.titleIsPlaceHolder, {
                    color: Ye.inputPlaceholderText
                }], Le && [rt.titleHasError, k], Xe && {
                    backgroundColor: Ye.disabledBackground,
                    border: "none",
                    color: Ye.disabledText,
                    cursor: "default",
                    selectors: (we = {},
                    we[i.qJ] = (0,
                    t.pi)({
                        border: "1px solid GrayText",
                        color: "GrayText",
                        backgroundColor: "Window"
                    }, (0,
                    i.xM)()),
                    we)
                }],
                caretDownWrapper: [rt.caretDownWrapper, {
                    height: ze,
                    lineHeight: ze - 2,
                    paddingTop: 1,
                    position: "absolute",
                    right: 8,
                    top: 0
                }, !Xe && {
                    cursor: "pointer"
                }],
                caretDown: [rt.caretDown, {
                    color: Pt.neutralSecondary,
                    fontSize: kt.small.fontSize,
                    pointerEvents: "none"
                }, Xe && {
                    color: Ye.disabledText,
                    selectors: (nt = {},
                    nt[i.qJ] = (0,
                    t.pi)({
                        color: "GrayText"
                    }, (0,
                    i.xM)()),
                    nt)
                }],
                errorMessage: (0,
                t.pi)((0,
                t.pi)({
                    color: Ye.errorText
                }, Me.fonts.small), {
                    paddingTop: 5
                }),
                callout: [rt.callout, {
                    boxShadow: Et.elevation8,
                    borderRadius: lt,
                    selectors: (He = {},
                    He[".ms-Callout-main"] = {
                        borderRadius: lt
                    },
                    He)
                }, Dt],
                dropdownItemsWrapper: {
                    selectors: {
                        "&:focus": {
                            outline: 0
                        }
                    }
                },
                dropdownItems: [rt.dropdownItems, {
                    display: "block"
                }],
                dropdownItem: (0,
                t.ev)((0,
                t.ev)([], q), [Te()]),
                dropdownItemSelected: Pe,
                dropdownItemDisabled: Fe,
                dropdownItemSelectedAndDisabled: [Pe, Fe, {
                    backgroundColor: "transparent"
                }],
                dropdownItemHidden: (0,
                t.ev)((0,
                t.ev)([], q), [{
                    display: "none"
                }]),
                dropdownDivider: [rt.dropdownDivider, {
                    height: 1,
                    backgroundColor: Ye.bodyDivider
                }],
                dropdownDividerHidden: [rt.dropdownDivider, {
                    display: "none"
                }],
                dropdownOptionText: [rt.dropdownOptionText, {
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    minWidth: 0,
                    maxWidth: "100%",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    margin: "1px"
                }],
                dropdownItemHeader: ge,
                dropdownItemHeaderHidden: (0,
                t.ev)((0,
                t.ev)([], ge), [{
                    display: "none"
                }]),
                subComponentStyles: {
                    label: {
                        root: {
                            display: "inline-block"
                        }
                    },
                    multiSelectItem: {
                        root: {
                            padding: 0
                        },
                        label: {
                            alignSelf: "stretch",
                            padding: "0 8px",
                            width: "100%"
                        },
                        input: {
                            selectors: (Qe = {},
                            Qe["." + m.G$ + " &:focus + label::before"] = {
                                outlineOffset: "0px"
                            },
                            Qe)
                        }
                    },
                    panel: {
                        root: [St],
                        main: {
                            selectors: (Y = {},
                            Y[B] = {
                                width: 272
                            },
                            Y)
                        },
                        contentInner: {
                            padding: "0 0 20px"
                        }
                    }
                }
            }
        }, ye = (0,
        c.z)(Oe, _, void 0, {
            scope: "Dropdown"
        });
        ye.displayName = "Dropdown"
    }
    ,
    73661: (mt,Ne,e)=>{
        e.d(Ne, {
            P: ()=>$
        });
        var c = e(56996)
          , t = e(2784)
          , r = e(51169)
          , v = e(83558)
          , Se = e(95562)
          , Q = e(97280)
          , be = e(7377)
          , he = e(88642)
          , ie = e(87891)
          , te = e(76295)
          , ue = e(91062)
          , K = e(73823)
          , re = e(14236)
          , g = e(27883)
          , ee = e(57412)
          , O = "FocusTrapZone"
          , U = {
            disabled: !1,
            disableFirstFocus: !1,
            forceFocusInsideTrap: !0,
            isClickableOutsideFocusTrap: !1
        }
          , J = function(W, P, oe) {
            t.useImperativeHandle(W, function() {
                return {
                    get previouslyFocusedElement() {
                        return P
                    },
                    focus: oe
                }
            }, [oe, P])
        }
          , $ = t.forwardRef(function(W, P) {
            var oe, V = t.useRef(null), ae = t.useRef(null), X = t.useRef(null), pe = (0,
            ie.r)(V, P), b = (0,
            ee.ky)(), T = (oe = (0,
            te.D)(!1)) !== null && oe !== void 0 ? oe : !0, N = (0,
            r.j)(U, W), D = (0,
            ue.B)({
                hasFocus: !1,
                focusStackId: (0,
                K.M)("ftz-", N.id)
            }), H = N.children, l = N.componentRef, d = N.disabled, a = N.disableFirstFocus, u = N.forceFocusInsideTrap, C = N.focusPreviouslyFocusedInnerElement, h = N.firstFocusableSelector, f = N.firstFocusableTarget, i = N.disableRestoreFocus, m = i === void 0 ? N.ignoreExternalFocusing : i, R = N.isClickableOutsideFocusTrap, L = N.enableAriaHiddenSiblings, Z = {
                "aria-hidden": !0,
                style: {
                    pointerEvents: "none",
                    position: "fixed"
                },
                tabIndex: d ? -1 : 0,
                "data-is-visible": !0,
                "data-is-focus-trap-zone-bumper": !0
            }, F = t.useCallback(function(Ce) {
                Ce !== ae.current && Ce !== X.current && (0,
                v.um)(Ce)
            }, []), A = (0,
            re.$)(function() {
                if (!!V.current) {
                    var Ce = D.previouslyFocusedElementInTrapZone;
                    if (C && Ce && (0,
                    Se.t)(V.current, Ce)) {
                        F(Ce);
                        return
                    }
                    var Be = null;
                    if (typeof f == "string")
                        Be = V.current.querySelector(f);
                    else if (f)
                        Be = f(V.current);
                    else if (h) {
                        var Oe = typeof h == "string" ? h : h();
                        Be = V.current.querySelector("." + Oe)
                    }
                    Be || (Be = (0,
                    v.dc)(V.current, V.current.firstChild, !1, !1, !1, !0)),
                    Be && F(Be)
                }
            }), j = function(Ce) {
                if (!(d || !V.current)) {
                    var Be = Ce === D.hasFocus ? (0,
                    v.xY)(V.current, X.current, !0, !1) : (0,
                    v.RK)(V.current, ae.current, !0, !1);
                    Be && (Be === ae.current || Be === X.current ? A() : Be.focus())
                }
            }, G = function(Ce) {
                var Be;
                (Be = N.onBlurCapture) === null || Be === void 0 || Be.call(N, Ce);
                var Oe = Ce.relatedTarget;
                Ce.relatedTarget === null && (Oe = b.activeElement),
                (0,
                Se.t)(V.current, Oe) || (D.hasFocus = !1)
            }, le = function(Ce) {
                var Be;
                (Be = N.onFocusCapture) === null || Be === void 0 || Be.call(N, Ce),
                Ce.target === ae.current ? j(!0) : Ce.target === X.current && j(!1),
                D.hasFocus = !0,
                Ce.target !== Ce.currentTarget && !(Ce.target === ae.current || Ce.target === X.current) && (D.previouslyFocusedElementInTrapZone = Ce.target)
            }, Ee = (0,
            re.$)(function(Ce) {
                if ($.focusStack = $.focusStack.filter(function(Oe) {
                    return D.focusStackId !== Oe
                }),
                !!b) {
                    var Be = b.activeElement;
                    !m && typeof (Ce == null ? void 0 : Ce.focus) == "function" && ((0,
                    Se.t)(V.current, Be) || Be === b.body) && F(Ce)
                }
            }), de = (0,
            re.$)(function(Ce) {
                if (!d && D.focusStackId === $.focusStack.slice(-1)[0]) {
                    var Be = Ce.target;
                    Be && !(0,
                    Se.t)(V.current, Be) && (b && b.activeElement === b.body ? setTimeout(function() {
                        b && b.activeElement === b.body && (A(),
                        D.hasFocus = !0)
                    }, 0) : (A(),
                    D.hasFocus = !0),
                    Ce.preventDefault(),
                    Ce.stopPropagation())
                }
            });
            return t.useEffect(function() {
                var Ce = [];
                return u && Ce.push((0,
                Q.on)(window, "focus", de, !0)),
                R || Ce.push((0,
                Q.on)(window, "click", de, !0)),
                function() {
                    Ce.forEach(function(Be) {
                        return Be()
                    })
                }
            }, [u, R]),
            t.useEffect(function() {
                if (!(d || !T && !u || !V.current)) {
                    $.focusStack.push(D.focusStackId);
                    var Ce = N.elementToFocusOnDismiss || b.activeElement;
                    return !a && !(0,
                    Se.t)(V.current, Ce) && A(),
                    function() {
                        return Ee(Ce)
                    }
                }
            }, [u, d]),
            t.useEffect(function() {
                if (!d && L) {
                    var Ce = (0,
                    be.O)(V.current);
                    return Ce
                }
            }, [d, L, V]),
            (0,
            g.k)(function() {
                delete D.previouslyFocusedElementInTrapZone
            }),
            J(l, D.previouslyFocusedElementInTrapZone, A),
            t.createElement("div", (0,
            c.pi)({
                "aria-labelledby": N.ariaLabelledBy
            }, (0,
            he.pq)(N, he.n7), {
                ref: pe,
                onFocusCapture: le,
                onBlurCapture: G
            }), t.createElement("div", (0,
            c.pi)({}, Z, {
                ref: ae
            })), H, t.createElement("div", (0,
            c.pi)({}, Z, {
                ref: X
            })))
        });
        $.displayName = O,
        $.focusStack = []
    }
    ,
    23324: (mt,Ne,e)=>{
        e.d(Ne, {
            xu: ()=>ie,
            z1: ()=>he
        });
        var c = e(56996)
          , t = e(2784)
          , r = e(36312)
          , v = e(32523)
          , Se = e(88642)
          , Q = e(51370)
          , be = e(75649)
          , he = (0,
        v.NF)(function(ue) {
            var K = (0,
            be.q7)(ue) || {
                subset: {},
                code: void 0
            }
              , re = K.code
              , g = K.subset;
            return re ? {
                children: re,
                iconClassName: g.className,
                fontFamily: g.fontFace && g.fontFace.fontFamily,
                mergeImageProps: g.mergeImageProps
            } : null
        }, void 0, !0)
          , ie = function(ue) {
            var K = ue.iconName
              , re = ue.className
              , g = ue.style
              , ee = g === void 0 ? {} : g
              , O = he(K) || {}
              , U = O.iconClassName
              , J = O.children
              , $ = O.fontFamily
              , W = O.mergeImageProps
              , P = (0,
            Se.pq)(ue, Se.iY)
              , oe = ue["aria-label"] || ue.title
              , V = ue["aria-label"] || ue["aria-labelledby"] || ue.title ? {
                role: W ? void 0 : "img"
            } : {
                "aria-hidden": !0
            }
              , ae = J;
            return W && typeof J == "object" && typeof J.props == "object" && oe && (ae = t.cloneElement(J, {
                alt: oe
            })),
            t.createElement("i", (0,
            c.pi)({
                "data-icon-name": K
            }, V, P, W ? {
                title: void 0,
                "aria-label": void 0
            } : {}, {
                className: (0,
                Q.i)(r.Sk, r.AK.root, U, !K && r.AK.placeholder, re),
                style: (0,
                c.pi)({
                    fontFamily: $
                }, ee)
            }), ae)
        }
          , te = (0,
        v.NF)(function(ue, K, re) {
            return ie({
                iconName: ue,
                className: K,
                "aria-label": re
            })
        })
    }
    ,
    36775: (mt,Ne,e)=>{
        e.d(Ne, {
            J: ()=>re
        });
        var c = e(1238), t = e(56996), r = e(2784), v;
        (function(g) {
            g[g.default = 0] = "default",
            g[g.image = 1] = "image",
            g[g.Default = 1e5] = "Default",
            g[g.Image = 100001] = "Image"
        }
        )(v || (v = {}));
        var Se = e(82601)
          , Q = e(30266)
          , be = e(57312)
          , he = e(88642)
          , ie = e(23324)
          , te = (0,
        be.y)({
            cacheSize: 100
        })
          , ue = function(g) {
            (0,
            t.ZT)(ee, g);
            function ee(O) {
                var U = g.call(this, O) || this;
                return U._onImageLoadingStateChange = function(J) {
                    U.props.imageProps && U.props.imageProps.onLoadingStateChange && U.props.imageProps.onLoadingStateChange(J),
                    J === Q.U9.error && U.setState({
                        imageLoadError: !0
                    })
                }
                ,
                U.state = {
                    imageLoadError: !1
                },
                U
            }
            return ee.prototype.render = function() {
                var O = this.props
                  , U = O.children
                  , J = O.className
                  , $ = O.styles
                  , W = O.iconName
                  , P = O.imageErrorAs
                  , oe = O.theme
                  , V = typeof W == "string" && W.length === 0
                  , ae = !!this.props.imageProps || this.props.iconType === v.image || this.props.iconType === v.Image
                  , X = (0,
                ie.z1)(W) || {}
                  , pe = X.iconClassName
                  , b = X.children
                  , T = X.mergeImageProps
                  , N = te($, {
                    theme: oe,
                    className: J,
                    iconClassName: pe,
                    isImage: ae,
                    isPlaceholder: V
                })
                  , D = ae ? "span" : "i"
                  , H = (0,
                he.pq)(this.props, he.iY, ["aria-label"])
                  , l = this.state.imageLoadError
                  , d = (0,
                t.pi)((0,
                t.pi)({}, this.props.imageProps), {
                    onLoadingStateChange: this._onImageLoadingStateChange
                })
                  , a = l && P || Se.E
                  , u = this.props["aria-label"] || this.props.ariaLabel
                  , C = d.alt || u || this.props.title
                  , h = !!(C || this.props["aria-labelledby"] || d["aria-label"] || d["aria-labelledby"])
                  , f = h ? {
                    role: ae || T ? void 0 : "img",
                    "aria-label": ae || T ? void 0 : C
                } : {
                    "aria-hidden": !0
                }
                  , i = b;
                return T && b && typeof b == "object" && C && (i = r.cloneElement(b, {
                    alt: C
                })),
                r.createElement(D, (0,
                t.pi)({
                    "data-icon-name": W
                }, f, H, T ? {
                    title: void 0,
                    "aria-label": void 0
                } : {}, {
                    className: N.root
                }), ae ? r.createElement(a, (0,
                t.pi)({}, d)) : U || i)
            }
            ,
            ee
        }(r.Component)
          , K = e(36312)
          , re = (0,
        c.z)(ue, K.Wi, void 0, {
            scope: "Icon"
        }, !0);
        re.displayName = "Icon"
    }
    ,
    36312: (mt,Ne,e)=>{
        e.d(Ne, {
            AK: ()=>t,
            Sk: ()=>r,
            Wi: ()=>v
        });
        var c = e(75649)
          , t = (0,
        c.ZC)({
            root: {
                display: "inline-block"
            },
            placeholder: ["ms-Icon-placeHolder", {
                width: "1em"
            }],
            image: ["ms-Icon-imageContainer", {
                overflow: "hidden"
            }]
        })
          , r = "ms-Icon"
          , v = function(Se) {
            var Q = Se.className
              , be = Se.iconClassName
              , he = Se.isPlaceholder
              , ie = Se.isImage
              , te = Se.styles;
            return {
                root: [he && t.placeholder, t.root, ie && t.image, be, Q, te && te.root, te && te.imageContainer]
            }
        }
    }
    ,
    82601: (mt,Ne,e)=>{
        e.d(Ne, {
            E: ()=>W
        });
        var c = e(1238)
          , t = e(56996)
          , r = e(2784)
          , v = e(57312)
          , Se = e(88642)
          , Q = e(30266)
          , be = e(17096)
          , he = e(87891)
          , ie = (0,
        v.y)()
          , te = /\.svg$/i
          , ue = "fabricImage";
        function K(P, oe) {
            var V = P.onLoadingStateChange
              , ae = P.onLoad
              , X = P.onError
              , pe = P.src
              , b = r.useState(Q.U9.notLoaded)
              , T = b[0]
              , N = b[1];
            (0,
            be.L)(function() {
                N(Q.U9.notLoaded)
            }, [pe]),
            r.useEffect(function() {
                if (T === Q.U9.notLoaded) {
                    var l = oe.current ? pe && oe.current.naturalWidth > 0 && oe.current.naturalHeight > 0 || oe.current.complete && te.test(pe) : !1;
                    l && N(Q.U9.loaded)
                }
            }),
            r.useEffect(function() {
                V == null || V(T)
            }, [T]);
            var D = r.useCallback(function(l) {
                ae == null || ae(l),
                pe && N(Q.U9.loaded)
            }, [pe, ae])
              , H = r.useCallback(function(l) {
                X == null || X(l),
                N(Q.U9.error)
            }, [X]);
            return [T, D, H]
        }
        var re = r.forwardRef(function(P, oe) {
            var V = r.useRef()
              , ae = r.useRef()
              , X = K(P, ae)
              , pe = X[0]
              , b = X[1]
              , T = X[2]
              , N = (0,
            Se.pq)(P, Se.it, ["width", "height"])
              , D = P.src
              , H = P.alt
              , l = P.width
              , d = P.height
              , a = P.shouldFadeIn
              , u = a === void 0 ? !0 : a
              , C = P.shouldStartVisible
              , h = P.className
              , f = P.imageFit
              , i = P.role
              , m = P.maximizeFrame
              , R = P.styles
              , L = P.theme
              , Z = P.loading
              , F = g(P, pe, ae, V)
              , A = ie(R, {
                theme: L,
                className: h,
                width: l,
                height: d,
                maximizeFrame: m,
                shouldFadeIn: u,
                shouldStartVisible: C,
                isLoaded: pe === Q.U9.loaded || pe === Q.U9.notLoaded && P.shouldStartVisible,
                isLandscape: F === Q.yZ.landscape,
                isCenter: f === Q.kQ.center,
                isCenterContain: f === Q.kQ.centerContain,
                isCenterCover: f === Q.kQ.centerCover,
                isContain: f === Q.kQ.contain,
                isCover: f === Q.kQ.cover,
                isNone: f === Q.kQ.none,
                isError: pe === Q.U9.error,
                isNotImageFit: f === void 0
            });
            return r.createElement("div", {
                className: A.root,
                style: {
                    width: l,
                    height: d
                },
                ref: V
            }, r.createElement("img", (0,
            t.pi)({}, N, {
                onLoad: b,
                onError: T,
                key: ue + P.src || "",
                className: A.image,
                ref: (0,
                he.r)(ae, oe),
                src: D,
                alt: H,
                role: i,
                loading: Z
            })))
        });
        re.displayName = "ImageBase";
        function g(P, oe, V, ae) {
            var X = r.useRef(oe)
              , pe = r.useRef();
            return (pe === void 0 || X.current === Q.U9.notLoaded && oe === Q.U9.loaded) && (pe.current = ee(P, oe, V, ae)),
            X.current = oe,
            pe.current
        }
        function ee(P, oe, V, ae) {
            var X = P.imageFit
              , pe = P.width
              , b = P.height;
            if (P.coverStyle !== void 0)
                return P.coverStyle;
            if (oe === Q.U9.loaded && (X === Q.kQ.cover || X === Q.kQ.contain || X === Q.kQ.centerContain || X === Q.kQ.centerCover) && V.current && ae.current) {
                var T = void 0;
                typeof pe == "number" && typeof b == "number" && X !== Q.kQ.centerContain && X !== Q.kQ.centerCover ? T = pe / b : T = ae.current.clientWidth / ae.current.clientHeight;
                var N = V.current.naturalWidth / V.current.naturalHeight;
                if (N > T)
                    return Q.yZ.landscape
            }
            return Q.yZ.portrait
        }
        var O = e(75649)
          , U = e(18630)
          , J = {
            root: "ms-Image",
            rootMaximizeFrame: "ms-Image--maximizeFrame",
            image: "ms-Image-image",
            imageCenter: "ms-Image-image--center",
            imageContain: "ms-Image-image--contain",
            imageCover: "ms-Image-image--cover",
            imageCenterContain: "ms-Image-image--centerContain",
            imageCenterCover: "ms-Image-image--centerCover",
            imageNone: "ms-Image-image--none",
            imageLandscape: "ms-Image-image--landscape",
            imagePortrait: "ms-Image-image--portrait"
        }
          , $ = function(P) {
            var oe = P.className
              , V = P.width
              , ae = P.height
              , X = P.maximizeFrame
              , pe = P.isLoaded
              , b = P.shouldFadeIn
              , T = P.shouldStartVisible
              , N = P.isLandscape
              , D = P.isCenter
              , H = P.isContain
              , l = P.isCover
              , d = P.isCenterContain
              , a = P.isCenterCover
              , u = P.isNone
              , C = P.isError
              , h = P.isNotImageFit
              , f = P.theme
              , i = (0,
            O.Cn)(J, f)
              , m = {
                position: "absolute",
                left: "50% /* @noflip */",
                top: "50%",
                transform: "translate(-50%,-50%)"
            }
              , R = (0,
            U.J)()
              , L = R !== void 0 && R.navigator.msMaxTouchPoints === void 0
              , Z = H && N || l && !N ? {
                width: "100%",
                height: "auto"
            } : {
                width: "auto",
                height: "100%"
            };
            return {
                root: [i.root, f.fonts.medium, {
                    overflow: "hidden"
                }, X && [i.rootMaximizeFrame, {
                    height: "100%",
                    width: "100%"
                }], pe && b && !T && O.k4.fadeIn400, (D || H || l || d || a) && {
                    position: "relative"
                }, oe],
                image: [i.image, {
                    display: "block",
                    opacity: 0
                }, pe && ["is-loaded", {
                    opacity: 1
                }], D && [i.imageCenter, m], H && [i.imageContain, L && {
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                }, !L && Z, !L && m], l && [i.imageCover, L && {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }, !L && Z, !L && m], d && [i.imageCenterContain, N && {
                    maxWidth: "100%"
                }, !N && {
                    maxHeight: "100%"
                }, m], a && [i.imageCenterCover, N && {
                    maxHeight: "100%"
                }, !N && {
                    maxWidth: "100%"
                }, m], u && [i.imageNone, {
                    width: "auto",
                    height: "auto"
                }], h && [!!V && !ae && {
                    height: "auto",
                    width: "100%"
                }, !V && !!ae && {
                    height: "100%",
                    width: "auto"
                }, !!V && !!ae && {
                    height: "100%",
                    width: "100%"
                }], N && i.imageLandscape, !N && i.imagePortrait, !pe && "is-notLoaded", b && "is-fadeIn", C && "is-error"]
            }
        }
          , W = (0,
        c.z)(re, $, void 0, {
            scope: "Image"
        }, !0);
        W.displayName = "Image"
    }
    ,
    30266: (mt,Ne,e)=>{
        e.d(Ne, {
            U9: ()=>r,
            kQ: ()=>c,
            yZ: ()=>t
        });
        var c;
        (function(v) {
            v[v.center = 0] = "center",
            v[v.contain = 1] = "contain",
            v[v.cover = 2] = "cover",
            v[v.none = 3] = "none",
            v[v.centerCover = 4] = "centerCover",
            v[v.centerContain = 5] = "centerContain"
        }
        )(c || (c = {}));
        var t;
        (function(v) {
            v[v.landscape = 0] = "landscape",
            v[v.portrait = 1] = "portrait"
        }
        )(t || (t = {}));
        var r;
        (function(v) {
            v[v.notLoaded = 0] = "notLoaded",
            v[v.loaded = 1] = "loaded",
            v[v.error = 2] = "error",
            v[v.errorLoaded = 3] = "errorLoaded"
        }
        )(r || (r = {}))
    }
    ,
    553: (mt,Ne,e)=>{
        e.d(Ne, {
            _: ()=>te
        });
        var c = e(1238)
          , t = e(56996)
          , r = e(2784)
          , v = e(88642)
          , Se = e(57312)
          , Q = (0,
        Se.y)({
            cacheSize: 100
        })
          , be = function(ue) {
            (0,
            t.ZT)(K, ue);
            function K() {
                return ue !== null && ue.apply(this, arguments) || this
            }
            return K.prototype.render = function() {
                var re = this.props
                  , g = re.as
                  , ee = g === void 0 ? "label" : g
                  , O = re.children
                  , U = re.className
                  , J = re.disabled
                  , $ = re.styles
                  , W = re.required
                  , P = re.theme
                  , oe = Q($, {
                    className: U,
                    disabled: J,
                    required: W,
                    theme: P
                });
                return r.createElement(ee, (0,
                t.pi)({}, (0,
                v.pq)(this.props, v.n7), {
                    className: oe.root
                }), O)
            }
            ,
            K
        }(r.Component)
          , he = e(75649)
          , ie = function(ue) {
            var K, re = ue.theme, g = ue.className, ee = ue.disabled, O = ue.required, U = re.semanticColors, J = he.lq.semibold, $ = U.bodyText, W = U.disabledBodyText, P = U.errorText;
            return {
                root: ["ms-Label", re.fonts.medium, {
                    fontWeight: J,
                    color: $,
                    boxSizing: "border-box",
                    boxShadow: "none",
                    margin: 0,
                    display: "block",
                    padding: "5px 0",
                    wordWrap: "break-word",
                    overflowWrap: "break-word"
                }, ee && {
                    color: W,
                    selectors: (K = {},
                    K[he.qJ] = (0,
                    t.pi)({
                        color: "GrayText"
                    }, (0,
                    he.xM)()),
                    K)
                }, O && {
                    selectors: {
                        "::after": {
                            content: "' *'",
                            color: P,
                            paddingRight: 12
                        }
                    }
                }, g]
            }
        }
          , te = (0,
        c.z)(be, ie, void 0, {
            scope: "Label"
        })
    }
    ,
    39940: (mt,Ne,e)=>{
        e.d(Ne, {
            m: ()=>i
        });
        var c = e(1238)
          , t = e(56996)
          , r = e(66706)
          , v = e(2784)
          , Se = e(28316)
          , Q = e(57312)
          , be = e(32523)
          , he = e(8422)
          , ie = e(88642)
          , te = e(20344)
          , ue = e(66577)
          , K = e(66297)
          , re = e(98925)
          , g = e(87891)
          , ee = (0,
        Q.y)()
          , O = (0,
        be.NF)(function(m, R) {
            return (0,
            re.j)((0,
            t.pi)((0,
            t.pi)({}, m), {
                rtl: R
            }))
        })
          , U = function(m) {
            var R = m.theme
              , L = m.dir
              , Z = (0,
            he.zg)(R) ? "rtl" : "ltr"
              , F = (0,
            he.zg)() ? "rtl" : "ltr"
              , A = L || Z;
            return {
                rootDir: A !== Z || A !== F ? A : L,
                needsTheme: A !== Z
            }
        }
          , J = v.forwardRef(function(m, R) {
            var L = m.className
              , Z = m.theme
              , F = m.applyTheme
              , A = m.applyThemeToBody
              , j = m.styles
              , G = ee(j, {
                theme: Z,
                applyTheme: F,
                className: L
            })
              , le = v.useRef(null);
            return W(A, G, le),
            v.createElement(v.Fragment, null, $(m, G, le, R))
        });
        J.displayName = "FabricBase";
        function $(m, R, L, Z) {
            var F = R.root
              , A = m.as
              , j = A === void 0 ? "div" : A
              , G = m.dir
              , le = m.theme
              , Ee = (0,
            ie.pq)(m, ie.n7, ["dir"])
              , de = U(m)
              , Ce = de.rootDir
              , Be = de.needsTheme
              , Oe = v.createElement(te.Y, {
                providerRef: L
            }, v.createElement(j, (0,
            t.pi)({
                dir: Ce
            }, Ee, {
                className: F,
                ref: (0,
                g.r)(L, Z)
            })));
            return Be && (Oe = v.createElement(ue.N, {
                settings: {
                    theme: O(le, G === "rtl")
                }
            }, Oe)),
            Oe
        }
        function W(m, R, L) {
            var Z = R.bodyThemed;
            return v.useEffect(function() {
                if (m) {
                    var F = (0,
                    K.M)(L.current);
                    if (F)
                        return F.body.classList.add(Z),
                        function() {
                            F.body.classList.remove(Z)
                        }
                }
            }, [Z, m, L]),
            L
        }
        var P = e(75649)
          , oe = {
            fontFamily: "inherit"
        }
          , V = {
            root: "ms-Fabric",
            bodyThemed: "ms-Fabric-bodyThemed"
        }
          , ae = function(m) {
            var R = m.applyTheme
              , L = m.className
              , Z = m.preventBlanketFontInheritance
              , F = m.theme
              , A = (0,
            P.Cn)(V, F);
            return {
                root: [A.root, F.fonts.medium, {
                    color: F.palette.neutralPrimary
                }, !Z && {
                    "& button": oe,
                    "& input": oe,
                    "& textarea": oe
                }, R && {
                    color: F.semanticColors.bodyText,
                    backgroundColor: F.semanticColors.bodyBackground
                }, L],
                bodyThemed: [{
                    backgroundColor: F.semanticColors.bodyBackground
                }]
            }
        }
          , X = (0,
        c.z)(J, ae, void 0, {
            scope: "Fabric"
        })
          , pe = e(73100)
          , b = e(56255)
          , T = e(51370)
          , N = e(39601)
          , D = e(17096)
          , H = (0,
        Q.y)()
          , l = v.forwardRef(function(m, R) {
            var L = (0,
            r.G)()
              , Z = v.useRef(null)
              , F = (0,
            g.r)(Z, R)
              , A = v.useRef()
              , j = v.useRef(null)
              , G = v.useState(!1)
              , le = G[0]
              , Ee = G[1]
              , de = m.children
              , Ce = m.className
              , Be = m.eventBubblingEnabled
              , Oe = m.fabricProps
              , at = m.hostId
              , $e = m.insertFirst
              , et = m.onLayerDidMount
              , ht = et === void 0 ? function() {}
            : et
              , Ct = m.onLayerMounted
              , dt = Ct === void 0 ? function() {}
            : Ct
              , ze = m.onLayerWillUnmount
              , pt = m.styles
              , It = m.theme
              , w = (0,
            g.r)(j, Oe == null ? void 0 : Oe.ref)
              , ce = H(pt, {
                theme: It,
                className: Ce,
                isNotHost: !at
            })
              , B = function(z) {
                var ne, I;
                if (at) {
                    var o = (0,
                    N.Sx)(at);
                    return o ? (ne = o.rootRef.current) !== null && ne !== void 0 ? ne : null : (I = z.getElementById(at)) !== null && I !== void 0 ? I : null
                } else {
                    var me = (0,
                    N.OJ)()
                      , De = me ? z.querySelector(me) : null;
                    return De || (De = (0,
                    N.l_)(z)),
                    De
                }
            }
              , _ = function() {
                ze == null || ze();
                var z = A.current;
                A.current = void 0,
                z && z.parentNode && z.parentNode.removeChild(z)
            }
              , ye = function() {
                var z, ne = (0,
                K.M)(Z.current);
                if (!!ne) {
                    var I = B(ne);
                    if (!!I) {
                        _();
                        var o = ((z = I.ownerDocument) !== null && z !== void 0 ? z : ne).createElement("div");
                        o.className = ce.root,
                        (0,
                        pe.U)(o),
                        (0,
                        b.N)(o, Z.current),
                        $e ? I.insertBefore(o, I.firstChild) : I.appendChild(o),
                        A.current = o,
                        Ee(!0)
                    }
                }
            };
            return (0,
            D.L)(function() {
                ye(),
                at && (0,
                N.Pc)(at, ye);
                var z = A.current ? L(A.current) : void 0;
                return function() {
                    z && z(),
                    _(),
                    at && (0,
                    N.tq)(at, ye)
                }
            }, [at]),
            v.useEffect(function() {
                A.current && le && (dt == null || dt(),
                ht == null || ht(),
                Ee(!1))
            }, [le, dt, ht]),
            v.createElement("span", {
                className: "ms-layer",
                ref: F
            }, A.current && Se.createPortal(v.createElement(te.Y, {
                layerRoot: !0,
                providerRef: w
            }, v.createElement(X, (0,
            t.pi)({}, !Be && u(), Oe, {
                className: (0,
                T.i)(ce.content, Oe == null ? void 0 : Oe.className),
                ref: w
            }), de)), A.current))
        });
        l.displayName = "LayerBase";
        var d, a = function(m) {
            m.eventPhase === Event.BUBBLING_PHASE && m.type !== "mouseenter" && m.type !== "mouseleave" && m.type !== "touchstart" && m.type !== "touchend" && m.stopPropagation()
        };
        function u() {
            return d || (d = {},
            ["onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOver", "onMouseOut", "onMouseUp", "onTouchMove", "onTouchStart", "onTouchCancel", "onTouchEnd", "onKeyDown", "onKeyPress", "onKeyUp", "onFocus", "onBlur", "onChange", "onInput", "onInvalid", "onSubmit"].forEach(function(m) {
                return d[m] = a
            })),
            d
        }
        function C(m) {}
        var h = {
            root: "ms-Layer",
            rootNoHost: "ms-Layer--fixed",
            content: "ms-Layer-content"
        }
          , f = function(m) {
            var R = m.className
              , L = m.isNotHost
              , Z = m.theme
              , F = (0,
            P.Cn)(h, Z);
            return {
                root: [F.root, Z.fonts.medium, L && [F.rootNoHost, {
                    position: "fixed",
                    zIndex: P.bR.Layer,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    visibility: "hidden"
                }], R],
                content: [F.content, {
                    visibility: "visible"
                }]
            }
        }
          , i = (0,
        c.z)(l, f, void 0, {
            scope: "Layer",
            fields: ["hostId", "theme", "styles"]
        })
    }
    ,
    39601: (mt,Ne,e)=>{
        e.d(Ne, {
            EQ: ()=>re,
            OJ: ()=>ee,
            Pc: ()=>Se,
            Sx: ()=>he,
            _Y: ()=>ie,
            l_: ()=>ue,
            nw: ()=>te,
            tq: ()=>Q
        });
        var c = {}
          , t = {}
          , r = "fluent-default-layer-host"
          , v = "#" + r;
        function Se(O, U) {
            c[O] || (c[O] = []),
            c[O].push(U);
            var J = t[O];
            if (J)
                for (var $ = 0, W = J; $ < W.length; $++) {
                    var P = W[$];
                    P.notifyLayersChanged()
                }
        }
        function Q(O, U) {
            var J = c[O];
            if (J) {
                var $ = J.indexOf(U);
                $ >= 0 && (J.splice($, 1),
                J.length === 0 && delete c[O])
            }
            var W = t[O];
            if (W)
                for (var P = 0, oe = W; P < oe.length; P++) {
                    var V = oe[P];
                    V.notifyLayersChanged()
                }
        }
        function be(O) {
            var U = t[O];
            return U ? U.length : 0
        }
        function he(O) {
            var U = t[O];
            return U && U[0] || void 0
        }
        function ie(O, U) {
            var J = t[O] || (t[O] = []);
            J.unshift(U)
        }
        function te(O, U) {
            var J = t[O];
            if (J) {
                var $ = J.indexOf(U);
                $ >= 0 && J.splice($, 1),
                J.length === 0 && delete t[O]
            }
        }
        function ue(O) {
            var U = O.createElement("div");
            return U.setAttribute("id", r),
            U.style.cssText = "position:fixed;z-index:1000000",
            O == null || O.body.appendChild(U),
            U
        }
        function K(O) {
            var U = O.querySelector("#" + r);
            U && O.removeChild(U)
        }
        function re(O) {
            c[O] && c[O].forEach(function(U) {
                return U()
            })
        }
        function g(O) {
            v = O
        }
        function ee() {
            return v
        }
    }
    ,
    22191: (mt,Ne,e)=>{
        e.d(Ne, {
            Z: ()=>be
        });
        var c = e(56996)
          , t = e(2784)
          , r = e(27883)
          , v = e(35577)
          , Se = e(51370)
          , Q = e(39601)
          , be = function(he) {
            var ie = he.className
              , te = t.useState(function() {
                return (0,
                v.z)()
            })[0]
              , ue = he.id
              , K = ue === void 0 ? te : ue
              , re = t.useRef({
                hostId: K,
                rootRef: t.useRef(null),
                notifyLayersChanged: function() {}
            });
            return t.useImperativeHandle(he.componentRef, function() {
                return re.current
            }),
            t.useEffect(function() {
                (0,
                Q._Y)(K, re.current),
                (0,
                Q.EQ)(K)
            }, []),
            (0,
            r.k)(function() {
                (0,
                Q.nw)(K, re.current),
                (0,
                Q.EQ)(K)
            }),
            t.createElement("div", (0,
            c.pi)({}, he, {
                className: (0,
                Se.i)("ms-LayerHost", ie),
                ref: re.current.rootRef
            }))
        }
    }
    ,
    4729: (mt,Ne,e)=>{
        e.d(Ne, {
            r: ()=>ee
        });
        var c = e(1238)
          , t = e(56996)
          , r = e(2784)
          , v = e(87891)
          , Se = e(57312)
          , Q = e(65272)
          , be = (0,
        Se.y)()
          , he = function(O, U) {
            var J = O.as
              , $ = O.className
              , W = O.disabled
              , P = O.href
              , oe = O.onClick
              , V = O.styles
              , ae = O.theme
              , X = O.underline
              , pe = r.useRef(null)
              , b = (0,
            v.r)(pe, U);
            ie(O, pe),
            (0,
            Q.Pr)(pe);
            var T = be(V, {
                className: $,
                isButton: !P,
                isDisabled: W,
                isUnderlined: X,
                theme: ae
            })
              , N = function(a) {
                W ? a.preventDefault() : oe && oe(a)
            }
              , D = J || (P ? "a" : "button")
              , H = {}
              , l = {
                root: D
            }
              , d = {
                root: (0,
                t.pi)((0,
                t.pi)({}, te(D, O)), {
                    "aria-disabled": W,
                    className: T.root,
                    onClick: N,
                    ref: b
                })
            };
            return {
                state: H,
                slots: l,
                slotProps: d
            }
        }
          , ie = function(O, U) {
            r.useImperativeHandle(O.componentRef, function() {
                return {
                    focus: function() {
                        U.current && U.current.focus()
                    }
                }
            }, [U])
        }
          , te = function(O, U) {
            var J = U.as
              , $ = U.disabled
              , W = U.target
              , P = U.href
              , oe = U.theme
              , V = U.getStyles
              , ae = U.styles
              , X = U.componentRef
              , pe = U.underline
              , b = (0,
            t._T)(U, ["as", "disabled", "target", "href", "theme", "getStyles", "styles", "componentRef", "underline"]);
            return typeof O == "string" ? O === "a" ? (0,
            t.pi)({
                target: W,
                href: $ ? void 0 : P
            }, b) : O === "button" ? (0,
            t.pi)({
                type: "button",
                disabled: $
            }, b) : (0,
            t.pi)((0,
            t.pi)({}, b), {
                disabled: $
            }) : (0,
            t.pi)({
                target: W,
                href: P,
                disabled: $
            }, b)
        }
          , ue = r.forwardRef(function(O, U) {
            var J = he(O, U)
              , $ = J.slots
              , W = J.slotProps;
            return r.createElement($.root, (0,
            t.pi)({}, W.root))
        });
        ue.displayName = "LinkBase";
        var K = e(75649)
          , re = {
            root: "ms-Link"
        }
          , g = function(O) {
            var U, J, $, W, P, oe, V, ae = O.className, X = O.isButton, pe = O.isDisabled, b = O.isUnderlined, T = O.theme, N = T.semanticColors, D = N.link, H = N.linkHovered, l = N.disabledText, d = N.focusBorder, a = (0,
            K.Cn)(re, T);
            return {
                root: [a.root, T.fonts.medium, {
                    color: D,
                    outline: "none",
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    textDecoration: b ? "underline" : "none",
                    selectors: (U = {
                        ".ms-Fabric--isFocusVisible &:focus": {
                            boxShadow: "0 0 0 1px " + d + " inset",
                            outline: "1px auto " + d,
                            selectors: (J = {},
                            J[K.qJ] = {
                                outline: "1px solid WindowText"
                            },
                            J)
                        }
                    },
                    U[K.qJ] = {
                        borderBottom: "none"
                    },
                    U)
                }, X && {
                    background: "none",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "inline",
                    margin: 0,
                    overflow: "inherit",
                    padding: 0,
                    textAlign: "left",
                    textOverflow: "inherit",
                    userSelect: "text",
                    borderBottom: "1px solid transparent",
                    selectors: ($ = {},
                    $[K.qJ] = {
                        color: "LinkText",
                        forcedColorAdjust: "none"
                    },
                    $)
                }, !X && {
                    selectors: (W = {},
                    W[K.qJ] = {
                        MsHighContrastAdjust: "auto",
                        forcedColorAdjust: "auto"
                    },
                    W)
                }, pe && ["is-disabled", {
                    color: l,
                    cursor: "default"
                }, {
                    selectors: (P = {
                        "&:link, &:visited": {
                            pointerEvents: "none"
                        }
                    },
                    P[K.qJ] = {
                        color: "GrayText"
                    },
                    P)
                }], !pe && {
                    selectors: {
                        "&:active, &:hover, &:active:hover": {
                            color: H,
                            textDecoration: "underline",
                            selectors: (oe = {},
                            oe[K.qJ] = {
                                color: "LinkText"
                            },
                            oe)
                        },
                        "&:focus": {
                            color: D,
                            selectors: (V = {},
                            V[K.qJ] = {
                                color: "LinkText"
                            },
                            V)
                        }
                    }
                }, a.root, ae]
            }
        }
          , ee = (0,
        c.z)(ue, g, void 0, {
            scope: "Link"
        })
    }
    ,
    78273: (mt,Ne,e)=>{
        e.d(Ne, {
            a: ()=>l
        });
        var c = e(56996)
          , t = e(2784)
          , r = e(85758)
          , v = e(61676)
          , Se = e(47321)
          , Q = e(18003)
          , be = e(88642)
          , he = e(51370)
          , ie = e(52651)
          , te = e(32367)
          , ue = e(18630)
          , K = e(22856)
          , re = e(63119)
          , g = function(C) {
            if (C === void 0)
                return 0;
            var h = 0;
            return "scrollHeight"in C ? h = C.scrollHeight : "document"in C && (h = C.document.documentElement.scrollHeight),
            h
        }
          , ee = function(C) {
            if (C === void 0)
                return 0;
            var h = 0;
            return "scrollTop"in C ? h = C.scrollTop : "scrollY"in C && (h = C.scrollY),
            Math.ceil(h)
        }
          , O = function(C, h) {
            "scrollTop"in C ? C.scrollTop = h : "scrollY"in C && C.scrollTo(C.scrollX, h)
        }
          , U = 16
          , J = 100
          , $ = 500
          , W = 200
          , P = 500
          , oe = 10
          , V = 30
          , ae = 2
          , X = 2
          , pe = "page-"
          , b = "spacer-"
          , T = {
            top: -1,
            bottom: -1,
            left: -1,
            right: -1,
            width: 0,
            height: 0
        }
          , N = function(C) {
            return C.getBoundingClientRect()
        }
          , D = N
          , H = N
          , l = function(C) {
            (0,
            c.ZT)(h, C);
            function h(f) {
                var i = C.call(this, f) || this;
                return i._root = t.createRef(),
                i._surface = t.createRef(),
                i._pageRefs = {},
                i._getDerivedStateFromProps = function(m, R) {
                    return m.items !== i.props.items || m.renderCount !== i.props.renderCount || m.startIndex !== i.props.startIndex || m.version !== i.props.version ? (i._resetRequiredWindows(),
                    i._requiredRect = null,
                    i._measureVersion++,
                    i._invalidatePageCache(),
                    i._updatePages(m, R)) : R
                }
                ,
                i._onRenderRoot = function(m) {
                    var R = m.rootRef
                      , L = m.surfaceElement
                      , Z = m.divProps;
                    return t.createElement("div", (0,
                    c.pi)({
                        ref: R
                    }, Z), L)
                }
                ,
                i._onRenderSurface = function(m) {
                    var R = m.surfaceRef
                      , L = m.pageElements
                      , Z = m.divProps;
                    return t.createElement("div", (0,
                    c.pi)({
                        ref: R
                    }, Z), L)
                }
                ,
                i._onRenderPage = function(m, R) {
                    for (var L, Z = i.props, F = Z.onRenderCell, A = Z.onRenderCellConditional, j = Z.role, G = m.page, le = G.items, Ee = le === void 0 ? [] : le, de = G.startIndex, Ce = (0,
                    c._T)(m, ["page"]), Be = j === void 0 ? "listitem" : "presentation", Oe = [], at = 0; at < Ee.length; at++) {
                        var $e = de + at
                          , et = Ee[at]
                          , ht = i.props.getKey ? i.props.getKey(et, $e) : et && et.key;
                        ht == null && (ht = $e);
                        var Ct = A != null ? A : F
                          , dt = (L = Ct == null ? void 0 : Ct(et, $e, i.props.ignoreScrollingState ? void 0 : i.state.isScrolling)) !== null && L !== void 0 ? L : null;
                        (!A || dt) && Oe.push(t.createElement("div", {
                            role: Be,
                            className: "ms-List-cell",
                            key: ht,
                            "data-list-index": $e,
                            "data-automationid": "ListCell"
                        }, dt))
                    }
                    return t.createElement("div", (0,
                    c.pi)({}, Ce), Oe)
                }
                ,
                (0,
                r.l)(i),
                i.state = {
                    pages: [],
                    isScrolling: !1,
                    getDerivedStateFromProps: i._getDerivedStateFromProps,
                    hasMounted: !1
                },
                i._async = new v.e(i),
                i._events = new Se.r(i),
                i._estimatedPageHeight = 0,
                i._totalEstimates = 0,
                i._requiredWindowsAhead = 0,
                i._requiredWindowsBehind = 0,
                i._measureVersion = 0,
                i._onAsyncScroll = i._async.debounce(i._onAsyncScroll, J, {
                    leading: !1,
                    maxWait: $
                }),
                i._onAsyncIdle = i._async.debounce(i._onAsyncIdle, W, {
                    leading: !1
                }),
                i._onAsyncResize = i._async.debounce(i._onAsyncResize, U, {
                    leading: !1
                }),
                i._onScrollingDone = i._async.debounce(i._onScrollingDone, P, {
                    leading: !1
                }),
                i._cachedPageHeights = {},
                i._estimatedPageHeight = 0,
                i._focusedIndex = -1,
                i._pageCache = {},
                i
            }
            return h.getDerivedStateFromProps = function(f, i) {
                return i.getDerivedStateFromProps(f, i)
            }
            ,
            Object.defineProperty(h.prototype, "pageRefs", {
                get: function() {
                    return this._pageRefs
                },
                enumerable: !1,
                configurable: !0
            }),
            h.prototype.scrollToIndex = function(f, i, m) {
                m === void 0 && (m = K.M.auto);
                for (var R = this.props.startIndex, L = this._getRenderCount(), Z = R + L, F = this._allowedRect, A = 0, j = 1, G = R; G < Z; G += j) {
                    var le = this._getPageSpecification(this.props, G, F)
                      , Ee = le.height;
                    j = le.itemCount;
                    var de = G <= f && G + j > f;
                    if (de) {
                        if (i && this._scrollElement) {
                            for (var Ce = H(this._scrollElement), Be = ee(this._scrollElement), Oe = {
                                top: Be,
                                bottom: Be + Ce.height
                            }, at = f - G, $e = 0; $e < at; ++$e)
                                A += i(G + $e);
                            var et = A + i(f);
                            switch (m) {
                            case K.M.top:
                                O(this._scrollElement, A);
                                return;
                            case K.M.bottom:
                                O(this._scrollElement, et - Ce.height);
                                return;
                            case K.M.center:
                                O(this._scrollElement, (A + et - Ce.height) / 2);
                                return;
                            case K.M.auto:
                            default:
                                break
                            }
                            var ht = A >= Oe.top && et <= Oe.bottom;
                            if (ht)
                                return;
                            var Ct = A < Oe.top
                              , dt = et > Oe.bottom;
                            Ct || dt && (A = et - Ce.height)
                        }
                        this._scrollElement && O(this._scrollElement, A);
                        return
                    }
                    A += Ee
                }
            }
            ,
            h.prototype.getStartItemIndexInView = function(f) {
                for (var i = this.state.pages || [], m = 0, R = i; m < R.length; m++) {
                    var L = R[m]
                      , Z = !L.isSpacer && (this._scrollTop || 0) >= L.top && (this._scrollTop || 0) <= L.top + L.height;
                    if (Z)
                        if (f)
                            for (var A = 0, j = L.startIndex; j < L.startIndex + L.itemCount; j++) {
                                var F = f(j);
                                if (L.top + A <= this._scrollTop && this._scrollTop < L.top + A + F)
                                    return j;
                                A += F
                            }
                        else {
                            var F = Math.floor(L.height / L.itemCount);
                            return L.startIndex + Math.floor((this._scrollTop - L.top) / F)
                        }
                }
                return 0
            }
            ,
            h.prototype.componentDidMount = function() {
                this._scrollElement = (0,
                Q.zj)(this._root.current),
                this._scrollTop = 0,
                this.setState(this._updatePages(this.props, this.state)),
                this._measureVersion++,
                this._events.on(window, "resize", this._onAsyncResize),
                this._root.current && this._events.on(this._root.current, "focus", this._onFocus, !0),
                this._scrollElement && (this._events.on(this._scrollElement, "scroll", this._onScroll),
                this._events.on(this._scrollElement, "scroll", this._onAsyncScroll))
            }
            ,
            h.prototype.componentDidUpdate = function(f, i) {
                var m = this.props
                  , R = this.state;
                if (this.state.pagesVersion !== i.pagesVersion) {
                    if (m.getPageHeight)
                        this._onAsyncIdle();
                    else {
                        var L = this._updatePageMeasurements(R.pages);
                        L ? (this._materializedRect = null,
                        this._hasCompletedFirstRender ? this._onAsyncScroll() : (this._hasCompletedFirstRender = !0,
                        this.setState(this._updatePages(m, R)))) : this._onAsyncIdle()
                    }
                    m.onPagesUpdated && m.onPagesUpdated(R.pages)
                }
            }
            ,
            h.prototype.componentWillUnmount = function() {
                this._async.dispose(),
                this._events.dispose(),
                delete this._scrollElement
            }
            ,
            h.prototype.shouldComponentUpdate = function(f, i) {
                var m = this.state.pages
                  , R = i.pages
                  , L = !1;
                if (!i.isScrolling && this.state.isScrolling || f.version !== this.props.version || f.className !== this.props.className)
                    return !0;
                if (f.items === this.props.items && m.length === R.length)
                    for (var Z = 0; Z < m.length; Z++) {
                        var F = m[Z]
                          , A = R[Z];
                        if (F.key !== A.key || F.itemCount !== A.itemCount) {
                            L = !0;
                            break
                        }
                    }
                else
                    L = !0;
                return L
            }
            ,
            h.prototype.forceUpdate = function() {
                this._invalidatePageCache(),
                this._updateRenderRects(this.props, this.state, !0),
                this.setState(this._updatePages(this.props, this.state)),
                this._measureVersion++,
                C.prototype.forceUpdate.call(this)
            }
            ,
            h.prototype.getTotalListHeight = function() {
                return this._surfaceRect.height
            }
            ,
            h.prototype.render = function() {
                for (var f = this.props, i = f.className, m = f.role, R = m === void 0 ? "list" : m, L = f.onRenderSurface, Z = f.onRenderRoot, F = this.state.pages, A = F === void 0 ? [] : F, j = [], G = (0,
                be.pq)(this.props, be.n7), le = 0, Ee = A; le < Ee.length; le++) {
                    var de = Ee[le];
                    j.push(this._renderPage(de))
                }
                var Ce = L ? (0,
                re.k)(L, this._onRenderSurface) : this._onRenderSurface
                  , Be = Z ? (0,
                re.k)(Z, this._onRenderRoot) : this._onRenderRoot;
                return Be({
                    rootRef: this._root,
                    pages: A,
                    surfaceElement: Ce({
                        surfaceRef: this._surface,
                        pages: A,
                        pageElements: j,
                        divProps: {
                            role: "presentation",
                            className: "ms-List-surface"
                        }
                    }),
                    divProps: (0,
                    c.pi)((0,
                    c.pi)({}, G), {
                        className: (0,
                        he.i)("ms-List", i),
                        role: j.length > 0 ? R : void 0,
                        "aria-label": j.length > 0 ? G["aria-label"] : void 0
                    })
                })
            }
            ,
            h.prototype._shouldVirtualize = function(f) {
                f === void 0 && (f = this.props);
                var i = f.onShouldVirtualize;
                return !i || i(f)
            }
            ,
            h.prototype._invalidatePageCache = function() {
                this._pageCache = {}
            }
            ,
            h.prototype._renderPage = function(f) {
                var i = this, m = this.props.usePageCache, R;
                if (m && (R = this._pageCache[f.key],
                R && R.pageElement))
                    return R.pageElement;
                var L = this._getPageStyle(f)
                  , Z = this.props.onRenderPage
                  , F = Z === void 0 ? this._onRenderPage : Z
                  , A = F({
                    page: f,
                    className: "ms-List-page",
                    key: f.key,
                    ref: function(j) {
                        i._pageRefs[f.key] = j
                    },
                    style: L,
                    role: "presentation"
                }, this._onRenderPage);
                return m && f.startIndex === 0 && (this._pageCache[f.key] = {
                    page: f,
                    pageElement: A
                }),
                A
            }
            ,
            h.prototype._getPageStyle = function(f) {
                var i = this.props.getPageStyle;
                return (0,
                c.pi)((0,
                c.pi)({}, i ? i(f) : {}), f.items ? {} : {
                    height: f.height
                })
            }
            ,
            h.prototype._onFocus = function(f) {
                for (var i = f.target; i !== this._surface.current; ) {
                    var m = i.getAttribute("data-list-index");
                    if (m) {
                        this._focusedIndex = Number(m);
                        break
                    }
                    i = (0,
                    ie.G)(i)
                }
            }
            ,
            h.prototype._onScroll = function() {
                !this.state.isScrolling && !this.props.ignoreScrollingState && this.setState({
                    isScrolling: !0
                }),
                this._resetRequiredWindows(),
                this._onScrollingDone()
            }
            ,
            h.prototype._resetRequiredWindows = function() {
                this._requiredWindowsAhead = 0,
                this._requiredWindowsBehind = 0
            }
            ,
            h.prototype._onAsyncScroll = function() {
                this._updateRenderRects(this.props, this.state),
                (!this._materializedRect || !a(this._requiredRect, this._materializedRect)) && this.setState(this._updatePages(this.props, this.state))
            }
            ,
            h.prototype._onAsyncIdle = function() {
                var f = this.props
                  , i = f.renderedWindowsAhead
                  , m = f.renderedWindowsBehind
                  , R = this
                  , L = R._requiredWindowsAhead
                  , Z = R._requiredWindowsBehind
                  , F = Math.min(i, L + 1)
                  , A = Math.min(m, Z + 1);
                (F !== L || A !== Z) && (this._requiredWindowsAhead = F,
                this._requiredWindowsBehind = A,
                this._updateRenderRects(this.props, this.state),
                this.setState(this._updatePages(this.props, this.state))),
                (i > F || m > A) && this._onAsyncIdle()
            }
            ,
            h.prototype._onScrollingDone = function() {
                this.props.ignoreScrollingState || this.setState({
                    isScrolling: !1
                })
            }
            ,
            h.prototype._onAsyncResize = function() {
                this.forceUpdate()
            }
            ,
            h.prototype._updatePages = function(f, i) {
                this._requiredRect || this._updateRenderRects(f, i);
                var m = this._buildPages(f, i)
                  , R = i.pages;
                return this._notifyPageChanges(R, m.pages, this.props),
                (0,
                c.pi)((0,
                c.pi)((0,
                c.pi)({}, i), m), {
                    pagesVersion: {}
                })
            }
            ,
            h.prototype._notifyPageChanges = function(f, i, m) {
                var R = m.onPageAdded
                  , L = m.onPageRemoved;
                if (R || L) {
                    for (var Z = {}, F = 0, A = f; F < A.length; F++) {
                        var j = A[F];
                        j.items && (Z[j.startIndex] = j)
                    }
                    for (var G = 0, le = i; G < le.length; G++) {
                        var j = le[G];
                        j.items && (Z[j.startIndex] ? delete Z[j.startIndex] : this._onPageAdded(j))
                    }
                    for (var Ee in Z)
                        Z.hasOwnProperty(Ee) && this._onPageRemoved(Z[Ee])
                }
            }
            ,
            h.prototype._updatePageMeasurements = function(f) {
                var i = !1;
                if (!this._shouldVirtualize())
                    return i;
                for (var m = 0; m < f.length; m++) {
                    var R = f[m];
                    R.items && (i = this._measurePage(R) || i)
                }
                return i
            }
            ,
            h.prototype._measurePage = function(f) {
                var i = !1
                  , m = this._pageRefs[f.key]
                  , R = this._cachedPageHeights[f.startIndex];
                if (m && this._shouldVirtualize() && (!R || R.measureVersion !== this._measureVersion)) {
                    var L = {
                        width: m.clientWidth,
                        height: m.clientHeight
                    };
                    (L.height || L.width) && (i = f.height !== L.height,
                    f.height = L.height,
                    this._cachedPageHeights[f.startIndex] = {
                        height: L.height,
                        measureVersion: this._measureVersion
                    },
                    this._estimatedPageHeight = Math.round((this._estimatedPageHeight * this._totalEstimates + L.height) / (this._totalEstimates + 1)),
                    this._totalEstimates++)
                }
                return i
            }
            ,
            h.prototype._onPageAdded = function(f) {
                var i = this.props.onPageAdded;
                i && i(f)
            }
            ,
            h.prototype._onPageRemoved = function(f) {
                var i = this.props.onPageRemoved;
                i && i(f)
            }
            ,
            h.prototype._buildPages = function(f, i) {
                var m = f.renderCount
                  , R = f.items
                  , L = f.startIndex
                  , Z = f.getPageHeight;
                m = this._getRenderCount(f);
                for (var F = (0,
                c.pi)({}, T), A = [], j = 1, G = 0, le = null, Ee = this._focusedIndex, de = L + m, Ce = this._shouldVirtualize(f), Be = this._estimatedPageHeight === 0 && !Z, Oe = this._allowedRect, at = function(Ct) {
                    var dt = $e._getPageSpecification(f, Ct, Oe)
                      , ze = dt.height
                      , pt = dt.data
                      , It = dt.key;
                    j = dt.itemCount;
                    var w = G + ze - 1
                      , ce = (0,
                    te.cx)(i.pages, function(me) {
                        return !!me.items && me.startIndex === Ct
                    }) > -1
                      , B = !Oe || w >= Oe.top && G <= Oe.bottom
                      , _ = !$e._requiredRect || w >= $e._requiredRect.top && G <= $e._requiredRect.bottom
                      , ye = !Be && (_ || B && ce) || !Ce
                      , z = Ee >= Ct && Ee < Ct + j
                      , ne = Ct === L;
                    if (ye || z || ne) {
                        le && (A.push(le),
                        le = null);
                        var I = Math.min(j, de - Ct)
                          , o = $e._createPage(It, R.slice(Ct, Ct + I), Ct, void 0, void 0, pt);
                        o.top = G,
                        o.height = ze,
                        $e._visibleRect && $e._visibleRect.bottom && (o.isVisible = w >= $e._visibleRect.top && G <= $e._visibleRect.bottom),
                        A.push(o),
                        _ && $e._allowedRect && u(F, {
                            top: G,
                            bottom: w,
                            height: ze,
                            left: Oe.left,
                            right: Oe.right,
                            width: Oe.width
                        })
                    } else
                        le || (le = $e._createPage(b + Ct, void 0, Ct, 0, void 0, pt, !0)),
                        le.height = (le.height || 0) + (w - G) + 1,
                        le.itemCount += j;
                    if (G += w - G + 1,
                    Be && Ce)
                        return "break"
                }, $e = this, et = L; et < de; et += j) {
                    var ht = at(et);
                    if (ht === "break")
                        break
                }
                return le && (le.key = b + "end",
                A.push(le)),
                this._materializedRect = F,
                (0,
                c.pi)((0,
                c.pi)({}, i), {
                    pages: A,
                    measureVersion: this._measureVersion
                })
            }
            ,
            h.prototype._getPageSpecification = function(f, i, m) {
                var R = f.getPageSpecification;
                if (R) {
                    var L = R(i, m)
                      , Z = L.itemCount
                      , F = Z === void 0 ? this._getItemCountForPage(i, m) : Z
                      , A = L.height
                      , j = A === void 0 ? this._getPageHeight(i, m, F) : A;
                    return {
                        itemCount: F,
                        height: j,
                        data: L.data,
                        key: L.key
                    }
                } else {
                    var F = this._getItemCountForPage(i, m);
                    return {
                        itemCount: F,
                        height: this._getPageHeight(i, m, F)
                    }
                }
            }
            ,
            h.prototype._getPageHeight = function(f, i, m) {
                if (this.props.getPageHeight)
                    return this.props.getPageHeight(f, i, m);
                var R = this._cachedPageHeights[f];
                return R ? R.height : this._estimatedPageHeight || V
            }
            ,
            h.prototype._getItemCountForPage = function(f, i) {
                var m = this.props.getItemCountForPage ? this.props.getItemCountForPage(f, i) : oe;
                return m || oe
            }
            ,
            h.prototype._createPage = function(f, i, m, R, L, Z, F) {
                m === void 0 && (m = -1),
                R === void 0 && (R = i ? i.length : 0),
                L === void 0 && (L = {}),
                f = f || pe + m;
                var A = this._pageCache[f];
                return A && A.page ? A.page : {
                    key: f,
                    startIndex: m,
                    itemCount: R,
                    items: i,
                    style: L,
                    top: 0,
                    height: 0,
                    data: Z,
                    isSpacer: F || !1
                }
            }
            ,
            h.prototype._getRenderCount = function(f) {
                var i = f || this.props
                  , m = i.items
                  , R = i.startIndex
                  , L = i.renderCount;
                return L === void 0 ? m ? m.length - R : 0 : L
            }
            ,
            h.prototype._updateRenderRects = function(f, i, m) {
                var R = f.renderedWindowsAhead
                  , L = f.renderedWindowsBehind
                  , Z = i.pages;
                if (!!this._shouldVirtualize(f)) {
                    var F = this._surfaceRect || (0,
                    c.pi)({}, T)
                      , A = g(this._scrollElement)
                      , j = ee(this._scrollElement);
                    this._surface.current && (m || !Z || !this._surfaceRect || !A || A !== this._scrollHeight || Math.abs(this._scrollTop - j) > this._estimatedPageHeight / 3) && (F = this._surfaceRect = D(this._surface.current),
                    this._scrollTop = j),
                    (m || !A || A !== this._scrollHeight) && this._measureVersion++,
                    this._scrollHeight = A || 0;
                    var G = Math.max(0, -F.top)
                      , le = (0,
                    ue.J)(this._root.current)
                      , Ee = {
                        top: G,
                        left: F.left,
                        bottom: G + le.innerHeight,
                        right: F.right,
                        width: F.width,
                        height: le.innerHeight
                    };
                    this._requiredRect = d(Ee, this._requiredWindowsBehind, this._requiredWindowsAhead),
                    this._allowedRect = d(Ee, L, R),
                    this._visibleRect = Ee
                }
            }
            ,
            h.defaultProps = {
                startIndex: 0,
                onRenderCell: function(f, i, m) {
                    return t.createElement(t.Fragment, null, f && f.name || "")
                },
                onRenderCellConditional: void 0,
                renderedWindowsAhead: X,
                renderedWindowsBehind: ae
            },
            h
        }(t.Component);
        function d(C, h, f) {
            var i = C.top - h * C.height
              , m = C.height + (h + f) * C.height;
            return {
                top: i,
                bottom: i + m,
                height: m,
                left: C.left,
                right: C.right,
                width: C.width
            }
        }
        function a(C, h) {
            return C.top >= h.top && C.left >= h.left && C.bottom <= h.bottom && C.right <= h.right
        }
        function u(C, h) {
            return C.top = h.top < C.top || C.top === -1 ? h.top : C.top,
            C.left = h.left < C.left || C.left === -1 ? h.left : C.left,
            C.bottom = h.bottom > C.bottom || C.bottom === -1 ? h.bottom : C.bottom,
            C.right = h.right > C.right || C.right === -1 ? h.right : C.right,
            C.width = C.right - C.left + 1,
            C.height = C.bottom - C.top + 1,
            C
        }
    }
    ,
    22856: (mt,Ne,e)=>{
        e.d(Ne, {
            M: ()=>c
        });
        var c = {
            auto: 0,
            top: 1,
            bottom: 2,
            center: 3
        }
    }
    ,
    33865: (mt,Ne,e)=>{
        e.d(Ne, {
            c: ()=>H
        });
        var c = e(1238), t = e(56996), r = e(2784), v = e(57312), Se = e(88642), Q = e(51370), be = e(72696), he = e(76984), ie = e(36775), te = e(62838), ue = e(72948), K = e(73823), re, g = (re = {},
        re[te.f.info] = "Info",
        re[te.f.warning] = "Info",
        re[te.f.error] = "ErrorBadge",
        re[te.f.blocked] = "Blocked2",
        re[te.f.severeWarning] = "Warning",
        re[te.f.success] = "Completed",
        re), ee = "MessageBar", O = (0,
        v.y)(), U = function(l) {
            switch (l) {
            case te.f.blocked:
            case te.f.error:
            case te.f.severeWarning:
                return "assertive"
            }
            return "polite"
        }, J = function(l) {
            switch (l) {
            case te.f.blocked:
            case te.f.error:
            case te.f.severeWarning:
                return "alert"
            }
            return "status"
        }, $ = r.forwardRef(function(l, d) {
            var a = (0,
            ue.k)(!1)
              , u = a[0]
              , C = a[1].toggle
              , h = (0,
            K.M)("MessageBar")
              , f = l.actions
              , i = l.className
              , m = l.children
              , R = l.overflowButtonAriaLabel
              , L = l.dismissIconProps
              , Z = l.styles
              , F = l.theme
              , A = l.messageBarType
              , j = A === void 0 ? te.f.info : A
              , G = l.onDismiss
              , le = G === void 0 ? void 0 : G
              , Ee = l.isMultiline
              , de = Ee === void 0 ? !0 : Ee
              , Ce = l.truncated
              , Be = l.dismissButtonAriaLabel
              , Oe = l.messageBarIconProps
              , at = l.role
              , $e = l.delayedRender
              , et = $e === void 0 ? !0 : $e
              , ht = l.expandButtonProps
              , Ct = (0,
            Se.pq)(l, Se.iY, ["className", "role"])
              , dt = O(Z, {
                theme: F,
                messageBarType: j || te.f.info,
                onDismiss: le !== void 0,
                actions: f !== void 0,
                truncated: Ce,
                isMultiline: de,
                expandSingleLine: u,
                className: i
            })
              , ze = {
                iconName: u ? "DoubleChevronUp" : "DoubleChevronDown"
            }
              , pt = f || le ? {
                "aria-describedby": h,
                role: "region"
            } : {}
              , It = f ? r.createElement("div", {
                className: dt.actions
            }, f) : null
              , w = le ? r.createElement(he.h, {
                disabled: !1,
                className: dt.dismissal,
                onClick: le,
                iconProps: L || {
                    iconName: "Clear"
                },
                title: Be,
                ariaLabel: Be
            }) : null;
            return r.createElement("div", (0,
            t.pi)({
                ref: d,
                className: dt.root
            }, pt), r.createElement("div", {
                className: dt.content
            }, r.createElement("div", {
                className: dt.iconContainer,
                "aria-hidden": !0
            }, Oe ? r.createElement(ie.J, (0,
            t.pi)({}, Oe, {
                className: (0,
                Q.i)(dt.icon, Oe.className)
            })) : r.createElement(ie.J, {
                iconName: g[j],
                className: dt.icon
            })), r.createElement("div", {
                className: dt.text,
                id: h,
                role: at || J(j),
                "aria-live": U(j)
            }, r.createElement("span", (0,
            t.pi)({
                className: dt.innerText
            }, Ct), et ? r.createElement(be.U, null, r.createElement("span", null, m)) : r.createElement("span", null, m))), !de && !It && Ce && r.createElement("div", {
                className: dt.expandSingleLine
            }, r.createElement(he.h, (0,
            t.pi)({
                disabled: !1,
                className: dt.expand,
                onClick: C,
                iconProps: ze,
                ariaLabel: R,
                "aria-expanded": u
            }, ht))), !de && It, !de && w && r.createElement("div", {
                className: dt.dismissSingleLine
            }, w), de && w), de && It)
        });
        $.displayName = ee;
        var W = e(75649), P, oe, V, ae, X = {
            root: "ms-MessageBar",
            error: "ms-MessageBar--error",
            blocked: "ms-MessageBar--blocked",
            severeWarning: "ms-MessageBar--severeWarning",
            success: "ms-MessageBar--success",
            warning: "ms-MessageBar--warning",
            multiline: "ms-MessageBar-multiline",
            singleline: "ms-MessageBar-singleline",
            dismissalSingleLine: "ms-MessageBar-dismissalSingleLine",
            expandingSingleLine: "ms-MessageBar-expandingSingleLine",
            content: "ms-MessageBar-content",
            iconContainer: "ms-MessageBar-icon",
            text: "ms-MessageBar-text",
            innerText: "ms-MessageBar-innerText",
            dismissSingleLine: "ms-MessageBar-dismissSingleLine",
            expandSingleLine: "ms-MessageBar-expandSingleLine",
            dismissal: "ms-MessageBar-dismissal",
            expand: "ms-MessageBar-expand",
            actions: "ms-MessageBar-actions",
            actionsSingleline: "ms-MessageBar-actionsSingleLine"
        }, pe = (P = {},
        P[te.f.error] = "errorBackground",
        P[te.f.blocked] = "errorBackground",
        P[te.f.success] = "successBackground",
        P[te.f.warning] = "warningBackground",
        P[te.f.severeWarning] = "severeWarningBackground",
        P[te.f.info] = "infoBackground",
        P), b = (oe = {},
        oe[te.f.error] = "errorIcon",
        oe[te.f.blocked] = "errorIcon",
        oe[te.f.success] = "successIcon",
        oe[te.f.warning] = "warningIcon",
        oe[te.f.severeWarning] = "severeWarningIcon",
        oe[te.f.info] = "infoIcon",
        oe), T = (V = {},
        V[te.f.error] = "#ff0000",
        V[te.f.blocked] = "#ff0000",
        V[te.f.success] = "#bad80a",
        V[te.f.warning] = "#fff100",
        V[te.f.severeWarning] = "#ff0000",
        V[te.f.info] = "WindowText",
        V), N = (ae = {},
        ae[te.f.error] = "#e81123",
        ae[te.f.blocked] = "#e81123",
        ae[te.f.success] = "#107c10",
        ae[te.f.warning] = "#966400",
        ae[te.f.severeWarning] = "#d83b01",
        ae[te.f.info] = "WindowText",
        ae), D = function(l) {
            var d, a, u, C, h, f = l.theme, i = l.className, m = l.onDismiss, R = l.truncated, L = l.isMultiline, Z = l.expandSingleLine, F = l.messageBarType, A = F === void 0 ? te.f.info : F, j = f.semanticColors, G = f.fonts, le = (0,
            W.sK)(0, W.mV), Ee = (0,
            W.Cn)(X, f), de = {
                fontSize: W.ld.xSmall,
                height: 10,
                lineHeight: "10px",
                color: j.messageText,
                selectors: (d = {},
                d[W.qJ] = (0,
                t.pi)((0,
                t.pi)({}, (0,
                W.xM)()), {
                    color: "WindowText"
                }),
                d)
            }, Ce = [(0,
            W.GL)(f, {
                inset: 1,
                highContrastStyle: {
                    outlineOffset: "-6px",
                    outline: "1px solid Highlight"
                },
                borderColor: "transparent"
            }), {
                flexShrink: 0,
                width: 32,
                height: 32,
                padding: "8px 12px",
                selectors: {
                    "& .ms-Button-icon": de,
                    ":hover": {
                        backgroundColor: "transparent"
                    },
                    ":active": {
                        backgroundColor: "transparent"
                    }
                }
            }];
            return {
                root: [Ee.root, G.medium, A === te.f.error && Ee.error, A === te.f.blocked && Ee.blocked, A === te.f.severeWarning && Ee.severeWarning, A === te.f.success && Ee.success, A === te.f.warning && Ee.warning, L ? Ee.multiline : Ee.singleline, !L && m && Ee.dismissalSingleLine, !L && R && Ee.expandingSingleLine, {
                    background: j[pe[A]],
                    boxSizing: "border-box",
                    color: j.messageText,
                    minHeight: 32,
                    width: "100%",
                    display: "flex",
                    wordBreak: "break-word",
                    selectors: (a = {
                        ".ms-Link": {
                            color: j.messageLink,
                            selectors: {
                                ":hover": {
                                    color: j.messageLinkHovered
                                }
                            }
                        }
                    },
                    a[W.qJ] = (0,
                    t.pi)((0,
                    t.pi)({}, (0,
                    W.xM)()), {
                        background: "transparent",
                        border: "1px solid " + T[A],
                        color: "WindowText"
                    }),
                    a[W.bO] = {
                        border: "1px solid " + N[A]
                    },
                    a)
                }, L && {
                    flexDirection: "column"
                }, i],
                content: [Ee.content, {
                    display: "flex",
                    width: "100%",
                    lineHeight: "normal"
                }],
                iconContainer: [Ee.iconContainer, {
                    fontSize: W.ld.medium,
                    minWidth: 16,
                    minHeight: 16,
                    display: "flex",
                    flexShrink: 0,
                    margin: "8px 0 8px 12px"
                }],
                icon: {
                    color: j[b[A]],
                    selectors: (u = {},
                    u[W.qJ] = (0,
                    t.pi)((0,
                    t.pi)({}, (0,
                    W.xM)()), {
                        color: "WindowText"
                    }),
                    u)
                },
                text: [Ee.text, (0,
                t.pi)((0,
                t.pi)({
                    minWidth: 0,
                    display: "flex",
                    flexGrow: 1,
                    margin: 8
                }, G.small), {
                    selectors: (C = {},
                    C[W.qJ] = (0,
                    t.pi)({}, (0,
                    W.xM)()),
                    C)
                }), !m && {
                    marginRight: 12
                }],
                innerText: [Ee.innerText, {
                    lineHeight: 16,
                    selectors: {
                        "& span a:last-child": {
                            paddingLeft: 4
                        }
                    }
                }, R && {
                    overflow: "visible",
                    whiteSpace: "pre-wrap"
                }, !L && {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                }, !L && !R && {
                    selectors: (h = {},
                    h[le] = {
                        overflow: "visible",
                        whiteSpace: "pre-wrap"
                    },
                    h)
                }, Z && {
                    overflow: "visible",
                    whiteSpace: "pre-wrap"
                }],
                dismissSingleLine: Ee.dismissSingleLine,
                expandSingleLine: Ee.expandSingleLine,
                dismissal: [Ee.dismissal, Ce],
                expand: [Ee.expand, Ce],
                actions: [L ? Ee.actions : Ee.actionsSingleline, {
                    display: "flex",
                    flexGrow: 0,
                    flexShrink: 0,
                    flexBasis: "auto",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    margin: "0 12px 0 8px",
                    forcedColorAdjust: "auto",
                    MsHighContrastAdjust: "auto",
                    selectors: {
                        "& button:nth-child(n+2)": {
                            marginLeft: 8
                        }
                    }
                }, L && {
                    marginBottom: 8
                }, m && !L && {
                    marginRight: 0
                }]
            }
        }, H = (0,
        c.z)($, D, void 0, {
            scope: "MessageBar"
        })
    }
    ,
    62838: (mt,Ne,e)=>{
        e.d(Ne, {
            f: ()=>c
        });
        var c;
        (function(t) {
            t[t.info = 0] = "info",
            t[t.error = 1] = "error",
            t[t.blocked = 2] = "blocked",
            t[t.severeWarning = 3] = "severeWarning",
            t[t.success = 4] = "success",
            t[t.warning = 5] = "warning"
        }
        )(c || (c = {}))
    }
    ,
    49800: (mt,Ne,e)=>{
        e.d(Ne, {
            J: ()=>ae
        });
        var c = e(1238), t = e(56996), r = e(2784), v = e(71568), Se = e(75649), Q = {
            root: "ms-Nav",
            linkText: "ms-Nav-linkText",
            compositeLink: "ms-Nav-compositeLink",
            link: "ms-Nav-link",
            chevronButton: "ms-Nav-chevronButton",
            chevronIcon: "ms-Nav-chevron",
            navItem: "ms-Nav-navItem",
            navItems: "ms-Nav-navItems",
            group: "ms-Nav-group",
            groupContent: "ms-Nav-groupContent"
        }, be = {
            textContainer: {
                overflow: "hidden"
            },
            label: {
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden"
            }
        }, he = function(X) {
            var pe, b = X.className, T = X.theme, N = X.isOnTop, D = X.isExpanded, H = X.isGroup, l = X.isLink, d = X.isSelected, a = X.isDisabled, u = X.isButtonEntry, C = X.navHeight, h = C === void 0 ? 44 : C, f = X.position, i = X.leftPadding, m = i === void 0 ? 20 : i, R = X.leftPaddingExpanded, L = R === void 0 ? 28 : R, Z = X.rightPadding, F = Z === void 0 ? 20 : Z, A = T.palette, j = T.semanticColors, G = T.fonts, le = (0,
            Se.Cn)(Q, T);
            return {
                root: [le.root, b, G.medium, {
                    overflowY: "auto",
                    userSelect: "none",
                    WebkitOverflowScrolling: "touch"
                }, N && [{
                    position: "absolute"
                }, Se.k4.slideRightIn40]],
                linkText: [le.linkText, {
                    margin: "0 4px",
                    overflow: "hidden",
                    verticalAlign: "middle",
                    textAlign: "left",
                    textOverflow: "ellipsis"
                }],
                compositeLink: [le.compositeLink, {
                    display: "block",
                    position: "relative",
                    color: j.bodyText
                }, D && "is-expanded", d && "is-selected", a && "is-disabled", a && {
                    color: j.disabledText
                }],
                link: [le.link, (0,
                Se.GL)(T), {
                    display: "block",
                    position: "relative",
                    height: h,
                    width: "100%",
                    lineHeight: h + "px",
                    textDecoration: "none",
                    cursor: "pointer",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    paddingLeft: m,
                    paddingRight: F,
                    color: j.bodyText,
                    selectors: (pe = {},
                    pe[Se.qJ] = {
                        border: 0,
                        selectors: {
                            ":focus": {
                                border: "1px solid WindowText"
                            }
                        }
                    },
                    pe)
                }, !a && {
                    selectors: {
                        ".ms-Nav-compositeLink:hover &": {
                            backgroundColor: j.bodyBackgroundHovered
                        }
                    }
                }, d && {
                    color: j.bodyTextChecked,
                    fontWeight: Se.lq.semibold,
                    backgroundColor: j.bodyBackgroundChecked,
                    selectors: {
                        "&:after": {
                            borderLeft: "2px solid " + A.themePrimary,
                            content: '""',
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            pointerEvents: "none"
                        }
                    }
                }, a && {
                    color: j.disabledText
                }, u && {
                    color: A.themePrimary
                }],
                chevronButton: [le.chevronButton, (0,
                Se.GL)(T), G.small, {
                    display: "block",
                    textAlign: "left",
                    lineHeight: h + "px",
                    margin: "5px 0",
                    padding: "0px, " + F + "px, 0px, " + L + "px",
                    border: "none",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    cursor: "pointer",
                    color: j.bodyText,
                    backgroundColor: "transparent",
                    selectors: {
                        "&:visited": {
                            color: j.bodyText
                        }
                    }
                }, H && {
                    fontSize: G.large.fontSize,
                    width: "100%",
                    height: h,
                    borderBottom: "1px solid " + j.bodyDivider
                }, l && {
                    display: "block",
                    width: L - 2,
                    height: h - 2,
                    position: "absolute",
                    top: "1px",
                    left: f + "px",
                    zIndex: Se.bR.Nav,
                    padding: 0,
                    margin: 0
                }],
                chevronIcon: [le.chevronIcon, {
                    position: "absolute",
                    left: "8px",
                    height: h,
                    display: "inline-flex",
                    alignItems: "center",
                    lineHeight: h + "px",
                    fontSize: G.small.fontSize,
                    transition: "transform .1s linear"
                }, D && {
                    transform: "rotate(-180deg)"
                }, l && {
                    top: 0
                }],
                navItem: [le.navItem, {
                    padding: 0
                }],
                navItems: [le.navItems, {
                    listStyleType: "none",
                    padding: 0,
                    margin: 0
                }],
                group: [le.group, D && "is-expanded"],
                groupContent: [le.groupContent, {
                    display: "none",
                    marginBottom: "40px"
                }, Se.k4.slideDownIn20, D && {
                    display: "block"
                }]
            }
        }, ie = e(57312), te = e(85758), ue = e(88642), K = e(18630), re = e(4295), g = e(78619), ee = e(36775), O = e(46311), U = e(63119), J = 14, $ = 3, W;
        function P(X) {
            return !!X && !/^[a-z0-9+-.]+:\/\//i.test(X)
        }
        var oe = (0,
        ie.y)()
          , V = function(X) {
            (0,
            t.ZT)(pe, X);
            function pe(b) {
                var T = X.call(this, b) || this;
                return T._focusZone = r.createRef(),
                T._onRenderLink = function(N) {
                    var D = T.props
                      , H = D.styles
                      , l = D.groups
                      , d = D.theme
                      , a = oe(H, {
                        theme: d,
                        groups: l
                    });
                    return r.createElement("div", {
                        className: a.linkText
                    }, N.name)
                }
                ,
                T._renderGroup = function(N, D) {
                    var H = T.props
                      , l = H.styles
                      , d = H.groups
                      , a = H.theme
                      , u = H.onRenderGroupHeader
                      , C = u === void 0 ? T._renderGroupHeader : u
                      , h = T._isGroupExpanded(N)
                      , f = oe(l, {
                        theme: a,
                        isGroup: !0,
                        isExpanded: h,
                        groups: d
                    })
                      , i = function(R, L) {
                        T._onGroupHeaderClicked(N, R)
                    }
                      , m = (0,
                    t.pi)((0,
                    t.pi)({}, N), {
                        isExpanded: h,
                        onHeaderClick: i
                    });
                    return r.createElement("div", {
                        key: D,
                        className: f.group
                    }, m.name ? C(m, T._renderGroupHeader) : null, r.createElement("div", {
                        className: f.groupContent
                    }, T._renderLinks(m.links, 0)))
                }
                ,
                T._renderGroupHeader = function(N) {
                    var D, H = T.props, l = H.styles, d = H.groups, a = H.theme, u = H.expandButtonAriaLabel, C = N.isExpanded, h = oe(l, {
                        theme: a,
                        isGroup: !0,
                        isExpanded: C,
                        groups: d
                    }), f = (D = N.collapseAriaLabel) !== null && D !== void 0 ? D : N.expandAriaLabel, i = (C ? f : N.expandAriaLabel) || u, m = N.onHeaderClick, R = m ? function(L) {
                        m(L, C)
                    }
                    : void 0;
                    return r.createElement("button", {
                        className: h.chevronButton,
                        onClick: R,
                        "aria-label": i,
                        "aria-expanded": C
                    }, r.createElement(ee.J, {
                        className: h.chevronIcon,
                        iconName: "ChevronDown"
                    }), N.name)
                }
                ,
                (0,
                te.l)(T),
                T.state = {
                    isGroupCollapsed: {},
                    isLinkExpandStateChanged: !1,
                    selectedKey: b.initialSelectedKey || b.selectedKey
                },
                T
            }
            return pe.prototype.render = function() {
                var b = this.props
                  , T = b.styles
                  , N = b.groups
                  , D = b.className
                  , H = b.isOnTop
                  , l = b.role
                  , d = l === void 0 ? "navigation" : l
                  , a = b.theme;
                if (!N)
                    return null;
                var u = N.map(this._renderGroup)
                  , C = oe(T, {
                    theme: a,
                    className: D,
                    isOnTop: H,
                    groups: N
                });
                return r.createElement(re.k, (0,
                t.pi)({
                    direction: g.U.vertical,
                    componentRef: this._focusZone
                }, this.props.focusZoneProps), r.createElement("nav", {
                    role: d,
                    className: C.root,
                    "aria-label": this.props.ariaLabel
                }, u))
            }
            ,
            Object.defineProperty(pe.prototype, "selectedKey", {
                get: function() {
                    return this.state.selectedKey
                },
                enumerable: !1,
                configurable: !0
            }),
            pe.prototype.focus = function(b) {
                return b === void 0 && (b = !1),
                this._focusZone && this._focusZone.current ? this._focusZone.current.focus(b) : !1
            }
            ,
            pe.prototype._renderNavLink = function(b, T, N) {
                var D = this.props
                  , H = D.styles
                  , l = D.groups
                  , d = D.theme
                  , a = b.icon || b.iconProps
                  , u = this._isLinkSelected(b)
                  , C = b.ariaCurrent
                  , h = C === void 0 ? "page" : C
                  , f = oe(H, {
                    theme: d,
                    isSelected: u,
                    isDisabled: b.disabled,
                    isButtonEntry: b.onClick && !b.forceAnchor,
                    leftPadding: J * N + $ + (a ? 0 : 24),
                    groups: l
                })
                  , i = b.url && b.target && !P(b.url) ? "noopener noreferrer" : void 0
                  , m = this.props.linkAs ? (0,
                O.Z)(this.props.linkAs, v.K) : v.K
                  , R = this.props.onRenderLink ? (0,
                U.k)(this.props.onRenderLink, this._onRenderLink) : this._onRenderLink;
                return r.createElement(m, {
                    className: f.link,
                    styles: be,
                    href: b.url || (b.forceAnchor ? "#" : void 0),
                    iconProps: b.iconProps || {
                        iconName: b.icon
                    },
                    onClick: b.onClick ? this._onNavButtonLinkClicked.bind(this, b) : this._onNavAnchorLinkClicked.bind(this, b),
                    title: b.title !== void 0 ? b.title : b.name,
                    target: b.target,
                    rel: i,
                    disabled: b.disabled,
                    "aria-current": u ? h : void 0,
                    "aria-label": b.ariaLabel ? b.ariaLabel : void 0,
                    link: b
                }, R(b))
            }
            ,
            pe.prototype._renderCompositeLink = function(b, T, N) {
                var D, H = (0,
                t.pi)({}, (0,
                ue.pq)(b, ue.n7, ["onClick"])), l = this.props, d = l.expandButtonAriaLabel, a = l.styles, u = l.groups, C = l.theme, h = oe(a, {
                    theme: C,
                    isExpanded: !!b.isExpanded,
                    isSelected: this._isLinkSelected(b),
                    isLink: !0,
                    isDisabled: b.disabled,
                    position: J * N + 1,
                    groups: u
                }), f = "";
                if (b.links && b.links.length > 0)
                    if (b.collapseAriaLabel || b.expandAriaLabel) {
                        var i = (D = b.collapseAriaLabel) !== null && D !== void 0 ? D : b.expandAriaLabel;
                        f = b.isExpanded ? i : b.expandAriaLabel
                    } else
                        f = d ? b.name + " " + d : b.name;
                return r.createElement("div", (0,
                t.pi)({}, H, {
                    key: b.key || T,
                    className: h.compositeLink
                }), b.links && b.links.length > 0 ? r.createElement("button", {
                    className: h.chevronButton,
                    onClick: this._onLinkExpandClicked.bind(this, b),
                    "aria-label": f,
                    "aria-expanded": b.isExpanded ? "true" : "false"
                }, r.createElement(ee.J, {
                    className: h.chevronIcon,
                    iconName: "ChevronDown"
                })) : null, this._renderNavLink(b, T, N))
            }
            ,
            pe.prototype._renderLink = function(b, T, N) {
                var D = this.props
                  , H = D.styles
                  , l = D.groups
                  , d = D.theme
                  , a = oe(H, {
                    theme: d,
                    groups: l
                });
                return r.createElement("li", {
                    key: b.key || T,
                    role: "listitem",
                    className: a.navItem
                }, this._renderCompositeLink(b, T, N), b.isExpanded ? this._renderLinks(b.links, ++N) : null)
            }
            ,
            pe.prototype._renderLinks = function(b, T) {
                var N = this;
                if (!b || !b.length)
                    return null;
                var D = b.map(function(C, h) {
                    return N._renderLink(C, h, T)
                })
                  , H = this.props
                  , l = H.styles
                  , d = H.groups
                  , a = H.theme
                  , u = oe(l, {
                    theme: a,
                    groups: d
                });
                return r.createElement("ul", {
                    role: "list",
                    className: u.navItems
                }, D)
            }
            ,
            pe.prototype._onGroupHeaderClicked = function(b, T) {
                b.onHeaderClick && b.onHeaderClick(T, this._isGroupExpanded(b)),
                b.isExpanded === void 0 && this._toggleCollapsed(b),
                T && (T.preventDefault(),
                T.stopPropagation())
            }
            ,
            pe.prototype._onLinkExpandClicked = function(b, T) {
                var N = this.props.onLinkExpandClick;
                N && N(T, b),
                T.defaultPrevented || (b.isExpanded = !b.isExpanded,
                this.setState({
                    isLinkExpandStateChanged: !0
                })),
                T.preventDefault(),
                T.stopPropagation()
            }
            ,
            pe.prototype._preventBounce = function(b, T) {
                !b.url && b.forceAnchor && T.preventDefault()
            }
            ,
            pe.prototype._onNavAnchorLinkClicked = function(b, T) {
                this._preventBounce(b, T),
                this.props.onLinkClick && this.props.onLinkClick(T, b),
                !b.url && b.links && b.links.length > 0 && this._onLinkExpandClicked(b, T),
                this.setState({
                    selectedKey: b.key
                })
            }
            ,
            pe.prototype._onNavButtonLinkClicked = function(b, T) {
                this._preventBounce(b, T),
                b.onClick && b.onClick(T, b),
                !b.url && b.links && b.links.length > 0 && this._onLinkExpandClicked(b, T),
                this.setState({
                    selectedKey: b.key
                })
            }
            ,
            pe.prototype._isLinkSelected = function(b) {
                if (this.props.selectedKey !== void 0)
                    return b.key === this.props.selectedKey;
                if (this.state.selectedKey !== void 0)
                    return b.key === this.state.selectedKey;
                if (typeof (0,
                K.J)() == "undefined" || !b.url)
                    return !1;
                W = W || document.createElement("a"),
                W.href = b.url || "";
                var T = W.href;
                return location.href === T || location.protocol + "//" + location.host + location.pathname === T ? !0 : location.hash ? location.hash === b.url ? !0 : (W.href = location.hash.substring(1),
                W.href === T) : !1
            }
            ,
            pe.prototype._isGroupExpanded = function(b) {
                return b.isExpanded !== void 0 ? b.isExpanded : b.name && this.state.isGroupCollapsed.hasOwnProperty(b.name) ? !this.state.isGroupCollapsed[b.name] : b.collapseByDefault !== void 0 ? !b.collapseByDefault : !0
            }
            ,
            pe.prototype._toggleCollapsed = function(b) {
                var T;
                if (b.name) {
                    var N = (0,
                    t.pi)((0,
                    t.pi)({}, this.state.isGroupCollapsed), (T = {},
                    T[b.name] = this._isGroupExpanded(b),
                    T));
                    this.setState({
                        isGroupCollapsed: N
                    })
                }
            }
            ,
            pe.defaultProps = {
                groups: null
            },
            pe
        }(r.Component)
          , ae = (0,
        c.z)(V, he, void 0, {
            scope: "Nav"
        })
    }
    ,
    64121: (mt,Ne,e)=>{
        e.d(Ne, {
            a: ()=>re
        });
        var c = e(1238)
          , t = e(56996)
          , r = e(2784)
          , v = e(57312)
          , Se = e(85758)
          , Q = e(18003)
          , be = e(88642)
          , he = (0,
        v.y)()
          , ie = function(g) {
            (0,
            t.ZT)(ee, g);
            function ee(O) {
                var U = g.call(this, O) || this;
                (0,
                Se.l)(U);
                var J = U.props.allowTouchBodyScroll
                  , $ = J === void 0 ? !1 : J;
                return U._allowTouchBodyScroll = $,
                U
            }
            return ee.prototype.componentDidMount = function() {
                !this._allowTouchBodyScroll && (0,
                Q.Qp)()
            }
            ,
            ee.prototype.componentWillUnmount = function() {
                !this._allowTouchBodyScroll && (0,
                Q.tG)()
            }
            ,
            ee.prototype.render = function() {
                var O = this.props
                  , U = O.isDarkThemed
                  , J = O.className
                  , $ = O.theme
                  , W = O.styles
                  , P = (0,
                be.pq)(this.props, be.n7)
                  , oe = he(W, {
                    theme: $,
                    className: J,
                    isDark: U
                });
                return r.createElement("div", (0,
                t.pi)({}, P, {
                    className: oe.root
                }))
            }
            ,
            ee
        }(r.Component)
          , te = e(75649)
          , ue = {
            root: "ms-Overlay",
            rootDark: "ms-Overlay--dark"
        }
          , K = function(g) {
            var ee, O = g.className, U = g.theme, J = g.isNone, $ = g.isDark, W = U.palette, P = (0,
            te.Cn)(ue, U);
            return {
                root: [P.root, U.fonts.medium, {
                    backgroundColor: W.whiteTranslucent40,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    position: "absolute",
                    selectors: (ee = {},
                    ee[te.qJ] = {
                        border: "1px solid WindowText",
                        opacity: 0
                    },
                    ee)
                }, J && {
                    visibility: "hidden"
                }, $ && [P.rootDark, {
                    backgroundColor: W.blackTranslucent40
                }], O]
            }
        }
          , re = (0,
        c.z)(ie, K, void 0, {
            scope: "Overlay"
        })
    }
    ,
    87630: (mt,Ne,e)=>{
        e.d(Ne, {
            s: ()=>Z
        });
        var c = e(1238), t = e(56996), r = e(2784), v = e(76984), Se = e(39940), Q = e(64121), be = e(76938), he = e(57312), ie = e(18003), te = e(51370), ue = e(85758), K = e(74805), re = e(35577), g = e(61676), ee = e(47321), O = e(8422), U = e(88642), J = e(95562), $ = e(73661), W;
        (function(F) {
            F[F.smallFluid = 0] = "smallFluid",
            F[F.smallFixedFar = 1] = "smallFixedFar",
            F[F.smallFixedNear = 2] = "smallFixedNear",
            F[F.medium = 3] = "medium",
            F[F.large = 4] = "large",
            F[F.largeFixed = 5] = "largeFixed",
            F[F.extraLarge = 6] = "extraLarge",
            F[F.custom = 7] = "custom",
            F[F.customNear = 8] = "customNear"
        }
        )(W || (W = {}));
        var P = (0,
        he.y)(), oe = "Panel", V;
        (function(F) {
            F[F.closed = 0] = "closed",
            F[F.animatingOpen = 1] = "animatingOpen",
            F[F.open = 2] = "open",
            F[F.animatingClosed = 3] = "animatingClosed"
        }
        )(V || (V = {}));
        var ae = function(F) {
            (0,
            t.ZT)(A, F);
            function A(j) {
                var G = F.call(this, j) || this;
                G._panel = r.createRef(),
                G._animationCallback = null,
                G._hasCustomNavigation = !!(G.props.onRenderNavigation || G.props.onRenderNavigationContent),
                G.dismiss = function(de) {
                    G.props.onDismiss && G.isActive && G.props.onDismiss(de),
                    (!de || de && !de.defaultPrevented) && G.close()
                }
                ,
                G._allowScrollOnPanel = function(de) {
                    de ? G._allowTouchBodyScroll ? (0,
                    ie.eC)(de, G._events) : (0,
                    ie.C7)(de, G._events) : G._events.off(G._scrollableContent),
                    G._scrollableContent = de
                }
                ,
                G._onRenderNavigation = function(de) {
                    if (!G.props.onRenderNavigationContent && !G.props.onRenderNavigation && !G.props.hasCloseButton)
                        return null;
                    var Ce = G.props.onRenderNavigationContent
                      , Be = Ce === void 0 ? G._onRenderNavigationContent : Ce;
                    return r.createElement("div", {
                        className: G._classNames.navigation
                    }, Be(de, G._onRenderNavigationContent))
                }
                ,
                G._onRenderNavigationContent = function(de) {
                    var Ce, Be = de.closeButtonAriaLabel, Oe = de.hasCloseButton, at = de.onRenderHeader, $e = at === void 0 ? G._onRenderHeader : at;
                    if (Oe) {
                        var et = (Ce = G._classNames.subComponentStyles) === null || Ce === void 0 ? void 0 : Ce.closeButton();
                        return r.createElement(r.Fragment, null, !G._hasCustomNavigation && $e(G.props, G._onRenderHeader, G._headerTextId), r.createElement(v.h, {
                            styles: et,
                            className: G._classNames.closeButton,
                            onClick: G._onPanelClick,
                            ariaLabel: Be,
                            title: Be,
                            "data-is-visible": !0,
                            iconProps: {
                                iconName: "Cancel"
                            }
                        }))
                    }
                    return null
                }
                ,
                G._onRenderHeader = function(de, Ce, Be) {
                    var Oe = de.headerText
                      , at = de.headerTextProps
                      , $e = at === void 0 ? {} : at;
                    return Oe ? r.createElement("div", {
                        className: G._classNames.header
                    }, r.createElement("div", (0,
                    t.pi)({
                        id: Be,
                        role: "heading",
                        "aria-level": 1
                    }, $e, {
                        className: (0,
                        te.i)(G._classNames.headerText, $e.className)
                    }), Oe)) : null
                }
                ,
                G._onRenderBody = function(de) {
                    return r.createElement("div", {
                        className: G._classNames.content
                    }, de.children)
                }
                ,
                G._onRenderFooter = function(de) {
                    var Ce = G.props.onRenderFooterContent
                      , Be = Ce === void 0 ? null : Ce;
                    return Be ? r.createElement("div", {
                        className: G._classNames.footer
                    }, r.createElement("div", {
                        className: G._classNames.footerInner
                    }, Be())) : null
                }
                ,
                G._animateTo = function(de) {
                    de === V.open && G.props.onOpen && G.props.onOpen(),
                    G._animationCallback = G._async.setTimeout(function() {
                        G.setState({
                            visibility: de
                        }),
                        G._onTransitionComplete(de)
                    }, 200)
                }
                ,
                G._clearExistingAnimationTimer = function() {
                    G._animationCallback !== null && G._async.clearTimeout(G._animationCallback)
                }
                ,
                G._onPanelClick = function(de) {
                    G.dismiss(de)
                }
                ,
                G._onTransitionComplete = function(de) {
                    G._updateFooterPosition(),
                    de === V.open && G.props.onOpened && G.props.onOpened(),
                    de === V.closed && G.props.onDismissed && G.props.onDismissed()
                }
                ;
                var le = G.props.allowTouchBodyScroll
                  , Ee = le === void 0 ? !1 : le;
                return G._allowTouchBodyScroll = Ee,
                (0,
                ue.l)(G),
                (0,
                K.b)(oe, j, {
                    ignoreExternalFocusing: "focusTrapZoneProps",
                    forceFocusInsideTrap: "focusTrapZoneProps",
                    firstFocusableSelector: "focusTrapZoneProps"
                }),
                G.state = {
                    isFooterSticky: !1,
                    visibility: V.closed,
                    id: (0,
                    re.z)("Panel")
                },
                G
            }
            return A.getDerivedStateFromProps = function(j, G) {
                return j.isOpen === void 0 ? null : j.isOpen && (G.visibility === V.closed || G.visibility === V.animatingClosed) ? {
                    visibility: V.animatingOpen
                } : !j.isOpen && (G.visibility === V.open || G.visibility === V.animatingOpen) ? {
                    visibility: V.animatingClosed
                } : null
            }
            ,
            A.prototype.componentDidMount = function() {
                this._async = new g.e(this),
                this._events = new ee.r(this),
                this._events.on(window, "resize", this._updateFooterPosition),
                this._shouldListenForOuterClick(this.props) && this._events.on(document.body, "mousedown", this._dismissOnOuterClick, !0),
                this.props.isOpen && this.setState({
                    visibility: V.animatingOpen
                })
            }
            ,
            A.prototype.componentDidUpdate = function(j, G) {
                var le = this._shouldListenForOuterClick(this.props)
                  , Ee = this._shouldListenForOuterClick(j);
                this.state.visibility !== G.visibility && (this._clearExistingAnimationTimer(),
                this.state.visibility === V.animatingOpen ? this._animateTo(V.open) : this.state.visibility === V.animatingClosed && this._animateTo(V.closed)),
                le && !Ee ? this._events.on(document.body, "mousedown", this._dismissOnOuterClick, !0) : !le && Ee && this._events.off(document.body, "mousedown", this._dismissOnOuterClick, !0)
            }
            ,
            A.prototype.componentWillUnmount = function() {
                this._async.dispose(),
                this._events.dispose()
            }
            ,
            A.prototype.render = function() {
                var j = this.props
                  , G = j.className
                  , le = G === void 0 ? "" : G
                  , Ee = j.elementToFocusOnDismiss
                  , de = j.firstFocusableSelector
                  , Ce = j.focusTrapZoneProps
                  , Be = j.forceFocusInsideTrap
                  , Oe = j.hasCloseButton
                  , at = j.headerText
                  , $e = j.headerClassName
                  , et = $e === void 0 ? "" : $e
                  , ht = j.ignoreExternalFocusing
                  , Ct = j.isBlocking
                  , dt = j.isFooterAtBottom
                  , ze = j.isLightDismiss
                  , pt = j.isHiddenOnDismiss
                  , It = j.layerProps
                  , w = j.overlayProps
                  , ce = j.popupProps
                  , B = j.type
                  , _ = j.styles
                  , ye = j.theme
                  , z = j.customWidth
                  , ne = j.onLightDismissClick
                  , I = ne === void 0 ? this._onPanelClick : ne
                  , o = j.onRenderNavigation
                  , me = o === void 0 ? this._onRenderNavigation : o
                  , De = j.onRenderHeader
                  , xe = De === void 0 ? this._onRenderHeader : De
                  , ke = j.onRenderBody
                  , we = ke === void 0 ? this._onRenderBody : ke
                  , nt = j.onRenderFooter
                  , He = nt === void 0 ? this._onRenderFooter : nt
                  , Qe = this.state
                  , Y = Qe.isFooterSticky
                  , Me = Qe.visibility
                  , Le = Qe.id
                  , We = B === W.smallFixedNear || B === W.customNear
                  , Ge = (0,
                O.zg)(ye)
                  , Ze = Ge ? We : !We
                  , Xe = B === W.custom || B === W.customNear ? {
                    width: z
                } : {}
                  , Ve = (0,
                U.pq)(this.props, U.n7)
                  , ut = this.isActive
                  , St = Me === V.animatingClosed || Me === V.animatingOpen;
                if (this._headerTextId = at && Le + "-headerText",
                !ut && !St && !pt)
                    return null;
                this._classNames = P(_, {
                    theme: ye,
                    className: le,
                    focusTrapZoneClassName: Ce ? Ce.className : void 0,
                    hasCloseButton: Oe,
                    headerClassName: et,
                    isAnimating: St,
                    isFooterSticky: Y,
                    isFooterAtBottom: dt,
                    isOnRightSide: Ze,
                    isOpen: ut,
                    isHiddenOnDismiss: pt,
                    type: B,
                    hasCustomNavigation: this._hasCustomNavigation
                });
                var Dt = this, gt = Dt._classNames, rt = Dt._allowTouchBodyScroll, Pt;
                return Ct && ut && (Pt = r.createElement(Q.a, (0,
                t.pi)({
                    className: gt.overlay,
                    isDarkThemed: !1,
                    onClick: ze ? I : void 0,
                    allowTouchBodyScroll: rt
                }, w))),
                r.createElement(Se.m, (0,
                t.pi)({}, It), r.createElement(be.G, (0,
                t.pi)({
                    role: "dialog",
                    "aria-modal": Ct ? "true" : void 0,
                    ariaLabelledBy: this._headerTextId ? this._headerTextId : void 0,
                    onDismiss: this.dismiss,
                    className: gt.hiddenPanel,
                    enableAriaHiddenSiblings: !!ut
                }, ce), r.createElement("div", (0,
                t.pi)({
                    "aria-hidden": !ut && St
                }, Ve, {
                    ref: this._panel,
                    className: gt.root
                }), Pt, r.createElement($.P, (0,
                t.pi)({
                    ignoreExternalFocusing: ht,
                    forceFocusInsideTrap: !Ct || pt && !ut ? !1 : Be,
                    firstFocusableSelector: de,
                    isClickableOutsideFocusTrap: !0
                }, Ce, {
                    className: gt.main,
                    style: Xe,
                    elementToFocusOnDismiss: Ee
                }), r.createElement("div", {
                    className: gt.contentInner
                }, r.createElement("div", {
                    ref: this._allowScrollOnPanel,
                    className: gt.scrollableContent,
                    "data-is-scrollable": !0
                }, r.createElement("div", {
                    className: gt.commands,
                    "data-is-visible": !0
                }, me(this.props, this._onRenderNavigation)), (this._hasCustomNavigation || !Oe) && xe(this.props, this._onRenderHeader, this._headerTextId), we(this.props, this._onRenderBody), He(this.props, this._onRenderFooter)))))))
            }
            ,
            A.prototype.open = function() {
                this.props.isOpen === void 0 && (this.isActive || this.setState({
                    visibility: V.animatingOpen
                }))
            }
            ,
            A.prototype.close = function() {
                this.props.isOpen === void 0 && (!this.isActive || this.setState({
                    visibility: V.animatingClosed
                }))
            }
            ,
            Object.defineProperty(A.prototype, "isActive", {
                get: function() {
                    return this.state.visibility === V.open || this.state.visibility === V.animatingOpen
                },
                enumerable: !1,
                configurable: !0
            }),
            A.prototype._shouldListenForOuterClick = function(j) {
                return !!j.isBlocking && !!j.isOpen
            }
            ,
            A.prototype._updateFooterPosition = function() {
                var j = this._scrollableContent;
                if (j) {
                    var G = j.clientHeight
                      , le = j.scrollHeight;
                    this.setState({
                        isFooterSticky: G < le
                    })
                }
            }
            ,
            A.prototype._dismissOnOuterClick = function(j) {
                var G = this._panel.current;
                this.isActive && G && !j.defaultPrevented && ((0,
                J.t)(G, j.target) || (this.props.onOuterClick ? this.props.onOuterClick(j) : this.dismiss(j)))
            }
            ,
            A.defaultProps = {
                isHiddenOnDismiss: !1,
                isOpen: void 0,
                isBlocking: !0,
                hasCloseButton: !0,
                type: W.smallFixedFar
            },
            A
        }(r.Component), X = e(75649), pe, b, T, N, D, H = {
            root: "ms-Panel",
            main: "ms-Panel-main",
            commands: "ms-Panel-commands",
            contentInner: "ms-Panel-contentInner",
            scrollableContent: "ms-Panel-scrollableContent",
            navigation: "ms-Panel-navigation",
            closeButton: "ms-Panel-closeButton ms-PanelAction-close",
            header: "ms-Panel-header",
            headerText: "ms-Panel-headerText",
            content: "ms-Panel-content",
            footer: "ms-Panel-footer",
            footerInner: "ms-Panel-footerInner",
            isOpen: "is-open",
            hasCloseButton: "ms-Panel--hasCloseButton",
            smallFluid: "ms-Panel--smFluid",
            smallFixedNear: "ms-Panel--smLeft",
            smallFixedFar: "ms-Panel--sm",
            medium: "ms-Panel--md",
            large: "ms-Panel--lg",
            largeFixed: "ms-Panel--fixed",
            extraLarge: "ms-Panel--xl",
            custom: "ms-Panel--custom",
            customNear: "ms-Panel--customLeft"
        }, l = {
            full: "100%",
            auto: "auto",
            xs: 272,
            sm: 340,
            md1: 592,
            md2: 644,
            lg: 940
        }, d = {
            auto: "auto",
            none: 0,
            md: 48,
            lg: 428,
            xl: 176
        }, a = (pe = {},
        pe["@media (min-width: " + X.dd + "px)"] = {
            width: l.sm
        },
        pe), u = (b = {},
        b["@media (min-width: " + X.AV + "px)"] = {
            width: l.md1
        },
        b["@media (min-width: " + X.qv + "px)"] = {
            width: l.md2
        },
        b), C = (T = {},
        T["@media (min-width: " + X.bE + "px)"] = {
            left: d.md,
            width: l.auto
        },
        T["@media (min-width: " + X.B + "px)"] = {
            left: d.lg
        },
        T), h = (N = {},
        N["@media (min-width: " + X.B + "px)"] = {
            left: d.auto,
            width: l.lg
        },
        N), f = (D = {},
        D["@media (min-width: " + X.B + "px)"] = {
            left: d.xl
        },
        D), i = function(F) {
            var A;
            switch (F) {
            case W.smallFixedFar:
                A = (0,
                t.pi)({}, a);
                break;
            case W.medium:
                A = (0,
                t.pi)((0,
                t.pi)({}, a), u);
                break;
            case W.large:
                A = (0,
                t.pi)((0,
                t.pi)((0,
                t.pi)({}, a), u), C);
                break;
            case W.largeFixed:
                A = (0,
                t.pi)((0,
                t.pi)((0,
                t.pi)((0,
                t.pi)({}, a), u), C), h);
                break;
            case W.extraLarge:
                A = (0,
                t.pi)((0,
                t.pi)((0,
                t.pi)((0,
                t.pi)({}, a), u), C), f);
                break;
            default:
                break
            }
            return A
        }, m = "44px", R = {
            paddingLeft: "24px",
            paddingRight: "24px"
        }, L = function(F) {
            var A, j, G, le, Ee = F.className, de = F.focusTrapZoneClassName, Ce = F.hasCloseButton, Be = F.headerClassName, Oe = F.isAnimating, at = F.isFooterSticky, $e = F.isFooterAtBottom, et = F.isOnRightSide, ht = F.isOpen, Ct = F.isHiddenOnDismiss, dt = F.hasCustomNavigation, ze = F.theme, pt = F.type, It = pt === void 0 ? W.smallFixedFar : pt, w = ze.effects, ce = ze.fonts, B = ze.semanticColors, _ = (0,
            X.Cn)(H, ze), ye = It === W.custom || It === W.customNear;
            return {
                root: [_.root, ze.fonts.medium, ht && _.isOpen, Ce && _.hasCloseButton, {
                    pointerEvents: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }, ye && et && _.custom, ye && !et && _.customNear, Ee],
                overlay: [{
                    pointerEvents: "auto",
                    cursor: "pointer"
                }, ht && Oe && X.k4.fadeIn100, !ht && Oe && X.k4.fadeOut100],
                hiddenPanel: [!ht && !Oe && Ct && {
                    visibility: "hidden"
                }],
                main: [_.main, {
                    backgroundColor: B.bodyBackground,
                    boxShadow: w.elevation64,
                    pointerEvents: "auto",
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    overflowX: "hidden",
                    overflowY: "auto",
                    WebkitOverflowScrolling: "touch",
                    bottom: 0,
                    top: 0,
                    left: d.auto,
                    right: d.none,
                    width: l.full,
                    selectors: (0,
                    t.pi)((A = {},
                    A[X.qJ] = {
                        borderLeft: "3px solid " + B.variantBorder,
                        borderRight: "3px solid " + B.variantBorder
                    },
                    A), i(It))
                }, It === W.smallFluid && {
                    left: d.none
                }, It === W.smallFixedNear && {
                    left: d.none,
                    right: d.auto,
                    width: l.xs
                }, It === W.customNear && {
                    right: "auto",
                    left: 0
                }, ye && {
                    maxWidth: "100vw"
                }, ht && Oe && !et && X.k4.slideRightIn40, ht && Oe && et && X.k4.slideLeftIn40, !ht && Oe && !et && X.k4.slideLeftOut40, !ht && Oe && et && X.k4.slideRightOut40, de],
                commands: [_.commands, {
                    backgroundColor: B.bodyBackground,
                    paddingTop: 18,
                    selectors: (j = {},
                    j["@media (min-height: " + X.dd + "px)"] = {
                        position: "sticky",
                        top: 0,
                        zIndex: 1
                    },
                    j)
                }, dt && {
                    paddingTop: "inherit"
                }],
                navigation: [_.navigation, {
                    display: "flex",
                    justifyContent: "flex-end"
                }, dt && {
                    height: m
                }],
                contentInner: [_.contentInner, {
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    overflowY: "hidden"
                }],
                header: [_.header, R, {
                    alignSelf: "flex-start"
                }, Ce && !dt && {
                    flexGrow: 1
                }, dt && {
                    flexShrink: 0
                }],
                headerText: [_.headerText, ce.xLarge, {
                    color: B.bodyText,
                    lineHeight: "27px",
                    overflowWrap: "break-word",
                    wordWrap: "break-word",
                    wordBreak: "break-word",
                    hyphens: "auto"
                }, Be],
                scrollableContent: [_.scrollableContent, {
                    overflowY: "auto"
                }, $e && {
                    flexGrow: 1,
                    display: "inherit",
                    flexDirection: "inherit"
                }],
                content: [_.content, R, {
                    paddingBottom: 20
                }, $e && {
                    selectors: (G = {},
                    G["@media (min-height: " + X.dd + "px)"] = {
                        flexGrow: 1
                    },
                    G)
                }],
                footer: [_.footer, {
                    flexShrink: 0,
                    borderTop: "1px solid transparent",
                    transition: "opacity " + X.D1.durationValue3 + " " + X.D1.easeFunction2,
                    selectors: (le = {},
                    le["@media (min-height: " + X.dd + "px)"] = {
                        position: "sticky",
                        bottom: 0
                    },
                    le)
                }, at && {
                    backgroundColor: B.bodyBackground,
                    borderTopColor: B.variantBorder
                }],
                footerInner: [_.footerInner, R, {
                    paddingBottom: 16,
                    paddingTop: 16
                }],
                subComponentStyles: {
                    closeButton: {
                        root: [_.closeButton, {
                            marginRight: 14,
                            color: ze.palette.neutralSecondary,
                            fontSize: X.ld.large
                        }, dt && {
                            marginRight: 0,
                            height: "auto",
                            width: "44px"
                        }],
                        rootHovered: {
                            color: ze.palette.neutralPrimary
                        }
                    }
                }
            }
        }, Z = (0,
        c.z)(ae, L, void 0, {
            scope: "Panel"
        })
    }
    ,
    50309: (mt,Ne,e)=>{
        e.d(Ne, {
            I: ()=>It
        });
        var c = e(1238), t = e(56996), r = e(2784), v = e(57312), Se = e(51169), Q = e(88642), be = e(1502), he = e(56878), ie = e(32523), te = e(8422), ue = e(40863), K = e(75649), re = e(36775), g = e(39678), ee, O;
        (function(w) {
            w.size8 = "20px",
            w.size10 = "20px",
            w.size16 = "16px",
            w.size24 = "24px",
            w.size28 = "28px",
            w.size32 = "32px",
            w.size40 = "40px",
            w.size48 = "48px",
            w.size56 = "56px",
            w.size72 = "72px",
            w.size100 = "100px",
            w.size120 = "120px"
        }
        )(O || (O = {}));
        var U;
        (function(w) {
            w.size6 = "6px",
            w.size8 = "8px",
            w.size12 = "12px",
            w.size16 = "16px",
            w.size20 = "20px",
            w.size28 = "28px",
            w.size32 = "32px",
            w.border = "2px"
        }
        )(U || (U = {}));
        var J = function(w) {
            return {
                isSize8: w === g.Ir.size8,
                isSize10: w === g.Ir.size10 || w === g.Ir.tiny,
                isSize16: w === g.Ir.size16,
                isSize24: w === g.Ir.size24 || w === g.Ir.extraExtraSmall,
                isSize28: w === g.Ir.size28 || w === g.Ir.extraSmall,
                isSize32: w === g.Ir.size32,
                isSize40: w === g.Ir.size40 || w === g.Ir.small,
                isSize48: w === g.Ir.size48 || w === g.Ir.regular,
                isSize56: w === g.Ir.size56,
                isSize72: w === g.Ir.size72 || w === g.Ir.large,
                isSize100: w === g.Ir.size100 || w === g.Ir.extraLarge,
                isSize120: w === g.Ir.size120
            }
        }
          , $ = (ee = {},
        ee[g.Ir.tiny] = 10,
        ee[g.Ir.extraExtraSmall] = 24,
        ee[g.Ir.extraSmall] = 28,
        ee[g.Ir.small] = 40,
        ee[g.Ir.regular] = 48,
        ee[g.Ir.large] = 72,
        ee[g.Ir.extraLarge] = 100,
        ee[g.Ir.size8] = 8,
        ee[g.Ir.size10] = 10,
        ee[g.Ir.size16] = 16,
        ee[g.Ir.size24] = 24,
        ee[g.Ir.size28] = 28,
        ee[g.Ir.size32] = 32,
        ee[g.Ir.size40] = 40,
        ee[g.Ir.size48] = 48,
        ee[g.Ir.size56] = 56,
        ee[g.Ir.size72] = 72,
        ee[g.Ir.size100] = 100,
        ee[g.Ir.size120] = 120,
        ee)
          , W = function(w) {
            return {
                isAvailable: w === g.H_.online,
                isAway: w === g.H_.away,
                isBlocked: w === g.H_.blocked,
                isBusy: w === g.H_.busy,
                isDoNotDisturb: w === g.H_.dnd,
                isOffline: w === g.H_.offline
            }
        }
          , P = e(87891)
          , oe = 6
          , V = 3
          , ae = 40
          , X = 20
          , pe = (0,
        v.y)({
            cacheSize: 100
        })
          , b = r.forwardRef(function(w, ce) {
            var B = w.coinSize
              , _ = w.isOutOfOffice
              , ye = w.styles
              , z = w.presence
              , ne = w.theme
              , I = w.presenceTitle
              , o = w.presenceColors
              , me = r.useRef(null)
              , De = (0,
            P.r)(ce, me)
              , xe = J(w.size)
              , ke = !(xe.isSize8 || xe.isSize10 || xe.isSize16 || xe.isSize24 || xe.isSize28 || xe.isSize32) && (B ? B > 32 : !0)
              , we = B ? B / V < ae ? B / V + "px" : ae + "px" : ""
              , nt = B ? B / oe < X ? B / oe + "px" : X + "px" : ""
              , He = B ? {
                fontSize: nt,
                lineHeight: we
            } : void 0
              , Qe = B ? {
                width: we,
                height: we
            } : void 0
              , Y = pe(ye, {
                theme: ne,
                presence: z,
                size: w.size,
                isOutOfOffice: _,
                presenceColors: o
            });
            return z === g.H_.none ? null : r.createElement("div", {
                role: "presentation",
                className: Y.presence,
                style: Qe,
                title: I,
                ref: De
            }, ke && r.createElement(re.J, {
                className: Y.presenceIcon,
                iconName: T(w.presence, w.isOutOfOffice),
                style: He
            }))
        });
        b.displayName = "PersonaPresenceBase";
        function T(w, ce) {
            if (!!w) {
                var B = "SkypeArrow";
                switch (g.H_[w]) {
                case "online":
                    return "SkypeCheck";
                case "away":
                    return ce ? B : "SkypeClock";
                case "dnd":
                    return "SkypeMinus";
                case "offline":
                    return ce ? B : ""
                }
                return ""
            }
        }
        var N = {
            presence: "ms-Persona-presence",
            presenceIcon: "ms-Persona-presenceIcon"
        }
          , D = function(w) {
            var ce, B, _, ye, z, ne, I = w.theme, o = w.presenceColors, me = I.semanticColors, De = I.fonts, xe = (0,
            K.Cn)(N, I), ke = J(w.size), we = W(w.presence), nt = o && o.available || "#6BB700", He = o && o.away || "#FFAA44", Qe = o && o.busy || "#C43148", Y = o && o.dnd || "#C50F1F", Me = o && o.offline || "#8A8886", Le = o && o.oof || "#B4009E", We = o && o.background || me.bodyBackground, Ge = we.isOffline || w.isOutOfOffice && (we.isAvailable || we.isBusy || we.isAway || we.isDoNotDisturb), Ze = "1px", Xe = "2px", Ve = ke.isSize72 || ke.isSize100 ? Xe : Ze;
            return {
                presence: [xe.presence, (0,
                t.pi)((0,
                t.pi)({
                    position: "absolute",
                    height: U.size12,
                    width: U.size12,
                    borderRadius: "50%",
                    top: "auto",
                    right: "-2px",
                    bottom: "-2px",
                    border: "2px solid " + We,
                    textAlign: "center",
                    boxSizing: "content-box",
                    backgroundClip: "border-box"
                }, (0,
                K.xM)()), {
                    selectors: (ce = {},
                    ce[K.qJ] = {
                        borderColor: "Window",
                        backgroundColor: "WindowText"
                    },
                    ce)
                }), (ke.isSize8 || ke.isSize10) && {
                    right: "auto",
                    top: "7px",
                    left: 0,
                    border: 0,
                    selectors: (B = {},
                    B[K.qJ] = {
                        top: "9px",
                        border: "1px solid WindowText"
                    },
                    B)
                }, (ke.isSize8 || ke.isSize10 || ke.isSize24 || ke.isSize28 || ke.isSize32) && d(U.size8), (ke.isSize40 || ke.isSize48) && d(U.size12), ke.isSize16 && {
                    height: U.size6,
                    width: U.size6,
                    borderWidth: "1.5px"
                }, ke.isSize56 && d(U.size16), ke.isSize72 && d(U.size20), ke.isSize100 && d(U.size28), ke.isSize120 && d(U.size32), we.isAvailable && {
                    backgroundColor: nt,
                    selectors: (_ = {},
                    _[K.qJ] = a("Highlight"),
                    _)
                }, we.isAway && a(He), we.isBlocked && [{
                    selectors: (ye = {
                        ":after": ke.isSize40 || ke.isSize48 || ke.isSize72 || ke.isSize100 ? {
                            content: '""',
                            width: "100%",
                            height: Ve,
                            backgroundColor: Qe,
                            transform: "translateY(-50%) rotate(-45deg)",
                            position: "absolute",
                            top: "50%",
                            left: 0
                        } : void 0
                    },
                    ye[K.qJ] = {
                        selectors: {
                            ":after": {
                                width: "calc(100% - 4px)",
                                left: "2px",
                                backgroundColor: "Window"
                            }
                        }
                    },
                    ye)
                }], we.isBusy && a(Qe), we.isDoNotDisturb && a(Y), we.isOffline && a(Me), (Ge || we.isBlocked) && [{
                    backgroundColor: We,
                    selectors: (z = {
                        ":before": {
                            content: '""',
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            border: Ve + " solid " + Qe,
                            borderRadius: "50%",
                            boxSizing: "border-box"
                        }
                    },
                    z[K.qJ] = {
                        backgroundColor: "WindowText",
                        selectors: {
                            ":before": {
                                width: "calc(100% - 2px)",
                                height: "calc(100% - 2px)",
                                top: "1px",
                                left: "1px",
                                borderColor: "Window"
                            }
                        }
                    },
                    z)
                }], Ge && we.isAvailable && l(Ve, nt), Ge && we.isBusy && l(Ve, Qe), Ge && we.isAway && l(Ve, Le), Ge && we.isDoNotDisturb && l(Ve, Y), Ge && we.isOffline && l(Ve, Me), Ge && we.isOffline && w.isOutOfOffice && l(Ve, Le)],
                presenceIcon: [xe.presenceIcon, {
                    color: We,
                    fontSize: "6px",
                    lineHeight: U.size12,
                    verticalAlign: "top",
                    selectors: (ne = {},
                    ne[K.qJ] = {
                        color: "Window"
                    },
                    ne)
                }, ke.isSize56 && {
                    fontSize: "8px",
                    lineHeight: U.size16
                }, ke.isSize72 && {
                    fontSize: De.small.fontSize,
                    lineHeight: U.size20
                }, ke.isSize100 && {
                    fontSize: De.medium.fontSize,
                    lineHeight: U.size28
                }, ke.isSize120 && {
                    fontSize: De.medium.fontSize,
                    lineHeight: U.size32
                }, we.isAway && {
                    position: "relative",
                    left: Ge ? void 0 : "1px"
                }, Ge && we.isAvailable && H(nt), Ge && we.isBusy && H(Qe), Ge && we.isAway && H(Le), Ge && we.isDoNotDisturb && H(Y), Ge && we.isOffline && H(Me), Ge && we.isOffline && w.isOutOfOffice && H(Le)]
            }
        };
        function H(w) {
            return {
                color: w,
                borderColor: w
            }
        }
        function l(w, ce) {
            return {
                selectors: {
                    ":before": {
                        border: w + " solid " + ce
                    }
                }
            }
        }
        function d(w) {
            return {
                height: w,
                width: w
            }
        }
        function a(w) {
            return {
                backgroundColor: w
            }
        }
        var u = (0,
        c.z)(b, D, void 0, {
            scope: "PersonaPresence"
        })
          , C = e(30266)
          , h = e(82601)
          , f = [g.z5.lightBlue, g.z5.blue, g.z5.darkBlue, g.z5.teal, g.z5.green, g.z5.darkGreen, g.z5.lightPink, g.z5.pink, g.z5.magenta, g.z5.purple, g.z5.orange, g.z5.lightRed, g.z5.darkRed, g.z5.violet, g.z5.gold, g.z5.burgundy, g.z5.warmGray, g.z5.cyan, g.z5.rust, g.z5.coolGray]
          , i = f.length;
        function m(w) {
            var ce = g.z5.blue;
            if (!w)
                return ce;
            for (var B = 0, _ = w.length - 1; _ >= 0; _--) {
                var ye = w.charCodeAt(_)
                  , z = _ % 8;
                B ^= (ye << z) + (ye >> 8 - z)
            }
            return ce = f[B % i],
            ce
        }
        function R(w) {
            switch (w) {
            case g.z5.lightBlue:
                return "#4F6BED";
            case g.z5.blue:
                return "#0078D4";
            case g.z5.darkBlue:
                return "#004E8C";
            case g.z5.teal:
                return "#038387";
            case g.z5.lightGreen:
            case g.z5.green:
                return "#498205";
            case g.z5.darkGreen:
                return "#0B6A0B";
            case g.z5.lightPink:
                return "#C239B3";
            case g.z5.pink:
                return "#E3008C";
            case g.z5.magenta:
                return "#881798";
            case g.z5.purple:
                return "#5C2E91";
            case g.z5.orange:
                return "#CA5010";
            case g.z5.red:
                return "#EE1111";
            case g.z5.lightRed:
                return "#D13438";
            case g.z5.darkRed:
                return "#A4262C";
            case g.z5.transparent:
                return "transparent";
            case g.z5.violet:
                return "#8764B8";
            case g.z5.gold:
                return "#986F0B";
            case g.z5.burgundy:
                return "#750B1C";
            case g.z5.warmGray:
                return "#7A7574";
            case g.z5.cyan:
                return "#005B70";
            case g.z5.rust:
                return "#8E562E";
            case g.z5.coolGray:
                return "#69797E";
            case g.z5.black:
                return "#1D1D1D";
            case g.z5.gray:
                return "#393939"
            }
        }
        function L(w) {
            return Z(w)
        }
        function Z(w) {
            var ce = w.primaryText, B = w.text, _ = w.initialsColor, ye;
            return typeof _ == "string" ? ye = _ : (_ = _ !== void 0 ? _ : m(B || ce),
            ye = R(_)),
            ye
        }
        var F = (0,
        v.y)({
            cacheSize: 100
        })
          , A = (0,
        ie.NF)(function(w, ce, B, _, ye, z) {
            return (0,
            K.y0)(w, !z && {
                backgroundColor: Z({
                    text: _,
                    initialsColor: ce,
                    primaryText: ye
                }),
                color: B
            })
        })
          , j = {
            size: g.Ir.size48,
            presence: g.H_.none,
            imageAlt: ""
        };
        function G(w) {}
        function le(w) {
            var ce = w.onPhotoLoadingStateChange
              , B = w.imageUrl
              , _ = r.useState(C.U9.notLoaded)
              , ye = _[0]
              , z = _[1];
            r.useEffect(function() {
                z(C.U9.notLoaded)
            }, [B]);
            var ne = function(I) {
                z(I),
                ce == null || ce(I)
            };
            return [ye, ne]
        }
        var Ee = r.forwardRef(function(w, ce) {
            var B = (0,
            Se.j)(j, w);
            var _ = le(B)
              , ye = _[0]
              , z = _[1]
              , ne = de(z)
              , I = B.className
              , o = B.coinProps
              , me = B.showUnknownPersonaCoin
              , De = B.coinSize
              , xe = B.styles
              , ke = B.imageUrl
              , we = B.initialsColor
              , nt = B.initialsTextColor
              , He = B.isOutOfOffice
              , Qe = B.onRenderCoin
              , Y = Qe === void 0 ? ne : Qe
              , Me = B.onRenderPersonaCoin
              , Le = Me === void 0 ? Y : Me
              , We = B.onRenderInitials
              , Ge = We === void 0 ? Ce : We
              , Ze = B.presence
              , Xe = B.presenceTitle
              , Ve = B.presenceColors
              , ut = B.primaryText
              , St = B.showInitialsUntilImageLoads
              , Dt = B.text
              , gt = B.theme
              , rt = B.size
              , Pt = (0,
            Q.pq)(B, Q.n7)
              , Ye = (0,
            Q.pq)(o || {}, Q.n7)
              , Et = De ? {
                width: De,
                height: De
            } : void 0
              , kt = me
              , y = {
                coinSize: De,
                isOutOfOffice: He,
                presence: Ze,
                presenceTitle: Xe,
                presenceColors: Ve,
                size: rt,
                theme: gt
            }
              , M = F(xe, {
                theme: gt,
                className: o && o.className ? o.className : I,
                size: rt,
                coinSize: De,
                showUnknownPersonaCoin: me
            })
              , k = Boolean(ye !== C.U9.loaded && (St && ke || !ke || ye === C.U9.error || kt));
            return r.createElement("div", (0,
            t.pi)({
                role: "presentation"
            }, Pt, {
                className: M.coin,
                ref: ce
            }), rt !== g.Ir.size8 && rt !== g.Ir.size10 && rt !== g.Ir.tiny ? r.createElement("div", (0,
            t.pi)({
                role: "presentation"
            }, Ye, {
                className: M.imageArea,
                style: Et
            }), k && r.createElement("div", {
                className: A(M.initials, we, nt, Dt, ut, me),
                style: Et,
                "aria-hidden": "true"
            }, Ge(B, Ce)), !kt && Le(B, ne), r.createElement(u, (0,
            t.pi)({}, y))) : B.presence ? r.createElement(u, (0,
            t.pi)({}, y)) : r.createElement(re.J, {
                iconName: "Contact",
                className: M.size10WithoutPresenceIcon
            }), B.children)
        });
        Ee.displayName = "PersonaCoinBase";
        var de = function(w) {
            return function(ce) {
                var B = ce.coinSize
                  , _ = ce.styles
                  , ye = ce.imageUrl
                  , z = ce.imageAlt
                  , ne = ce.imageShouldFadeIn
                  , I = ce.imageShouldStartVisible
                  , o = ce.theme
                  , me = ce.showUnknownPersonaCoin
                  , De = ce.size
                  , xe = De === void 0 ? j.size : De;
                if (!ye)
                    return null;
                var ke = F(_, {
                    theme: o,
                    size: xe,
                    showUnknownPersonaCoin: me
                })
                  , we = B || $[xe];
                return r.createElement(h.E, {
                    className: ke.image,
                    imageFit: C.kQ.cover,
                    src: ye,
                    width: we,
                    height: we,
                    alt: z,
                    shouldFadeIn: ne,
                    shouldStartVisible: I,
                    onLoadingStateChange: w
                })
            }
        }
          , Ce = function(w) {
            var ce = w.imageInitials
              , B = w.allowPhoneInitials
              , _ = w.showUnknownPersonaCoin
              , ye = w.text
              , z = w.primaryText
              , ne = w.theme;
            if (_)
                return r.createElement(re.J, {
                    iconName: "Help"
                });
            var I = (0,
            te.zg)(ne);
            return ce = ce || (0,
            ue.Q)(ye || z || "", I, B),
            ce !== "" ? r.createElement("span", null, ce) : r.createElement(re.J, {
                iconName: "Contact"
            })
        }
          , Be = {
            coin: "ms-Persona-coin",
            imageArea: "ms-Persona-imageArea",
            image: "ms-Persona-image",
            initials: "ms-Persona-initials",
            size8: "ms-Persona--size8",
            size10: "ms-Persona--size10",
            size16: "ms-Persona--size16",
            size24: "ms-Persona--size24",
            size28: "ms-Persona--size28",
            size32: "ms-Persona--size32",
            size40: "ms-Persona--size40",
            size48: "ms-Persona--size48",
            size56: "ms-Persona--size56",
            size72: "ms-Persona--size72",
            size100: "ms-Persona--size100",
            size120: "ms-Persona--size120"
        }
          , Oe = function(w) {
            var ce, B = w.className, _ = w.theme, ye = w.coinSize, z = _.palette, ne = _.fonts, I = J(w.size), o = (0,
            K.Cn)(Be, _), me = "rgb(234, 234, 234)", De = "rgb(168, 0, 0)", xe = ye || w.size && $[w.size] || 48;
            return {
                coin: [o.coin, ne.medium, I.isSize8 && o.size8, I.isSize10 && o.size10, I.isSize16 && o.size16, I.isSize24 && o.size24, I.isSize28 && o.size28, I.isSize32 && o.size32, I.isSize40 && o.size40, I.isSize48 && o.size48, I.isSize56 && o.size56, I.isSize72 && o.size72, I.isSize100 && o.size100, I.isSize120 && o.size120, B],
                size10WithoutPresenceIcon: {
                    fontSize: ne.xSmall.fontSize,
                    position: "absolute",
                    top: "5px",
                    right: "auto",
                    left: 0
                },
                imageArea: [o.imageArea, {
                    position: "relative",
                    textAlign: "center",
                    flex: "0 0 auto",
                    height: xe,
                    width: xe
                }, xe <= 10 && {
                    overflow: "visible",
                    background: "transparent",
                    height: 0,
                    width: 0
                }],
                image: [o.image, {
                    marginRight: "10px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                    borderRadius: "50%",
                    perspective: "1px"
                }, xe <= 10 && {
                    overflow: "visible",
                    background: "transparent",
                    height: 0,
                    width: 0
                }, xe > 10 && {
                    height: xe,
                    width: xe
                }],
                initials: [o.initials, {
                    borderRadius: "50%",
                    color: w.showUnknownPersonaCoin ? De : z.white,
                    fontSize: ne.large.fontSize,
                    fontWeight: K.lq.semibold,
                    lineHeight: xe === 48 ? 46 : xe,
                    height: xe,
                    selectors: (ce = {},
                    ce[K.qJ] = (0,
                    t.pi)((0,
                    t.pi)({
                        border: "1px solid WindowText"
                    }, (0,
                    K.xM)()), {
                        color: "WindowText",
                        boxSizing: "border-box",
                        backgroundColor: "Window !important"
                    }),
                    ce.i = {
                        fontWeight: K.lq.semibold
                    },
                    ce)
                }, w.showUnknownPersonaCoin && {
                    backgroundColor: me
                }, xe < 32 && {
                    fontSize: ne.xSmall.fontSize
                }, xe >= 32 && xe < 40 && {
                    fontSize: ne.medium.fontSize
                }, xe >= 40 && xe < 56 && {
                    fontSize: ne.mediumPlus.fontSize
                }, xe >= 56 && xe < 72 && {
                    fontSize: ne.xLarge.fontSize
                }, xe >= 72 && xe < 100 && {
                    fontSize: ne.xxLarge.fontSize
                }, xe >= 100 && {
                    fontSize: ne.superLarge.fontSize
                }]
            }
        }
          , at = (0,
        c.z)(Ee, Oe, void 0, {
            scope: "PersonaCoin"
        })
          , $e = e(53841)
          , et = (0,
        v.y)()
          , ht = {
            size: g.Ir.size48,
            presence: g.H_.none,
            imageAlt: "",
            showOverflowTooltip: !0
        };
        function Ct(w) {}
        var dt = r.forwardRef(function(w, ce) {
            var B = (0,
            Se.j)(ht, w);
            var _ = r.useRef(null)
              , ye = (0,
            P.r)(ce, _)
              , z = function() {
                return B.text || B.primaryText || ""
            }
              , ne = function(Ht, Gt, Xt) {
                var Jt = Gt && Gt(B, Xt);
                return Jt ? r.createElement("div", {
                    dir: "auto",
                    className: Ht
                }, Jt) : void 0
            }
              , I = function(Ht, Gt) {
                return Gt === void 0 && (Gt = !0),
                Ht ? Gt ? function() {
                    return r.createElement(be.G, {
                        content: Ht,
                        overflowMode: he.y.Parent,
                        directionalHint: $e.b.topLeftEdge
                    }, Ht)
                }
                : function() {
                    return r.createElement(r.Fragment, null, Ht)
                }
                : void 0
            }
              , o = function(Ht) {
                return r.createElement(at, (0,
                t.pi)({}, Ht))
            }
              , me = I(z(), B.showOverflowTooltip)
              , De = I(B.secondaryText, B.showOverflowTooltip)
              , xe = I(B.tertiaryText, B.showOverflowTooltip)
              , ke = I(B.optionalText, B.showOverflowTooltip)
              , we = B.hidePersonaDetails
              , nt = B.onRenderOptionalText
              , He = nt === void 0 ? ke : nt
              , Qe = B.onRenderPrimaryText
              , Y = Qe === void 0 ? me : Qe
              , Me = B.onRenderSecondaryText
              , Le = Me === void 0 ? De : Me
              , We = B.onRenderTertiaryText
              , Ge = We === void 0 ? xe : We
              , Ze = B.onRenderPersonaCoin
              , Xe = Ze === void 0 ? o : Ze
              , Ve = B.size
              , ut = B.allowPhoneInitials
              , St = B.className
              , Dt = B.coinProps
              , gt = B.showUnknownPersonaCoin
              , rt = B.coinSize
              , Pt = B.styles
              , Ye = B.imageAlt
              , Et = B.imageInitials
              , kt = B.imageShouldFadeIn
              , y = B.imageShouldStartVisible
              , M = B.imageUrl
              , k = B.initialsColor
              , q = B.initialsTextColor
              , ge = B.isOutOfOffice
              , fe = B.onPhotoLoadingStateChange
              , Te = B.onRenderCoin
              , Pe = B.onRenderInitials
              , Fe = B.presence
              , _e = B.presenceTitle
              , lt = B.presenceColors
              , qe = B.showInitialsUntilImageLoads
              , st = B.showSecondaryText
              , bt = B.theme
              , _t = (0,
            t.pi)({
                allowPhoneInitials: ut,
                showUnknownPersonaCoin: gt,
                coinSize: rt,
                imageAlt: Ye,
                imageInitials: Et,
                imageShouldFadeIn: kt,
                imageShouldStartVisible: y,
                imageUrl: M,
                initialsColor: k,
                initialsTextColor: q,
                onPhotoLoadingStateChange: fe,
                onRenderCoin: Te,
                onRenderInitials: Pe,
                presence: Fe,
                presenceTitle: _e,
                showInitialsUntilImageLoads: qe,
                size: Ve,
                text: z(),
                isOutOfOffice: ge,
                presenceColors: lt
            }, Dt)
              , At = et(Pt, {
                theme: bt,
                className: St,
                showSecondaryText: st,
                presence: Fe,
                size: Ve
            })
              , jt = (0,
            Q.pq)(B, Q.n7)
              , Vt = r.createElement("div", {
                className: At.details
            }, ne(At.primaryText, Y, me), ne(At.secondaryText, Le, De), ne(At.tertiaryText, Ge, xe), ne(At.optionalText, He, ke), B.children);
            return r.createElement("div", (0,
            t.pi)({}, jt, {
                ref: ye,
                className: At.root,
                style: rt ? {
                    height: rt,
                    minWidth: rt
                } : void 0
            }), Xe(_t, Xe), (!we || Ve === g.Ir.size8 || Ve === g.Ir.size10 || Ve === g.Ir.tiny) && Vt)
        });
        dt.displayName = "PersonaBase";
        var ze = {
            root: "ms-Persona",
            size8: "ms-Persona--size8",
            size10: "ms-Persona--size10",
            size16: "ms-Persona--size16",
            size24: "ms-Persona--size24",
            size28: "ms-Persona--size28",
            size32: "ms-Persona--size32",
            size40: "ms-Persona--size40",
            size48: "ms-Persona--size48",
            size56: "ms-Persona--size56",
            size72: "ms-Persona--size72",
            size100: "ms-Persona--size100",
            size120: "ms-Persona--size120",
            available: "ms-Persona--online",
            away: "ms-Persona--away",
            blocked: "ms-Persona--blocked",
            busy: "ms-Persona--busy",
            doNotDisturb: "ms-Persona--donotdisturb",
            offline: "ms-Persona--offline",
            details: "ms-Persona-details",
            primaryText: "ms-Persona-primaryText",
            secondaryText: "ms-Persona-secondaryText",
            tertiaryText: "ms-Persona-tertiaryText",
            optionalText: "ms-Persona-optionalText",
            textContent: "ms-Persona-textContent"
        }
          , pt = function(w) {
            var ce = w.className
              , B = w.showSecondaryText
              , _ = w.theme
              , ye = _.semanticColors
              , z = _.fonts
              , ne = (0,
            K.Cn)(ze, _)
              , I = J(w.size)
              , o = W(w.presence)
              , me = "16px"
              , De = {
                color: ye.bodySubtext,
                fontWeight: K.lq.regular,
                fontSize: z.small.fontSize
            };
            return {
                root: [ne.root, _.fonts.medium, K.Fv, {
                    color: ye.bodyText,
                    position: "relative",
                    height: O.size48,
                    minWidth: O.size48,
                    display: "flex",
                    alignItems: "center",
                    selectors: {
                        ".contextualHost": {
                            display: "none"
                        }
                    }
                }, I.isSize8 && [ne.size8, {
                    height: O.size8,
                    minWidth: O.size8
                }], I.isSize10 && [ne.size10, {
                    height: O.size10,
                    minWidth: O.size10
                }], I.isSize16 && [ne.size16, {
                    height: O.size16,
                    minWidth: O.size16
                }], I.isSize24 && [ne.size24, {
                    height: O.size24,
                    minWidth: O.size24
                }], I.isSize24 && B && {
                    height: "36px"
                }, I.isSize28 && [ne.size28, {
                    height: O.size28,
                    minWidth: O.size28
                }], I.isSize28 && B && {
                    height: "32px"
                }, I.isSize32 && [ne.size32, {
                    height: O.size32,
                    minWidth: O.size32
                }], I.isSize40 && [ne.size40, {
                    height: O.size40,
                    minWidth: O.size40
                }], I.isSize48 && ne.size48, I.isSize56 && [ne.size56, {
                    height: O.size56,
                    minWidth: O.size56
                }], I.isSize72 && [ne.size72, {
                    height: O.size72,
                    minWidth: O.size72
                }], I.isSize100 && [ne.size100, {
                    height: O.size100,
                    minWidth: O.size100
                }], I.isSize120 && [ne.size120, {
                    height: O.size120,
                    minWidth: O.size120
                }], o.isAvailable && ne.available, o.isAway && ne.away, o.isBlocked && ne.blocked, o.isBusy && ne.busy, o.isDoNotDisturb && ne.doNotDisturb, o.isOffline && ne.offline, ce],
                details: [ne.details, {
                    padding: "0 24px 0 16px",
                    minWidth: 0,
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around"
                }, (I.isSize8 || I.isSize10) && {
                    paddingLeft: 17
                }, (I.isSize24 || I.isSize28 || I.isSize32) && {
                    padding: "0 8px"
                }, (I.isSize40 || I.isSize48) && {
                    padding: "0 12px"
                }],
                primaryText: [ne.primaryText, K.jq, {
                    color: ye.bodyText,
                    fontWeight: K.lq.regular,
                    fontSize: z.medium.fontSize,
                    selectors: {
                        ":hover": {
                            color: ye.inputTextHovered
                        }
                    }
                }, B && {
                    height: me,
                    lineHeight: me,
                    overflowX: "hidden"
                }, (I.isSize8 || I.isSize10) && {
                    fontSize: z.small.fontSize,
                    lineHeight: O.size8
                }, I.isSize16 && {
                    lineHeight: O.size28
                }, (I.isSize24 || I.isSize28 || I.isSize32 || I.isSize40 || I.isSize48) && B && {
                    height: 18
                }, (I.isSize56 || I.isSize72 || I.isSize100 || I.isSize120) && {
                    fontSize: z.xLarge.fontSize
                }, (I.isSize56 || I.isSize72 || I.isSize100 || I.isSize120) && B && {
                    height: 22
                }],
                secondaryText: [ne.secondaryText, K.jq, De, (I.isSize8 || I.isSize10 || I.isSize16 || I.isSize24 || I.isSize28 || I.isSize32) && {
                    display: "none"
                }, B && {
                    display: "block",
                    height: me,
                    lineHeight: me,
                    overflowX: "hidden"
                }, I.isSize24 && B && {
                    height: 18
                }, (I.isSize56 || I.isSize72 || I.isSize100 || I.isSize120) && {
                    fontSize: z.medium.fontSize
                }, (I.isSize56 || I.isSize72 || I.isSize100 || I.isSize120) && B && {
                    height: 18
                }],
                tertiaryText: [ne.tertiaryText, K.jq, De, {
                    display: "none",
                    fontSize: z.medium.fontSize
                }, (I.isSize72 || I.isSize100 || I.isSize120) && {
                    display: "block"
                }],
                optionalText: [ne.optionalText, K.jq, De, {
                    display: "none",
                    fontSize: z.medium.fontSize
                }, (I.isSize100 || I.isSize120) && {
                    display: "block"
                }],
                textContent: [ne.textContent, K.jq]
            }
        }
          , It = (0,
        c.z)(dt, pt, void 0, {
            scope: "Persona"
        })
    }
    ,
    39678: (mt,Ne,e)=>{
        e.d(Ne, {
            H_: ()=>t,
            Ir: ()=>c,
            z5: ()=>r
        });
        var c;
        (function(v) {
            v[v.tiny = 0] = "tiny",
            v[v.extraExtraSmall = 1] = "extraExtraSmall",
            v[v.extraSmall = 2] = "extraSmall",
            v[v.small = 3] = "small",
            v[v.regular = 4] = "regular",
            v[v.large = 5] = "large",
            v[v.extraLarge = 6] = "extraLarge",
            v[v.size8 = 17] = "size8",
            v[v.size10 = 9] = "size10",
            v[v.size16 = 8] = "size16",
            v[v.size24 = 10] = "size24",
            v[v.size28 = 7] = "size28",
            v[v.size32 = 11] = "size32",
            v[v.size40 = 12] = "size40",
            v[v.size48 = 13] = "size48",
            v[v.size56 = 16] = "size56",
            v[v.size72 = 14] = "size72",
            v[v.size100 = 15] = "size100",
            v[v.size120 = 18] = "size120"
        }
        )(c || (c = {}));
        var t;
        (function(v) {
            v[v.none = 0] = "none",
            v[v.offline = 1] = "offline",
            v[v.online = 2] = "online",
            v[v.away = 3] = "away",
            v[v.dnd = 4] = "dnd",
            v[v.blocked = 5] = "blocked",
            v[v.busy = 6] = "busy"
        }
        )(t || (t = {}));
        var r;
        (function(v) {
            v[v.lightBlue = 0] = "lightBlue",
            v[v.blue = 1] = "blue",
            v[v.darkBlue = 2] = "darkBlue",
            v[v.teal = 3] = "teal",
            v[v.lightGreen = 4] = "lightGreen",
            v[v.green = 5] = "green",
            v[v.darkGreen = 6] = "darkGreen",
            v[v.lightPink = 7] = "lightPink",
            v[v.pink = 8] = "pink",
            v[v.magenta = 9] = "magenta",
            v[v.purple = 10] = "purple",
            v[v.black = 11] = "black",
            v[v.orange = 12] = "orange",
            v[v.red = 13] = "red",
            v[v.darkRed = 14] = "darkRed",
            v[v.transparent = 15] = "transparent",
            v[v.violet = 16] = "violet",
            v[v.lightRed = 17] = "lightRed",
            v[v.gold = 18] = "gold",
            v[v.burgundy = 19] = "burgundy",
            v[v.warmGray = 20] = "warmGray",
            v[v.coolGray = 21] = "coolGray",
            v[v.gray = 22] = "gray",
            v[v.cyan = 23] = "cyan",
            v[v.rust = 24] = "rust"
        }
        )(r || (r = {}))
    }
    ,
    76938: (mt,Ne,e)=>{
        e.d(Ne, {
            G: ()=>J
        });
        var c = e(56996)
          , t = e(2784)
          , r = e(18630)
          , v = e(66297)
          , Se = e(83558)
          , Q = e(7377)
          , be = e(51169)
          , he = e(18690)
          , ie = e(88642)
          , te = e(35926)
          , ue = e(36844)
          , K = e(87891)
          , re = e(57412);
        function g($, W) {
            var P = (0,
            te.r)()
              , oe = t.useState(!1)
              , V = oe[0]
              , ae = oe[1];
            return t.useEffect(function() {
                return P.requestAnimationFrame(function() {
                    var X;
                    if (!($.style && $.style.overflowY)) {
                        var pe = !1;
                        if (W && W.current && ((X = W.current) === null || X === void 0 ? void 0 : X.firstElementChild)) {
                            var b = W.current.clientHeight
                              , T = W.current.firstElementChild.clientHeight;
                            b > 0 && T > b && (pe = T - b > 1)
                        }
                        V !== pe && ae(pe)
                    }
                }),
                function() {
                    return P.dispose()
                }
            }),
            V
        }
        function ee($) {
            var W = $.originalElement
              , P = $.containsFocus;
            W && P && W !== (0,
            r.J)() && setTimeout(function() {
                var oe;
                (oe = W.focus) === null || oe === void 0 || oe.call(W)
            }, 0)
        }
        function O($, W) {
            var P = $.onRestoreFocus
              , oe = P === void 0 ? ee : P
              , V = t.useRef()
              , ae = t.useRef(!1);
            t.useEffect(function() {
                return V.current = (0,
                v.M)().activeElement,
                (0,
                Se.WU)(W.current) && (ae.current = !0),
                function() {
                    var X;
                    oe == null || oe({
                        originalElement: V.current,
                        containsFocus: ae.current,
                        documentContainsFocus: ((X = (0,
                        v.M)()) === null || X === void 0 ? void 0 : X.hasFocus()) || !1
                    }),
                    V.current = void 0
                }
            }, []),
            (0,
            ue.d)(W, "focus", t.useCallback(function() {
                ae.current = !0
            }, []), !0),
            (0,
            ue.d)(W, "blur", t.useCallback(function(X) {
                W.current && X.relatedTarget && !W.current.contains(X.relatedTarget) && (ae.current = !1)
            }, []), !0)
        }
        function U($, W) {
            var P = String($["aria-modal"]).toLowerCase() === "true" && $.enableAriaHiddenSiblings;
            t.useEffect(function() {
                if (!!(P && W.current)) {
                    var oe = (0,
                    Q.O)(W.current);
                    return oe
                }
            }, [W, P])
        }
        var J = t.forwardRef(function($, W) {
            var P = (0,
            be.j)({
                shouldRestoreFocus: !0,
                enableAriaHiddenSiblings: !0
            }, $)
              , oe = t.useRef()
              , V = (0,
            K.r)(oe, W);
            U(P, oe),
            O(P, oe);
            var ae = P.role
              , X = P.className
              , pe = P.ariaLabel
              , b = P.ariaLabelledBy
              , T = P.ariaDescribedBy
              , N = P.style
              , D = P.children
              , H = P.onDismiss
              , l = g(P, oe)
              , d = t.useCallback(function(u) {
                switch (u.which) {
                case he.m.escape:
                    H && (H(u),
                    u.preventDefault(),
                    u.stopPropagation());
                    break
                }
            }, [H])
              , a = (0,
            re.zY)();
            return (0,
            ue.d)(a, "keydown", d),
            t.createElement("div", (0,
            c.pi)({
                ref: V
            }, (0,
            ie.pq)(P, ie.n7), {
                className: X,
                role: ae,
                "aria-label": pe,
                "aria-labelledby": b,
                "aria-describedby": T,
                onKeyDown: d,
                style: (0,
                c.pi)({
                    overflowY: l ? "scroll" : void 0,
                    outline: "none"
                }, N)
            }), D)
        });
        J.displayName = "Popup"
    }
    ,
    37753: (mt,Ne,e)=>{
        e.d(Ne, {
            Z: ()=>he
        });
        var c = e(1238)
          , t = e(75649)
          , r = function(ie) {
            var te, ue, K = ie.theme, re = ie.alignContent, g = ie.vertical, ee = ie.className, O = re === "start", U = re === "center", J = re === "end";
            return {
                root: [K.fonts.medium, {
                    position: "relative"
                }, re && {
                    textAlign: re
                }, !re && {
                    textAlign: "center"
                }, g && (U || !re) && {
                    verticalAlign: "middle"
                }, g && O && {
                    verticalAlign: "top"
                }, g && J && {
                    verticalAlign: "bottom"
                }, g && {
                    padding: "0 4px",
                    height: "inherit",
                    display: "table-cell",
                    zIndex: 1,
                    selectors: {
                        ":after": (te = {
                            backgroundColor: K.palette.neutralLighter,
                            width: "1px",
                            content: '""',
                            position: "absolute",
                            top: "0",
                            bottom: "0",
                            left: "50%",
                            right: "0",
                            zIndex: -1
                        },
                        te[t.qJ] = {
                            backgroundColor: "WindowText"
                        },
                        te)
                    }
                }, !g && {
                    padding: "4px 0",
                    selectors: {
                        ":before": (ue = {
                            backgroundColor: K.palette.neutralLighter,
                            height: "1px",
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: "50%",
                            bottom: "0",
                            left: "0",
                            right: "0"
                        },
                        ue[t.qJ] = {
                            backgroundColor: "WindowText"
                        },
                        ue)
                    }
                }, ee],
                content: [{
                    position: "relative",
                    display: "inline-block",
                    padding: "0 12px",
                    color: K.semanticColors.bodyText,
                    background: K.semanticColors.bodyBackground
                }, g && {
                    padding: "12px 0"
                }]
            }
        }
          , v = e(2784)
          , Se = e(57312)
          , Q = (0,
        Se.y)()
          , be = v.forwardRef(function(ie, te) {
            var ue = ie.styles
              , K = ie.theme
              , re = ie.className
              , g = ie.vertical
              , ee = ie.alignContent
              , O = ie.children
              , U = Q(ue, {
                theme: K,
                className: re,
                alignContent: ee,
                vertical: g
            });
            return v.createElement("div", {
                className: U.root,
                ref: te
            }, v.createElement("div", {
                className: U.content,
                role: "separator",
                "aria-orientation": g ? "vertical" : "horizontal"
            }, O))
        })
          , he = (0,
        c.z)(be, r, void 0, {
            scope: "Separator"
        });
        he.displayName = "Separator"
    }
    ,
    14860: (mt,Ne,e)=>{
        e.d(Ne, {
            q: ()=>oe
        });
        var c = e(1238)
          , t = e(56996)
          , r = e(75649)
          , v = e(32523)
          , Se = e(8422)
          , Q = {
            root: "ms-Shimmer-container",
            shimmerWrapper: "ms-Shimmer-shimmerWrapper",
            shimmerGradient: "ms-Shimmer-shimmerGradient",
            dataWrapper: "ms-Shimmer-dataWrapper"
        }
          , be = "100%"
          , he = (0,
        v.NF)(function() {
            return (0,
            r.F4)({
                "0%": {
                    transform: "translateX(-" + be + ")"
                },
                "100%": {
                    transform: "translateX(" + be + ")"
                }
            })
        })
          , ie = (0,
        v.NF)(function() {
            return (0,
            r.F4)({
                "100%": {
                    transform: "translateX(-" + be + ")"
                },
                "0%": {
                    transform: "translateX(" + be + ")"
                }
            })
        });
        function te(V) {
            var ae, X = V.isDataLoaded, pe = V.className, b = V.theme, T = V.transitionAnimationInterval, N = V.shimmerColor, D = V.shimmerWaveColor, H = V.improveCSSPerformance, l = b.semanticColors, d = (0,
            r.Cn)(Q, b), a = (0,
            Se.zg)(b);
            return {
                root: [d.root, b.fonts.medium, {
                    position: "relative",
                    height: "auto"
                }, pe],
                shimmerWrapper: [d.shimmerWrapper, {
                    position: "relative",
                    overflow: "hidden",
                    transform: "translateZ(0)",
                    backgroundColor: N || l.disabledBackground,
                    transition: "opacity " + T + "ms",
                    selectors: (ae = {},
                    ae[r.qJ] = (0,
                    t.pi)({
                        background: `WindowText
                        linear-gradient(
                          to right,
                          transparent 0%,
                          Window 50%,
                          transparent 100%)
                        0 0 / 90% 100%
                        no-repeat`
                    }, (0,
                    r.xM)()),
                    ae)
                }, X && {
                    opacity: "0",
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0"
                }, H ? {
                    selectors: {
                        "> div:last-child": {
                            transform: "translateZ(0)"
                        }
                    }
                } : {
                    selectors: {
                        "> *": {
                            transform: "translateZ(0)"
                        }
                    }
                }],
                shimmerGradient: [d.shimmerGradient, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: (N || l.disabledBackground) + `
                      linear-gradient(
                        to right,
                        ` + (N || l.disabledBackground) + ` 0%,
                        ` + (D || l.bodyDivider) + ` 50%,
                        ` + (N || l.disabledBackground) + ` 100%)
                      0 0 / 90% 100%
                      no-repeat`,
                    transform: "translateX(-" + be + ")",
                    animationDuration: "2s",
                    animationTimingFunction: "ease-in-out",
                    animationDirection: "normal",
                    animationIterationCount: "infinite",
                    animationName: a ? ie() : he()
                }],
                dataWrapper: [d.dataWrapper, {
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    opacity: "0",
                    background: "none",
                    backgroundColor: "transparent",
                    border: "none",
                    transition: "opacity " + T + "ms"
                }, X && {
                    opacity: "1",
                    position: "static"
                }],
                screenReaderText: r.ul
            }
        }
        var ue = e(2784)
          , K = e(57312)
          , re = e(88642)
          , g = e(72696)
          , ee = e(53642)
          , O = e(91062)
          , U = e(91264)
          , J = 200
          , $ = "Shimmer"
          , W = (0,
        K.y)()
          , P = ue.forwardRef(function(V, ae) {
            var X = V.styles
              , pe = V.shimmerElements
              , b = V.children
              , T = V.width
              , N = V.className
              , D = V.customElementsGroup
              , H = V.theme
              , l = V.ariaLabel
              , d = V.shimmerColors
              , a = V.isDataLoaded
              , u = a === void 0 ? !1 : a
              , C = V.improveCSSPerformance
              , h = (0,
            re.pq)(V, re.n7)
              , f = W(X, {
                theme: H,
                isDataLoaded: u,
                className: N,
                transitionAnimationInterval: J,
                shimmerColor: d && d.shimmer,
                shimmerWaveColor: d && d.shimmerWave,
                improveCSSPerformance: C || !D
            })
              , i = (0,
            O.B)({
                lastTimeoutId: 0
            })
              , m = (0,
            U.L)()
              , R = m.setTimeout
              , L = m.clearTimeout
              , Z = ue.useState(u)
              , F = Z[0]
              , A = Z[1]
              , j = {
                width: T || "100%"
            };
            return ue.useEffect(function() {
                if (u !== F) {
                    if (u)
                        return i.lastTimeoutId = R(function() {
                            A(!0)
                        }, J),
                        function() {
                            return L(i.lastTimeoutId)
                        }
                        ;
                    A(!1)
                }
            }, [u]),
            ue.createElement("div", (0,
            t.pi)({}, h, {
                className: f.root,
                ref: ae
            }), !F && ue.createElement("div", {
                style: j,
                className: f.shimmerWrapper
            }, ue.createElement("div", {
                className: f.shimmerGradient
            }), D || ue.createElement(ee.N, {
                shimmerElements: pe,
                backgroundColor: d && d.background
            })), b && ue.createElement("div", {
                className: f.dataWrapper
            }, b), l && !u && ue.createElement("div", {
                role: "status",
                "aria-live": "polite"
            }, ue.createElement(g.U, null, ue.createElement("div", {
                className: f.screenReaderText
            }, l))))
        });
        P.displayName = $;
        var oe = (0,
        c.z)(P, te, void 0, {
            scope: "Shimmer"
        })
    }
    ,
    55511: (mt,Ne,e)=>{
        e.d(Ne, {
            Q: ()=>t,
            s: ()=>c
        });
        var c;
        (function(r) {
            r[r.line = 1] = "line",
            r[r.circle = 2] = "circle",
            r[r.gap = 3] = "gap"
        }
        )(c || (c = {}));
        var t;
        (function(r) {
            r[r.line = 16] = "line",
            r[r.gap = 16] = "gap",
            r[r.circle = 24] = "circle"
        }
        )(t || (t = {}))
    }
    ,
    53642: (mt,Ne,e)=>{
        e.d(Ne, {
            N: ()=>D
        });
        var c = e(1238)
          , t = e(56996)
          , r = e(2784)
          , v = e(57312)
          , Se = e(32523)
          , Q = e(55511)
          , be = (0,
        v.y)()
          , he = function(H) {
            var l = H.height
              , d = H.styles
              , a = H.width
              , u = a === void 0 ? "100%" : a
              , C = H.borderStyle
              , h = H.theme
              , f = be(d, {
                theme: h,
                height: l,
                borderStyle: C
            });
            return r.createElement("div", {
                style: {
                    width: u,
                    minWidth: typeof u == "number" ? u + "px" : "auto"
                },
                className: f.root
            }, r.createElement("svg", {
                width: "2",
                height: "2",
                className: f.topLeftCorner
            }, r.createElement("path", {
                d: "M0 2 A 2 2, 0, 0, 1, 2 0 L 0 0 Z"
            })), r.createElement("svg", {
                width: "2",
                height: "2",
                className: f.topRightCorner
            }, r.createElement("path", {
                d: "M0 0 A 2 2, 0, 0, 1, 2 2 L 2 0 Z"
            })), r.createElement("svg", {
                width: "2",
                height: "2",
                className: f.bottomRightCorner
            }, r.createElement("path", {
                d: "M2 0 A 2 2, 0, 0, 1, 0 2 L 2 2 Z"
            })), r.createElement("svg", {
                width: "2",
                height: "2",
                className: f.bottomLeftCorner
            }, r.createElement("path", {
                d: "M2 2 A 2 2, 0, 0, 1, 0 0 L 0 2 Z"
            })))
        }
          , ie = e(75649)
          , te = {
            root: "ms-ShimmerLine-root",
            topLeftCorner: "ms-ShimmerLine-topLeftCorner",
            topRightCorner: "ms-ShimmerLine-topRightCorner",
            bottomLeftCorner: "ms-ShimmerLine-bottomLeftCorner",
            bottomRightCorner: "ms-ShimmerLine-bottomRightCorner"
        };
        function ue(H) {
            var l, d = H.height, a = H.borderStyle, u = H.theme, C = u.semanticColors, h = (0,
            ie.Cn)(te, u), f = a || {}, i = {
                position: "absolute",
                fill: C.bodyBackground
            };
            return {
                root: [h.root, u.fonts.medium, {
                    height: d + "px",
                    boxSizing: "content-box",
                    position: "relative",
                    borderTopStyle: "solid",
                    borderBottomStyle: "solid",
                    borderColor: C.bodyBackground,
                    borderWidth: 0,
                    selectors: (l = {},
                    l[ie.qJ] = {
                        borderColor: "Window",
                        selectors: {
                            "> *": {
                                fill: "Window"
                            }
                        }
                    },
                    l)
                }, f],
                topLeftCorner: [h.topLeftCorner, {
                    top: "0",
                    left: "0"
                }, i],
                topRightCorner: [h.topRightCorner, {
                    top: "0",
                    right: "0"
                }, i],
                bottomRightCorner: [h.bottomRightCorner, {
                    bottom: "0",
                    right: "0"
                }, i],
                bottomLeftCorner: [h.bottomLeftCorner, {
                    bottom: "0",
                    left: "0"
                }, i]
            }
        }
        var K = (0,
        c.z)(he, ue, void 0, {
            scope: "ShimmerLine"
        })
          , re = (0,
        v.y)()
          , g = function(H) {
            var l = H.height
              , d = H.styles
              , a = H.width
              , u = a === void 0 ? "10px" : a
              , C = H.borderStyle
              , h = H.theme
              , f = re(d, {
                theme: h,
                height: l,
                borderStyle: C
            });
            return r.createElement("div", {
                style: {
                    width: u,
                    minWidth: typeof u == "number" ? u + "px" : "auto"
                },
                className: f.root
            })
        }
          , ee = {
            root: "ms-ShimmerGap-root"
        };
        function O(H) {
            var l, d = H.height, a = H.borderStyle, u = H.theme, C = u.semanticColors, h = (0,
            ie.Cn)(ee, u), f = a || {};
            return {
                root: [h.root, u.fonts.medium, {
                    backgroundColor: C.bodyBackground,
                    height: d + "px",
                    boxSizing: "content-box",
                    borderTopStyle: "solid",
                    borderBottomStyle: "solid",
                    borderColor: C.bodyBackground,
                    selectors: (l = {},
                    l[ie.qJ] = {
                        backgroundColor: "Window",
                        borderColor: "Window"
                    },
                    l)
                }, f]
            }
        }
        var U = (0,
        c.z)(g, O, void 0, {
            scope: "ShimmerGap"
        })
          , J = {
            root: "ms-ShimmerCircle-root",
            svg: "ms-ShimmerCircle-svg"
        };
        function $(H) {
            var l, d, a = H.height, u = H.borderStyle, C = H.theme, h = C.semanticColors, f = (0,
            ie.Cn)(J, C), i = u || {};
            return {
                root: [f.root, C.fonts.medium, {
                    width: a + "px",
                    height: a + "px",
                    minWidth: a + "px",
                    boxSizing: "content-box",
                    borderTopStyle: "solid",
                    borderBottomStyle: "solid",
                    borderColor: h.bodyBackground,
                    selectors: (l = {},
                    l[ie.qJ] = {
                        borderColor: "Window"
                    },
                    l)
                }, i],
                svg: [f.svg, {
                    display: "block",
                    fill: h.bodyBackground,
                    selectors: (d = {},
                    d[ie.qJ] = {
                        fill: "Window"
                    },
                    d)
                }]
            }
        }
        var W = (0,
        v.y)()
          , P = function(H) {
            var l = H.height
              , d = H.styles
              , a = H.borderStyle
              , u = H.theme
              , C = W(d, {
                theme: u,
                height: l,
                borderStyle: a
            });
            return r.createElement("div", {
                className: C.root
            }, r.createElement("svg", {
                viewBox: "0 0 10 10",
                width: l,
                height: l,
                className: C.svg
            }, r.createElement("path", {
                d: "M0,0 L10,0 L10,10 L0,10 L0,0 Z M0,5 C0,7.76142375 2.23857625,10 5,10 C7.76142375,10 10,7.76142375 10,5 C10,2.23857625 7.76142375,2.22044605e-16 5,0 C2.23857625,-2.22044605e-16 0,2.23857625 0,5 L0,5 Z"
            })))
        }
          , oe = (0,
        c.z)(P, $, void 0, {
            scope: "ShimmerCircle"
        })
          , V = (0,
        v.y)()
          , ae = function(H) {
            var l = H.styles
              , d = H.width
              , a = d === void 0 ? "auto" : d
              , u = H.shimmerElements
              , C = H.rowHeight
              , h = C === void 0 ? b(u || []) : C
              , f = H.flexWrap
              , i = f === void 0 ? !1 : f
              , m = H.theme
              , R = H.backgroundColor
              , L = V(l, {
                theme: m,
                flexWrap: i
            });
            return r.createElement("div", {
                style: {
                    width: a
                },
                className: L.root
            }, X(u, R, h))
        };
        function X(H, l, d) {
            var a = H ? H.map(function(u, C) {
                var h = u.type
                  , f = (0,
                t._T)(u, ["type"])
                  , i = f.verticalAlign
                  , m = f.height
                  , R = pe(i, h, m, l, d);
                switch (u.type) {
                case Q.s.circle:
                    return r.createElement(oe, (0,
                    t.pi)({
                        key: C
                    }, f, {
                        styles: R
                    }));
                case Q.s.gap:
                    return r.createElement(U, (0,
                    t.pi)({
                        key: C
                    }, f, {
                        styles: R
                    }));
                case Q.s.line:
                    return r.createElement(K, (0,
                    t.pi)({
                        key: C
                    }, f, {
                        styles: R
                    }))
                }
            }) : r.createElement(K, {
                height: Q.Q.line
            });
            return a
        }
        var pe = (0,
        Se.NF)(function(H, l, d, a, u) {
            var C = u && d ? u - d : 0, h;
            if (!H || H === "center" ? h = {
                borderBottomWidth: (C ? Math.floor(C / 2) : 0) + "px",
                borderTopWidth: (C ? Math.ceil(C / 2) : 0) + "px"
            } : H && H === "top" ? h = {
                borderBottomWidth: C + "px",
                borderTopWidth: "0px"
            } : H && H === "bottom" && (h = {
                borderBottomWidth: "0px",
                borderTopWidth: C + "px"
            }),
            a)
                switch (l) {
                case Q.s.circle:
                    return {
                        root: (0,
                        t.pi)((0,
                        t.pi)({}, h), {
                            borderColor: a
                        }),
                        svg: {
                            fill: a
                        }
                    };
                case Q.s.gap:
                    return {
                        root: (0,
                        t.pi)((0,
                        t.pi)({}, h), {
                            borderColor: a,
                            backgroundColor: a
                        })
                    };
                case Q.s.line:
                    return {
                        root: (0,
                        t.pi)((0,
                        t.pi)({}, h), {
                            borderColor: a
                        }),
                        topLeftCorner: {
                            fill: a
                        },
                        topRightCorner: {
                            fill: a
                        },
                        bottomLeftCorner: {
                            fill: a
                        },
                        bottomRightCorner: {
                            fill: a
                        }
                    }
                }
            return {
                root: h
            }
        });
        function b(H) {
            var l = H.map(function(a) {
                switch (a.type) {
                case Q.s.circle:
                    a.height || (a.height = Q.Q.circle);
                    break;
                case Q.s.line:
                    a.height || (a.height = Q.Q.line);
                    break;
                case Q.s.gap:
                    a.height || (a.height = Q.Q.gap);
                    break
                }
                return a
            })
              , d = l.reduce(function(a, u) {
                return u.height && u.height > a ? u.height : a
            }, 0);
            return d
        }
        var T = {
            root: "ms-ShimmerElementsGroup-root"
        };
        function N(H) {
            var l = H.flexWrap
              , d = H.theme
              , a = (0,
            ie.Cn)(T, d);
            return {
                root: [a.root, d.fonts.medium, {
                    display: "flex",
                    alignItems: "center",
                    flexWrap: l ? "wrap" : "nowrap",
                    position: "relative"
                }]
            }
        }
        var D = (0,
        c.z)(ae, N, void 0, {
            scope: "ShimmerElementsGroup"
        })
    }
    ,
    50764: (mt,Ne,e)=>{
        e.d(Ne, {
            $: ()=>ee
        });
        var c = e(1238)
          , t = e(56996)
          , r = e(2784)
          , v = e(50402)
          , Se = e(57312)
          , Q = e(88642)
          , be = e(72696)
          , he = (0,
        Se.y)()
          , ie = function(O) {
            (0,
            t.ZT)(U, O);
            function U() {
                return O !== null && O.apply(this, arguments) || this
            }
            return U.prototype.render = function() {
                var J = this.props
                  , $ = J.type
                  , W = J.size
                  , P = J.ariaLabel
                  , oe = J.ariaLive
                  , V = J.styles
                  , ae = J.label
                  , X = J.theme
                  , pe = J.className
                  , b = J.labelPosition
                  , T = P
                  , N = (0,
                Q.pq)(this.props, Q.n7, ["size"])
                  , D = W;
                D === void 0 && $ !== void 0 && (D = $ === v.d.large ? v.E.large : v.E.medium);
                var H = he(V, {
                    theme: X,
                    size: D,
                    className: pe,
                    labelPosition: b
                });
                return r.createElement("div", (0,
                t.pi)({}, N, {
                    className: H.root
                }), r.createElement("div", {
                    className: H.circle
                }), ae && r.createElement("div", {
                    className: H.label
                }, ae), T && r.createElement("div", {
                    role: "status",
                    "aria-live": oe
                }, r.createElement(be.U, null, r.createElement("div", {
                    className: H.screenReaderText
                }, T))))
            }
            ,
            U.defaultProps = {
                size: v.E.medium,
                ariaLive: "polite",
                labelPosition: "bottom"
            },
            U
        }(r.Component)
          , te = e(75649)
          , ue = e(32523)
          , K = {
            root: "ms-Spinner",
            circle: "ms-Spinner-circle",
            label: "ms-Spinner-label"
        }
          , re = (0,
        ue.NF)(function() {
            return (0,
            te.F4)({
                "0%": {
                    transform: "rotate(0deg)"
                },
                "100%": {
                    transform: "rotate(360deg)"
                }
            })
        })
          , g = function(O) {
            var U, J = O.theme, $ = O.size, W = O.className, P = O.labelPosition, oe = J.palette, V = (0,
            te.Cn)(K, J);
            return {
                root: [V.root, {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }, P === "top" && {
                    flexDirection: "column-reverse"
                }, P === "right" && {
                    flexDirection: "row"
                }, P === "left" && {
                    flexDirection: "row-reverse"
                }, W],
                circle: [V.circle, {
                    boxSizing: "border-box",
                    borderRadius: "50%",
                    border: "1.5px solid " + oe.themeLight,
                    borderTopColor: oe.themePrimary,
                    animationName: re(),
                    animationDuration: "1.3s",
                    animationIterationCount: "infinite",
                    animationTimingFunction: "cubic-bezier(.53,.21,.29,.67)",
                    selectors: (U = {},
                    U[te.qJ] = (0,
                    t.pi)({
                        borderTopColor: "Highlight"
                    }, (0,
                    te.xM)()),
                    U)
                }, $ === v.E.xSmall && ["ms-Spinner--xSmall", {
                    width: 12,
                    height: 12
                }], $ === v.E.small && ["ms-Spinner--small", {
                    width: 16,
                    height: 16
                }], $ === v.E.medium && ["ms-Spinner--medium", {
                    width: 20,
                    height: 20
                }], $ === v.E.large && ["ms-Spinner--large", {
                    width: 28,
                    height: 28
                }]],
                label: [V.label, J.fonts.small, {
                    color: oe.themePrimary,
                    margin: "8px 0 0",
                    textAlign: "center"
                }, P === "top" && {
                    margin: "0 0 8px"
                }, P === "right" && {
                    margin: "0 0 0 8px"
                }, P === "left" && {
                    margin: "0 8px 0 0"
                }],
                screenReaderText: te.ul
            }
        }
          , ee = (0,
        c.z)(ie, g, void 0, {
            scope: "Spinner"
        })
    }
    ,
    50402: (mt,Ne,e)=>{
        e.d(Ne, {
            E: ()=>c,
            d: ()=>t
        });
        var c;
        (function(r) {
            r[r.xSmall = 0] = "xSmall",
            r[r.small = 1] = "small",
            r[r.medium = 2] = "medium",
            r[r.large = 3] = "large"
        }
        )(c || (c = {}));
        var t;
        (function(r) {
            r[r.normal = 0] = "normal",
            r[r.large = 1] = "large"
        }
        )(t || (t = {}))
    }
    ,
    37040: (mt,Ne,e)=>{
        e.d(Ne, {
            K: ()=>pe
        });
        var c = e(56996)
          , t = e(2784)
          , r = e(77036)
          , v = e(37448)
          , Se = e(74805)
          , Q = e(88642)
          , be = e(51370)
          , he = e(75649)
          , ie = {
            root: "ms-StackItem"
        }
          , te = {
            start: "flex-start",
            end: "flex-end"
        }
          , ue = function(T, N, D) {
            var H = T.grow
              , l = T.shrink
              , d = T.disableShrink
              , a = T.align
              , u = T.verticalFill
              , C = T.order
              , h = T.className
              , f = T.basis
              , i = f === void 0 ? "auto" : f
              , m = (0,
            he.Cn)(ie, N);
            return {
                root: [N.fonts.medium, m.root, {
                    flexBasis: i,
                    margin: D.margin,
                    padding: D.padding,
                    height: u ? "100%" : "auto",
                    width: "auto"
                }, H && {
                    flexGrow: H === !0 ? 1 : H
                }, (d || !H && !l) && {
                    flexShrink: 0
                }, l && !d && {
                    flexShrink: 1
                }, a && {
                    alignSelf: te[a] || a
                }, C && {
                    order: C
                }, h]
            }
        }
          , K = function(T, N) {
            return N.spacing.hasOwnProperty(T) ? N.spacing[T] : T
        }
          , re = function(T) {
            var N = parseFloat(T)
              , D = isNaN(N) ? 0 : N
              , H = isNaN(N) ? "" : N.toString()
              , l = T.substring(H.toString().length);
            return {
                value: D,
                unit: l || "px"
            }
        }
          , g = function(T, N) {
            if (T === void 0 || T === "")
                return {
                    rowGap: {
                        value: 0,
                        unit: "px"
                    },
                    columnGap: {
                        value: 0,
                        unit: "px"
                    }
                };
            if (typeof T == "number")
                return {
                    rowGap: {
                        value: T,
                        unit: "px"
                    },
                    columnGap: {
                        value: T,
                        unit: "px"
                    }
                };
            var D = T.split(" ");
            if (D.length > 2)
                return {
                    rowGap: {
                        value: 0,
                        unit: "px"
                    },
                    columnGap: {
                        value: 0,
                        unit: "px"
                    }
                };
            if (D.length === 2)
                return {
                    rowGap: re(K(D[0], N)),
                    columnGap: re(K(D[1], N))
                };
            var H = re(K(T, N));
            return {
                rowGap: H,
                columnGap: H
            }
        }
          , ee = function(T, N) {
            if (T === void 0 || typeof T == "number" || T === "")
                return T;
            var D = T.split(" ");
            return D.length < 2 ? K(T, N) : D.reduce(function(H, l) {
                return K(H, N) + " " + K(l, N)
            })
        }
          , O = {
            start: "flex-start",
            end: "flex-end"
        }
          , U = {
            root: "ms-Stack",
            inner: "ms-Stack-inner",
            child: "ms-Stack-child"
        }
          , J = function(T, N, D) {
            var H, l, d, a, u, C, h, f, i, m, R, L, Z, F = T.className, A = T.disableShrink, j = T.enableScopedSelectors, G = T.grow, le = T.horizontal, Ee = T.horizontalAlign, de = T.reversed, Ce = T.verticalAlign, Be = T.verticalFill, Oe = T.wrap, at = (0,
            he.Cn)(U, N), $e = D && D.childrenGap ? D.childrenGap : T.gap, et = D && D.maxHeight ? D.maxHeight : T.maxHeight, ht = D && D.maxWidth ? D.maxWidth : T.maxWidth, Ct = D && D.padding ? D.padding : T.padding, dt = g($e, N), ze = dt.rowGap, pt = dt.columnGap, It = "" + -.5 * pt.value + pt.unit, w = "" + -.5 * ze.value + ze.unit, ce = {
                textOverflow: "ellipsis"
            }, B = "> " + (j ? "." + U.child : "*"), _ = (H = {},
            H[B + ":not(." + ie.root + ")"] = {
                flexShrink: 0
            },
            H);
            return Oe ? {
                root: [at.root, {
                    flexWrap: "wrap",
                    maxWidth: ht,
                    maxHeight: et,
                    width: "auto",
                    overflow: "visible",
                    height: "100%"
                }, Ee && (l = {},
                l[le ? "justifyContent" : "alignItems"] = O[Ee] || Ee,
                l), Ce && (d = {},
                d[le ? "alignItems" : "justifyContent"] = O[Ce] || Ce,
                d), F, {
                    display: "flex"
                }, le && {
                    height: Be ? "100%" : "auto"
                }],
                inner: [at.inner, (a = {
                    display: "flex",
                    flexWrap: "wrap",
                    marginLeft: It,
                    marginRight: It,
                    marginTop: w,
                    marginBottom: w,
                    overflow: "visible",
                    boxSizing: "border-box",
                    padding: ee(Ct, N),
                    width: pt.value === 0 ? "100%" : "calc(100% + " + pt.value + pt.unit + ")",
                    maxWidth: "100vw"
                },
                a[B] = (0,
                c.pi)({
                    margin: "" + .5 * ze.value + ze.unit + " " + .5 * pt.value + pt.unit
                }, ce),
                a), A && _, Ee && (u = {},
                u[le ? "justifyContent" : "alignItems"] = O[Ee] || Ee,
                u), Ce && (C = {},
                C[le ? "alignItems" : "justifyContent"] = O[Ce] || Ce,
                C), le && (h = {
                    flexDirection: de ? "row-reverse" : "row",
                    height: ze.value === 0 ? "100%" : "calc(100% + " + ze.value + ze.unit + ")"
                },
                h[B] = {
                    maxWidth: pt.value === 0 ? "100%" : "calc(100% - " + pt.value + pt.unit + ")"
                },
                h), !le && (f = {
                    flexDirection: de ? "column-reverse" : "column",
                    height: "calc(100% + " + ze.value + ze.unit + ")"
                },
                f[B] = {
                    maxHeight: ze.value === 0 ? "100%" : "calc(100% - " + ze.value + ze.unit + ")"
                },
                f)]
            } : {
                root: [at.root, (i = {
                    display: "flex",
                    flexDirection: le ? de ? "row-reverse" : "row" : de ? "column-reverse" : "column",
                    flexWrap: "nowrap",
                    width: "auto",
                    height: Be ? "100%" : "auto",
                    maxWidth: ht,
                    maxHeight: et,
                    padding: ee(Ct, N),
                    boxSizing: "border-box"
                },
                i[B] = ce,
                i), A && _, G && {
                    flexGrow: G === !0 ? 1 : G
                }, Ee && (m = {},
                m[le ? "justifyContent" : "alignItems"] = O[Ee] || Ee,
                m), Ce && (R = {},
                R[le ? "alignItems" : "justifyContent"] = O[Ce] || Ce,
                R), le && pt.value > 0 && (L = {},
                L[de ? B + ":not(:last-child)" : B + ":not(:first-child)"] = {
                    marginLeft: "" + pt.value + pt.unit
                },
                L), !le && ze.value > 0 && (Z = {},
                Z[de ? B + ":not(:last-child)" : B + ":not(:first-child)"] = {
                    marginTop: "" + ze.value + ze.unit
                },
                Z), F]
            }
        }
          , $ = function(T) {
            var N = T.children
              , D = (0,
            Q.pq)(T, Q.iY);
            if (N == null)
                return null;
            var H = (0,
            r.FJ)(T, {
                root: "div"
            });
            return (0,
            r.Yb)(H.root, (0,
            c.pi)({}, D), N)
        }
          , W = (0,
        v.L)($, {
            displayName: "StackItem",
            styles: ue
        });
        const P = null;
        var oe = function(T) {
            var N = T.as
              , D = N === void 0 ? "div" : N
              , H = T.disableShrink
              , l = H === void 0 ? !1 : H
              , d = T.enableScopedSelectors
              , a = d === void 0 ? !1 : d
              , u = T.wrap
              , C = (0,
            c._T)(T, ["as", "disableShrink", "enableScopedSelectors", "wrap"]);
            (0,
            Se.b)("Stack", T, {
                gap: "tokens.childrenGap",
                maxHeight: "tokens.maxHeight",
                maxWidth: "tokens.maxWidth",
                padding: "tokens.padding"
            });
            var h = V(T.children, {
                disableShrink: l,
                enableScopedSelectors: a
            })
              , f = (0,
            Q.pq)(C, Q.iY)
              , i = (0,
            r.FJ)(T, {
                root: D,
                inner: "div"
            });
            return u ? (0,
            r.Yb)(i.root, (0,
            c.pi)({}, f), (0,
            r.Yb)(i.inner, null, h)) : (0,
            r.Yb)(i.root, (0,
            c.pi)({}, f), h)
        };
        function V(T, N) {
            var D = N.disableShrink
              , H = N.enableScopedSelectors
              , l = t.Children.toArray(T);
            return l = t.Children.map(l, function(d) {
                if (!d || !t.isValidElement(d))
                    return d;
                if (d.type === t.Fragment)
                    return d.props.children ? V(d.props.children, {
                        disableShrink: D,
                        enableScopedSelectors: H
                    }) : null;
                var a = d
                  , u = {};
                ae(d) && (u = {
                    shrink: !D
                });
                var C = a.props.className;
                return t.cloneElement(a, (0,
                c.pi)((0,
                c.pi)((0,
                c.pi)((0,
                c.pi)({}, u), a.props), C && {
                    className: C
                }), H && {
                    className: (0,
                    be.i)(U.child, C)
                }))
            }),
            l
        }
        function ae(T) {
            return !!T && typeof T == "object" && !!T.type && T.type.displayName === W.displayName
        }
        var X = {
            Item: W
        }
          , pe = (0,
        v.L)(oe, {
            displayName: "Stack",
            styles: J,
            statics: X
        });
        const b = null
    }
    ,
    30018: (mt,Ne,e)=>{
        e.d(Ne, {
            x: ()=>be
        });
        var c = e(37448)
          , t = e(56996)
          , r = e(77036)
          , v = e(88642)
          , Se = function(ie) {
            if (ie.children == null)
                return null;
            var te = ie.block
              , ue = ie.className
              , K = ie.as
              , re = K === void 0 ? "span" : K
              , g = ie.variant
              , ee = ie.nowrap
              , O = (0,
            t._T)(ie, ["block", "className", "as", "variant", "nowrap"])
              , U = (0,
            r.FJ)(ie, {
                root: re
            });
            return (0,
            r.Yb)(U.root, (0,
            t.pi)({}, (0,
            v.pq)(O, v.iY)))
        }
          , Q = function(ie, te) {
            var ue = ie.as
              , K = ie.className
              , re = ie.block
              , g = ie.nowrap
              , ee = ie.variant
              , O = te.fonts
              , U = te.semanticColors
              , J = O[ee || "medium"];
            return {
                root: [J, {
                    color: J.color || U.bodyText,
                    display: re ? ue === "td" ? "table-cell" : "block" : "inline",
                    mozOsxFontSmoothing: J.MozOsxFontSmoothing,
                    webkitFontSmoothing: J.WebkitFontSmoothing
                }, g && {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }, K]
            }
        }
          , be = (0,
        c.L)(Se, {
            displayName: "Text",
            styles: Q
        });
        const he = null
    }
    ,
    17185: (mt,Ne,e)=>{
        e.d(Ne, {
            n: ()=>H
        });
        var c = e(1238)
          , t = e(56996)
          , r = e(2784)
          , v = e(553)
          , Se = e(36775)
          , Q = e(57312)
          , be = e(85758)
          , he = e(61676)
          , ie = e(35577)
          , te = e(72696)
          , ue = e(67980)
          , K = e(36786)
          , re = e(84556)
          , g = e(88642)
          , ee = e(18630)
          , O = e(45007)
          , U = (0,
        Q.y)()
          , J = ""
          , $ = "TextField"
          , W = "RedEye"
          , P = "Hide"
          , oe = function(l) {
            (0,
            t.ZT)(d, l);
            function d(a) {
                var u = l.call(this, a) || this;
                u._textElement = r.createRef(),
                u._onFocus = function(f) {
                    u.props.onFocus && u.props.onFocus(f),
                    u.setState({
                        isFocused: !0
                    }, function() {
                        u.props.validateOnFocusIn && u._validate(u.value)
                    })
                }
                ,
                u._onBlur = function(f) {
                    u.props.onBlur && u.props.onBlur(f),
                    u.setState({
                        isFocused: !1
                    }, function() {
                        u.props.validateOnFocusOut && u._validate(u.value)
                    })
                }
                ,
                u._onRenderLabel = function(f) {
                    var i = f.label
                      , m = f.required
                      , R = u._classNames.subComponentStyles ? u._classNames.subComponentStyles.label : void 0;
                    return i ? r.createElement(v._, {
                        required: m,
                        htmlFor: u._id,
                        styles: R,
                        disabled: f.disabled,
                        id: u._labelId
                    }, f.label) : null
                }
                ,
                u._onRenderDescription = function(f) {
                    return f.description ? r.createElement("span", {
                        className: u._classNames.description
                    }, f.description) : null
                }
                ,
                u._onRevealButtonClick = function(f) {
                    u.setState(function(i) {
                        return {
                            isRevealingPassword: !i.isRevealingPassword
                        }
                    })
                }
                ,
                u._onInputChange = function(f) {
                    var i, m, R = f.target, L = R.value, Z = V(u.props, u.state) || "";
                    if (L === void 0 || L === u._lastChangeValue || L === Z) {
                        u._lastChangeValue = void 0;
                        return
                    }
                    u._lastChangeValue = L,
                    (m = (i = u.props).onChange) === null || m === void 0 || m.call(i, f, L),
                    u._isControlled || u.setState({
                        uncontrolledValue: L
                    })
                }
                ,
                (0,
                be.l)(u),
                u._async = new he.e(u),
                u._fallbackId = (0,
                ie.z)($),
                u._descriptionId = (0,
                ie.z)($ + "Description"),
                u._labelId = (0,
                ie.z)($ + "Label"),
                u._prefixId = (0,
                ie.z)($ + "Prefix"),
                u._suffixId = (0,
                ie.z)($ + "Suffix"),
                u._warnControlledUsage();
                var C = a.defaultValue
                  , h = C === void 0 ? J : C;
                return typeof h == "number" && (h = String(h)),
                u.state = {
                    uncontrolledValue: u._isControlled ? void 0 : h,
                    isFocused: !1,
                    errorMessage: ""
                },
                u._delayedValidate = u._async.debounce(u._validate, u.props.deferredValidationTime),
                u._lastValidation = 0,
                u
            }
            return Object.defineProperty(d.prototype, "value", {
                get: function() {
                    return V(this.props, this.state)
                },
                enumerable: !1,
                configurable: !0
            }),
            d.prototype.componentDidMount = function() {
                this._adjustInputHeight(),
                this.props.validateOnLoad && this._validate(this.value)
            }
            ,
            d.prototype.componentWillUnmount = function() {
                this._async.dispose()
            }
            ,
            d.prototype.getSnapshotBeforeUpdate = function(a, u) {
                return {
                    selection: [this.selectionStart, this.selectionEnd]
                }
            }
            ,
            d.prototype.componentDidUpdate = function(a, u, C) {
                var h = this.props
                  , f = (C || {}).selection
                  , i = f === void 0 ? [null, null] : f
                  , m = i[0]
                  , R = i[1];
                !!a.multiline != !!h.multiline && u.isFocused && (this.focus(),
                m !== null && R !== null && m >= 0 && R >= 0 && this.setSelectionRange(m, R)),
                a.value !== h.value && (this._lastChangeValue = void 0);
                var L = V(a, u)
                  , Z = this.value;
                L !== Z && (this._warnControlledUsage(a),
                this.state.errorMessage && !h.errorMessage && this.setState({
                    errorMessage: ""
                }),
                this._adjustInputHeight(),
                ae(h) && this._delayedValidate(Z))
            }
            ,
            d.prototype.render = function() {
                var a = this.props
                  , u = a.borderless
                  , C = a.className
                  , h = a.disabled
                  , f = a.invalid
                  , i = a.iconProps
                  , m = a.inputClassName
                  , R = a.label
                  , L = a.multiline
                  , Z = a.required
                  , F = a.underlined
                  , A = a.prefix
                  , j = a.resizable
                  , G = a.suffix
                  , le = a.theme
                  , Ee = a.styles
                  , de = a.autoAdjustHeight
                  , Ce = a.canRevealPassword
                  , Be = a.revealPasswordAriaLabel
                  , Oe = a.type
                  , at = a.onRenderPrefix
                  , $e = at === void 0 ? this._onRenderPrefix : at
                  , et = a.onRenderSuffix
                  , ht = et === void 0 ? this._onRenderSuffix : et
                  , Ct = a.onRenderLabel
                  , dt = Ct === void 0 ? this._onRenderLabel : Ct
                  , ze = a.onRenderDescription
                  , pt = ze === void 0 ? this._onRenderDescription : ze
                  , It = this.state
                  , w = It.isFocused
                  , ce = It.isRevealingPassword
                  , B = this._errorMessage
                  , _ = typeof f == "boolean" ? f : !!B
                  , ye = !!Ce && Oe === "password" && pe()
                  , z = this._classNames = U(Ee, {
                    theme: le,
                    className: C,
                    disabled: h,
                    focused: w,
                    required: Z,
                    multiline: L,
                    hasLabel: !!R,
                    hasErrorMessage: _,
                    borderless: u,
                    resizable: j,
                    hasIcon: !!i,
                    underlined: F,
                    inputClassName: m,
                    autoAdjustHeight: de,
                    hasRevealButton: ye
                });
                return r.createElement("div", {
                    ref: this.props.elementRef,
                    className: z.root
                }, r.createElement("div", {
                    className: z.wrapper
                }, dt(this.props, this._onRenderLabel), r.createElement("div", {
                    className: z.fieldGroup
                }, (A !== void 0 || this.props.onRenderPrefix) && r.createElement("div", {
                    className: z.prefix,
                    id: this._prefixId
                }, $e(this.props, this._onRenderPrefix)), L ? this._renderTextArea() : this._renderInput(), i && r.createElement(Se.J, (0,
                t.pi)({
                    className: z.icon
                }, i)), ye && r.createElement("button", {
                    "aria-label": Be,
                    className: z.revealButton,
                    onClick: this._onRevealButtonClick,
                    "aria-pressed": !!ce,
                    type: "button"
                }, r.createElement("span", {
                    className: z.revealSpan
                }, r.createElement(Se.J, {
                    className: z.revealIcon,
                    iconName: ce ? P : W
                }))), (G !== void 0 || this.props.onRenderSuffix) && r.createElement("div", {
                    className: z.suffix,
                    id: this._suffixId
                }, ht(this.props, this._onRenderSuffix)))), this._isDescriptionAvailable && r.createElement("span", {
                    id: this._descriptionId
                }, pt(this.props, this._onRenderDescription), B && r.createElement("div", {
                    role: "alert"
                }, r.createElement(te.U, null, this._renderErrorMessage()))))
            }
            ,
            d.prototype.focus = function() {
                this._textElement.current && this._textElement.current.focus()
            }
            ,
            d.prototype.blur = function() {
                this._textElement.current && this._textElement.current.blur()
            }
            ,
            d.prototype.select = function() {
                this._textElement.current && this._textElement.current.select()
            }
            ,
            d.prototype.setSelectionStart = function(a) {
                this._textElement.current && (this._textElement.current.selectionStart = a)
            }
            ,
            d.prototype.setSelectionEnd = function(a) {
                this._textElement.current && (this._textElement.current.selectionEnd = a)
            }
            ,
            Object.defineProperty(d.prototype, "selectionStart", {
                get: function() {
                    return this._textElement.current ? this._textElement.current.selectionStart : -1
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(d.prototype, "selectionEnd", {
                get: function() {
                    return this._textElement.current ? this._textElement.current.selectionEnd : -1
                },
                enumerable: !1,
                configurable: !0
            }),
            d.prototype.setSelectionRange = function(a, u) {
                this._textElement.current && this._textElement.current.setSelectionRange(a, u)
            }
            ,
            d.prototype._warnControlledUsage = function(a) {
                (0,
                ue.Q)({
                    componentId: this._id,
                    componentName: $,
                    props: this.props,
                    oldProps: a,
                    valueProp: "value",
                    defaultValueProp: "defaultValue",
                    onChangeProp: "onChange",
                    readOnlyProp: "readOnly"
                }),
                this.props.value === null && !this._hasWarnedNullValue && (this._hasWarnedNullValue = !0,
                (0,
                K.Z)("Warning: 'value' prop on '" + $ + "' should not be null. Consider using an empty string to clear the component or undefined to indicate an uncontrolled component."))
            }
            ,
            Object.defineProperty(d.prototype, "_id", {
                get: function() {
                    return this.props.id || this._fallbackId
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(d.prototype, "_isControlled", {
                get: function() {
                    return (0,
                    re.s)(this.props, "value")
                },
                enumerable: !1,
                configurable: !0
            }),
            d.prototype._onRenderPrefix = function(a) {
                var u = a.prefix;
                return r.createElement("span", {
                    style: {
                        paddingBottom: "1px"
                    }
                }, u)
            }
            ,
            d.prototype._onRenderSuffix = function(a) {
                var u = a.suffix;
                return r.createElement("span", {
                    style: {
                        paddingBottom: "1px"
                    }
                }, u)
            }
            ,
            Object.defineProperty(d.prototype, "_errorMessage", {
                get: function() {
                    var a = this.props.errorMessage
                      , u = a === void 0 ? this.state.errorMessage : a;
                    return u || ""
                },
                enumerable: !1,
                configurable: !0
            }),
            d.prototype._renderErrorMessage = function() {
                var a = this._errorMessage;
                return a ? typeof a == "string" ? r.createElement("p", {
                    className: this._classNames.errorMessage
                }, r.createElement("span", {
                    "data-automation-id": "error-message"
                }, a)) : r.createElement("div", {
                    className: this._classNames.errorMessage,
                    "data-automation-id": "error-message"
                }, a) : null
            }
            ,
            Object.defineProperty(d.prototype, "_isDescriptionAvailable", {
                get: function() {
                    var a = this.props;
                    return !!(a.onRenderDescription || a.description || this._errorMessage)
                },
                enumerable: !1,
                configurable: !0
            }),
            d.prototype._renderTextArea = function() {
                var a = this.props.invalid
                  , u = a === void 0 ? !!this._errorMessage : a
                  , C = (0,
                g.pq)(this.props, g.FI, ["defaultValue"])
                  , h = this.props["aria-labelledby"] || (this.props.label ? this._labelId : void 0);
                return r.createElement("textarea", (0,
                t.pi)({
                    id: this._id
                }, C, {
                    ref: this._textElement,
                    value: this.value || "",
                    onInput: this._onInputChange,
                    onChange: this._onInputChange,
                    className: this._classNames.field,
                    "aria-labelledby": h,
                    "aria-describedby": this._isDescriptionAvailable ? this._descriptionId : this.props["aria-describedby"],
                    "aria-invalid": u,
                    "aria-label": this.props.ariaLabel,
                    readOnly: this.props.readOnly,
                    onFocus: this._onFocus,
                    onBlur: this._onBlur
                }))
            }
            ,
            d.prototype._renderInput = function() {
                var a = this.props
                  , u = a.ariaLabel
                  , C = a.invalid
                  , h = C === void 0 ? !!this._errorMessage : C
                  , f = a.onRenderPrefix
                  , i = a.onRenderSuffix
                  , m = a.prefix
                  , R = a.suffix
                  , L = a.type
                  , Z = L === void 0 ? "text" : L
                  , F = a.label
                  , A = [];
                F && A.push(this._labelId),
                (m !== void 0 || f) && A.push(this._prefixId),
                (R !== void 0 || i) && A.push(this._suffixId);
                var j = (0,
                t.pi)((0,
                t.pi)({
                    type: this.state.isRevealingPassword ? "text" : Z,
                    id: this._id
                }, (0,
                g.pq)(this.props, g.Gg, ["defaultValue", "type"])), {
                    "aria-labelledby": this.props["aria-labelledby"] || (A.length > 0 ? A.join(" ") : void 0),
                    ref: this._textElement,
                    value: this.value || "",
                    onInput: this._onInputChange,
                    onChange: this._onInputChange,
                    className: this._classNames.field,
                    "aria-label": u,
                    "aria-describedby": this._isDescriptionAvailable ? this._descriptionId : this.props["aria-describedby"],
                    "aria-invalid": h,
                    onFocus: this._onFocus,
                    onBlur: this._onBlur
                })
                  , G = function(Ee) {
                    return r.createElement("input", (0,
                    t.pi)({}, Ee))
                }
                  , le = this.props.onRenderInput || G;
                return le(j, G)
            }
            ,
            d.prototype._validate = function(a) {
                var u = this;
                if (!(this._latestValidateValue === a && ae(this.props))) {
                    this._latestValidateValue = a;
                    var C = this.props.onGetErrorMessage
                      , h = C && C(a || "");
                    if (h !== void 0)
                        if (typeof h == "string" || !("then"in h))
                            this.setState({
                                errorMessage: h
                            }),
                            this._notifyAfterValidate(a, h);
                        else {
                            var f = ++this._lastValidation;
                            h.then(function(i) {
                                f === u._lastValidation && u.setState({
                                    errorMessage: i
                                }),
                                u._notifyAfterValidate(a, i)
                            })
                        }
                    else
                        this._notifyAfterValidate(a, "")
                }
            }
            ,
            d.prototype._notifyAfterValidate = function(a, u) {
                a === this.value && this.props.onNotifyValidationResult && this.props.onNotifyValidationResult(u, a)
            }
            ,
            d.prototype._adjustInputHeight = function() {
                if (this._textElement.current && this.props.autoAdjustHeight && this.props.multiline) {
                    var a = this._textElement.current;
                    a.style.height = "",
                    a.style.height = a.scrollHeight + "px"
                }
            }
            ,
            d.defaultProps = {
                resizable: !0,
                deferredValidationTime: 200,
                validateOnLoad: !0
            },
            d
        }(r.Component);
        function V(l, d) {
            var a = l.value
              , u = a === void 0 ? d.uncontrolledValue : a;
            return typeof u == "number" ? String(u) : u
        }
        function ae(l) {
            return !(l.validateOnFocusIn || l.validateOnFocusOut)
        }
        var X;
        function pe() {
            if (typeof X != "boolean") {
                var l = (0,
                ee.J)();
                if (l != null && l.navigator) {
                    var d = /Edg/.test(l.navigator.userAgent || "");
                    X = !((0,
                    O.f)() || d)
                } else
                    X = !0
            }
            return X
        }
        var b = e(75649)
          , T = {
            root: "ms-TextField",
            description: "ms-TextField-description",
            errorMessage: "ms-TextField-errorMessage",
            field: "ms-TextField-field",
            fieldGroup: "ms-TextField-fieldGroup",
            prefix: "ms-TextField-prefix",
            suffix: "ms-TextField-suffix",
            wrapper: "ms-TextField-wrapper",
            revealButton: "ms-TextField-reveal",
            multiline: "ms-TextField--multiline",
            borderless: "ms-TextField--borderless",
            underlined: "ms-TextField--underlined",
            unresizable: "ms-TextField--unresizable",
            required: "is-required",
            disabled: "is-disabled",
            active: "is-active"
        };
        function N(l) {
            var d = l.underlined
              , a = l.disabled
              , u = l.focused
              , C = l.theme
              , h = C.palette
              , f = C.fonts;
            return function() {
                var i;
                return {
                    root: [d && a && {
                        color: h.neutralTertiary
                    }, d && {
                        fontSize: f.medium.fontSize,
                        marginRight: 8,
                        paddingLeft: 12,
                        paddingRight: 0,
                        lineHeight: "22px",
                        height: 32
                    }, d && u && {
                        selectors: (i = {},
                        i[b.qJ] = {
                            height: 31
                        },
                        i)
                    }]
                }
            }
        }
        function D(l) {
            var d, a, u, C, h, f, i, m, R, L, Z, F, A = l.theme, j = l.className, G = l.disabled, le = l.focused, Ee = l.required, de = l.multiline, Ce = l.hasLabel, Be = l.borderless, Oe = l.underlined, at = l.hasIcon, $e = l.resizable, et = l.hasErrorMessage, ht = l.inputClassName, Ct = l.autoAdjustHeight, dt = l.hasRevealButton, ze = A.semanticColors, pt = A.effects, It = A.fonts, w = (0,
            b.Cn)(T, A), ce = {
                background: ze.disabledBackground,
                color: G ? ze.disabledText : ze.inputPlaceholderText,
                display: "flex",
                alignItems: "center",
                padding: "0 10px",
                lineHeight: 1,
                whiteSpace: "nowrap",
                flexShrink: 0,
                selectors: (d = {},
                d[b.qJ] = {
                    background: "Window",
                    color: G ? "GrayText" : "WindowText"
                },
                d)
            }, B = [{
                color: ze.inputPlaceholderText,
                opacity: 1,
                selectors: (a = {},
                a[b.qJ] = {
                    color: "GrayText"
                },
                a)
            }], _ = {
                color: ze.disabledText,
                selectors: (u = {},
                u[b.qJ] = {
                    color: "GrayText"
                },
                u)
            };
            return {
                root: [w.root, It.medium, Ee && w.required, G && w.disabled, le && w.active, de && w.multiline, Be && w.borderless, Oe && w.underlined, b.Fv, {
                    position: "relative"
                }, j],
                wrapper: [w.wrapper, Oe && [{
                    display: "flex",
                    borderBottom: "1px solid " + (et ? ze.errorText : ze.inputBorder),
                    width: "100%"
                }, G && {
                    borderBottomColor: ze.disabledBackground,
                    selectors: (C = {},
                    C[b.qJ] = (0,
                    t.pi)({
                        borderColor: "GrayText"
                    }, (0,
                    b.xM)()),
                    C)
                }, !G && {
                    selectors: {
                        ":hover": {
                            borderBottomColor: et ? ze.errorText : ze.inputBorderHovered,
                            selectors: (h = {},
                            h[b.qJ] = (0,
                            t.pi)({
                                borderBottomColor: "Highlight"
                            }, (0,
                            b.xM)()),
                            h)
                        }
                    }
                }, le && [{
                    position: "relative"
                }, (0,
                b.$Y)(et ? ze.errorText : ze.inputFocusBorderAlt, 0, "borderBottom")]]],
                fieldGroup: [w.fieldGroup, b.Fv, {
                    border: "1px solid " + ze.inputBorder,
                    borderRadius: pt.roundedCorner2,
                    background: ze.inputBackground,
                    cursor: "text",
                    height: 32,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "stretch",
                    position: "relative"
                }, de && {
                    minHeight: "60px",
                    height: "auto",
                    display: "flex"
                }, !le && !G && {
                    selectors: {
                        ":hover": {
                            borderColor: ze.inputBorderHovered,
                            selectors: (f = {},
                            f[b.qJ] = (0,
                            t.pi)({
                                borderColor: "Highlight"
                            }, (0,
                            b.xM)()),
                            f)
                        }
                    }
                }, le && !Oe && (0,
                b.$Y)(et ? ze.errorText : ze.inputFocusBorderAlt, pt.roundedCorner2), G && {
                    borderColor: ze.disabledBackground,
                    selectors: (i = {},
                    i[b.qJ] = (0,
                    t.pi)({
                        borderColor: "GrayText"
                    }, (0,
                    b.xM)()),
                    i),
                    cursor: "default"
                }, Be && {
                    border: "none"
                }, Be && le && {
                    border: "none",
                    selectors: {
                        ":after": {
                            border: "none"
                        }
                    }
                }, Oe && {
                    flex: "1 1 0px",
                    border: "none",
                    textAlign: "left"
                }, Oe && G && {
                    backgroundColor: "transparent"
                }, et && !Oe && {
                    borderColor: ze.errorText,
                    selectors: {
                        "&:hover": {
                            borderColor: ze.errorText
                        }
                    }
                }, !Ce && Ee && {
                    selectors: (m = {
                        ":before": {
                            content: "'*'",
                            color: ze.errorText,
                            position: "absolute",
                            top: -5,
                            right: -10
                        }
                    },
                    m[b.qJ] = {
                        selectors: {
                            ":before": {
                                color: "WindowText",
                                right: -14
                            }
                        }
                    },
                    m)
                }],
                field: [It.medium, w.field, b.Fv, {
                    borderRadius: 0,
                    border: "none",
                    background: "none",
                    backgroundColor: "transparent",
                    color: ze.inputText,
                    padding: "0 8px",
                    width: "100%",
                    minWidth: 0,
                    textOverflow: "ellipsis",
                    outline: 0,
                    selectors: (R = {
                        "&:active, &:focus, &:hover": {
                            outline: 0
                        },
                        "::-ms-clear": {
                            display: "none"
                        }
                    },
                    R[b.qJ] = {
                        background: "Window",
                        color: G ? "GrayText" : "WindowText"
                    },
                    R)
                }, (0,
                b.Sv)(B), de && !$e && [w.unresizable, {
                    resize: "none"
                }], de && {
                    minHeight: "inherit",
                    lineHeight: 17,
                    flexGrow: 1,
                    paddingTop: 6,
                    paddingBottom: 6,
                    overflow: "auto",
                    width: "100%"
                }, de && Ct && {
                    overflow: "hidden"
                }, at && !dt && {
                    paddingRight: 24
                }, de && at && {
                    paddingRight: 40
                }, G && [{
                    backgroundColor: ze.disabledBackground,
                    color: ze.disabledText,
                    borderColor: ze.disabledBackground
                }, (0,
                b.Sv)(_)], Oe && {
                    textAlign: "left"
                }, le && !Be && {
                    selectors: (L = {},
                    L[b.qJ] = {
                        paddingLeft: 11,
                        paddingRight: 11
                    },
                    L)
                }, le && de && !Be && {
                    selectors: (Z = {},
                    Z[b.qJ] = {
                        paddingTop: 4
                    },
                    Z)
                }, ht],
                icon: [de && {
                    paddingRight: 24,
                    alignItems: "flex-end"
                }, {
                    pointerEvents: "none",
                    position: "absolute",
                    bottom: 6,
                    right: 8,
                    top: "auto",
                    fontSize: b.ld.medium,
                    lineHeight: 18
                }, G && {
                    color: ze.disabledText
                }],
                description: [w.description, {
                    color: ze.bodySubtext,
                    fontSize: It.xSmall.fontSize
                }],
                errorMessage: [w.errorMessage, b.k4.slideDownIn20, It.small, {
                    color: ze.errorText,
                    margin: 0,
                    paddingTop: 5,
                    display: "flex",
                    alignItems: "center"
                }],
                prefix: [w.prefix, ce],
                suffix: [w.suffix, ce],
                revealButton: [w.revealButton, "ms-Button", "ms-Button--icon", (0,
                b.GL)(A, {
                    inset: 1
                }), {
                    height: 30,
                    width: 32,
                    border: "none",
                    padding: "0px 4px",
                    backgroundColor: "transparent",
                    color: ze.link,
                    selectors: {
                        ":hover": {
                            outline: 0,
                            color: ze.primaryButtonBackgroundHovered,
                            backgroundColor: ze.buttonBackgroundHovered,
                            selectors: (F = {},
                            F[b.qJ] = {
                                borderColor: "Highlight",
                                color: "Highlight"
                            },
                            F)
                        },
                        ":focus": {
                            outline: 0
                        }
                    }
                }, at && {
                    marginRight: 28
                }],
                revealSpan: {
                    display: "flex",
                    height: "100%",
                    alignItems: "center"
                },
                revealIcon: {
                    margin: "0px 4px",
                    pointerEvents: "none",
                    bottom: 6,
                    right: 8,
                    top: "auto",
                    fontSize: b.ld.medium,
                    lineHeight: 18
                },
                subComponentStyles: {
                    label: N(l)
                }
            }
        }
        var H = (0,
        c.z)(oe, D, void 0, {
            scope: "TextField"
        })
    }
    ,
    84725: (mt,Ne,e)=>{
        e.d(Ne, {
            Z: ()=>$
        });
        var c = e(1238)
          , t = e(56996)
          , r = e(2784)
          , v = e(81365)
          , Se = e(73823)
          , Q = e(57312)
          , be = e(88642)
          , he = e(65272)
          , ie = e(553)
          , te = (0,
        Q.y)()
          , ue = "Toggle"
          , K = r.forwardRef(function(W, P) {
            var oe = W.as
              , V = oe === void 0 ? "div" : oe
              , ae = W.ariaLabel
              , X = W.checked
              , pe = W.className
              , b = W.defaultChecked
              , T = b === void 0 ? !1 : b
              , N = W.disabled
              , D = W.inlineLabel
              , H = W.label
              , l = W.offAriaLabel
              , d = W.offText
              , a = W.onAriaLabel
              , u = W.onChange
              , C = W.onChanged
              , h = W.onClick
              , f = W.onText
              , i = W.role
              , m = W.styles
              , R = W.theme
              , L = (0,
            v.G)(X, T, r.useCallback(function(et, ht) {
                u == null || u(et, ht),
                C == null || C(ht)
            }, [u, C]))
              , Z = L[0]
              , F = L[1]
              , A = te(m, {
                theme: R,
                className: pe,
                disabled: N,
                checked: Z,
                inlineLabel: D,
                onOffMissing: !f && !d
            })
              , j = Z ? a : l
              , G = (0,
            Se.M)(ue, W.id)
              , le = G + "-label"
              , Ee = G + "-stateText"
              , de = Z ? f : d
              , Ce = (0,
            be.pq)(W, be.Gg, ["defaultChecked"])
              , Be = void 0;
            !ae && !j && (H && (Be = le),
            de && !Be && (Be = Ee));
            var Oe = r.useRef(null);
            (0,
            he.Pr)(Oe),
            re(W, Z, Oe);
            var at = function(et) {
                N || (F(!Z, et),
                h && h(et))
            }
              , $e = {
                root: {
                    className: A.root,
                    hidden: Ce.hidden
                },
                label: {
                    children: H,
                    className: A.label,
                    htmlFor: G,
                    id: le
                },
                container: {
                    className: A.container
                },
                pill: (0,
                t.pi)((0,
                t.pi)({}, Ce), {
                    "aria-disabled": N,
                    "aria-checked": Z,
                    "aria-label": ae || j,
                    "aria-labelledby": Be,
                    className: A.pill,
                    "data-is-focusable": !0,
                    "data-ktp-target": !0,
                    disabled: N,
                    id: G,
                    onClick: at,
                    ref: Oe,
                    role: i || "switch",
                    type: "button"
                }),
                thumb: {
                    className: A.thumb
                },
                stateText: {
                    children: de,
                    className: A.text,
                    htmlFor: G,
                    id: Ee
                }
            };
            return r.createElement(V, (0,
            t.pi)({
                ref: P
            }, $e.root), H && r.createElement(ie._, (0,
            t.pi)({}, $e.label)), r.createElement("div", (0,
            t.pi)({}, $e.container), r.createElement("button", (0,
            t.pi)({}, $e.pill), r.createElement("span", (0,
            t.pi)({}, $e.thumb))), (Z && f || d) && r.createElement(ie._, (0,
            t.pi)({}, $e.stateText))))
        });
        K.displayName = ue + "Base";
        var re = function(W, P, oe) {
            r.useImperativeHandle(W.componentRef, function() {
                return {
                    get checked() {
                        return !!P
                    },
                    focus: function() {
                        oe.current && oe.current.focus()
                    }
                }
            }, [P, oe])
        }
          , g = e(75649)
          , ee = 40
          , O = 20
          , U = 12
          , J = function(W) {
            var P, oe, V, ae, X, pe, b, T = W.theme, N = W.className, D = W.disabled, H = W.checked, l = W.inlineLabel, d = W.onOffMissing, a = T.semanticColors, u = T.palette, C = a.bodyBackground, h = a.inputBackgroundChecked, f = a.inputBackgroundCheckedHovered, i = u.neutralDark, m = a.disabledBodySubtext, R = a.smallInputBorder, L = a.inputForegroundChecked, Z = a.disabledBodySubtext, F = a.disabledBackground, A = a.smallInputBorder, j = a.inputBorderHovered, G = a.disabledBodySubtext, le = a.disabledText;
            return {
                root: ["ms-Toggle", H && "is-checked", !D && "is-enabled", D && "is-disabled", T.fonts.medium, {
                    marginBottom: "8px"
                }, l && {
                    display: "flex",
                    alignItems: "center"
                }, N],
                label: ["ms-Toggle-label", {
                    display: "inline-block"
                }, D && {
                    color: le,
                    selectors: (P = {},
                    P[g.qJ] = {
                        color: "GrayText"
                    },
                    P)
                }, l && !d && {
                    marginRight: 16
                }, d && l && {
                    order: 1,
                    marginLeft: 16
                }, l && {
                    wordBreak: "break-word"
                }],
                container: ["ms-Toggle-innerContainer", {
                    display: "flex",
                    position: "relative"
                }],
                pill: ["ms-Toggle-background", (0,
                g.GL)(T, {
                    inset: -3
                }), {
                    fontSize: "20px",
                    boxSizing: "border-box",
                    width: ee,
                    height: O,
                    borderRadius: O / 2,
                    transition: "all 0.1s ease",
                    border: "1px solid " + A,
                    background: C,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 3px",
                    overflow: "visible"
                }, !D && [!H && {
                    selectors: {
                        ":hover": [{
                            borderColor: j
                        }],
                        ":hover .ms-Toggle-thumb": [{
                            backgroundColor: i,
                            selectors: (oe = {},
                            oe[g.qJ] = {
                                borderColor: "Highlight"
                            },
                            oe)
                        }]
                    }
                }, H && [{
                    background: h,
                    borderColor: "transparent",
                    justifyContent: "flex-end"
                }, {
                    selectors: (V = {
                        ":hover": [{
                            backgroundColor: f,
                            borderColor: "transparent",
                            selectors: (ae = {},
                            ae[g.qJ] = {
                                backgroundColor: "Highlight"
                            },
                            ae)
                        }]
                    },
                    V[g.qJ] = (0,
                    t.pi)({
                        backgroundColor: "Highlight"
                    }, (0,
                    g.xM)()),
                    V)
                }]], D && [{
                    cursor: "default"
                }, !H && [{
                    borderColor: G
                }], H && [{
                    backgroundColor: m,
                    borderColor: "transparent",
                    justifyContent: "flex-end"
                }]], !D && {
                    selectors: {
                        "&:hover": {
                            selectors: (X = {},
                            X[g.qJ] = {
                                borderColor: "Highlight"
                            },
                            X)
                        }
                    }
                }],
                thumb: ["ms-Toggle-thumb", {
                    display: "block",
                    width: U,
                    height: U,
                    borderRadius: "50%",
                    transition: "all 0.1s ease",
                    backgroundColor: R,
                    borderColor: "transparent",
                    borderWidth: U / 2,
                    borderStyle: "solid",
                    boxSizing: "border-box"
                }, !D && H && [{
                    backgroundColor: L,
                    selectors: (pe = {},
                    pe[g.qJ] = {
                        backgroundColor: "Window",
                        borderColor: "Window"
                    },
                    pe)
                }], D && [!H && [{
                    backgroundColor: Z
                }], H && [{
                    backgroundColor: F
                }]]],
                text: ["ms-Toggle-stateText", {
                    selectors: {
                        "&&": {
                            padding: "0",
                            margin: "0 8px",
                            userSelect: "none",
                            fontWeight: g.lq.regular
                        }
                    }
                }, D && {
                    selectors: {
                        "&&": {
                            color: le,
                            selectors: (b = {},
                            b[g.qJ] = {
                                color: "GrayText"
                            },
                            b)
                        }
                    }
                }]
            }
        }
          , $ = (0,
        c.z)(K, J, void 0, {
            scope: "Toggle"
        })
    }
    ,
    1502: (mt,Ne,e)=>{
        e.d(Ne, {
            G: ()=>pe
        });
        var c = e(1238), t = e(56996), r = e(2784), v = e(75649), Se = e(57312), Q = e(35577), be = e(79933), he = e(2899), ie = e(18690), te = e(85758), ue = e(61676), K = e(86316), re = e(88642), g = e(56878), ee = e(98663), O = e(53841), U = (0,
        Se.y)(), J = function(b) {
            (0,
            t.ZT)(T, b);
            function T() {
                var N = b !== null && b.apply(this, arguments) || this;
                return N._onRenderContent = function(D) {
                    return typeof D.content == "string" ? r.createElement("p", {
                        className: N._classNames.subText
                    }, D.content) : r.createElement("div", {
                        className: N._classNames.subText
                    }, D.content)
                }
                ,
                N
            }
            return T.prototype.render = function() {
                var N = this.props
                  , D = N.className
                  , H = N.calloutProps
                  , l = N.directionalHint
                  , d = N.directionalHintForRTL
                  , a = N.styles
                  , u = N.id
                  , C = N.maxWidth
                  , h = N.onRenderContent
                  , f = h === void 0 ? this._onRenderContent : h
                  , i = N.targetElement
                  , m = N.theme;
                return this._classNames = U(a, {
                    theme: m,
                    className: D || H && H.className,
                    beakWidth: H && H.isBeakVisible ? H.beakWidth : 0,
                    gapSpace: H && H.gapSpace,
                    maxWidth: C
                }),
                r.createElement(ee.U, (0,
                t.pi)({
                    target: i,
                    directionalHint: l,
                    directionalHintForRTL: d
                }, H, (0,
                re.pq)(this.props, re.n7, ["id"]), {
                    className: this._classNames.root
                }), r.createElement("div", {
                    className: this._classNames.content,
                    id: u,
                    onFocus: this.props.onFocus,
                    onMouseEnter: this.props.onMouseEnter,
                    onMouseLeave: this.props.onMouseLeave
                }, f(this.props, this._onRenderContent)))
            }
            ,
            T.defaultProps = {
                directionalHint: O.b.topCenter,
                maxWidth: "364px",
                calloutProps: {
                    isBeakVisible: !0,
                    beakWidth: 16,
                    gapSpace: 0,
                    setInitialFocus: !0,
                    doNotLayer: !1
                }
            },
            T
        }(r.Component), $ = function(b) {
            var T = b.className
              , N = b.beakWidth
              , D = N === void 0 ? 16 : N
              , H = b.gapSpace
              , l = H === void 0 ? 0 : H
              , d = b.maxWidth
              , a = b.theme
              , u = a.semanticColors
              , C = a.fonts
              , h = a.effects
              , f = -(Math.sqrt(D * D / 2) + l) + 1 / window.devicePixelRatio;
            return {
                root: ["ms-Tooltip", a.fonts.medium, v.k4.fadeIn200, {
                    background: u.menuBackground,
                    boxShadow: h.elevation8,
                    padding: "8px",
                    maxWidth: d,
                    selectors: {
                        ":after": {
                            content: "''",
                            position: "absolute",
                            bottom: f,
                            left: f,
                            right: f,
                            top: f,
                            zIndex: 0
                        }
                    }
                }, T],
                content: ["ms-Tooltip-content", C.small, {
                    position: "relative",
                    zIndex: 1,
                    color: u.menuItemText,
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    overflow: "hidden"
                }],
                subText: ["ms-Tooltip-subtext", {
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    color: "inherit",
                    margin: 0
                }]
            }
        }, W = (0,
        c.z)(J, $, void 0, {
            scope: "Tooltip"
        }), P;
        (function(b) {
            b[b.zero = 0] = "zero",
            b[b.medium = 1] = "medium",
            b[b.long = 2] = "long"
        }
        )(P || (P = {}));
        var oe = (0,
        Se.y)()
          , V = function(b) {
            (0,
            t.ZT)(T, b);
            function T(N) {
                var D = b.call(this, N) || this;
                return D._tooltipHost = r.createRef(),
                D._defaultTooltipId = (0,
                Q.z)("tooltip"),
                D.show = function() {
                    D._toggleTooltip(!0)
                }
                ,
                D.dismiss = function() {
                    D._hideTooltip()
                }
                ,
                D._getTargetElement = function() {
                    if (!!D._tooltipHost.current) {
                        var H = D.props.overflowMode;
                        if (H !== void 0)
                            switch (H) {
                            case g.y.Parent:
                                return D._tooltipHost.current.parentElement;
                            case g.y.Self:
                                return D._tooltipHost.current
                            }
                        return D._tooltipHost.current
                    }
                }
                ,
                D._onTooltipFocus = function(H) {
                    if (D._ignoreNextFocusEvent) {
                        D._ignoreNextFocusEvent = !1;
                        return
                    }
                    D._onTooltipMouseEnter(H)
                }
                ,
                D._onTooltipContentFocus = function(H) {
                    T._currentVisibleTooltip && T._currentVisibleTooltip !== D && T._currentVisibleTooltip.dismiss(),
                    T._currentVisibleTooltip = D,
                    D._clearDismissTimer(),
                    D._clearOpenTimer()
                }
                ,
                D._onTooltipBlur = function(H) {
                    D._ignoreNextFocusEvent = (document == null ? void 0 : document.activeElement) === H.target,
                    D._dismissTimerId = D._async.setTimeout(function() {
                        D._hideTooltip()
                    }, 0)
                }
                ,
                D._onTooltipMouseEnter = function(H) {
                    var l = D.props
                      , d = l.overflowMode
                      , a = l.delay;
                    if (T._currentVisibleTooltip && T._currentVisibleTooltip !== D && T._currentVisibleTooltip.dismiss(),
                    T._currentVisibleTooltip = D,
                    d !== void 0) {
                        var u = D._getTargetElement();
                        if (u && !(0,
                        be.zS)(u))
                            return
                    }
                    if (!(H.target && (0,
                    he.w)(H.target, D._getTargetElement())))
                        if (D._clearDismissTimer(),
                        D._clearOpenTimer(),
                        a !== P.zero) {
                            var C = D._getDelayTime(a);
                            D._openTimerId = D._async.setTimeout(function() {
                                D._toggleTooltip(!0)
                            }, C)
                        } else
                            D._toggleTooltip(!0)
                }
                ,
                D._onTooltipMouseLeave = function(H) {
                    var l = D.props.closeDelay;
                    D._clearDismissTimer(),
                    D._clearOpenTimer(),
                    l ? D._dismissTimerId = D._async.setTimeout(function() {
                        D._toggleTooltip(!1)
                    }, l) : D._toggleTooltip(!1),
                    T._currentVisibleTooltip === D && (T._currentVisibleTooltip = void 0)
                }
                ,
                D._onTooltipKeyDown = function(H) {
                    (H.which === ie.m.escape || H.ctrlKey) && D.state.isTooltipVisible && (D._hideTooltip(),
                    H.stopPropagation())
                }
                ,
                D._clearDismissTimer = function() {
                    D._async.clearTimeout(D._dismissTimerId)
                }
                ,
                D._clearOpenTimer = function() {
                    D._async.clearTimeout(D._openTimerId)
                }
                ,
                D._hideTooltip = function() {
                    D._clearOpenTimer(),
                    D._clearDismissTimer(),
                    D._toggleTooltip(!1)
                }
                ,
                D._toggleTooltip = function(H) {
                    D.state.isTooltipVisible !== H && D.setState({
                        isTooltipVisible: H
                    }, function() {
                        return D.props.onTooltipToggle && D.props.onTooltipToggle(H)
                    })
                }
                ,
                D._getDelayTime = function(H) {
                    switch (H) {
                    case P.medium:
                        return 300;
                    case P.long:
                        return 500;
                    default:
                        return 0
                    }
                }
                ,
                (0,
                te.l)(D),
                D.state = {
                    isAriaPlaceholderRendered: !1,
                    isTooltipVisible: !1
                },
                D._async = new ue.e(D),
                D
            }
            return T.prototype.render = function() {
                var N = this.props
                  , D = N.calloutProps
                  , H = N.children
                  , l = N.content
                  , d = N.directionalHint
                  , a = N.directionalHintForRTL
                  , u = N.hostClassName
                  , C = N.id
                  , h = N.setAriaDescribedBy
                  , f = h === void 0 ? !0 : h
                  , i = N.tooltipProps
                  , m = N.styles
                  , R = N.theme;
                this._classNames = oe(m, {
                    theme: R,
                    className: u
                });
                var L = this.state.isTooltipVisible
                  , Z = C || this._defaultTooltipId
                  , F = (0,
                t.pi)((0,
                t.pi)({
                    id: Z + "--tooltip",
                    content: l,
                    targetElement: this._getTargetElement(),
                    directionalHint: d,
                    directionalHintForRTL: a,
                    calloutProps: (0,
                    K.f0)({}, D, {
                        onDismiss: this._hideTooltip,
                        onFocus: this._onTooltipContentFocus,
                        onMouseEnter: this._onTooltipMouseEnter,
                        onMouseLeave: this._onTooltipMouseLeave
                    }),
                    onMouseEnter: this._onTooltipMouseEnter,
                    onMouseLeave: this._onTooltipMouseLeave
                }, (0,
                re.pq)(this.props, re.n7, ["id"])), i)
                  , A = i != null && i.onRenderContent ? i.onRenderContent(F, function(le) {
                    return le != null && le.content ? r.createElement(r.Fragment, null, le.content) : null
                }) : l
                  , j = L && !!A
                  , G = f && L && !!A ? Z : void 0;
                return r.createElement("div", (0,
                t.pi)({
                    className: this._classNames.root,
                    ref: this._tooltipHost
                }, {
                    onFocusCapture: this._onTooltipFocus
                }, {
                    onBlurCapture: this._onTooltipBlur
                }, {
                    onMouseEnter: this._onTooltipMouseEnter,
                    onMouseLeave: this._onTooltipMouseLeave,
                    onKeyDown: this._onTooltipKeyDown,
                    role: "none",
                    "aria-describedby": G
                }), H, j && r.createElement(W, (0,
                t.pi)({}, F)), r.createElement("div", {
                    hidden: !0,
                    id: Z,
                    style: v.ul
                }, A))
            }
            ,
            T.prototype.componentWillUnmount = function() {
                T._currentVisibleTooltip && T._currentVisibleTooltip === this && (T._currentVisibleTooltip = void 0),
                this._async.dispose()
            }
            ,
            T.defaultProps = {
                delay: P.medium
            },
            T
        }(r.Component)
          , ae = {
            root: "ms-TooltipHost",
            ariaPlaceholder: "ms-TooltipHost-aria-placeholder"
        }
          , X = function(b) {
            var T = b.className
              , N = b.theme
              , D = (0,
            v.Cn)(ae, N);
            return {
                root: [D.root, {
                    display: "inline"
                }, T]
            }
        }
          , pe = (0,
        c.z)(V, X, void 0, {
            scope: "TooltipHost"
        })
    }
    ,
    56878: (mt,Ne,e)=>{
        e.d(Ne, {
            y: ()=>c
        });
        var c;
        (function(t) {
            t[t.Parent = 0] = "Parent",
            t[t.Self = 1] = "Self"
        }
        )(c || (c = {}))
    }
    ,
    83383: (mt,Ne,e)=>{
        e.d(Ne, {
            f: ()=>f
        });
        var c = e(2784)
          , t = e(51370)
          , r = e(57412)
          , v = e(78458)
          , Se = e(98925)
          , Q = c.createContext(void 0);
        function be() {
            return (0,
            v.D)(["theme"]).theme
        }
        var he = function() {
            var i = (0,
            c.useContext)(Q)
              , m = be();
            return i || m || (0,
            Se.j)({})
        }
          , ie = e(35577)
          , te = e(27256)
          , ue = e(8403)
          , K = e(89283)
          , re = e(61679)
          , g = 0
          , ee = {
            reset: function() {
                te.Y.getInstance().onReset(function() {
                    return g++
                })
            },
            getId: function() {
                return g
            },
            renderStyles: function(i, m) {
                return (0,
                ue.I)(Array.isArray(i) ? i : [i], m)
            },
            renderFontFace: function(i, m) {
                return (0,
                K.j)(i)
            },
            renderKeyframes: function(i) {
                return (0,
                re.F)(i)
            }
        }
          , O = function(i, m) {
            var R, L, Z, F = m[0], A = m[1], j = m[2];
            return (Z = (L = (R = i.get(F)) === null || R === void 0 ? void 0 : R.get(A)) === null || L === void 0 ? void 0 : L.get(j)) === null || Z === void 0 ? void 0 : Z.classMap
        }
          , U = function(i, m, R) {
            var L, Z, F = m[0], A = m[1], j = m[2], G = (L = i.get(F)) !== null && L !== void 0 ? L : new Map;
            i.set(F, G);
            var le = (Z = G.get(A)) !== null && Z !== void 0 ? Z : new Map;
            G.set(A, le),
            le.set(j, {
                classMap: R,
                refCount: 0
            })
        };
        function J(i, m) {
            var R, L, Z = m[0], F = m[1], A = m[2], j = (L = (R = i.get(Z)) === null || R === void 0 ? void 0 : R.get(F)) === null || L === void 0 ? void 0 : L.get(A);
            j && j.refCount++
        }
        function $(i, m) {
            var R, L, Z, F, A, j, G, le, Ee = m[0], de = m[1], Ce = m[2], Be = (L = (R = i.get(Ee)) === null || R === void 0 ? void 0 : R.get(de)) === null || L === void 0 ? void 0 : L.get(Ce);
            Be && (Be.refCount--,
            Be.refCount === 0 && ((F = (Z = i.get(Ee)) === null || Z === void 0 ? void 0 : Z.get(de)) === null || F === void 0 || F.delete(Ce),
            ((j = (A = i.get(Ee)) === null || A === void 0 ? void 0 : A.get(de)) === null || j === void 0 ? void 0 : j.size) === 0 && ((G = i.get(Ee)) === null || G === void 0 || G.delete(de),
            ((le = i.get(Ee)) === null || le === void 0 ? void 0 : le.size) === 0 && i.delete(Ee))))
        }
        function W(i) {
            var m = new Map
              , R = new Set
              , L = function(Z) {
                var F = Z.currentTarget
                  , A = F.__id__;
                m.delete(A),
                F.removeEventListener("unload", L),
                R.delete(A)
            };
            return function(Z) {
                Z === void 0 && (Z = {});
                var F = Z.theme, A, j = (0,
                r.zY)();
                j && (j.__id__ = j.__id__ || (0,
                ie.z)(),
                A = j.__id__,
                R.has(A) || (R.add(A),
                j.addEventListener("unload", L)));
                var G = he();
                F = F || G;
                var le = ee
                  , Ee = le.getId()
                  , de = [A, Ee, F]
                  , Ce = O(m, de);
                if ((0,
                c.useEffect)(function() {
                    return J(m, [A, Ee, F]),
                    function() {
                        return $(m, [A, Ee, F])
                    }
                }, [A, Ee, F]),
                !Ce) {
                    var Be = P(i) ? i(F) : i;
                    Ce = ee.renderStyles(Be, {
                        targetWindow: j,
                        rtl: !!F.rtl
                    }),
                    U(m, de, Ce)
                }
                return Ce
            }
        }
        function P(i) {
            return typeof i == "function"
        }
        var oe = W(function(i) {
            var m = i.semanticColors
              , R = i.fonts;
            return {
                body: [{
                    color: m.bodyText,
                    background: m.bodyBackground,
                    fontFamily: R.medium.fontFamily,
                    fontWeight: R.medium.fontWeight,
                    fontSize: R.medium.fontSize,
                    MozOsxFontSmoothing: R.medium.MozOsxFontSmoothing,
                    WebkitFontSmoothing: R.medium.WebkitFontSmoothing
                }]
            }
        });
        function V(i, m) {
            var R, L = i.applyTo, Z = L === "body", F = (R = (0,
            r.ky)()) === null || R === void 0 ? void 0 : R.body;
            c.useEffect(function() {
                if (!(!Z || !F)) {
                    for (var A = 0, j = m; A < j.length; A++) {
                        var G = j[A];
                        G && F.classList.add(G)
                    }
                    return function() {
                        if (!(!Z || !F))
                            for (var le = 0, Ee = m; le < Ee.length; le++) {
                                var de = Ee[le];
                                de && F.classList.remove(de)
                            }
                    }
                }
            }, [Z, F, m])
        }
        function ae(i) {
            var m = oe(i)
              , R = i.className
              , L = i.applyTo;
            V(i, [m.root, m.body]),
            i.className = (0,
            t.i)(R, m.root, L === "element" && m.body)
        }
        var X = e(56996)
          , pe = e(28481)
          , b = e(86316)
          , T = e(80795)
          , N = e(20344)
          , D = function(i) {
            var m = i.customizerContext
              , R = i.ref
              , L = i.theme
              , Z = i.as || "div"
              , F = typeof i.as == "string" ? (0,
            pe.n)(i.as, i) : i.as === c.Fragment ? {
                children: i.children
            } : (0,
            b.CE)(i, ["as"]);
            return c.createElement(Q.Provider, {
                value: L
            }, c.createElement(T.i.Provider, {
                value: m
            }, c.createElement(N.Y, {
                providerRef: R
            }, c.createElement(Z, (0,
            X.pi)({}, F)))))
        }
          , H = e(96812)
          , l = new Map
          , d = function() {
            for (var i = [], m = 0; m < arguments.length; m++)
                i[m] = arguments[m];
            for (var R = [], L = 0, Z = i; L < Z.length; L++) {
                var F = Z[L];
                if (F) {
                    var A = F.id || l.get(F);
                    A || (A = (0,
                    ie.z)(""),
                    l.set(F, A)),
                    R.push(A)
                }
            }
            return R.join("-")
        }
          , a = function(i) {
            var m = i.theme
              , R = he()
              , L = i.theme = c.useMemo(function() {
                var Z = (0,
                H.I)(R, m);
                return Z.id = d(R, m),
                Z
            }, [R, m]);
            i.customizerContext = c.useMemo(function() {
                return {
                    customizations: {
                        inCustomizerContext: !0,
                        settings: {
                            theme: L
                        },
                        scopedSettings: L.components || {}
                    }
                }
            }, [L]),
            i.theme.rtl !== R.rtl && (i.dir = i.theme.rtl ? "rtl" : "ltr")
        }
          , u = e(51169)
          , C = function(i, m) {
            var R = (0,
            u.j)(m, i);
            return a(R),
            {
                state: R,
                render: D
            }
        }
          , h = e(87891)
          , f = c.forwardRef(function(i, m) {
            var R = (0,
            h.r)(m, c.useRef(null))
              , L = C(i, {
                ref: R,
                as: "div",
                applyTo: "element"
            })
              , Z = L.render
              , F = L.state;
            return ae(F),
            Z(F)
        });
        f.displayName = "ThemeProvider"
    }
    ,
    42958: (mt,Ne,e)=>{
        e.d(Ne, {
            eD: ()=>he,
            K7: ()=>g,
            tc: ()=>U,
            Ae: ()=>ee
        });
        var c = e(56996), t = e(2784), r = e(72998), v = function(J) {
            (0,
            c.ZT)($, J);
            function $(W) {
                var P = J.call(this, W) || this;
                return P._updateComposedComponentRef = P._updateComposedComponentRef.bind(P),
                P
            }
            return $.prototype._updateComposedComponentRef = function(W) {
                this._composedComponentInstance = W,
                W ? this._hoisted = (0,
                r.W)(this, W) : this._hoisted && (0,
                r.e)(this, this._hoisted)
            }
            ,
            $
        }(t.Component), Se = e(47321), Q = e(21250), be = e(57412), he;
        (function(J) {
            J[J.small = 0] = "small",
            J[J.medium = 1] = "medium",
            J[J.large = 2] = "large",
            J[J.xLarge = 3] = "xLarge",
            J[J.xxLarge = 4] = "xxLarge",
            J[J.xxxLarge = 5] = "xxxLarge",
            J[J.unknown = 999] = "unknown"
        }
        )(he || (he = {}));
        var ie = [479, 639, 1023, 1365, 1919, 99999999], te, ue;
        function K(J) {
            te = J
        }
        function re(J) {
            var $ = getWindow(J);
            $ && U($)
        }
        function g() {
            var J;
            return (J = te != null ? te : ue) !== null && J !== void 0 ? J : he.large
        }
        function ee(J) {
            var $, W = ($ = function(P) {
                (0,
                c.ZT)(oe, P);
                function oe(V) {
                    var ae = P.call(this, V) || this;
                    return ae._onResize = function() {
                        var X = U(ae.context.window);
                        X !== ae.state.responsiveMode && ae.setState({
                            responsiveMode: X
                        })
                    }
                    ,
                    ae._events = new Se.r(ae),
                    ae._updateComposedComponentRef = ae._updateComposedComponentRef.bind(ae),
                    ae.state = {
                        responsiveMode: g()
                    },
                    ae
                }
                return oe.prototype.componentDidMount = function() {
                    this._events.on(this.context.window, "resize", this._onResize),
                    this._onResize()
                }
                ,
                oe.prototype.componentWillUnmount = function() {
                    this._events.dispose()
                }
                ,
                oe.prototype.render = function() {
                    var V = this.state.responsiveMode;
                    return V === he.unknown ? null : t.createElement(J, (0,
                    c.pi)({
                        ref: this._updateComposedComponentRef,
                        responsiveMode: V
                    }, this.props))
                }
                ,
                oe
            }(v),
            $.contextType = be.Hn,
            $);
            return (0,
            Q.f)(J, W)
        }
        function O(J) {
            try {
                return J.document.documentElement.clientWidth
            } catch ($) {
                return J.innerWidth
            }
        }
        function U(J) {
            var $ = he.small;
            if (J) {
                try {
                    for (; O(J) > ie[$]; )
                        $++
                } catch (W) {
                    $ = g()
                }
                ue = $
            } else if (te !== void 0)
                $ = te;
            else
                throw new Error("Content was rendered in a server environment without providing a default responsive mode. Call setResponsiveMode to define what the responsive mode is.");
            return $
        }
    }
    ,
    96441: (mt,Ne,e)=>{
        e.d(Ne, {
            q: ()=>Q
        });
        var c = e(2784)
          , t = e(18630)
          , r = e(36844)
          , v = e(42958)
          , Se = e(57412)
          , Q = function(be, he) {
            var ie = c.useState((0,
            v.K7)())
              , te = ie[0]
              , ue = ie[1]
              , K = c.useCallback(function() {
                var g = (0,
                v.tc)((0,
                t.J)(be.current));
                te !== g && ue(g)
            }, [be, te])
              , re = (0,
            Se.zY)();
            return (0,
            r.d)(re, "resize", K),
            c.useEffect(function() {
                he === void 0 && K()
            }, [he]),
            he != null ? he : te
        }
    }
    ,
    10627: (mt,Ne,e)=>{
        e.d(Ne, {
            z: ()=>c
        });
        var c;
        (function(r) {
            r[r.top = 1] = "top",
            r[r.bottom = -1] = "bottom",
            r[r.left = 2] = "left",
            r[r.right = -2] = "right"
        }
        )(c || (c = {}));
        var t;
        (function(r) {
            r[r.top = 0] = "top",
            r[r.bottom = 1] = "bottom",
            r[r.start = 2] = "start",
            r[r.end = 3] = "end"
        }
        )(t || (t = {}))
    }
    ,
    56996: (mt,Ne,e)=>{
        e.d(Ne, {
            ZT: ()=>t,
            _T: ()=>v,
            ev: ()=>W,
            gn: ()=>Se,
            pi: ()=>r
        });
        var c = function(l, d) {
            return c = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(a, u) {
                a.__proto__ = u
            }
            || function(a, u) {
                for (var C in u)
                    Object.prototype.hasOwnProperty.call(u, C) && (a[C] = u[C])
            }
            ,
            c(l, d)
        };
        function t(l, d) {
            if (typeof d != "function" && d !== null)
                throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
            c(l, d);
            function a() {
                this.constructor = l
            }
            l.prototype = d === null ? Object.create(d) : (a.prototype = d.prototype,
            new a)
        }
        var r = function() {
            return r = Object.assign || function(d) {
                for (var a, u = 1, C = arguments.length; u < C; u++) {
                    a = arguments[u];
                    for (var h in a)
                        Object.prototype.hasOwnProperty.call(a, h) && (d[h] = a[h])
                }
                return d
            }
            ,
            r.apply(this, arguments)
        };
        function v(l, d) {
            var a = {};
            for (var u in l)
                Object.prototype.hasOwnProperty.call(l, u) && d.indexOf(u) < 0 && (a[u] = l[u]);
            if (l != null && typeof Object.getOwnPropertySymbols == "function")
                for (var C = 0, u = Object.getOwnPropertySymbols(l); C < u.length; C++)
                    d.indexOf(u[C]) < 0 && Object.prototype.propertyIsEnumerable.call(l, u[C]) && (a[u[C]] = l[u[C]]);
            return a
        }
        function Se(l, d, a, u) {
            var C = arguments.length, h = C < 3 ? d : u === null ? u = Object.getOwnPropertyDescriptor(d, a) : u, f;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                h = Reflect.decorate(l, d, a, u);
            else
                for (var i = l.length - 1; i >= 0; i--)
                    (f = l[i]) && (h = (C < 3 ? f(h) : C > 3 ? f(d, a, h) : f(d, a)) || h);
            return C > 3 && h && Object.defineProperty(d, a, h),
            h
        }
        function Q(l, d) {
            return function(a, u) {
                d(a, u, l)
            }
        }
        function be(l, d, a, u, C, h) {
            function f(Ee) {
                if (Ee !== void 0 && typeof Ee != "function")
                    throw new TypeError("Function expected");
                return Ee
            }
            for (var i = u.kind, m = i === "getter" ? "get" : i === "setter" ? "set" : "value", R = !d && l ? u.static ? l : l.prototype : null, L = d || (R ? Object.getOwnPropertyDescriptor(R, u.name) : {}), Z, F = !1, A = a.length - 1; A >= 0; A--) {
                var j = {};
                for (var G in u)
                    j[G] = G === "access" ? {} : u[G];
                for (var G in u.access)
                    j.access[G] = u.access[G];
                j.addInitializer = function(Ee) {
                    if (F)
                        throw new TypeError("Cannot add initializers after decoration has completed");
                    h.push(f(Ee || null))
                }
                ;
                var le = (0,
                a[A])(i === "accessor" ? {
                    get: L.get,
                    set: L.set
                } : L[m], j);
                if (i === "accessor") {
                    if (le === void 0)
                        continue;
                    if (le === null || typeof le != "object")
                        throw new TypeError("Object expected");
                    (Z = f(le.get)) && (L.get = Z),
                    (Z = f(le.set)) && (L.set = Z),
                    (Z = f(le.init)) && C.push(Z)
                } else
                    (Z = f(le)) && (i === "field" ? C.push(Z) : L[m] = Z)
            }
            R && Object.defineProperty(R, u.name, L),
            F = !0
        }
        function he(l, d, a) {
            for (var u = arguments.length > 2, C = 0; C < d.length; C++)
                a = u ? d[C].call(l, a) : d[C].call(l);
            return u ? a : void 0
        }
        function ie(l) {
            return typeof l == "symbol" ? l : "".concat(l)
        }
        function te(l, d, a) {
            return typeof d == "symbol" && (d = d.description ? "[".concat(d.description, "]") : ""),
            Object.defineProperty(l, "name", {
                configurable: !0,
                value: a ? "".concat(a, " ", d) : d
            })
        }
        function ue(l, d) {
            if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
                return Reflect.metadata(l, d)
        }
        function K(l, d, a, u) {
            function C(h) {
                return h instanceof a ? h : new a(function(f) {
                    f(h)
                }
                )
            }
            return new (a || (a = Promise))(function(h, f) {
                function i(L) {
                    try {
                        R(u.next(L))
                    } catch (Z) {
                        f(Z)
                    }
                }
                function m(L) {
                    try {
                        R(u.throw(L))
                    } catch (Z) {
                        f(Z)
                    }
                }
                function R(L) {
                    L.done ? h(L.value) : C(L.value).then(i, m)
                }
                R((u = u.apply(l, d || [])).next())
            }
            )
        }
        function re(l, d) {
            var a = {
                label: 0,
                sent: function() {
                    if (h[0] & 1)
                        throw h[1];
                    return h[1]
                },
                trys: [],
                ops: []
            }, u, C, h, f;
            return f = {
                next: i(0),
                throw: i(1),
                return: i(2)
            },
            typeof Symbol == "function" && (f[Symbol.iterator] = function() {
                return this
            }
            ),
            f;
            function i(R) {
                return function(L) {
                    return m([R, L])
                }
            }
            function m(R) {
                if (u)
                    throw new TypeError("Generator is already executing.");
                for (; f && (f = 0,
                R[0] && (a = 0)),
                a; )
                    try {
                        if (u = 1,
                        C && (h = R[0] & 2 ? C.return : R[0] ? C.throw || ((h = C.return) && h.call(C),
                        0) : C.next) && !(h = h.call(C, R[1])).done)
                            return h;
                        switch (C = 0,
                        h && (R = [R[0] & 2, h.value]),
                        R[0]) {
                        case 0:
                        case 1:
                            h = R;
                            break;
                        case 4:
                            return a.label++,
                            {
                                value: R[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                            C = R[1],
                            R = [0];
                            continue;
                        case 7:
                            R = a.ops.pop(),
                            a.trys.pop();
                            continue;
                        default:
                            if (h = a.trys,
                            !(h = h.length > 0 && h[h.length - 1]) && (R[0] === 6 || R[0] === 2)) {
                                a = 0;
                                continue
                            }
                            if (R[0] === 3 && (!h || R[1] > h[0] && R[1] < h[3])) {
                                a.label = R[1];
                                break
                            }
                            if (R[0] === 6 && a.label < h[1]) {
                                a.label = h[1],
                                h = R;
                                break
                            }
                            if (h && a.label < h[2]) {
                                a.label = h[2],
                                a.ops.push(R);
                                break
                            }
                            h[2] && a.ops.pop(),
                            a.trys.pop();
                            continue
                        }
                        R = d.call(l, a)
                    } catch (L) {
                        R = [6, L],
                        C = 0
                    } finally {
                        u = h = 0
                    }
                if (R[0] & 5)
                    throw R[1];
                return {
                    value: R[0] ? R[1] : void 0,
                    done: !0
                }
            }
        }
        var g = Object.create ? function(l, d, a, u) {
            u === void 0 && (u = a);
            var C = Object.getOwnPropertyDescriptor(d, a);
            (!C || ("get"in C ? !d.__esModule : C.writable || C.configurable)) && (C = {
                enumerable: !0,
                get: function() {
                    return d[a]
                }
            }),
            Object.defineProperty(l, u, C)
        }
        : function(l, d, a, u) {
            u === void 0 && (u = a),
            l[u] = d[a]
        }
        ;
        function ee(l, d) {
            for (var a in l)
                a !== "default" && !Object.prototype.hasOwnProperty.call(d, a) && g(d, l, a)
        }
        function O(l) {
            var d = typeof Symbol == "function" && Symbol.iterator
              , a = d && l[d]
              , u = 0;
            if (a)
                return a.call(l);
            if (l && typeof l.length == "number")
                return {
                    next: function() {
                        return l && u >= l.length && (l = void 0),
                        {
                            value: l && l[u++],
                            done: !l
                        }
                    }
                };
            throw new TypeError(d ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function U(l, d) {
            var a = typeof Symbol == "function" && l[Symbol.iterator];
            if (!a)
                return l;
            var u = a.call(l), C, h = [], f;
            try {
                for (; (d === void 0 || d-- > 0) && !(C = u.next()).done; )
                    h.push(C.value)
            } catch (i) {
                f = {
                    error: i
                }
            } finally {
                try {
                    C && !C.done && (a = u.return) && a.call(u)
                } finally {
                    if (f)
                        throw f.error
                }
            }
            return h
        }
        function J() {
            for (var l = [], d = 0; d < arguments.length; d++)
                l = l.concat(U(arguments[d]));
            return l
        }
        function $() {
            for (var l = 0, d = 0, a = arguments.length; d < a; d++)
                l += arguments[d].length;
            for (var u = Array(l), C = 0, d = 0; d < a; d++)
                for (var h = arguments[d], f = 0, i = h.length; f < i; f++,
                C++)
                    u[C] = h[f];
            return u
        }
        function W(l, d, a) {
            if (a || arguments.length === 2)
                for (var u = 0, C = d.length, h; u < C; u++)
                    (h || !(u in d)) && (h || (h = Array.prototype.slice.call(d, 0, u)),
                    h[u] = d[u]);
            return l.concat(h || Array.prototype.slice.call(d))
        }
        function P(l) {
            return this instanceof P ? (this.v = l,
            this) : new P(l)
        }
        function oe(l, d, a) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var u = a.apply(l, d || []), C, h = [];
            return C = {},
            f("next"),
            f("throw"),
            f("return"),
            C[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            C;
            function f(F) {
                u[F] && (C[F] = function(A) {
                    return new Promise(function(j, G) {
                        h.push([F, A, j, G]) > 1 || i(F, A)
                    }
                    )
                }
                )
            }
            function i(F, A) {
                try {
                    m(u[F](A))
                } catch (j) {
                    Z(h[0][3], j)
                }
            }
            function m(F) {
                F.value instanceof P ? Promise.resolve(F.value.v).then(R, L) : Z(h[0][2], F)
            }
            function R(F) {
                i("next", F)
            }
            function L(F) {
                i("throw", F)
            }
            function Z(F, A) {
                F(A),
                h.shift(),
                h.length && i(h[0][0], h[0][1])
            }
        }
        function V(l) {
            var d, a;
            return d = {},
            u("next"),
            u("throw", function(C) {
                throw C
            }),
            u("return"),
            d[Symbol.iterator] = function() {
                return this
            }
            ,
            d;
            function u(C, h) {
                d[C] = l[C] ? function(f) {
                    return (a = !a) ? {
                        value: P(l[C](f)),
                        done: !1
                    } : h ? h(f) : f
                }
                : h
            }
        }
        function ae(l) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var d = l[Symbol.asyncIterator], a;
            return d ? d.call(l) : (l = typeof O == "function" ? O(l) : l[Symbol.iterator](),
            a = {},
            u("next"),
            u("throw"),
            u("return"),
            a[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            a);
            function u(h) {
                a[h] = l[h] && function(f) {
                    return new Promise(function(i, m) {
                        f = l[h](f),
                        C(i, m, f.done, f.value)
                    }
                    )
                }
            }
            function C(h, f, i, m) {
                Promise.resolve(m).then(function(R) {
                    h({
                        value: R,
                        done: i
                    })
                }, f)
            }
        }
        function X(l, d) {
            return Object.defineProperty ? Object.defineProperty(l, "raw", {
                value: d
            }) : l.raw = d,
            l
        }
        var pe = Object.create ? function(l, d) {
            Object.defineProperty(l, "default", {
                enumerable: !0,
                value: d
            })
        }
        : function(l, d) {
            l.default = d
        }
        ;
        function b(l) {
            if (l && l.__esModule)
                return l;
            var d = {};
            if (l != null)
                for (var a in l)
                    a !== "default" && Object.prototype.hasOwnProperty.call(l, a) && g(d, l, a);
            return pe(d, l),
            d
        }
        function T(l) {
            return l && l.__esModule ? l : {
                default: l
            }
        }
        function N(l, d, a, u) {
            if (a === "a" && !u)
                throw new TypeError("Private accessor was defined without a getter");
            if (typeof d == "function" ? l !== d || !u : !d.has(l))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return a === "m" ? u : a === "a" ? u.call(l) : u ? u.value : d.get(l)
        }
        function D(l, d, a, u, C) {
            if (u === "m")
                throw new TypeError("Private method is not writable");
            if (u === "a" && !C)
                throw new TypeError("Private accessor was defined without a setter");
            if (typeof d == "function" ? l !== d || !C : !d.has(l))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return u === "a" ? C.call(l, a) : C ? C.value = a : d.set(l, a),
            a
        }
        function H(l, d) {
            if (d === null || typeof d != "object" && typeof d != "function")
                throw new TypeError("Cannot use 'in' operator on non-object");
            return typeof l == "function" ? d === l : l.has(d)
        }
    }
}]);
