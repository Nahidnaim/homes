<template>
  <div class="all-address pt-80">
    <div class="row">
      <!-- Registered office (Rajshahi) -->
      <div class="col-lg-6">
        <div class="card bg-theme">
          <div class="card-body">
            <h2 class="secondary-title mb-3 text-white">
              Registered Office (Rajshahi)
            </h2>
            <ul class="nav flex-column">
              <li class="nav-item">
                <i class="fas fa-map-marker-alt mr-2"></i>
                <span
                  >Amana Saleha Garden, 90, Sagorpara, Boalia, Rajshahi-6100,
                  Bangladesh</span
                >
              </li>
              <li class="nav-item">
                <i class="fas fa-phone-alt mr-2"></i>
                <span class="">+880721776221, +880721776221, 01307609696</span>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">
                  <i class="fas fa-envelope mr-2"></i>
                  <span>amanahomes@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Natore Office start -->
      <div class="col-lg-6">
        <div class="card bg-theme">
          <div class="card-body">
            <h2 class="secondary-title mb-3 text-white">Natore Office</h2>
            <ul class="nav flex-column">
              <li class="nav-item">
                <i class="fas fa-map-marker-alt mr-2"></i>
                <span
                  >Amana Tower (10st Floor), Kanaikhali, Natore-6400,
                  Bangladesh</span
                >
              </li>
              <li class="nav-item">
                <i class="fas fa-phone-alt mr-2"></i>
                <span class="">{{ companyPhone }}</span>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">
                  <i class="fas fa-envelope mr-2"></i>
                  <span>amanahomes@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- corporate office uttara -->
      <div class="col-lg-6">
        <div class="card bg-theme">
          <div class="card-body">
            <h2 class="secondary-title mb-3 text-white">
              Corporate Office (Uttara)
            </h2>
            <ul class="nav flex-column">
              <li class="nav-item">
                <i class="fas fa-map-marker-alt mr-2"></i>
                <span
                  >Amena Villa-7th Floor, House-27, Road-2, Sector-9, Uttara
                  Model Town, Dhaka-1230, Bangladesh.</span
                >
              </li>
              <li class="nav-item">
                <i class="fas fa-phone-alt mr-2"></i>
                <span class="">{{ companyPhone }}</span>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">
                  <i class="fas fa-envelope mr-2"></i>
                  <span>amanahomes@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Banani Office -->
      <div class="col-lg-6">
        <div class="card bg-theme">
          <div class="card-body">
            <h2 class="secondary-title mb-3 text-white">Banani Office</h2>
            <ul class="nav flex-column">
              <li class="nav-item">
                <i class="fas fa-map-marker-alt mr-2"></i>
                <span
                  >House-111 (2nd Floor), Road-08, Block-C, Banani, Dhaka-1213,
                  Bangladesh.</span
                >
              </li>
              <li class="nav-item">
                <span class="">{{ companyPhone }}</span>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">
                  <i class="fas fa-envelope mr-2"></i>
                  <span>amanahomes@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddressComponent',
}
</script>
