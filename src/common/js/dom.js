export function addClass(el,className) {

  if(hasclass(el,className)){
  	return
  }else {

  	let newClass = el.className.split(' ')
  	newClass.push(className);
  	el.className = newClass.join(' ');
  	
  }
}

export function hasclass(el,className) {
  let reg = new RegExp('(^|\\s)'+className+'(\\s|$)');
  return reg.test(el.className);
}

export function getData(el,name,val) {
  const prefix = "data-"
  name = prefix + name
  if(val){
    return el.setAttribute(name,val)
  }else{
    return el.getAttribute(name)
  }
}

// export default {
//  created() {
//    this.touch = {}
//    this.listenScroll = true
//    this.listHeight = []
//    this.probeType = 3
//  },
//  props: {
//    data: {
//      type:Array,
//      default:[]    
//    }
//  },
//  data() {
//    return {
//      scrollY:-1,
//      currentIndex:0
//    }
//  },
//  computed: {
//    shortcutList() {
//      return this.data.map((group) => {
//        return group.title.substr(0,1)
//      })
//    }
//  },
//  methods: {
//         onShortcutTouchStart(e) {
//             let anchorIndex = getData(e.target,"index")
//             let firstTouch = e.touches[0]
//             this.touch.y1 = firstTouch.pageY
//             this.touch.anchorIndex = anchorIndex
//             this._scrollTo(anchorIndex)
//         },
//         onShortcutTouchMove(e) {
//             let firstTouch = e.touches[0]
//             this.touch.y2 = firstTouch.pageY
//             let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT |0
//             let anchorIndex = parseInt(this.touch.anchorIndex) + delta
//             this._scrollTo(anchorIndex)
//         },
//         scroll(pos) {
//             this.scrollY = pos.Y
//         },
//         _scrollTo(index) {
//          this.$refs.listview.scrollToElement(this.$refs.listGroup[index],0)
//         },
//         _calculateHeight() {
//          this.listHeight = []
//          const list = this.$refs.listGroup
//          let Height = 0
//          this.listHeight.push(Height)
//          for(let i=0;i<list.length;i++) {
//            let item = list[i]
//            Height += item.clientHeight
//            this.listHeight.push(Height) 
//          }
//         }
//  },
//  watch: {
//    data() {
//      setTimeout(() => {
//        this._calculateHeight()
//      },20)
//    },
//    scrollY(newY) {
//      console.log(newY)
//      const listHeight = this.listHeight
//      for(let i=0;i<listHeight.length;i++) {
//                let height1 = listHeight[i]
//                let height2 = listHeight[i+1]
//                console.log(height2)
               
//                if(!height2 || (-newY >= height1 && -newY<=height2)){
//                  this.currentIndex = i
//                  console.log(this.currentIndex)
//                  return
//                }
//      }
//        this.currentIndex = 0
//    }
//  },
//  components: {
//    Scroll
//  }
// };
// </script>