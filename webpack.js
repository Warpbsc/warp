(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        92684: function(a, b, c) {
            "use strict";
            c.d(b, {
                Sx: function() {
                    return o
                }
            });
            var d = c(11604),
                e = c(19703),
                f = c(67294),
                g = c(85393);

            function h() {
                return (h = Object.assign ? Object.assign.bind() : function(a) {
                    for (var b = 1; b < arguments.length; b++) {
                        var c = arguments[b];
                        for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
                    }
                    return a
                }).apply(this, arguments)
            }

            function i(a, b) {
                void 0 === b && (b = {});
                var c = b,
                    d = c.ssr,
                    i = void 0 === d || d,
                    j = c.fallback,
                    k = (0, g.O)(),
                    l = Array.isArray(a) ? a : [a],
                    m = Array.isArray(j) ? j : [j];
                m = m.filter(function(a) {
                    return null != a
                });
                var n = (0, f.useState)(function() {
                        return l.map(function(a, b) {
                            return {
                                media: a,
                                matches: i ? !!m[b] : k.window.matchMedia(a).matches
                            }
                        })
                    }),
                    o = n[0],
                    p = n[1];
                return (0, f.useEffect)(function() {
                    p(l.map(function(a) {
                        return {
                            media: a,
                            matches: k.window.matchMedia(a).matches
                        }
                    }));
                    var a = l.map(function(a) {
                            return k.window.matchMedia(a)
                        }),
                        b = function(a) {
                            p(function(b) {
                                return b.slice().map(function(b) {
                                    return b.media === a.media ? h({}, b, {
                                        matches: a.matches
                                    }) : b
                                })
                            })
                        };
                    return a.forEach(function(a) {
                            (0, e.mf)(a.addListener) ? a.addListener(b): a.addEventListener("change", b)
                        }),
                        function() {
                            a.forEach(function(a) {
                                (0, e.mf)(a.removeListener) ? a.removeListener(b): a.removeEventListener("change", b)
                            })
                        }
                }, [k.window]), o.map(function(a) {
                    return a.matches
                })
            }
            var j = function(a) {
                    var b = a.breakpoint,
                        c = a.hide,
                        d = a.children,
                        e = a.ssr,
                        f = i(b, {
                            ssr: e
                        }),
                        g = f[0];
                    return (c ? !g : g) ? d : null
                },
                k = function(a) {
                    var b = a.children,
                        c = a.ssr,
                        d = n(a);
                    return f.createElement(j, {
                        breakpoint: d,
                        hide: !0,
                        ssr: c
                    }, b)
                };
            e.Ts && (k.displayName = "Hide");
            var l = function(a) {
                var b = a.children,
                    c = a.ssr,
                    d = n(a);
                return f.createElement(j, {
                    breakpoint: d,
                    ssr: c
                }, b)
            };
            e.Ts && (l.displayName = "Show");
            var m = function(a, b) {
                return (0, e.Wf)(a, "breakpoints." + b, b)
            };

            function n(a) {
                var b = a.breakpoint,
                    c = a.below,
                    e = a.above,
                    f = (0, d.Fg)(),
                    g = m(f, c),
                    h = m(f, e),
                    i = void 0 === b ? "" : b;
                return g ? i = "(max-width: " + g + ")" : h && (i = "(min-width: " + h + ")"), i
            }

            function o(a, b) {
                var c, f, g, h, j, k, l, m, n, o = (f = (0, e.Kn)(b) ? b : {
                        fallback: null != b ? b : "base"
                    }, j = (0, e.Kn)(f) ? f : {
                        fallback: null != f ? f : "base"
                    }, k = (0, d.Fg)().__breakpoints.details.map(function(a) {
                        var b = a.minMaxQuery,
                            c = a.breakpoint;
                        return {
                            breakpoint: c,
                            query: b.replace("@media screen and ", "")
                        }
                    }), l = k.map(function(a) {
                        return a.breakpoint === j.fallback
                    }), m = i(k.map(function(a) {
                        return a.query
                    }), {
                        fallback: l,
                        ssr: j.ssr
                    }), n = m.findIndex(function(a) {
                        return !0 == a
                    }), null != (g = null == (h = k[n]) ? void 0 : h.breakpoint) ? g : j.fallback),
                    p = (0, d.Fg)();
                if (o) {
                    var q = Array.from((null == (c = p.__breakpoints) ? void 0 : c.keys) || []);
                    return function(a, b, c) {
                        void 0 === c && (c = e.AV);
                        var d = Object.keys(a).indexOf(b);
                        if (-1 !== d) return a[b];
                        for (var f = c.indexOf(b); f >= 0;) {
                            var g = c[f];
                            if (a.hasOwnProperty(g)) {
                                d = f;
                                break
                            }
                            f -= 1
                        }
                        if (-1 !== d) return a[c[d]]
                    }((0, e.kJ)(a) ? (0, e.sq)(Object.entries((0, e.Yq)(a, q)).map(function(a) {
                        var b = a[0],
                            c = a[1];
                        return [b, c]
                    })) : a, o, q)
                }
            }
        },
        48312: function(a, b, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return c(97904)
            }])
        },
        97904: function(a, b, c) {
            "use strict";
            c.r(b), c.d(b, {
                "__N_SSP": function() {
                    return U
                },
                default: function() {
                    return V
                }
            });
            var d = c(85893),
                e = c(55678);
            c(40993);
            var f = c(9008),
                g = c.n(f),
                h = c(68527),
                i = c(92684),
                j = c(61744),
                k = c(67294),
                l = c(23126),
                m = c(83497);

            function n() {
                var a, b, c, e, f, g, n = (0, k.useContext)(l.s).reflections,
                    o = (0, m.Z)().toFormattedValue,
                    p = (0, i.Sx)({
                        base: "yes",
                        md: "no"
                    }, {
                        ssr: !0
                    });
                return (0, d.jsx)(h.gC, {
                    w: "full",
                    children: "yes" === p ? (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(h.xv, {
                            variant: "title",
                            placeSelf: "start",
                            children: "Rewards in $BUSD"
                        }), (0, d.jsxs)(h.gC, {
                            alignItems: "start",
                            w: "full",
                            borderRadius: "5",
                            bgColor: "#ECECEC",
                            p: 4,
                            rounded: "xl",
                            children: [(0, d.jsx)(h.xu, {
                                w: "full",
                                p: 6,
                                bg: "white",
                                rounded: "xl",
                                boxShadow: "10px 24px 50px #0000000f",
                                fontSize: "lg",
                                children: (0, d.jsx)(h.xv, {
                                    children: "Received Rewards"
                                })
                            }), (0, d.jsx)(h.gC, {
                                align: "start",
                                w: "full",
                                p: 6,
                                children: (0, d.jsxs)(h.xv, {
                                    fontWeight: "bolder",
                                    fontSize: "22px",
                                    children: ["$", o(Number(j.formatEther(null !== (a = n.userAvailable) && void 0 !== a ? a : "0")))]
                                })
                            })]
                        }), (0, d.jsxs)(h.gC, {
                            alignItems: "start",
                            w: "full",
                            borderRadius: "5",
                            bgColor: "#ECECEC",
                            p: 4,
                            rounded: "xl",
                            children: [(0, d.jsx)(h.xu, {
                                w: "full",
                                p: 6,
                                bg: "white",
                                rounded: "xl",
                                boxShadow: "10px 24px 50px #0000000f",
                                fontSize: "lg",
                                children: (0, d.jsx)(h.xv, {
                                    children: "My Total Rewards"
                                })
                            }), (0, d.jsx)(h.gC, {
                                align: "start",
                                w: "full",
                                p: 6,
                                children: (0, d.jsxs)(h.xv, {
                                    fontWeight: "bolder",
                                    fontSize: "22px",
                                    children: ["$", o(Number(j.formatEther(null !== (b = n.userTotal) && void 0 !== b ? b : "0")))]
                                })
                            })]
                        }), (0, d.jsxs)(h.gC, {
                            alignItems: "start",
                            w: "full",
                            borderRadius: "5",
                            bgColor: "#ECECEC",
                            p: 4,
                            rounded: "xl",
                            children: [(0, d.jsx)(h.xu, {
                                w: "full",
                                p: 6,
                                bg: "white",
                                rounded: "xl",
                                boxShadow: "10px 24px 50px #0000000f",
                                fontSize: "lg",
                                children: (0, d.jsx)(h.xv, {
                                    children: "Total Rewards Distributed"
                                })
                            }), (0, d.jsx)(h.gC, {
                                align: "start",
                                w: "full",
                                p: 6,
                                children: (0, d.jsxs)(h.xv, {
                                    fontWeight: "bolder",
                                    fontSize: "22px",
                                    children: ["$", o(Number(j.formatEther(null !== (c = n.totalReflections) && void 0 !== c ? c : "0")))]
                                })
                            })]
                        })]
                    }) : (0, d.jsx)(d.Fragment, {
                        children: (0, d.jsxs)(h.gC, {
                            alignItems: "start",
                            w: "full",
                            borderRadius: "5",
                            bgColor: "#ECECEC",
                            p: 4,
                            rounded: "xl",
                            children: [(0, d.jsx)(h.xv, {
                                variant: "title",
                                placeSelf: "start",
                                children: "Rewards in $BUSD"
                            }), (0, d.jsxs)(h.rj, {
                                templateColumns: "repeat(3, 1fr)",
                                w: "full",
                                p: 6,
                                bg: "white",
                                rounded: "xl",
                                boxShadow: "10px 24px 50px #0000000f",
                                fontSize: "lg",
                                children: [(0, d.jsx)(h.xv, {
                                    children: "Received Rewards"
                                }), (0, d.jsx)(h.xv, {
                                    children: "My Total Rewards"
                                }), (0, d.jsx)(h.xv, {
                                    children: "Total Rewards Distributed"
                                })]
                            }), (0, d.jsxs)(h.rj, {
                                templateColumns: "repeat(3, 1fr)",
                                w: "full",
                                p: 6,
                                children: [(0, d.jsx)(h.gC, {
                                    align: "start",
                                    children: (0, d.jsxs)(h.xv, {
                                        fontWeight: "bolder",
                                        fontSize: "22px",
                                        children: ["$", o(Number(j.formatEther(null !== (e = n.userAvailable) && void 0 !== e ? e : "0")))]
                                    })
                                }), (0, d.jsx)(h.gC, {
                                    align: "start",
                                    children: (0, d.jsxs)(h.xv, {
                                        fontWeight: "bolder",
                                        fontSize: "22px",
                                        children: ["$", o(Number(j.formatEther(null !== (f = n.userTotal) && void 0 !== f ? f : "0")))]
                                    })
                                }), (0, d.jsx)(h.gC, {
                                    align: "start",
                                    children: (0, d.jsxs)(h.xv, {
                                        fontWeight: "bolder",
                                        fontSize: "22px",
                                        children: ["$", o(Number(j.formatEther(null !== (g = n.totalReflections) && void 0 !== g ? g : "0")))]
                                    })
                                })]
                            })]
                        })
                    })
                })
            }

            function o() {
                var a = (0, k.useContext)(l.s).referralStats,
                    b = (0, m.Z)(),
                    c = b.toFormattedValue,
                    e = b.toFormattedValueNoDeciamls,
                    f = (0, i.Sx)({
                        base: "yes",
                        md: "no"
                    }, {
                        ssr: !0
                    });
                return (0, d.jsx)(h.gC, {
                    w: "full",
                    children: "yes" === f ? (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(h.xv, {
                            variant: "title",
                            placeSelf: "start",
                            children: "Referral Stats"
                        }), (0, d.jsxs)(h.gC, {
                            alignItems: "start",
                            w: "full",
                            borderRadius: "5",
                            bgColor: "#ECECEC",
                            p: 4,
                            rounded: "xl",
                            children: [(0, d.jsx)(h.xu, {
                                w: "full",
                                p: 6,
                                bg: "white",
                                rounded: "xl",
                                boxShadow: "10px 24px 50px #0000000f",
                                fontSize: "lg",
                                children: (0, d.jsx)(h.xv, {
                                    children: "Claimable Referrals"
                                })
                            }), (0, d.jsx)(h.gC, {
                                align: "start",
                                w: "full",
                                p: 6,
                                children: (0, d.jsxs)(h.xv, {
                                    fontWeight: "bolder",
                                    fontSize: "22px",
                                    children: ["$", c(a.pendingToClaim)]
                                })
                            })]
                        }), (0, d.jsxs)(h.gC, {
                            alignItems: "start",
                            w: "full",
                            borderRadius: "5",
                            bgColor: "#ECECEC",
                            p: 4,
                            rounded: "xl",
                            children: [(0, d.jsx)(h.xu, {
                                w: "full",
                                p: 6,
                                bg: "white",
                                rounded: "xl",
                                boxShadow: "10px 24px 50px #0000000f",
                                fontSize: "lg",
                                children: (0, d.jsx)(h.xv, {
                                    children: "My Total Referrals Rewards"
                                })
                            }), (0, d.jsx)(h.gC, {
                                align: "start",
                                w: "full",
                                p: 6,
                                children: (0, d.jsxs)(h.xv, {
                                    fontWeight: "bolder",
                                    fontSize: "22px",
                                    children: ["$", c(a.totalClaimed + a.pendingToClaim)]
                                })
                            })]
                        }), (0, d.jsxs)(h.gC, {
                            alignItems: "start",
                            w: "full",
                            borderRadius: "5",
                            bgColor: "#ECECEC",
                            p: 4,
                            rounded: "xl",
                            children: [(0, d.jsx)(h.xu, {
                                w: "full",
                                p: 6,
                                bg: "white",
                                rounded: "xl",
                                boxShadow: "10px 24px 50px #0000000f",
                                fontSize: "lg",
                                children: (0, d.jsx)(h.xv, {
                                    children: "Total Bonds Referred"
                                })
                            }), (0, d.jsx)(h.gC, {
                                align: "start",
                                w: "full",
                                p: 6,
                                children: (0, d.jsxs)(h.xv, {
                                    fontWeight: "bolder",
                                    fontSize: "22px",
                                    children: ["$", e(a.referredBondCount)]
                                })
                            })]
                        })]
                    }) : (0, d.jsx)(d.Fragment, {
                        children: (0, d.jsxs)(h.gC, {
                            alignItems: "start",
                            w: "full",
                            borderRadius: "5",
                            bgColor: "#ECECEC",
                            p: 4,
                            rounded: "xl",
                            children: [(0, d.jsxs)(h.rj, {
                                templateColumns: "repeat(3, 1fr)",
                                w: "full",
                                p: 6,
                                bg: "white",
                                rounded: "xl",
                                boxShadow: "10px 24px 50px #0000000f",
                                fontSize: "lg",
                                children: [(0, d.jsx)(h.xv, {
                                    children: "Claimable Referrals"
                                }), (0, d.jsx)(h.xv, {
                                    children: "My Total Referrals Rewards"
                                }), (0, d.jsx)(h.xv, {
                                    children: "Total Bonds Referred"
                                })]
                            }), (0, d.jsxs)(h.rj, {
                                templateColumns: "repeat(3, 1fr)",
                                w: "full",
                                p: 6,
                                children: [(0, d.jsx)(h.gC, {
                                    align: "start",
                                    children: (0, d.jsxs)(h.xv, {
                                        fontWeight: "bolder",
                                        fontSize: "22px",
                                        children: ["$", c(a.pendingToClaim)]
                                    })
                                }), (0, d.jsx)(h.gC, {
                                    align: "start",
                                    children: (0, d.jsxs)(h.xv, {
                                        fontWeight: "bolder",
                                        fontSize: "22px",
                                        children: ["$", c(a.totalClaimed + a.pendingToClaim)]
                                    })
                                }), (0, d.jsx)(h.gC, {
                                    align: "start",
                                    children: (0, d.jsx)(h.xv, {
                                        fontWeight: "bolder",
                                        fontSize: "22px",
                                        children: a.referredBondCount
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
            var p = c(47568),
                q = c(51351),
                r = c(34051),
                s = c.n(r),
                t = c(89583),
                u = c(88767);

            function v(a) {
                var b = a.gasPrice,
                    c = (0, m.Z)().toFormattedValue,
                    e = (0, k.useState)(b),
                    f = e[0],
                    g = e[1],
                    i = (0, u.useQuery)(["gas"], (0, p.Z)(s().mark(function a() {
                        var b, c;
                        return s().wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, fetch("https://api.bscscan.com/api?module=gastracker&action=gasoracle");
                                case 2:
                                    return b = a.sent, a.next = 5, b.json();
                                case 5:
                                    return c = a.sent, a.abrupt("return", c);
                                case 7:
                                case "end":
                                    return a.stop()
                            }
                        }, a)
                    })), {
                        refetchInterval: 5e3,
                        onSettled: function(a, b) {
                            !b && g({
                                standard: Number(a.result.SafeGasPrice),
                                fast: Number(a.result.ProposeGasPrice),
                                rapid: Number(a.result.FastGasPrice)
                            })
                        }
                    }),
                    i = null !== i ? i : (0, q.Z)(TypeError("Cannot destructure undefined"));
                return (0, d.jsxs)(h.rj, {
                    borderRadius: 5,
                    p: 5,
                    bgColor: "#ECECEC",
                    w: "full",
                    templateColumns: {
                        base: "1fr",
                        md: "60% 1fr"
                    },
                    children: [(0, d.jsxs)(h.gC, {
                        w: "full",
                        children: [(0, d.jsx)(h.Ug, {
                            w: "full",
                            justify: "space-between",
                            alignItems: "center",
                            children: (0, d.jsx)(h.xv, {
                                variant: "title",
                                placeSelf: "start",
                                children: "Statistics"
                            })
                        }), (0, d.jsx)(h.xv, {
                            children: "Coming soon..."
                        })]
                    }), (0, d.jsxs)(h.gC, {
                        w: "full",
                        alignItems: {
                            base: "start",
                            md: "center"
                        },
                        children: [(0, d.jsx)(h.xv, {
                            variant: "title",
                            children: "Gas Tracker"
                        }), (0, d.jsxs)(h.rj, {
                            w: "full",
                            templateColumns: {
                                base: "1fr",
                                md: "repeat(3,1fr)"
                            },
                            justifyItems: "center",
                            rowGap: 6,
                            p: 6,
                            children: [(0, d.jsxs)(h.gC, {
                                children: [(0, d.jsxs)(h.Ug, {
                                    fontWeight: "bold",
                                    children: [(0, d.jsx)(t.LdM, {
                                        color: "green"
                                    }), " ", (0, d.jsx)(h.xv, {
                                        children: c(f.standard)
                                    })]
                                }), (0, d.jsx)(h.xv, {
                                    children: "Standard"
                                })]
                            }), (0, d.jsxs)(h.gC, {
                                children: [(0, d.jsxs)(h.Ug, {
                                    fontWeight: "bold",
                                    children: [(0, d.jsx)(t.LdM, {
                                        color: "blue"
                                    }), " ", (0, d.jsx)(h.xv, {
                                        children: c(f.fast)
                                    })]
                                }), (0, d.jsx)(h.xv, {
                                    children: "Fast"
                                })]
                            }), (0, d.jsxs)(h.gC, {
                                children: [(0, d.jsxs)(h.Ug, {
                                    fontWeight: "bold",
                                    children: [(0, d.jsx)(t.LdM, {
                                        color: "red"
                                    }), " ", (0, d.jsx)(h.xv, {
                                        children: c(f.rapid)
                                    })]
                                }), (0, d.jsx)(h.xv, {
                                    children: "Rapid"
                                })]
                            })]
                        })]
                    })]
                })
            }
            var w = c(11604),
                x = c(19703);

            function y() {
                return (y = Object.assign ? Object.assign.bind() : function(a) {
                    for (var b = 1; b < arguments.length; b++) {
                        var c = arguments[b];
                        for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
                    }
                    return a
                }).apply(this, arguments)
            }

            function z(a, b) {
                if (null == a) return {};
                var c, d, e = {},
                    f = Object.keys(a);
                for (d = 0; d < f.length; d++) c = f[d], b.indexOf(c) >= 0 || (e[c] = a[c]);
                return e
            }
            var A = ["overflow", "overflowX", "className"],
                B = ["className"],
                C = ["placement"],
                D = ["isNumeric"],
                E = ["isNumeric"],
                F = (0, w.eC)("Table"),
                G = F[0],
                H = F[1],
                I = (0, w.Gp)(function(a, b) {
                    var c, d = a.overflow,
                        e = a.overflowX,
                        f = a.className,
                        g = z(a, A);
                    return k.createElement(w.m$.div, y({
                        ref: b,
                        className: (0, x.cx)("chakra-table__container", f)
                    }, g, {
                        __css: {
                            display: "block",
                            whiteSpace: "nowrap",
                            WebkitOverflowScrolling: "touch",
                            overflowX: null != (c = null != d ? d : e) ? c : "auto",
                            overflowY: "hidden",
                            maxWidth: "100%"
                        }
                    }))
                }),
                J = (0, w.Gp)(function(a, b) {
                    var c = (0, w.jC)("Table", a),
                        d = (0, w.Lr)(a),
                        e = d.className,
                        f = z(d, B);
                    return k.createElement(G, {
                        value: c
                    }, k.createElement(w.m$.table, y({
                        role: "table",
                        ref: b,
                        __css: c.table,
                        className: (0, x.cx)("chakra-table", e)
                    }, f)))
                });
            x.Ts && (J.displayName = "Table");
            var K = (0, w.Gp)(function(a, b) {
                var c = a.placement,
                    d = z(a, C),
                    e = H();
                return k.createElement(w.m$.caption, y({}, d, {
                    ref: b,
                    __css: y({}, e.caption, {
                        captionSide: void 0 === c ? "bottom" : c
                    })
                }))
            });
            x.Ts && (K.displayName = "TableCaption");
            var L = (0, w.Gp)(function(a, b) {
                    var c = H();
                    return k.createElement(w.m$.thead, y({}, a, {
                        ref: b,
                        __css: c.thead
                    }))
                }),
                M = (0, w.Gp)(function(a, b) {
                    var c = H();
                    return k.createElement(w.m$.tbody, y({}, a, {
                        ref: b,
                        __css: c.tbody
                    }))
                }),
                N = (0, w.Gp)(function(a, b) {
                    var c = a.isNumeric,
                        d = z(a, D),
                        e = H();
                    return k.createElement(w.m$.th, y({}, d, {
                        ref: b,
                        __css: e.th,
                        "data-is-numeric": c
                    }))
                }),
                O = (0, w.Gp)(function(a, b) {
                    var c = H();
                    return k.createElement(w.m$.tr, y({
                        role: "row"
                    }, a, {
                        ref: b,
                        __css: c.tr
                    }))
                }),
                P = (0, w.Gp)(function(a, b) {
                    var c = a.isNumeric,
                        d = z(a, E),
                        e = H();
                    return k.createElement(w.m$.td, y({
                        role: "gridcell"
                    }, d, {
                        ref: b,
                        __css: e.td,
                        "data-is-numeric": c
                    }))
                }),
                Q = c(1960),
                R = c(39610);

            function S() {
                var a, b, c, e, f, g, i = (b = (a = (0, k.useState)([]))[0], c = a[1], e = (0, R.mA)().address, (0, R.LN)().chain, f = (0, Q.Z)(), g = (0, k.useCallback)(function() {
                        var a = localStorage.getItem("rk-transactions");
                        if (null !== a) {
                            var b = JSON.parse(a)[null != e ? e : ""];
                            b && c(b[250])
                        }
                    }, [e]), (0, k.useEffect)(function() {
                        f && g()
                    }, [g, f]), (0, k.useEffect)(function() {
                        var a = setTimeout(function() {
                            g()
                        }, 5e3);
                        return function() {
                            return clearTimeout(a)
                        }
                    }, [g]), b),
                    j = (0, m.Z)().trimmedAddress,
                    l = (0, Q.Z)();
                return (0, d.jsxs)(h.gC, {
                    borderRadius: 5,
                    p: 5,
                    bgColor: "#ECECEC",
                    w: "full",
                    children: [(0, d.jsx)(h.Ug, {
                        justifyContent: "space-between",
                        w: "full",
                        children: (0, d.jsx)(h.xv, {
                            placeSelf: "start",
                            variant: "title",
                            children: "Transaction history"
                        })
                    }), (0, d.jsx)(I, {
                        w: "full",
                        children: (0, d.jsxs)(J, {
                            variant: "stripped",
                            colorScheme: "white",
                            children: [(0, d.jsx)(L, {
                                children: (0, d.jsxs)(O, {
                                    children: [(0, d.jsx)(N, {
                                        children: "hash"
                                    }), (0, d.jsx)(N, {
                                        children: "description"
                                    }), (0, d.jsx)(N, {
                                        children: "status"
                                    })]
                                })
                            }), (0, d.jsx)(M, {
                                children: l && i.map(function(a) {
                                    return (0, d.jsxs)(O, {
                                        children: [(0, d.jsx)(P, {
                                            children: (0, d.jsx)(h.rU, {
                                                href: "https://bscscan.com/tx/".concat(a.hash),
                                                isExternal: !0,
                                                children: j(a.hash)
                                            })
                                        }), (0, d.jsx)(P, {
                                            children: a.description
                                        }), (0, d.jsx)(P, {
                                            children: a.status
                                        })]
                                    }, a.hash)
                                })
                            })]
                        })
                    })]
                })
            }

            function T(a) {
                var b = a.gasPrice;
                return (0, d.jsxs)(h.gC, {
                    gap: 5,
                    color: "black",
                    py: 10,
                    px: "10%",
                    minH: "98vh",
                    w: "full",
                    bgColor: "white",
                    children: [(0, d.jsx)(h.xv, {
                        fontSize: "x-large",
                        fontWeight: "bold",
                        placeSelf: "start",
                        children: "Dashboard"
                    }), (0, d.jsx)(n, {}), (0, d.jsx)(o, {}), (0, d.jsx)(v, {
                        gasPrice: b
                    }), (0, d.jsx)(S, {})]
                })
            }
            var U = !0,
                V = function(a) {
                    var b = a.gasPrice;
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(g(), {
                            children: (0, d.jsx)("title", {
                                children: "Home | Warp Token"
                            })
                        }), (0, d.jsx)(T, {
                            gasPrice: b
                        }), (0, d.jsx)(e.Ix, {
                            position: "top-center",
                            autoClose: 5e3,
                            hideProgressBar: !1,
                            newestOnTop: !1,
                            closeOnClick: !0,
                            rtl: !1,
                            pauseOnFocusLoss: !0,
                            draggable: !0,
                            pauseOnHover: !0,
                            theme: "dark"
                        })]
                    })
                }
        },
        9008: function(a, b, c) {
            a.exports = c(5443)
        }
    },
    function(a) {
        a.O(0, [774, 888, 179], function() {
            var b;
            return a(a.s = 48312)
        }), _N_E = a.O()
    }
])