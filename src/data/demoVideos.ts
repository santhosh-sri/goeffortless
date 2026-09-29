import type { LanguageModalConfig } from "@/interface/type";

/**
 * "See it in Action" demo videos — the language picker and the three product
 * walkthroughs behind it. Copied from the CMS home payload
 * (landing.json → usecaseFold.languageModalConfig) so the redesigned hero,
 * which no longer renders from the CMS, opens the same modal as goeffortless.ai.
 */
export const demoVideoConfig: LanguageModalConfig = {
  "title": "See it in Action",
  "subtitle": "Choose Your Preferred Language",
  "options": [
    {
      "id": "en",
      "label": "English",
      "flag": "/english.svg",
      "value": "english",
      "videos": [
        {
          "id": "procurement",
          "title": "Effortless Procurement",
          "subtitle": "Faster Approvals, Smarter Buying",
          "videoId": "hLkrP1T2_ok"
        },
        {
          "id": "sales",
          "title": "Effortless Sales",
          "subtitle": "Faster Cash, Full Confidence",
          "videoId": "M7f6cr6vRn4"
        },
        // {
        //   "id": "expenses",
        //   "title": "Effortless Expenses",
        //   "subtitle": "Every Rupee Verified",
        //   "videoId": "3OFsEO-47e0"
        // },
        // {
        //   "id": "contracts",
        //   "title": "Effortless Contracts",
        //   "subtitle": "Predictable Billing",
        //   "videoId": "H845WIK8seA"
        // }
      ]
    },
    {
      "id": "hi",
      "label": "Hindi",
      "flag": "/india.svg",
      "value": "hindi",
      "videos": [
        {
          "id": "procurement",
          "title": "Effortless Procurement",
          "subtitle": "Faster Approvals, Smarter Buying",
          "videoId": "I90Xgg1nEkQ"
        },
        {
          "id": "sales",
          "title": "Effortless Sales",
          "subtitle": "Faster Cash, Full Confidence",
          "videoId": "JRTtM0N0ju0"
        },
        // {
        //   "id": "expenses",
        //   "title": "Effortless Expenses",
        //   "subtitle": "Every Rupee Verified",
        //   "videoId": "QmYvTHXt7Is"
        // },
        // {
        //   "id": "contracts",
        //   "title": "Effortless Contracts",
        //   "subtitle": "Predictable Billing",
        //   "videoId": "FYZ9FmqeAMs"
        // }
      ]
    },
    {
      "id": "ta",
      "label": "Tamil",
      "flag": "/india.svg",
      "value": "tamil",
      "videos": [
        {
          "id": "procurement",
          "title": "Effortless Procurement",
          "subtitle": "Faster Approvals, Smarter Buying",
          "videoId": "DCip0aDekew"
        },
        {
          "id": "sales",
          "title": "Effortless Sales",
          "subtitle": "Faster Cash, Full Confidence",
          "videoId": "sKXkKqV97d8"
        },
        // {
        //   "id": "expenses",
        //   "title": "Effortless Expenses",
        //   "subtitle": "Every Rupee Verified",
        //   "videoId": "rDd1XqjzhGc"
        // },
        // {
        //   "id": "contracts",
        //   "title": "Effortless Contracts",
        //   "subtitle": "Predictable Billing",
        //   "videoId": "wQ99Wo955TI"
        // }
      ]
    }
  ]
};
