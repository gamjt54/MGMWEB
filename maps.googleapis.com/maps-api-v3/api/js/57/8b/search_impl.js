google.maps.__gjsload__('search_impl', function(_) {
    var dpb = function(a, b) {
            _.H(a.Hg, 3, b)
        },
        hpb = function(a, b, c) {
            const d = _.CK(new epb);
            c.Uq = (0, _.Da)(d.load, d);
            c.clickable = a.get("clickable") != 0;
            _.MRa(c, _.uR(b));
            const e = [];
            e.push(_.wk(c, "click", (0, _.Da)(fpb, null, a)));
            _.Ob(["mouseover", "mouseout", "mousemove"], function(f) {
                e.push(_.wk(c, f, (0, _.Da)(gpb, null, a, f)))
            });
            e.push(_.wk(a, "clickable_changed", function() {
                a.Eg.clickable = a.get("clickable") != 0
            }));
            a.Fg = e
        },
        fpb = function(a, b, c, d, e) {
            let f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, e.getStatus() == 0)) {
                f.location = _.U(e.Hg,
                    2) ? new _.Qj(_.Qu(_.K(e.Hg, 2, _.Vu).Hg, 1), _.Qu(_.K(e.Hg, 2, _.Vu).Hg, 2)) : null;
                f.fields = {};
                const g = _.Di(e.Hg, 3);
                for (let h = 0; h < g; ++h) {
                    const k = _.Rs(e.Hg, 3, _.FR, h);
                    f.fields[k.getKey()] = k.getValue()
                }
            }
            _.Kk(a, "click", b, c, d, f)
        },
        gpb = function(a, b, c, d, e, f, g) {
            let h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.Kk(a, b, c, d, e, h, g)
        },
        ipb = function() {},
        jpb = class extends _.R {
            constructor() {
                super()
            }
            Wi() {
                return _.Vi(this.Hg, 2)
            }
        },
        kpb = [_.L, , , _.Iq, _.TSa];
    var lpb = class extends _.R {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.I(this.Hg, 1, -1)
        }
        getLocation() {
            return _.Ni(this.Hg, 2, _.Vu)
        }
    };
    var epb = class {
        constructor() {
            var a = _.zp,
                b = _.wp;
            this.Fg = _.Xi;
            this.Eg = _.Ms(_.Oy, a, _.aA + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(g) {
                g = new lpb(g);
                b(g)
            }
            var d = new jpb;
            _.H(d.Hg, 1, a.layerId.split("|")[0]);
            _.H(d.Hg, 2, a.featureId);
            dpb(d, this.Fg.Eg().Eg());
            for (var e in a.parameters) {
                var f = _.Qi(d.Hg, 4, _.FR);
                _.H(f.Hg, 1, e);
                _.H(f.Hg, 2, a.parameters[e])
            }
            a = _.Ki(d.xi(), kpb, 1);
            this.Eg(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    ipb.prototype.FE = function(a) {
        if (_.Nn[15]) {
            var b = a.Ig;
            const c = a.Ig = a.getMap();
            b && a.Eg && (a.Gg ? (b = b.__gm.Wj, b.set(b.get().Bn(a.Eg))) : a.Eg && _.iSa(a.Eg, b) && (_.Ob(a.Fg || [], _.yk), a.Fg = null));
            if (c) {
                b = new _.Px;
                const d = a.get("layerId").split("|");
                b.layerId = d[0];
                for (let e = 1; e < d.length; ++e) {
                    const [f, ...g] = d[e].split(":");
                    b.parameters[f] = g.join(":")
                }
                a.get("spotlightDescription") && (b.spotlightDescription = new _.hy(a.get("spotlightDescription")));
                a.get("paintExperimentIds") && (b.paintExperimentIds = a.get("paintExperimentIds").slice(0));
                a.get("styler") && (b.styler = new _.$x(a.get("styler")));
                a.get("roadmapStyler") && (b.roadmapStyler = new _.$x(a.get("roadmapStyler")));
                a.get("travelMapRequest") && (b.travelMapRequest = new _.gla(a.get("travelMapRequest")));
                a.get("mapsApiLayer") && (b.mapsApiLayer = new _.Vx(a.get("mapsApiLayer")));
                a.get("mapFeatures") && (b.mapFeatures = a.get("mapFeatures"));
                a.get("clickableCities") && (b.clickableCities = a.get("clickableCities"));
                a.get("searchPipeMetadata") && (b.searchPipeMetadata = new _.Kz(a.get("searchPipeMetadata")));
                a.get("gmmContextPipeMetadata") && (b.gmmContextPipeMetadata = new _.wja(a.get("gmmContextPipeMetadata")));
                a.get("overlayLayer") && (b.overlayLayer = new _.iy(a.get("overlayLayer")));
                a.get("caseExperimentIds") && (b.caseExperimentIds = a.get("caseExperimentIds").slice(0));
                a.get("boostMapExperimentIds") && (b.boostMapExperimentIds = a.get("boostMapExperimentIds").slice(0));
                a.get("airQualityPipeMetadata") && (b.airQualityPipeMetadata = new _.Lka(a.get("airQualityPipeMetadata")));
                a.get("directionsPipeParameters") && (b.directionsPipeParameters =
                    new _.yA(a.get("directionsPipeParameters")));
                a.get("clientSignalPipeMetadata") && (b.clientSignalPipeMetadata = new _.dja(a.get("clientSignalPipeMetadata")));
                b.darkLaunch = !!a.get("darkLaunch");
                a.Eg = b;
                a.Gg = a.get("renderOnBaseMap");
                a.Gg ? (a = c.__gm.Wj, a.set(a.get().Fl(b))) : hpb(a, c, b);
                _.Il(c, "Lg");
                _.Gl(c, 148282)
            }
        }
    };
    _.lk("search_impl", new ipb);
});