// Maps Portuguese product slugs → English slugs for /en/ URLs
// Vendor slugs are already in English — only products need mapping

module.exports = {
  products: {
    "devsecops":                        "devsecops",
    "sast-dast-sca":                    "sast-dast-sca",
    "desenvolvimento-seguro-gerenciado":"managed-appsec",
    "modelagem-ameacas":                "threat-modeling",
    "revisao-codigo":                   "code-review",
    "treinamento-devsecops":            "devsecops-training",
    "code-protection":                  "code-protection",
    "data-discovery":                   "data-discovery",
    "dspm":                             "dspm",
    "criptografia-kms-hsm":             "encryption-kms-hsm",
    "dlp":                              "dlp",
    "consentimento-lgpd":               "lgpd-consent",
    "cspm":                             "cspm",
    "pentest":                          "pentest",
    "red-team":                         "red-team",
    "assessment-maturidade":            "maturity-assessment",
    "grc":                              "grc",
    "iso-27001":                        "iso-27001",
    "lgpd":                             "lgpd",
    "pci-dss":                          "pci-dss",
    "servicos-gerenciados":             "managed-services",
    "soc-monitoramento":                "soc-monitoring",
    "resposta-incidentes":              "incident-response",
    "gestao-vulnerabilidades":          "vulnerability-management",
    "selecao-ferramentas":              "tool-selection",
    "pam":                              "pam",
  },

  industries: {
    "financeiro":  "financial",
    "saude":       "healthcare",
    "varejo":      "retail",
    "tecnologia":  "technology",
    "governo":     "government",
  },

  // Reverse map: English slug → Portuguese slug (for EN→PT links)
  get productsReverse() {
    return Object.fromEntries(
      Object.entries(this.products).map(([pt, en]) => [en, pt])
    );
  },
};
