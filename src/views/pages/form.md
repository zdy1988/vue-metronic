<row>
  <column :md=12>

  ### 使用

  <portlet title="表单" icon="map-signs">
    <formbox-group>
      <formbox label="姓名" help="请输入姓名">
        <textbox></textbox>
      </formbox>
      <formbox label="年龄" help="请输入年龄">
        <textbox></textbox>
      </formbox>
      <formbox label="性别">
        <radio-group inline>
          <radio outline>男</radio>
          <radio outline>女</radio>
        </radio-group>
      </formbox>
      <btn slot="top" type="submit" color="blue">提交</btn>
      <btn slot="bottom" type="submit"  color="green">提交</btn>
    </formbox-group>
  </portlet>

  ```html
  <portlet title="表单" icon="map-signs">
    <formbox-group>
      <formbox label="姓名" help="请输入姓名">
        <textbox></textbox>
      </formbox>
      <formbox label="年龄" help="请输入年龄">
        <textbox></textbox>
      </formbox>
      <formbox label="性别">
        <radio-group inline>
          <radio outline>男</radio>
          <radio outline>女</radio>
        </radio-group>
      </formbox>
      <btn slot="top" type="submit" color="blue">提交</btn>
      <btn slot="bottom" type="submit"  color="green">提交</btn>
    </formbox-group>
  </portlet>
  ```

  </column>
</row>
