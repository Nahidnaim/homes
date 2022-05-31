<template>
  <div class="col-lg-9">
    <div class="sec-header mb-5">
      <h2 class="sec-title text-uppercase">Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero
        natus dignissimos nisi in ut ducimus nobis alias fugiat ipsa! Qui,
        corporis id. Unde atque veritatis est voluptates, eum officia!
      </p>
    </div>
    <!-- terms item start -->
    <div class="terms-item mb-4">
      <h4 id="general" class="text-theme-primary text-capitalize">General</h4>
      <p class="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        explicabo amet voluptatibus id corporis recusandae et aliquid at, quas
        velit repudiandae assumenda veniam laborum ex sapiente delectus, esse
        doloremque inventore.
      </p>
      <ul class="nav flex-column terms-nav">
        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            <b><i>Allotment Policy</i></b> - Application for allotment of
            apartment should be made on prescribed form duly signed by the
            Applicant.
          </div>
        </li>

        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            <b><i>Changes in Plan</i></b> - Because of any unavoidable reason or
            to strike the best interest the Developer reserves the rights to
            make limited changes in the specification design and layout of the
            apartments and other facilities.
          </div>
        </li>

        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            <b><i>Co-operative & Maintenance Policy</i></b> - The Developer will
            form a Co-operative Society and maintenance of the building for
            which a sum of Tk. 50,000/- (Taka Fifty Thousand) only have to be
            paid to the Company. The Company will transfer the amount to the
            buyer's Co-operative Society.
          </div>
        </li>
      </ul>
    </div>
    <!-- terms item end -->
    <!-- payment item start-->
    <div class="terms-item mb-4">
      <h4 id="payment" class="text-theme-primary text-capitalize">Payment</h4>
      <ul class="nav flex-column terms-nav">
        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            <b><i>Payment Policy</i></b> - The purchaser will make the payment
            as per payment schedule, detailed in the agreement.
          </div>
        </li>
        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            <b><i>Payment Methods</i></b> - Payment shall be made by way of Bank
            Draft/ Pay Order/ Cheque/Online payment in favour of AMANA HOMES
            LTD. against which respective receipts will be issued to the
            Allottee/ Purchaser.
          </div>
        </li>
      </ul>
    </div>
    <!-- payment item end-->

    <!-- charges item start-->
    <div class="terms-item mb-4">
      <h4 id="charges" class="text-theme-primary text-capitalize">Charges</h4>
      <ul class="nav flex-column terms-nav">
        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            <b><i>Payment Delay Charge</i></b> - The allottee undertakes to pay
            delay charge at the rate 3% per 30 days on the amount of payment
            delayed beyond the due date. The Company reserves the right to
            cancel the allotment if the payment is delayed beyond 60 days after
            a notice of reminder is duly served upon the allottee at the address
            given in the application form. In such case an amount of Tk.
            1,00,000/- (taka one lac) only will be deducted from the buyer's
            deposited amount for incidental charges.
          </div>
        </li>

        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            <b><i>Shifting Charge</i></b> - The allottee will have the option to
            shift the apartment to any project of the company by giving the sum
            of Tk. 1,00,000/- (taka one lac) only for shifting charge adjusting
            the price of new project.
          </div>
        </li>

        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            <b><i>Other Charges</i></b> - Connection & Document Charges :-
            <ul class="nav pl-3 pt-3 flex-column">
              <li class="nav-item mb-2 d-flex">
                <span class="mr-2"><i class="fas fa-check"></i></span>
                <span>
                  Connection charges/fees, security deposits and other
                  incidental charges/expenses relating to gas, water, sewerage
                  and electric connection etc. are not included in the price of
                  apartments. The allottee/ purchasers will also make these
                  payments.
                </span>
              </li>
              <li class="nav-item mb-2 d-flex">
                <span class="mr-2"><i class="fas fa-check"></i></span>
                <span>
                  The allottee / purchaser will pay stamp duties, registration
                  fees, taxes, legal and Govt. Charges, VAT and other
                  miscellaneous expenses likely to be in connection with the
                  registration of the apartment.
                </span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <!-- charges item end-->

    <!-- project handover item start-->
    <div class="terms-item mb-4">
      <h4 id="project-handover" class="text-theme-primary text-capitalize">
        Project Handover
      </h4>
      <ul class="nav flex-column terms-nav">
        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            The possession of each apartment shall be handed over to the
            allottee/ purchaser on completion of the apartment and after full
            payment of installments, other charges/ dues. Until and Unless the
            dues are not clear, possession of the apartment will be held by the
            company.
          </div>
        </li>

        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            The completion of the project may be affected by unavoidable
            circumstances beyond the company like natural calamities, political
            disturbance and the change in Govt. policy etc. in that case
            allottee / purchaser shall not demand any compensation.
          </div>
        </li>
      </ul>
    </div>
    <!-- project handover item end-->

    <!-- project handover item start-->
    <div class="terms-item mb-4">
      <h4
        id="structural-and-engineering-features"
        class="text-theme-primary text-capitalize"
      >
        Structural & Engineering Features
      </h4>
      <ul class="nav flex-column terms-nav">
        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            Total foundation and super structure will be designed and supervised
            by the experienced and professional structural engineers.
          </div>
        </li>

        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            Building design parameter will be based on American Concrete
            Institute (ACI) and Bangladesh National Building Code (BNBC:2006).
          </div>
        </li>

        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            Comprehensive checking and testing of concrete & reinforcement from
            BUET laboratory.
          </div>
        </li>

        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            Structure will be designed considering earthquakes (up to 7.5
            Richter Scale/ Zone Il) as per Bangladesh National Building Code
            (BNBC).
          </div>
        </li>

        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            Reinforced Cement Concrete (RCC) beam column frame structure.
          </div>
        </li>

        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            Total foundation is designed after sub soil investigation report.
          </div>
        </li>

        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            All material including Steel, Cement, Brick, Brick chips, stone
            chips, coarse sand and other aggregate will be provided as per
            Developer's standard.
          </div>
        </li>

        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>Construction site equipment’s will be good quality.</div>
        </li>

        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            Direct supervision will be executed at every stage of construction
            work by experienced engineers to ensure highest quality.
          </div>
        </li>

        <li class="nav-item mb-3 d-flex">
          <div class="mr-2"><fa :icon="['fas', 'check']" /></div>
          <div>
            One or more engineers will be engaged for full time supervision and
            quality control.
          </div>
        </li>
      </ul>
    </div>
    <!-- project handover item end -->
  </div>
</template>

<script>
export default {
  name: 'TermsConditionMainSection',
}
</script>

<style scoped></style>
