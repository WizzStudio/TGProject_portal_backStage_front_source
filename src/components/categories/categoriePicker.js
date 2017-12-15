import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Folder';
import ExtensionIcon from 'material-ui-icons/Extension';
import GavelIcon from 'material-ui-icons/Gavel';
import RedeemIcon from 'material-ui-icons/Redeem'
import Delete from 'material-ui-icons/Delete';
import Chip from 'material-ui/Chip';
import Grid from 'material-ui/Grid';

const categories = [
  {
    "id": 1,
    "description": "进行中",
    "projects": []
  },
  {
    "id": 2,
    "description": "已完成",
    "projects": []
  },
  {
    "id": 3,
    "description": "精品",
    "projects": []
  },
  {
    "id": 4,
    "description": "创意",
    "projects": []
  },
  {
    "id": 5,
    "description": "微项目",
    "projects": []
  },
  {
    "id": 6,
    "description": "其他项目",
    "projects": []
  }
];

const iconFilter = (index) => {
  switch (index) {
    case 0:
      return (   <ListItemIcon><RestoreIcon/></ListItemIcon>);
    case 1:
      return (   <ListItemIcon><GavelIcon/></ListItemIcon>);
    case 2:
      return (   <ListItemIcon><RedeemIcon/></ListItemIcon>);
    case 3:
      return (   <ListItemIcon><FavoriteIcon/></ListItemIcon>);
    case 4:
      return (   <ListItemIcon><LocationOnIcon/></ListItemIcon>);
    case 5:
      return (   <ListItemIcon><FolderIcon/></ListItemIcon>);
  }
}


function CategoryItem(props) {
  
  // const handleClick = function (item) {
  //   props.clickFn(item)
  // };
  {/*<ListItem onClick={handleClick.bind(this,n)}>*/
  }
  
  if (!props.type) {
    return (<p>未传入type</p>)
  }
  
  // 展示
  if (props.type.toLowerCase() === 'display') {
    // console.log(props.cate)
    return (
      <Grid container spacing={12}>
        {
          props.cate.map(n=>(
            <Grid item lg={2}>
              <Chip
                label={n.description}
                // onClick={props.delFn.bind(this,n)}
                 onRequestDelete={props.delFn.bind(this,n)}
                // className={classes.chip}
                deleteIcon={<Delete />}
              />
            </Grid>
          ))
        }
      </Grid>
    )
  }
  
  // 选择
  if (props.type.toLowerCase() === 'picker') {
    return (
      <List subheader={<ListSubheader>项目分类</ListSubheader>}>
        {categories.map((n, index) => (
          <ListItem onClick={props.clickFn.bind(this, n)} button>
            {iconFilter(index)}
            <ListItemText inset primary={n.description}/>
          </ListItem>
        ))}
      </List>
    )
  }
  
  
}

CategoryItem.propTypes = {
  type: PropTypes.oneOf(['display','picker']).isRequired,
  clickFn: PropTypes.func,
  delFn:PropTypes.func,
  cate:PropTypes.array
};


export default CategoryItem
