<template>
  <row>
    <column :md="6">
      <portlet title="DEFAULT FORM" icon="pencil" theme="light" bordered>
        <formbox-group>
          <formbox label="Name">
            <textbox></textbox>
          </formbox>
          <formbox label="Age" help="Enter Age">
            <textbox></textbox>
          </formbox>
          <formbox label="Sex" help="Enter Sex">
            <textbox placeholder="Please Enter Sex"></textbox>
          </formbox>
          <formbox label="Sex" help="Enter Sex" horizontal>
            <textbox placeholder="Please Enter Sex"></textbox>
          </formbox>
          <textbox placeholder="Input"></textbox>
          <br>
          <textbox placeholder="Input" icon="user"></textbox>
          <br>
          <textbox placeholder="Input">
            <fa name="user" slot="before"></fa>
            <fa name="user-md" slot="before"></fa>
            <btn state="success" @click="alert" slot="after">
              <fa name="arrow-left"></fa> Go!
            </btn>
          </textbox>
          <btn slot="actions">Click</btn>
        </formbox-group>
        <br>
        <h4>Input Size</h4>
        <formbox-group>
          <formbox label="Large">
            <textbox size="lg" v-model="text" icon="user"></textbox>
          </formbox>
          <formbox label="Default">
            <textbox icon="user"></textbox>
          </formbox>
          <formbox label="Small">
            <textbox  icon="user" size="sm"></textbox>
          </formbox>
          <formbox label="Large">
            <textbox placeholder="Input" size="lg">
              <fa name="user" slot="before"></fa>
              <btn state="success" @click="alert" slot="after">
                <fa name="arrow-left"></fa> Go!
              </btn>
            </textbox>
          </formbox>
          <formbox label="Default">
            <textbox placeholder="Input">
              <fa name="user" slot="before"></fa>
              <btn state="success" @click="alert" slot="after">
                <fa name="arrow-left"></fa> Go!
              </btn>
            </textbox>
          </formbox>
          <formbox label="Small">
            <textbox placeholder="Input" size="sm">
              <fa name="user" slot="before"></fa>
              <btn state="success" @click="alert" slot="after">
                <fa name="arrow-left"></fa> Go!
              </btn>
            </textbox>
          </formbox>
        </formbox-group>
        <h4>Input Width Size</h4>
        <formbox-group>
          <formbox label="Fluid Input">
            <textbox></textbox>
          </formbox>
          <formbox label="Extra Large Input">
            <textbox width-size="xlarge"></textbox>
          </formbox>
          <formbox label="Large Input">
            <textbox width-size="large"></textbox>
          </formbox>
          <formbox label="Medium Input">
            <textbox width-size="medium"></textbox>
          </formbox>
          <formbox label="Small Input">
            <textbox width-size="small"></textbox>
          </formbox>
          <formbox label="Extra Small Input">
            <textbox width-size="xsmall"></textbox>
          </formbox>
        </formbox-group>
        <h4>Circle Input</h4>
        <formbox-group>
          <formbox label="Input" help="Input Help">
            <textbox placeholder="Input" shape="circle"></textbox>
          </formbox>
          <formbox label="Input" help="Input Help">
            <textbox placeholder="Input" shape="circle">
              <fa name="user" slot="before"></fa>
            </textbox>
          </formbox>
        </formbox-group>
      </portlet>
      <portlet title="DEFAULT FORM" icon="pencil" theme="light" bordered>
        <h4>Form Row Seperated</h4>
        <formbox-group seperated="row">
          <formbox label="Name">
            <textbox></textbox>
          </formbox>
          <formbox label="Age">
            <textbox></textbox>
          </formbox>
          <formbox label="Sex">
            <textbox></textbox>
          </formbox>
        </formbox-group>
        <br>
        <h4>Form Row Bordered</h4>
        <formbox-group seperated="border">
          <formbox label="Name" horizontal>
            <textbox></textbox>
          </formbox>
          <formbox label="Age" horizontal>
            <textbox></textbox>
          </formbox>
          <formbox label="Sex" horizontal>
            <textbox></textbox>
          </formbox>
        </formbox-group>
        <br>
        <h4>Form Label Stripped</h4>
        <formbox-group seperated="border" stripped="label">
          <formbox label="Name" horizontal>
            <textbox></textbox>
          </formbox>
          <formbox label="Age" horizontal>
            <textbox></textbox>
          </formbox>
          <formbox label="Sex" horizontal>
            <textbox></textbox>
          </formbox>
        </formbox-group>
        <br>
        <h4>Form Row Stripped</h4>
        <formbox-group seperated="border" stripped="row">
          <formbox label="Name" horizontal>
            <textbox></textbox>
          </formbox>
          <formbox label="Age" horizontal>
            <textbox></textbox>
          </formbox>
          <formbox label="Sex" horizontal>
            <textbox></textbox>
          </formbox>
          <div class="row text-center" slot="actions">
            <btn>Click</btn>
          </div>
        </formbox-group>
      </portlet>
    </column>
    <column :md="6">
      <portlet title="DEFAULT FORM" icon="pencil" theme="light" bordered>
        <h4>Checkbox Style</h4>
        <row class="padding-tb-20">
          <column :md="12">
            <checkbox>Default</checkbox> <checkbox outline style="margin-left: 20px;">Outline</checkbox>
          </column>
        </row>
        <h4>Checkbox Status</h4>
        <formbox-group>
          <formbox>
            <checkbox-group inline>
              <checkbox v-model="checkboxStatus">Default</checkbox>
            </checkbox-group>
            <textbox-group>
              <textbox v-model="checkboxStatus" disabled></textbox>
              <btn @click="checkboxStatus = !checkboxStatus" state="success">
                <fa name="arrow-left"></fa>
                Change
              </btn>
            </textbox-group>
          </formbox>
        </formbox-group>
        <h4>Checkbox Group Style</h4>
        <formbox-group>
          <formbox label="Checkbox" horizontal>
            <checkbox-group>
              <checkbox outline>Default</checkbox>
              <checkbox outline>Default</checkbox>
              <checkbox outline disabled>Disabled</checkbox>
            </checkbox-group>
          </formbox>
          <formbox label="Checkbox Inline" horizontal>
            <checkbox-group inline>
              <checkbox>Default</checkbox>
              <checkbox>Default</checkbox>
              <checkbox disabled>Disabled</checkbox>
            </checkbox-group>
          </formbox>
        </formbox-group>
        <h4>Checkbox Group Status</h4>
        <formbox-group>
          <formbox>
            <checkbox-group inline v-model="checkboxGroupStatus">
              <checkbox :value="item.value" v-for="item in checkboxGroup" :key="item.value">{{item.name}}</checkbox>
            </checkbox-group>
            <textbox-group>
              <textbox v-model="checkboxGroupStatus" disabled></textbox>
              <btn @click="checkboxGroupStatus = ['green']" state="success">
                <fa name="arrow-left"></fa>
                Change
              </btn>
            </textbox-group>
          </formbox>
        </formbox-group>
      </portlet>
      <portlet title="DEFAULT FORM" icon="pencil" theme="light" bordered>
        <h4>Radio Style</h4>
        <row class="padding-tb-20">
          <column :md="12">
            <radio name="test">Default</radio> <radio outline style="margin-left: 20px;" name="test">Outline</radio>
          </column>
        </row>
        <h4>Radio Status</h4>
        <formbox-group>
          <formbox horizontal>
            <radio-group inline>
              <radio v-model="radioStatus">Default</radio>
            </radio-group>
            <textbox-group>
              <textbox v-model="radioStatus" disabled></textbox>
              <btn @click="radioStatus = !radioStatus" state="success">
                <fa name="arrow-left"></fa>
                Change
              </btn>
            </textbox-group>
          </formbox>
        </formbox-group>
        <h4>Radio Group Style</h4>
        <formbox-group>
          <formbox label="Checkbox" horizontal>
            <radio-group>
              <radio outline>Default</radio>
              <radio outline>Default</radio>
              <radio outline disabled>Disabled</radio>
            </radio-group>
          </formbox>
          <formbox label="Checkbox Inline" horizontal>
            <radio-group inline name="radios">
              <radio>Default</radio>
              <radio>Default</radio>
              <radio disabled>Disabled</radio>
            </radio-group>
          </formbox>
        </formbox-group>
        <h4>Radio Group Status</h4>
        <formbox-group>
          <formbox>
            <radio-group inline v-model="radioGroupStatus">
              <radio :value="item.value" v-for="item in radioGroup" :key="item.value">{{item.name}}</radio>
            </radio-group>
            <textbox-group>
              <textbox v-model="radioGroupStatus" disabled></textbox>
              <btn @click="radioGroupStatus = 'green'" state="success">
                <fa name="arrow-left"></fa>
                Change
              </btn>
            </textbox-group>
          </formbox>
        </formbox-group>
      </portlet>
      <portlet title="SELECT" icon="pencil" theme="light" bordered>
        <h4>Select Value: {{selectValue}}</h4>
        <selectbox :options="radioGroup" option-text="name" option-value="value" placeHolder="Please select" v-model="selectValue">
          <option value="yellow">Yellow</option>
        </selectbox>
        <br>
        <btn color="red" @click="selectValue='red'">red</btn>
        <btn color="blue" @click="selectValue='blue'">blue</btn>
        <btn color="yellow" @click="selectValue='yellow'">yellow</btn>
        <btn color="green" @click="selectValue='green'">green</btn>
        <hr>
        <h4>Select Value: {{selectValue2}}</h4>
        <selectbox :options="radioGroup" option-text="name" option-value="value" placeHolder="Please select" v-model="selectValue2" multiple>
          <option value="yellow">Yellow</option>
        </selectbox>
        <br>
        <btn @click="selectValue2=['red','yellow']">red and yellow</btn>
      </portlet>
    </column>
  </row>
</template>
<script>
  export default{
    data () {
      return {
        text: 22,
        text2: 33,
        orientation: 'vertical',
        formattertext1: 12,
        formatter1: function (value) {
          return parseFloat(value).toFixed(2)
        },
        alert: function () {
          window.alert(1)
        },
        numbers: [1, 2],
        checkboxStatus: true,
        checkboxGroup: [
          {name: 'Red', value: 'red'},
          {name: 'Blue', value: 'blue'},
          {name: 'Green', value: 'green'}
        ],
        checkboxGroupStatus: ['red', 'blue'],
        radioStatus: false,
        radioGroup: [
          {name: 'Red', value: 'red'},
          {name: 'Blue', value: 'blue'},
          {name: 'Green', value: 'green'}
        ],
        radioGroupStatus: 'red',

        selectValue: 'red',
        selectValue2: ['red', 'blue']
      }
    }
  }
</script>
