<template>
  <section class="property-info">
    <h1>Informações da Residência</h1>
    <ul>
      <li><strong>Tamanho:</strong> {{ size }} m²</li>
      <li><strong>Quantidade de quartos:</strong> {{ rooms }}</li>
      <li><strong>Quantidade banheiros:</strong> {{ bathrooms }}</li>
      <li><strong>Quantidade vagas na garagem:</strong> {{ parkingSpaces }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "RootParcel",
  props: ["size", "rooms", "bathrooms", "parkingSpaces"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

* {
  font-family: "Roboto", sans-serif;
}

.property-info {
  border: 1px solid #ddd;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}
.property-info h1 {
  margin-bottom: 24px;
  font-size: 1.2em;
  color: #e65100;
  font-weight: 400;
  text-align: center;
}
.property-info ul {
  list-style: none;
  padding: 0;
}
.property-info li {
  margin-bottom: 12px;
  font-size: 1em;
  color: #555;
}
</style>
