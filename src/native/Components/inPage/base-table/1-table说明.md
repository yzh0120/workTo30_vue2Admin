table: {
        autoWidth: true,                                                 每一列都自动适应 ,不然每一列默认200px
        checkbox: true,                                                  多选
        tip: true,                                                       全局溢出隐藏

        sum: true,                                                       开启合计
        sumfn: (param) => {                                              合计函数

        }

        rowKey: "id", //重点 节点的标识                                   树的id
        treeProps: {                                                     和后端对应的props
          //重点    不同的props
          children: "children1",
          hasChildren: "hasChildren",
        },

        head: [
          {
            width:"100px"                                                 单列宽度
            field: "projectNo",                                           字段
            title: "项目编号",                                             标题
            format({ cellValue }) {                                        字段格式化
              return cellValue;
            },
            fixed: "right"                                                 向右固定
            sort: true,                                                    排序的字段
            tip: true,                                                     单列溢出隐藏
            hover: "userName",                                             悬浮显示其他字段内容
          },
          {
            title: "多级表头",                                              多级表头
            children: [
              {
                field: "Bank_of_deposit",
                title: "开户行",
              },
              {
                field: "account",
                title: "账号",
              },
            ],
          },
          { slot: "do", title: "操作", width: 150, fixed: "right" },        插槽     
        ],
        data: [],                                                           数据
        height: self.h,                                                     表格高度
        loading: true,                                                      自动加载
        index: true,                                                        显示索引
      },
