if(readCookie('cookie-notice-dismissed')=='true') {
  {% case site.analytics.provider %}
  {% when "google" %}
  {% include /analytics-providers/google.js %}
  {% when "google-universal" %}
  {% include /analytics-providers/google-universal.js %}
  {% when "custom" %}
  {% include /analytics-providers/custom.js %}
  {% endcase %}
}