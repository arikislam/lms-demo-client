<template>
  <admin-layout>
    <div className="content__area__body">
      <section-header :title="title">

      </section-header>
<!--      <div className="row align-items-lg-stretch">-->
<!--        <div className="col-lg-3 col-sm-6 mb30">-->
<!--          <div className="statistic statistic&#45;&#45;income">-->
<!--            <div className="statistic__main">-->
<!--              <div className="icon">-->
<!--                <i className="sv-icon sv-shopping-bag"></i>-->
<!--              </div>-->
<!--              <div className="statistic__content">-->
<!--                <p className="title">Total Income</p>-->
<!--                <h3>4,795</h3>-->
<!--              </div>-->
<!--            </div>-->
<!--            <p className="payment__status receivable">Receivables: <span>$0.00 / $0.00</span></p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div className="col-lg-3 col-sm-6 mb30">-->
<!--          <div className="statistic statistic&#45;&#45;expense">-->
<!--            <div className="statistic__main">-->
<!--              <div className="icon">-->
<!--                <i className="sv-icon sv-tax"></i>-->
<!--              </div>-->
<!--              <div className="statistic__content">-->
<!--                <p className="title">Total Expenses</p>-->
<!--                <h3>8,374</h3>-->
<!--              </div>-->
<!--            </div>-->
<!--            <p className="payment__status payable">Payables: <span>$0.00 / $0.00</span></p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div className="col-lg-3 col-sm-6 mb30">-->
<!--          <div className="statistic statistic&#45;&#45;cash">-->
<!--            <div className="statistic__main">-->
<!--              <div className="icon">-->
<!--                <i className="sv-icon sv-ticket"></i>-->
<!--              </div>-->
<!--              <div className="statistic__content">-->
<!--                <p className="title">Cash In Hand</p>-->
<!--                <h3>34,560</h3>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div className="col-lg-3 col-sm-6 mb30">-->
<!--          <div className="statistic statistic&#45;&#45;total">-->
<!--            <div className="statistic__main">-->
<!--              <div className="icon">-->
<!--                <i className="sv-icon sv-archive"></i>-->
<!--              </div>-->
<!--              <div className="statistic__content">-->
<!--                <p className="title">Total Product (In Stock)</p>-->
<!--                <h3>9,643</h3>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div className="section__header">-->
<!--        <h2>Quick Access</h2>-->

