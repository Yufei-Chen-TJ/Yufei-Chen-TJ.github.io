---
title: 联系(Contact)
nav:
  order: 5
  tooltip: 邮箱，地址(Email and location)
---

# {% include icon.html icon="fa-regular fa-envelope" %}联系(Contact)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{%
  include button.html
  type="email"
  tooltip="Assoc. Prof. Y.F. Chen: yufeichen@tongji.edu.cn"
  text="陈宇飞副教授"
  link="yufeichen@tongji.edu.cn"
%}

{%
  include button.html
  type="address"
  tooltip="Room , Zhixin Building, Tongji University (Jiading Campus), 4800 Cao'an Highway, Jiading District, Shanghai."
  text="上海市嘉定区曹安公路4800号同济大学(嘉定校区)智信馆"
  link="https://j.map.baidu.com/48/zdUJ"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col2 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col3 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
