<template>
  <admin-layout>
    <div class="section__header">
      <h2>Coupons</h2>
      <div class="list__more__options">
        <div class="form__group input__group">
          <input type="text" class="form__control form__control--sm form__control--dark" placeholder="Search...">
          <span class="icon"><i class="sv-icon sv-search"></i></span>
        </div>
        <router-link :to="{name: 'admin.coupons.create'}" class="button button--md button__themeColor">
          <i class="sv-icon sv-plus"></i>
          Add New Coupon
        </router-link>
      </div>
    </div>

    <div class="sv-table">
      <div class="table__row row__head">
        <div class="table__col col__head col__check">
          <label class="sv-checkbox">
            <input type="checkbox">
            <span></span>
          </label>
        </div>
        <div class="table__col col__head col__customer">
          <p>Name</p>
        </div>
        <div class="table__col col__head col__email">
          <p>Email Address</p>
        </div>
        <div class="table__col col__head col__phone">
          <p>Phone Number</p>
        </div>
        <div class="table__col col__head col__address">
          <p>Address</p>
        </div>
        <div class="table__col col__head col__due">
          <p>Due Amount</p>
        </div>
        <div class="table__col col__head col__action">
          <p>Action</p>
        </div>
      </div>
      <div class="table__row">
        <div class="table__col col__check">
          <label class="sv-checkbox">
            <input type="checkbox">
            <span></span>
          </label>
        </div>
        <div class="table__col col__customer">
          <div class="table__customer">
            <div class="customer__thumb">
              <img src="assets/img/user.png" alt="">
            </div>
            <p class="customer__name">David McDon</p>
          </div>
        </div>
        <div class="table__col col__email">
          <p>hellowpdeveloper__007@example.com</p>
        </div>
        <div class="table__col col__phone">
          <p>+94356-4444-3436</p>
        </div>
        <div class="table__col col__address">
          <p>Celeste Slater 606-3727 Ullamcorper. Street</p>
        </div>
        <div class="table__col col__due">
          <p>$5,47,645.245</p>
        </div>
        <div class="table__col col__action">
          <a href="#" class="action__edit"><i class="sv-icon sv-pencil-alt"></i></a>
          <a href="#" class="action__delete"><i class="sv-icon sv-trash"></i></a>
        </div>
      </div>
      <div class="table__row">
        <div class="table__col col__check">
          <label class="sv-checkbox">
            <input type="checkbox">
            <span></span>
          </label>
        </div>
        <div class="table__col col__customer">
          <div class="table__customer">
            <div class="customer__thumb">
              <img src="assets/img/user.png" alt="">
            </div>
            <p class="customer__name">David McDon</p>
          </div>
        </div>
        <div class="table__col col__email">
          <p>david@example.com</p>
        </div>
        <div class="table__col col__phone">
          <p>+94356-4444-3436</p>
        </div>
        <div class="table__col col__address">
          <p>Celeste Slater 606-3727 Ullamcorper. Street NewYork</p>
        </div>
        <div class="table__col col__due">
          <p>$5,47,645.245</p>
        </div>
        <div class="table__col col__action">
          <a href="#" class="action__edit"><i class="sv-icon sv-pencil-alt"></i></a>
          <a href="#" class="action__delete"><i class="sv-icon sv-trash"></i></a>
        </div>
      </div>
      <div class="table__row">
        <div class="table__col col__check">
          <label class="sv-checkbox">
            <input type="checkbox">
            <span></span>
          </label>
        </div>
        <div class="table__col col__customer">
          <div class="table__customer">
            <div class="customer__thumb">
              <img src="assets/img/user.png" alt="">
            </div>
            <p class="customer__name">David McDon</p>
          </div>
        </div>
        <div class="table__col col__email">
          <p>david@example.com</p>
        </div>
        <div class="table__col col__phone">
          <p>+94356-4444-3436</p>
        </div>
        <div class="table__col col__address">
          <p>Celeste Slater 606-3727 Ullamcorper. Street</p>
        </div>
        <div class="table__col col__due">
          <p>$5,47,645.245</p>
        </div>
        <div class="table__col col__action">
          <a href="#" class="action__edit"><i class="sv-icon sv-pencil-alt"></i></a>
          <a href="#" class="action__delete"><i class="sv-icon sv-trash"></i></a>
        </div>
      </div>
      <div class="table__row">
        <div class="table__col col__check">
          <label class="sv-checkbox">
            <input type="checkbox">
            <span></span>
          </label>
        </div>
        <div class="table__col col__customer">
          <div class="table__customer">
            <div class="customer__thumb">
              <img src="assets/img/user.png" alt="">
            </div>
            <p class="customer__name">David McDon</p>
          </div>
        </div>
        <div class="table__col col__email">
          <p>david@example.com</p>
        </div>
        <div class="table__col col__phone">
          <p>+94356-4444-3436</p>
        </div>
        <div class="table__col col__address">
          <p>Celeste Slater 606-3727 Ullamcorper. Street</p>
        </div>
        <div class="table__col col__due">
          <p>$5,47,645.245</p>
        </div>
        <div class="table__col col__action">
          <a href="#" class="action__edit"><i class="sv-icon sv-pencil-alt"></i></a>
          <a href="#" class="action__delete"><i class="sv-icon sv-trash"></i></a>
        </div>
      </div>
      <div class="table__row">
        <div class="table__col col__check">
          <label class="sv-checkbox">
            <input type="checkbox">
            <span></span>
          </label>
        </div>
        <div class="table__col col__customer">
          <div class="table__customer">
            <div class="customer__thumb">
              <img src="assets/img/user.png" alt="">
            </div>
            <p class="customer__name">David McDon</p>
          </div>
        </div>
        <div class="table__col col__email">
          <p>david@example.com</p>
        </div>
        <div class="table__col col__phone">
          <p>+94356-4444-3436</p>
        </div>
        <div class="table__col col__address">
          <p>Celeste Slater 606-3727 Ullamcorper. Street</p>
        </div>
        <div class="table__col col__due">
          <p>$5,47,645.245</p>
        </div>
        <div class="table__col col__action">
          <a href="#" class="action__edit"><i class="sv-icon sv-pencil-alt"></i></a>
          <a href="#" class="action__delete"><i class="sv-icon sv-trash"></i></a>
        </div>
      </div>
      <div class="table__row">
        <div class="table__col col__check">
          <label class="sv-checkbox">
            <input type="checkbox">
            <span></span>
          </label>
        </div>
        <div class="table__col col__customer">
          <div class="table__customer">
            <div class="customer__thumb">
              <img src="assets/img/user.png" alt="">
            </div>
            <p class="customer__name">David McDon</p>
          </div>
        </div>
        <div class="table__col col__email">
          <p>david@example.com</p>
        </div>
        <div class="table__col col__phone">
          <p>+94356-4444-3436</p>
        </div>
        <div class="table__col col__address">
          <p>Celeste Slater 606-3727 Ullamcorper. Street</p>
        </div>
        <div class="table__col col__due">
          <p>$5,47,645.245</p>
        </div>
        <div class="table__col col__action">
          <a href="#" class="action__edit"><i class="sv-icon sv-pencil-alt"></i></a>
          <a href="#" class="action__delete"><i class="sv-icon sv-trash"></i></a>
        </div>
      </div>
      <div class="table__row">
        <div class="table__col col__check">
          <label class="sv-checkbox">
            <input type="checkbox">
            <span></span>
          </label>
        </div>
        <div class="table__col col__customer">
          <div class="table__customer">
            <div class="customer__thumb">
              <img src="assets/img/user.png" alt="">
            </div>
            <p class="customer__name">David McDon</p>
          </div>
        </div>
        <div class="table__col col__email">
          <p>david@example.com</p>
        </div>
        <div class="table__col col__phone">
          <p>+94356-4444-3436</p>
        </div>
        <div class="table__col col__address">
          <p>Celeste Slater 606-3727 Ullamcorper. Street</p>
        </div>
        <div class="table__col col__due">
          <p>$5,47,645.245</p>
        </div>
        <div class="table__col col__action">
          <a href="#" class="action__edit"><i class="sv-icon sv-pencil-alt"></i></a>
          <a href="#" class="action__delete"><i class="sv-icon sv-trash"></i></a>
        </div>
      </div>
      <div class="table__row">
        <div class="table__col col__check">
          <label class="sv-checkbox">
            <input type="checkbox">
            <span></span>
          </label>
        </div>
        <div class="table__col col__customer">
          <div class="table__customer">
            <div class="customer__thumb">
              <img src="assets/img/user.png" alt="">
            </div>
            <p class="customer__name">David McDon</p>
          </div>
        </div>
        <div class="table__col col__email">
          <p>david@example.com</p>
        </div>
        <div class="table__col col__phone">
          <p>+94356-4444-3436</p>
        </div>
        <div class="table__col col__address">
          <p>Celeste Slater 606-3727 Ullamcorper. Street</p>
        </div>
        <div class="table__col col__due">
          <p>$5,47,645.245</p>
        </div>
        <div class="table__col col__action">
          <a href="#" class="action__edit"><i class="sv-icon sv-pencil-alt"></i></a>
          <a href="#" class="action__delete"><i class="sv-icon sv-trash"></i></a>
        </div>
      </div>
      <div class="table__row">
        <div class="table__col col__check">
          <label class="sv-checkbox">
            <input type="checkbox">
            <span></span>
          </label>
        </div>
        <div class="table__col col__customer">
          <div class="table__customer">
            <div class="customer__thumb">
              <img src="assets/img/user.png" alt="">
            </div>
            <p class="customer__name">David McDon</p>
          </div>
        </div>
        <div class="table__col col__email">
          <p>david@example.com</p>
        </div>
        <div class="table__col col__phone">
          <p>+94356-4444-3436</p>
        </div>
        <div class="table__col col__address">
          <p>Celeste Slater 606-3727 Ullamcorper. Street</p>
        </div>
        <div class="table__col col__due">
          <p>$5,47,645.245</p>
        </div>
        <div class="table__col col__action">
          <a href="#" class="action__edit"><i class="sv-icon sv-pencil-alt"></i></a>
          <a href="#" class="action__delete"><i class="sv-icon sv-trash"></i></a>
        </div>
      </div>
      <div class="table__row">
        <div class="table__col col__check">
          <label class="sv-checkbox">
            <input type="checkbox">
            <span></span>
          </label>
        </div>
        <div class="table__col col__customer">
          <div class="table__customer">
            <div class="customer__thumb">
              <img src="assets/img/user.png" alt="">
            </div>
            <p class="customer__name">David McDon</p>
          </div>
        </div>
        <div class="table__col col__email">
          <p>david@example.com</p>
        </div>
        <div class="table__col col__phone">
          <p>+94356-4444-3436</p>
        </div>
        <div class="table__col col__address">
          <p>Celeste Slater 606-3727 Ullamcorper. Street</p>
        </div>
        <div class="table__col col__due">
          <p>$5,47,645.245</p>
        </div>
        <div class="table__col col__action">
          <a href="#" class="action__edit"><i class="sv-icon sv-pencil-alt"></i></a>
          <a href="#" class="action__delete"><i class="sv-icon sv-trash"></i></a>
        </div>
      </div>
    </div>

    <div class="pagination pt30">
      <ul class="pagination__list">
        <li class="pagination__item"><a href="#" class="pagination__link"><i class="sv-icon sv-caret-left"></i></a></li>
        <li class="pagination__item"><a href="#" class="pagination__link">1</a></li>
        <li class="pagination__item"><span class="pagination__link active">2</span></li>
        <li class="pagination__item"><a href="#" class="pagination__link">3</a></li>
        <li class="pagination__item"><a href="#" class="pagination__link">4</a></li>
        <li class="pagination__item"><a href="#" class="pagination__link"><i class="sv-icon sv-caret-right"></i></a></li>
      </ul>
    </div>

  </admin-layout>
</template>

<script>
export default {
  name: "CouponList"
}
</script>

<style scoped>

</style>