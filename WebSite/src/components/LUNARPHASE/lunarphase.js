/**
 * LUNARPHASE component
 */
export default {
  props: {
    nbColumns: {
      type: String,
      default: "12"
    },
    component: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Number,
      default: 0
    },
    dayPhase: {
      type: Object,
      default: () => ({}),
      render: {
        type: Boolean,
        default: false
      },
      day: {
        type: Boolean,
        default: false
      },
      fullDate: {
        type: Boolean,
        default: false
      },
      widget: {
        type: Boolean,
        default: false
      },
    },
    distance: {
      type: Boolean,
      default: false
    },
    calendarPhases: {
      type: Boolean,
      default: false
    },
    importantPhases: {
      type: Boolean,
      default: false
    },
    nextFullMoon: {
      type: Boolean,
      default: false
    },
    sizeMoonLaptop: {
      type: String,
      default: "400"
    },
    sizeMoonTablet: {
      type: String,
      default: "300"
    },
    sizeMoonMobile: {
      type: String,
      default: "200"
    },
  },
  data() {
    return {
      calendarPhasesInformations: {
        nameDay: '',
        firstDayMonth: '',
        phase: '',
        daysMonth: '',
        nameMonth: '',
        month: '',
        year: ''
      },
      dateLunar: {day: '', monthName: '', year: '', npWidget: '', nameDay: '', dayWeek: '', svg: null},
      nextFullMoonInfos: {nextFullMoon: ''},
      importantPhasesInfos: {phase: ''},
      lunarConf: {
        lang: 'en',
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        day: new Date().getDate(),
        size: 20,
        lightColor: "white",
        shadeColor: "#292929",
        sizeQuarter: 20,
        texturize: true
      },
    }
  },
  mounted() {
    this.retrieveDayLunarPhase();
  },
  methods: {
    retrieveDayLunarPhase() {
      const axios = require('axios');
      const apiGetters = [];

      for (let key in this.lunarConf) {
        apiGetters.push(key + "=" + encodeURIComponent(this.lunarConf[key]))
      }

      const pro = axios.get('http://www.icalendar37.net/lunar/api/?"' + apiGetters.join("&"));
      pro.then((response) => {
        return response;
      }).then((res) => {
        this.dateLunar.day = res.data.receivedVariables.day;
        this.onFullfilled([this.dateLunar, this.calendarPhasesInformations, this.nextFullMoonInfos, this.importantPhasesInfos], res.data);
        this.resizeSvg();
        window.addEventListener('resize', () => {
          this.resizeSvg();
        });
      }).catch((error) => {
        console.log(error)
      });
    },
    onFullfilled(objToFill, valuesToAdd) {
      objToFill.forEach((item) => {
        Object.keys(item).forEach((key) => {
          Object.keys(valuesToAdd).forEach((keyToAdd) => {
            if (key === keyToAdd) {
              item[key] = valuesToAdd[keyToAdd];
            }
          });
          Object.keys(valuesToAdd.phase).forEach((keyToAdd) => {
            Object.keys(valuesToAdd.phase[keyToAdd]).forEach((phaseItem) => {
              if (key === phaseItem && Number(keyToAdd) === this.lunarConf.day) {
                item[key] = valuesToAdd.phase[keyToAdd][phaseItem];
              }
            })
          })
        });
      });
      return objToFill;
    },
    resizeSvg() {
      // Because bug with API called twice or more //
      document.querySelectorAll('.vLunarPhase #moonSvg, #importantPhases').forEach((item) => {
        let dataSize = item.getAttribute('data-sizeLaptop');

        if (window.innerWidth < 1024) {
          dataSize = item.getAttribute('data-sizeTablet');
        }
        if (window.innerWidth < 768) {
          dataSize = item.getAttribute('data-sizeMobile');
        }
        setTimeout(() => {
          item.firstElementChild.setAttribute('height', dataSize);
          item.firstElementChild.setAttribute('width', dataSize);
        }, 10)
      });
    }
  }
};