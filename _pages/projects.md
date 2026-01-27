---
layout: page
title: projects
permalink: /projects/
nav: true
nav_order: 2
---

{% if site.projects.size > 0 %}

  <div class="projects">
    <div class="row">
      {% for project in site.projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  </div>
{% else %}
  <p>No projects available at the moment.</p>
{% endif %}
