import axios from "axios";
const headers = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export class Product {
  public id: number;
  public name: string;
  public imageUrl: string | File | null;
  public price: number;
  public updatedAt: string;
  public createdAt: string;

  // the constructor creates the object and if there is no image it replace it with a default box image
  constructor(
    id: number,
    name: string,
    imageUrl: string | File | null,
    price: number,
    updatedAt: string,
    createdAt: string
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    const updatedAtDate = new Date(updatedAt);
    this.updatedAt = updatedAtDate.toLocaleString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
    const createdAtDate = new Date(createdAt);
    this.createdAt = createdAtDate.toLocaleString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    });
  }

  //retriev all products without creating an object from the Product and return all the products as ProductObjects
  public static async getAllProducts() {
    try {
      const response = await axios.get(
        "https://test1.focal-x.com/api/items",
        headers
      );

      let ProductsArray: Array<any> = response.data.map(
        (element: any) =>
          new Product(
            element.id,
            element.name,
            element.image_url,
            element.price,
            element.updated_at,
            element.created_at
          )
      );

      return ProductsArray;
    } catch (error: any) {
      return error.response.status;
    }
  }

  //function to retrieve the data of a specific product
  public static async show(id: number) {
    try {
      const response = await axios.get(
        "https://test1.focal-x.com/api/items/" + id,
        headers
      );
      if (response.status == 201) {
        let resProduct = response.data;
        const product = new Product(
          resProduct.id,
          resProduct.name,
          resProduct.image_url,
          resProduct.price,
          resProduct.updated_at,
          resProduct.created_at
        );
        return {
          data: product,
          status: 201,
        };
      }
    } catch (error: any) {
      if (error.status == 401)
        return {
          data: error.data,
          status: 401,
        };
      else
        return {
          data: "Network error",
          status: 500,
        };
    }
  }

  //adding new product
  public static async addProduct(
    name: string,
    price: number,
    image: File | null
  ) {
    const data = {
      name: name,
      price: `${price == -1 ? "" : price}`,
      image: image,
    };
    let formdata = new FormData();
    for (const [key, value] of Object.entries(data)) {
      formdata.append(key, value || "");
    }
    try {
      await axios.post(
        "https://test1.focal-x.com/api/items",
        formdata,
        headers
      );
      return null;
    } catch (error: any) {
      if (error.response) {
        if (error.response.status == 422) {
          let errors = {};
          Object.entries(error.response.data.errors).forEach((element) => {
            errors = { ...errors, [element[0]]: element[1] };
          });
          return errors;
        } else {
          return { error: "Failed To Add Product" };
        }
      } else {
        return { error: "Network Error" };
      }
    }
  }

  public async updateProduct() {
    try {
      const data = {
        name: this.name,
        price: `${this.price}`,
        image: typeof this.imageUrl == "string" ? "" : this.imageUrl,
        _method: "PUT",
      };
      let formdata = new FormData();
      for (const [key, value] of Object.entries(data)) {
        formdata.append(key, value || "");
      }
      await axios.post(
        "https://test1.focal-x.com/api/items/" + this.id,
        formdata,
        headers
      );
      return null;
    } catch (error: any) {
      if (error.response) {
        if (error.response.status == 422) {
          let errors = {};
          Object.entries(error.response.data.errors).forEach((element) => {
            errors = { ...errors, [element[0]]: element[1] };
          });
          return errors;
        } else {
          return { error: "Failed To Update Product" };
        }
      } else {
        return { error: "Network Error" };
      }
    }
  }

  //this function deletes the object from the database
  public async delete() {
    try {
      await axios.delete(
        `https://test1.focal-x.com/api/items/${this.id}`,
        headers
      );
    } catch (error: any) {
      return error.data.message;
    }
  }
}
