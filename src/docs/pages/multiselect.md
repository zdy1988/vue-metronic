<row>
  <column :md="6">
    <portlet title="DEFAULT FORM" icon="pencil" theme="light" bordered>
      <formbox-group>
        <formbox label="Name">
          <textbox></textbox>
        </formbox>
        <formbox label="Name">
          <multiselect
            v-model="selected"
            :options="options">
          </multiselect>
        </formbox>
        <formbox label="Name" help="Enter Name" horizontal>
          <multiselect
            v-model="selected"
            :options="options">
          </multiselect>
        </formbox>
        <formbox label="Name" help="Enter Name">
          <multiselect
            v-model="selected"
            :options="options">
          </multiselect> 
        </formbox>
      </formbox-group>
    </portlet>
  </column>
  <column :md="6">
    <portlet title="DEFAULT FORM" icon="pencil" theme="light" bordered>
      <formbox-group>
        <h3>Single select (object)</h3>
        <formbox label="请选择" help="请选择帮助">
          <multiselect
            v-model="value2"
            :options="options2"
            select-label="选择此项"
            selected-label="已选此项"
            deselect-label="移除此项"
            track-by="name"
            label="name"
            placeholder="请选择"
            :searchable="false"
            :allow-empty="true">
          </multiselect>
        </formbox>
      </formbox-group>
      <formbox-group>
        <h3>Select with search</h3>
        <formbox label="请选择" help="请选择帮助">
          <multiselect
            v-model="value3"
            :options="options2"
            select-label="选择此项"
            selected-label="已选此项"
            deselect-label="移除此项"
            track-by="name"
            label="name"
            placeho der="请选择">
          </multiselect>
        </formbox>
      </formbox-group>
      <formbox-group>
        <h3>Multiple select</h3>
        <formbox label="请选择" help="请选择帮助">
          <multiselect
            v-model="value4"
            :options="options2"
            select-label="选择此项"
            selected-label="已选此项"
            deselect-label="移除此项"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
            :hide-selected="true"
            :preserve-search="true"
            track-by="name"
            label="name"
            placeholder="请选择">
          </multiselect>
        </formbox>
      </formbox-group>
    </portlet>
  </column>
</row>
<script>
  export default{
    data () {
      return {
        selected: null,
        options: ['list', 'of', 'options'],
        value2: null,
        options2: [
          { name: 'Vue.js', language: 'JavaScript' },
          { name: 'Rails', language: 'Ruby' },
          { name: 'Sinatra', language: 'Ruby' },
          { name: 'Laravel', language: 'PHP', $isDisabled: true },
          { name: 'Phoenix', language: 'Elixir' }
        ],
        value3: null,
        value4: null
      }
    }
  }
</script>
