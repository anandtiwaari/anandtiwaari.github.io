<template>
<div class="shem">

  <div class="kem">
      <v-btn v-on:click="badlore(index)"
      class="ma-2 iconva"
      
      large
      fab
      color="indigo"
      
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn >
   
  </div>
<div  class="noteka">

  <v-col v-for="(notess,index) of notevala" :key="index" 
  cols="55"
  md="3"
  class='ban'
  >
  <div class='small-icons'>
   <v-btn fab small color="">
   <v-icon v-on:click="deleteva(index)">mdi-cancel</v-icon>
   </v-btn>
   <v-btn fab small color="orange">
   <v-icon v-on:click="editva(index)" :background-color="colorova" class="jaan" >mdi-pen</v-icon></v-btn>
   </div>

  <v-textarea height="231px" 
  class="maarenge"
  v-model="save"
  :readonly="editz"
  :placeholder="index"
   filled ></v-textarea>
   
  </v-col>
</div>
  <!-- <h1>{{all}}</h1> -->
</div>
</template>


<script>
import noteska from "~/components/noteska.vue";
export default {
  components: {
    noteska
  },
  data() {
    return {
      bnaa: false,
      notess: "",
      notevala: [],
      dikha: Boolean,
      tabhi: true,
      editz: true,
      colorova: "",
      // all: "meeting",
      index: "",
      id: "",
      save: ""
    };
  },
  mounted() {
    if (localStorage.notes) {
      this.notevala = localStorage.notes;
    }
  },
  watch: {
    notes(newnotes) {
      localStorage.notes = newnotes;
    }
  },
  methods: {
    banao() {
      if (this.bnaa == true) {
        this.bnaa = false;
      } else {
        this.bnaa = true;
      }
      // this.bnaa = true;
    },
    khamao() {
      this.dikha = true;
    },
    badlore(id) {
      this.notevala.push(this.notess);
      // console.log(this.notevala);
      // console.log(id);
      this.notevala.map((note, id) => console.log(note, id));
      // console.log(this.notevala);
    },
    deleteva(id) {
      //ye javascript way hai
      this.notevala.splice(this.notevala.indexOf(id));
      // delete this.notevala[3];
      // console.log(id);
      //ye vue kaa way hai
      // this.$delete(this.notevala, 1);
      // console.log(id);
      // console.log(this.notevala);
    },

    editva(id) {
      if (this.editz == true) {
        this.editz = false;
        this.colorova = "blue";
      } else {
        this.editz = true;
      }
      localStorage.setItem("Allnotes", this.save);
      // console.log(id);
      // console.log(this.colorova);
    }
    // beforeDestroy() {
    //   localStorage.setItem("Allnotes", this.save);
    // }
    // oncancel() {
    //   if (this.tabhi == true) {
    //     this.tabhi = false;
    //   } else {
    //     this.tabhi = true;
    //   }
    // }
  }
};
</script>

<style scoped>
.intext {
  display: flex;
  justify-content: center;
  align-items: center;
}
.kem {
  display: flex;
  justify-content: center;
  align-items: center;
}

.iconva {
  margin-top: 15px;
}
.textva {
  resize: none;
}

.noteka {
  display: flex;
  flex-wrap: wrap;
}
.maarenge {
  background-color: #ccdd6d;
  /* border: 2px solid blue; */
  /* border-radius: 15px; */
  color: #ccdd6d;
  font-weight: bolder;
  font-size: 23px;
}
.small-icons {
  display: flex;
  justify-content: space-evenly;
}
/* .jaan {
  color: orange;
  background-color: orange;
  border-radius: 50%;
} */
</style>