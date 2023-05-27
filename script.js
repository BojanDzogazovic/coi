// First task
let hiddenContent = document.getElementById("hidden_content");
let loadMore = document.getElementById("load_more");

loadMore.addEventListener("click", () => {
  hiddenContent.classList.add("section__content--show");
  hiddenContent.classList.remove("section__content--hidden");
  loadMore.style.display = "none";
});

// Third task
let countryPlaceholder = document.getElementById("country_placeholder");

(async () => {
  //I am just gonna put api key here straight forward
  const response = await fetch(
    //This api takes ip address of client sending it by default, so it should work, and show different country based on location it is triggered
    "https://api.ipgeolocation.io/ipgeo?apiKey=fc850190d0bb4033b335050390a64fb0"
  );

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  const data = await response.json();

  if (data) {
    sessionStorage.setItem("country", data.country_name);
    countryPlaceholder.innerHTML = data.country_name;
  }
})();

// Fourth task

// I am not really sure what is asked of me specifically, and I am not that familiar with shopify liquid, but from my experience with other templating engines, and from what I could saw in figma, and my understanding of task described in email, it should be something like this:

/*
{% for row in section.blocks %}
  <div class="row">
    {% for column in row.blocks %}
      <div class="column">
        {% for block in column.blocks %}
          {% case block.type %}
            {% when 'icon' %}
              {% if block.fields.icon_src != blank %}
                <div class="icon">
                  <i class="{{ block.fields.icon_src }}"></i>
                </div>
              {% endif %}
            {% when 'text' %}
              {% if block.fields.title != blank %}
                <div class="title">
                  <h2>{{ block.fields.title }}</h2>
                </div>
              {% endif %}
              {% if block.fields.text != blank %}
                <div class="text">
                  <p>{{ block.fields.text }}</p>
                </div>
              {% endif %}
          {% endcase %}
        {% endfor %}
      </div>
    {% endfor %}
  </div>
{% endfor %}
*/
