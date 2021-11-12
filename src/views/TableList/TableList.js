import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { connect, useSelector } from 'react-redux'
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import {
  fetchShippedProducts,
  fetchStockProducts,
  fetchSalesProducts
} from '../../core/actions/products'

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

function TableList({ title, subtitle, data }) {
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>{title}</h4>
            <p className={classes.cardCategoryWhite}>
              {subtitle}
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={headers}
              tableData={Object.keys(data[0])}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

const Tables = ({ fetchShippedProducts, fetchStockProducts, fetchSalesProducts }) => {

  const shippedProducts = useSelector(state => state.shippedProducts)
  const stockProducts = useSelector(state => state.stockProducts)
  const salesProducts = useSelector(state => state.salesProducts)

  useEffect(() => {
    fetchShippedProducts()
    fetchStockProducts()
    fetchSalesProducts()
  }, [])

  const Loaded = ({ title, subtitle, selector }) => {
    const { fetched, data } = selector

    if (fetched && data && data.length > 0) {
      return (
        <TableList
          title={title}
          subtitle={subtitle}
          data
        />
      )
    }

    return null
  }

  return (
    <>
      <Loaded
        title={'Shipped Products'}
        subtitle={'Table of shipped products'}
        data={shippedProducts}
      />
      <Loaded
        title={'Stock Products'}
        subtitle={'Table of stock products'}
        data={stockProducts}
      />
      <Loaded
        title={'Sale'}
        subtitle={'Table of sales'}
        data={salesProducts}
      />
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShippedProducts: () => dispatch(fetchShippedProducts()),
    fetchSalesProducts: () => dispatch(fetchSalesProducts()),
    fetchStockProducts: () => dispatch(fetchStockProducts()),
  }
}

export default connect(null, mapDispatchToProps)(Tables)