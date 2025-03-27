<template>
    <div class="form-container">
        <h2>Add a New Product</h2>
        <form @submit.prevent="submitForm">
            <input v-model="productName" type="text" placeholder="Product Name" required />
            <input v-model="manufacturer" type="text" placeholder="Manufacturer" required />
            <input v-model="yearOfRelease" type="text" placeholder="Year of Release" required />
            <input v-model="width" type="text" placeholder="Width" required />
            <input v-model="height" type="text" placeholder="Height" required />
            <input v-model="breadth" type="text" placeholder="Breadth" required />
            <input v-model="serialNo" type="text" placeholder="Serial No" required />
            <textarea v-model="specifications" placeholder="Specifications" required></textarea>
            <button type="submit">Submit</button>
        </form>
        <router-link to="/">Go Back</router-link>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        const productName = ref("");
        const manufacturer = ref("");
        const yearOfRelease = ref("");
        const width = ref("");
        const height = ref("");
        const breadth = ref("");
        const serialNo = ref("");
        const specifications = ref("");

        const submitForm = async () => {
            try {
                const response = await fetch("https://us-central1-product-collections.cloudfunctions.net/addProduct", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        productName: productName.value,
                        manufacturer: manufacturer.value,
                        yearOfRelease: yearOfRelease.value,
                        width: width.value,
                        height: height.value,
                        breadth: breadth.value,
                        serialNo: serialNo.value,
                        specifications: specifications.value
                    })
                });

                const result = await response.json();
                alert(result.message || "Product added successfully!");

                // ✅ Clear form fields after successful submission
                productName.value = "";
                manufacturer.value = "";
                yearOfRelease.value = "";
                width.value = "";
                height.value = "";
                breadth.value = "";
                serialNo.value = "";
                specifications.value = "";

            } catch (error) {
                console.error("Error:", error);
                alert("Failed to add product.");
            }
        };

        return { productName, manufacturer, yearOfRelease, width, height, breadth, serialNo, specifications, submitForm };
    }
};
</script>

<style>
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

form {
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 10px;
}

input,
textarea {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px;
    font-size: 16px;
    background: green;
    color: white;
    border: none;
    cursor: pointer;
}
</style>