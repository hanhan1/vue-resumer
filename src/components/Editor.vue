<template>
  <div id = "editor">
    <nav>
      <ol>
       <li v-bind:class="{active:currentTab === 0}" v-on:click="currentTab=0">
          <svg class="icon">
              <use xlink:href="#icon-shenfenzheng"></use>
          </svg>
       </li>
       <li v-bind:class="{active:currentTab === 1}" v-on:click="currentTab=1">
          <svg class="icon">
               <use xlink:href="#icon-work"></use>
          </svg>
      </li>
       <li v-bind:class="{active:currentTab === 2}" v-on:click="currentTab=2">
          <svg class="icon">
               <use xlink:href="#icon-book"></use>
          </svg>
       </li>
       <li v-bind:class="{active:currentTab ===3}" v-on:click="currentTab=3">
          <svg class="icon">
               <use xlink:href="#icon-heartsurgery"></use>
          </svg>
       </li>
       <li v-bind:class="{active:currentTab === 4}" v-on:click="currentTab=4">
          <svg class="icon">
               <use xlink:href="#icon-jiangbei"></use>
          </svg>
       </li>
       <li v-bind:class="{active:currentTab === 5}" v-on:click="currentTab=5">
          <svg class="icon">
               <use xlink:href="#icon-phone"></use>
          </svg>
       </li>
      </ol>
    
    </nav> 
    <ol class="panes">
      <li v-bind:class="{active: currentTab === 0}">tab1</li>
      <li v-bind:class="{active: currentTab === 1}">tab2</li>
      <li v-bind:class="{active: currentTab === 2}">tab3</li>
      <li v-bind:class="{active: currentTab === 3}">tab4</li>
      <li v-bind:class="{active: currentTab === 4}">tab5</li>
      <li v-bind:class="{active: currentTab === 5}">tab6</li>
    
    </ol> 
  </div>


</template>

<script>
  export default{
    data(){
      return{
        currentTab:0,
      
      }
    
    }
  
  }


</script>
<style lang="scss">
   #editor{
     min-height:100px;
     display:flex;
     > nav{
       background: #DDD;
       width:80px;
       > ol > li{
	 padding:16px 0;
	 text-align:center;
       
         > .icon{
         width:40px;
	 height:40px;
 	 fill:white;
         }
       
         &.active{
           background:white;
            > .icon{
	    fill:black;
	 }
        }
       }
     }
   > .panes{
     > li{
      display:none;
      &.active{
        display:block;
      }
     }
   
   }
   }


</style>
