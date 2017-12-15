import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {departments} from "../../pages/departments";


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 20,
  },
};


let departmentFilter = (id) => {
  switch (id) {
    case 1:
      return '工程师';
    case 2:
      return '设计师';
    case 3:
      return '产品';
  }
}

function MemberCard(props, delFn = () => {
}) {
  // let tags = JSON.parse(props.tag);
  
  
  const handleClick = () => {
    delFn(props.id)
  };
  
  return (
    <div>
      <br/>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image={props.avatar}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            {props.username}
          </Typography>
          
          <Typography component="p">
            {departmentFilter(props.departmentId)}
          </Typography>
          <Typography component="p">
          Id：{props.id}
          </Typography>
        </CardContent>
        {/*{tags.map(n => {*/}
        {/*return (*/}
        {/*<Button color="accent">*/}
        {/*{n}*/}
        {/*</Button>*/}
        {/*)*/}
        {/*})}*/}
        <Button color="accent" onClick={handleClick}>
          删除
        </Button>
      </Card>
      <br/>
    </div>
  );
}


export default MemberCard;