<!--      </div>-->
<!--      <div className="row">-->
<!--        <div className="col-lg-2 col-sm-4 col-6">-->
<!--          <a href="#" className="quick__access__item">-->
<!--                            <span className="icon background__danger">-->
<!--                                <i className="sv-icon sv-archive"></i>-->
<!--                            </span>-->
<!--            <span className="title">Items</span>-->
<!--          </a>-->
<!--        </div>-->
<!--        <div className="col-lg-2 col-sm-4 col-6">-->
<!--          <a href="#" className="quick__access__item">-->
<!--                            <span className="icon background__themeColor">-->
<!--                                <i className="sv-icon sv-chart-line"></i>-->
<!--                            </span>-->
<!--            <span className="title">Sales</span>-->
<!--          </a>-->
<!--        </div>-->
<!--        <div className="col-lg-2 col-sm-4 col-6">-->
<!--          <a href="#" className="quick__access__item">-->
<!--                            <span className="icon background__green">-->
<!--                                <i className="sv-icon sv-chart-pie"></i>-->
<!--                            </span>-->
<!--            <span className="title">Purchase</span>-->
<!--          </a>-->
<!--        </div>-->
<!--        <div className="col-lg-2 col-sm-4 col-6">-->
<!--          <a href="#" className="quick__access__item">-->
<!--                            <span className="icon background__purple">-->
<!--                                <i className="sv-icon sv-gift"></i>-->
<!--                            </span>-->
<!--            <span className="title">Product</span>-->
<!--          </a>-->
<!--        </div>-->
<!--        <div className="col-lg-2 col-sm-4 col-6">-->
<!--          <a href="#" className="quick__access__item">-->
<!--                            <span className="icon background__primary">-->
<!--                                <i className="sv-icon sv-server"></i>-->
<!--                            </span>-->
<!--            <span className="title">Category</span>-->
<!--          </a>-->
<!--        </div>-->
<!--        <div className="col-lg-2 col-sm-4 col-6">-->
<!--          <a href="#" className="quick__access__item">-->
<!--                            <span className="icon background__warning">-->
<!--                                <i className="sv-icon sv-collection"></i>-->
<!--                            </span>-->
<!--            <span className="title">Supplier</span>-->
<!--          </a>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div className="row">-->
<!--        <div className="col-lg-8 mb30">-->
<!--          <div className="dash__block radius-15 revunue__chart">-->
<!--            <div className="revenue__header">-->
<!--              <h3 className="title">Revenue</h3>-->
<!--              <div className="purchase chart__info">-->
<!--                <p>Total Purchase</p>-->
<!--                <h3>5647</h3>-->
<!--              </div>-->
<!--              <div className="collection chart__info">-->
<!--                <p>Total Cash Collection</p>-->
<!--                <h3>8965</h3>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div className="revenue__body">-->
<!--              &lt;!&ndash; <img src="assets/img/chart-1.png" alt=""> &ndash;&gt;-->
<!--              <canvas id="revenueChart"></canvas>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div className="col-lg-4 mb30">-->
<!--          <div className="dash__block radius-15 sales__chart">-->
<!--            <div className="sales__header">-->
<!--              <div className="sv-select">-->
<!--                <span className="icon"><i className="sv-icon sv-arrow-down"></i></span>-->
<!--                <select className="form__control">-->
<!--                  <option value="">Total Sales</option>-->
<!--                  <option value="">Total Sales</option>-->
<!--                  <option value="">Total Sales</option>-->
<!--                </select>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div className="sales__body">-->
<!--              <img src="assets/img/chart-2.png" alt="">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div className="row">-->
<!--        <div className="col-xl-6 lg-mb30">-->
<!--          <div className="dash__block no__padding radius-15">-->
<!--            <div className="block__header p40">-->
<!--              <h4>Expense</h4>-->
<!--              <a href="#" className="button button&#45;&#45;md button__themeColor hover__highlight">View All</a>-->
<!--            </div>-->
<!--            <div className="sv-table__flat">-->
<!--              <div className="table__row">-->
<!--                <div className="table__col col__name col__head">-->
<!--                  <p>Name</p>-->
<!--                </div>-->
<!--                <div className="table__col col__amount col__head">-->
<!--                  <p>Due Amount</p>-->
<!--                </div>-->
<!--                <div className="table__col col__date col__head">-->
<!--                  <p>Due Date</p>-->
<!--                </div>-->
<!--                <div className="table__col col__total col__head">-->
<!--                  <p>Total Amount</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div className="table__row">-->
<!--                <div className="table__col col__name">-->
<!--                  <p>David McDon</p>-->
<!--                </div>-->
<!--                <div className="table__col col__amount">-->
<!--                  <p>$23,000</p>-->
<!--                </div>-->
<!--                <div className="table__col col__date">-->
<!--                  <p>May 23, 2021</p>-->
<!--                </div>-->
<!--                <div className="table__col col__total">-->
<!--                  <p>$65,05445</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div className="table__row">-->
<!--                <div className="table__col col__name">-->
<!--                  <p>David McDon</p>-->
<!--                </div>-->
<!--                <div className="table__col col__amount">-->
<!--                  <p>$23,000</p>-->
<!--                </div>-->
<!--                <div className="table__col col__date">-->
<!--                  <p>May 23, 2021</p>-->
<!--                </div>-->
<!--                <div className="table__col col__total">-->
<!--                  <p>$65,05445</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div className="table__row">-->
<!--                <div className="table__col col__name">-->
<!--                  <p>David McDon</p>-->
<!--                </div>-->
<!--                <div className="table__col col__amount">-->
<!--                  <p>$23,000</p>-->
<!--                </div>-->
<!--                <div className="table__col col__date">-->
<!--                  <p>May 23, 2021</p>-->
<!--                </div>-->
<!--                <div className="table__col col__total">-->
<!--                  <p>$65,05445</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div className="table__row">-->
<!--                <div className="table__col col__name">-->
<!--                  <p>David McDon</p>-->
<!--                </div>-->
<!--                <div className="table__col col__amount">-->
<!--                  <p>$23,000</p>-->
<!--                </div>-->
<!--                <div className="table__col col__date">-->
<!--                  <p>May 23, 2021</p>-->
<!--                </div>-->
<!--                <div className="table__col col__total">-->
<!--                  <p>$65,05445</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div className="table__row">-->
<!--                <div className="table__col col__name">-->
<!--                  <p>David McDon</p>-->
<!--                </div>-->
<!--                <div className="table__col col__amount">-->
<!--                  <p>$23,000</p>-->
<!--                </div>-->
<!--                <div className="table__col col__date">-->
<!--                  <p>May 23, 2021</p>-->
<!--                </div>-->
<!--                <div className="table__col col__total">-->
<!--                  <p>$65,05445</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div className="col-xl-6">-->
<!--          <div className="dash__block no__padding radius-15">-->
<!--            <div className="block__header p40">-->
<!--              <h4>Upcoming</h4>-->
<!--              <a href="#" className="button button&#45;&#45;md button__themeColor hover__highlight">View All</a>-->
<!--            </div>-->
<!--            <div className="sv-table__flat">-->
<!--              <div className="table__row">-->
<!--                <div className="table__col col__name col__head">-->
<!--                  <p>Name</p>-->
<!--                </div>-->
<!--                <div className="table__col col__amount col__head">-->
<!--                  <p>Due Amount</p>-->
<!--                </div>-->
<!--                <div className="table__col col__date col__head">-->
<!--                  <p>Due Date</p>-->
<!--                </div>-->
<!--                <div className="table__col col__total col__head">-->
<!--                  <p>Total Amount</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div className="table__row">-->
<!--                <div className="table__col col__name">-->
<!--                  <p>David McDon</p>-->
<!--                </div>-->
<!--                <div className="table__col col__amount">-->
<!--                  <p>$23,000</p>-->
<!--                </div>-->
<!--                <div className="table__col col__date">-->
<!--                  <p>May 23, 2021</p>-->
<!--                </div>-->
<!--                <div className="table__col col__total">-->
<!--                  <p>$65,05445</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div className="table__row">-->
<!--                <div className="table__col col__name">-->
<!--                  <p>David McDon</p>-->
<!--                </div>-->
<!--                <div className="table__col col__amount">-->
<!--                  <p>$23,000</p>-->
<!--                </div>-->
<!--                <div className="table__col col__date">-->
<!--                  <p>May 23, 2021</p>-->
<!--                </div>-->
<!--                <div className="table__col col__total">-->
<!--                  <p>$65,05445</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div className="table__row">-->
<!--                <div className="table__col col__name">-->
<!--                  <p>David McDon</p>-->
<!--                </div>-->
<!--                <div className="table__col col__amount">-->
<!--                  <p>$23,000</p>-->
<!--                </div>-->
<!--                <div className="table__col col__date">-->
<!--                  <p>May 23, 2021</p>-->
<!--                </div>-->
<!--                <div className="table__col col__total">-->
<!--                  <p>$65,05445</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div className="table__row">-->
<!--                <div className="table__col col__name">-->
<!--                  <p>David McDon</p>-->
<!--                </div>-->
<!--                <div className="table__col col__amount">-->
<!--                  <p>$23,000</p>-->
<!--                </div>-->
<!--                <div className="table__col col__date">-->
<!--                  <p>May 23, 2021</p>-->
<!--                </div>-->
<!--                <div className="table__col col__total">-->
<!--                  <p>$65,05445</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div className="table__row">-->
<!--                <div className="table__col col__name">-->
<!--                  <p>David McDon</p>-->
<!--                </div>-->
<!--                <div className="table__col col__amount">-->
<!--                  <p>$23,000</p>-->
<!--                </div>-->
<!--                <div className="table__col col__date">-->
<!--                  <p>May 23, 2021</p>-->
<!--                </div>-->
<!--                <div className="table__col col__total">-->
<!--                  <p>$65,05445</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </admin-layout>
</template>

<script>

export default {
  name: "AdminIndex",
  setup () {
    const title = 'Admin Dashboard'
    return {title}
  }

}
</script>

<style scoped>

</style>