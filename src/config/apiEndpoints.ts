import { Data } from "@/lib/types";

const BASE_URL = process.env.BASE_URL;

const API_ENDPOINTS = {
  AUTHENTICATION: {
    REGISTER_USER: `${BASE_URL}/register`,
    LOGIN_USER: `${BASE_URL}/login`,
    LOGOUT_USER: `${BASE_URL}/logout`,
  },

  USER: {
    GET_LOGGED_USER: `${BASE_URL}/user`,
    GET_ALL_USER: `${BASE_URL}/all-user`,
    UPDATE_PROFILE: `${BASE_URL}/update-profile`,
    UPDATE_USER_ROLE: (USER_ID: Data["USER_ID"]) =>
      `${BASE_URL}/update-user-role/${USER_ID}`,
  },

  BANNER: {
    CREATE_BANNER: `${BASE_URL}/create-banner`,
    UPDATE_BANNER: (BANNER_ID: Data["BANNER_ID"]) =>
      `${BASE_URL}/update-banner/${BANNER_ID}`,
    DELETE_BANNER: (BANNER_ID: Data["BANNER_ID"]) =>
      `${BASE_URL}/delete-banner/${BANNER_ID}`,
    BANNERS: `${BASE_URL}/banners`,
    BANNER_BY_ID: (BANNER_ID: Data["BANNER_ID"]) =>
      `${BASE_URL}/banner/${BANNER_ID}`,
  },

  PROMO: {
    CREATE_PROMO: `${BASE_URL}/create-promo`,
    UPDATE_PROMO: (PROMO_ID: Data["PROMO_ID"]) =>
      `${BASE_URL}/update-promo/${PROMO_ID}`,
    DELETE_PROMO: (PROMO_ID: Data["PROMO_ID"]) =>
      `${BASE_URL}/delete-promo/${PROMO_ID}`,
    PROMOS: `${BASE_URL}/promos`,
    PROMO_BY_ID: (PROMO_ID: Data["PROMO_ID"]) =>
      `${BASE_URL}/promo/${PROMO_ID}`,
  },

  CATEGORY: {
    CREATE_CATEGORY: `${BASE_URL}/create-category`,
    UPDATE_CATEGORY: (CATEGORY_ID: Data["CATEGORY_ID"]) =>
      `${BASE_URL}/update-category/${CATEGORY_ID}`,
    DELETE_CATEGORY: (CATEGORY_ID: Data["CATEGORY_ID"]) =>
      `${BASE_URL}/delete-category/${CATEGORY_ID}`,
    CATEGORIES: `${BASE_URL}/categories`,
    CATEGORY_BY_ID: (CATEGORY_ID: Data["CATEGORY_ID"]) =>
      `${BASE_URL}/category/${CATEGORY_ID}`,
  },

  ACTIVITY: {
    CREATE_ACTIVITY: `${BASE_URL}/create-activity`,
    UPDATE_ACTIVITY: (ACTIVITY_ID: Data["ACTIVITY_ID"]) =>
      `${BASE_URL}/update-activity/${ACTIVITY_ID}`,
    DELETE_ACTIVITY: (ACTIVITY_ID: Data["ACTIVITY_ID"]) =>
      `${BASE_URL}/delete-activity/${ACTIVITY_ID}`,
    ACTIVITIES: `${BASE_URL}/activities`,
    ACTIVITY_BY_ID: (ACTIVITY_ID: Data["ACTIVITY_ID"]) =>
      `${BASE_URL}/activity/${ACTIVITY_ID}`,
    ACTIVITY_BY_CATEGORY_ID: (CATEGORY_ID: Data["CATEGORY_ID"]) =>
      `${BASE_URL}/activities-by-category/${CATEGORY_ID}`,
  },

  PAYMENT_METHOD: {
    PAYMENT_METHODS: `${BASE_URL}/payment-methods`,
    GENERATE_PAYMENT_METHODS: `${BASE_URL}/generate-payment-methods`,
  },

  CART: {
    ADD_TO_CART: `${BASE_URL}/add-cart`,
    UPDATE_CART: (CART_ID: Data["CART_ID"]) =>
      `${BASE_URL}/update-cart/${CART_ID}`,
    DELETE_CART: (CART_ID: Data["CART_ID"]) =>
      `${BASE_URL}/delete-cart/${CART_ID}`,
    CARTS: `${BASE_URL}/carts`,
  },

  TRANSACTION: {
    TRANSACTION_BY_ID: (TRANSACTION_ID: Data["TRANSACTION_ID"]) =>
      `${BASE_URL}/transaction/${TRANSACTION_ID}`,
    MY_TRANSACTIONS: `${BASE_URL}/my-transactions`,
    ALL_TRANSACTIONS: `${BASE_URL}/all-transactions`,
    CREATE_TRANSACTION: `${BASE_URL}/create-transaction`,
    CANCEL_TRANSACTION: (TRANSACTION_ID: Data["TRANSACTION_ID"]) =>
      `${BASE_URL}/cancel-transaction/${TRANSACTION_ID}`,
    UPDATE_TRANSACTION_PROOF_PAYMENT: (
      TRANSACTION_ID: Data["TRANSACTION_ID"]
    ) => `${BASE_URL}/update-transaction-proof-payment/${TRANSACTION_ID}`,
    UPDATE_TRANSACTION_STATUS: (TRANSACTION_ID: Data["TRANSACTION_ID"]) =>
      `${BASE_URL}/update-transaction-status/${TRANSACTION_ID}`,
  },

  UPLOAD_IMAGE: {
    UPLOAD_IMAGE: `${BASE_URL}/upload-image`,
  },
};

export default API_ENDPOINTS;
