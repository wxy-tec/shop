<template>
    <div>
      <el-table :data="articles">
        <el-table-column prop="title" label="用户名" width="140">
        </el-table-column>
        <el-table-column prop="body" label="密码" width="120">
        </el-table-column>
        <el-table-column 
        fixed="right" 
        label="Operations" 
        width="120">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="edit(scope.row._id)">编辑</el-button>
        <el-button type="text" size="small" @click="remove(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
    </div>
</template>
<script>

export default{
  data() {
    return{
        articles:[]
    };
    },
    methods:{
        fetch(){
          this.$http.get("articles").then(res=>{
          this.articles=res.data
      })
        },
        edit(id){
            this.$router.push(`/articles/${id}/edit`)
        },
        remove(id){
         // eslint-disable-line no-unused-vars
            this.$http.delete(`articles/${id}`).then(res=>{
                this.$message({
                message:"this is a success message",
                type:"success"
            });
            this.fetch()
            });
        }
    },
  created(){
      this.fetch()
  }
};
</script>