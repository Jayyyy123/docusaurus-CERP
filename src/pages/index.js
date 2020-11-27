import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import "./styles.module.css";

// feature props
const basics = [
  {
    title: "Basics",
    description: (
      <>
        <h4>Introduction</h4>
        <p>
          Introduction to CERP and things to understand before you start your
          implementation
        </p>
      </>
    ),
    description2: (
      <>
        <h4>Setting Up</h4>
        <p>
          Learn how to configure CERP for your company and organization
          structure
        </p>
      </>
    ),
    description3: (
      <>
        <h4>Using CERP</h4>
        <p>
          Learn how to navigate your way around the user interface and helpful
          utilities
        </p>
      </>
    ),
    description4: (
      <>
        <h4>Automation</h4>
        <p>
          Learn how to automate CERP for saving your time from performing
          periodic mundane tasks
        </p>
      </>
    ),
    featuresUrl: "docs/basics/introduction/introduction",
    featuresUrl2: "docs/basics/settingUp/settingUp",
    featuresUrl3: "docs/basics/usingCERP/usingCERP",
    featuresUrl4: "docs/basics/automation/automation",
  },
];

const coreModules = [
  {
    title: "Core Modules",
    description: (
      <>
        <h4>Accounts</h4>
        <p>
          Financial accounting from setup to billing, journals, ledgers and
          reports
        </p>
      </>
    ),
    description2: (
      <>
        <h4>Stock</h4>
        <p>
          Inventory management with hierarchical location tree, stock movements,
          serials and batches
        </p>
      </>
    ),
    description3: (
      <>
        <h4>CRM</h4>
        <p>
          Tracking presales process from Lead capturing, tracking open
          Opportunities, to emails and calls
        </p>
      </>
    ),
    description4: (
      <>
        <h4>Selling</h4>
        <p>
          Selling covers sales operations like Quotations (Offers), Sales Orders
          and Delivery tracking
        </p>
      </>
    ),
    description5: (
      <>
        <h4>Buying</h4>
        <p>
          Manage purchasing in CERP right from material requisition, supplier
          quotes to Purchase Orders
        </p>
      </>
    ),
    description6: (
      <>
        <h4>Human Resources</h4>
        <p>
          Leave and Attendance Tracking, Expense Claims, Salary and Payroll,
          Recruitment, Performance and more
        </p>
      </>
    ),
    description7: (
      <>
        <h4>Projects</h4>
        <p>
          Project and task management with full integration with billing and
          cost centers
        </p>
      </>
    ),
    description8: (
      <>
        <h4>Support</h4>
        <p>
          Track customer tickets and issues, maintain server levels and track
          response and resolutions
        </p>
      </>
    ),
    description9: (
      <>
        <h4>Asset</h4>
        <p>
          Fixed asset management and tracking with depreciation, asset
          allocation and movement tracking
        </p>
      </>
    ),
    description10: (
      <>
        <h4>Quality</h4>
        <p>
          Quality management system with procedures, goals, tracking and
          reviewing
        </p>
      </>
    ),
    featuresUrl: "docs/coreModules/accounts/accounts",
    featuresUrl2: "docs/coreModules/stock/stock",
    featuresUrl3: "docs/coreModules/crm/crm",
    featuresUrl4: "docs/coreModules/selling/selling",
    featuresUrl5: "docs/coreModules/buying/buying",
    featuresUrl6: "docs/coreModules/hR/hR",
    featuresUrl7: "docs/coreModules/projects/projects",
    featuresUrl8: "docs/coreModules/support/support",
    featuresUrl9: "docs/coreModules/coreAsset/coreAsset",
    featuresUrl10: "docs/coreModules/quality/quality",
  },
];

const industryModules = [
  {
    title: "Industry Modules",
    description: (
      <>
        <h4>Manufacturing</h4>
        <p>
          Manage multi-level Bill of Materials, plan and track production with
          Work Orders
        </p>
      </>
    ),
    description2: (
      <>
        <h4>Education</h4>
        <p>
          Manage the entire life cycle of a student from admission, enrollment
          to attendance and assessment
        </p>
      </>
    ),
    description3: (
      <>
        <h4>Healthcare</h4>
        <p>
          Manage patients, practitioner schedules and their reports with
          appointments, consultations, procedures and lab reports
        </p>
      </>
    ),
    description4: (
      <>
        <h4>Agriculture</h4>
        <p>
          Manage multiple farms, crops, growing cycles, crop diseases and much
          more
        </p>
      </>
    ),
    description5: (
      <>
        <h4>Hospitality</h4>
        <p>
          Management multiple restaurants and hotels with table and room booking
          (beta)
        </p>
      </>
    ),
    featuresUrl: "docs/industryModule/manufact/manufact",
    featuresUrl2: "docs/industryModule/education/education",
    featuresUrl3: "docs/industryModule/healthcare/healthcare",
    featuresUrl4: "docs/industryModule/agri/agri",
    featuresUrl5: "docs/industryModule/hospitality/hospitality",
  },
];

// body
function Basics({
  title,
  description,
  description2,
  description3,
  description4,
  featuresUrl,
  featuresUrl2,
  featuresUrl3,
  featuresUrl4,
}) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <h1>{title}</h1>
      <div className={clsx("flex__content", styles.flex__content)}>
        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl}
        >
          <div>{description}</div>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl2}
        >
          <div>{description2}</div>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl3}
        >
          <div>{description3}</div>
        </Link>
      </div>
      <Link
        style={{ textDecoration: "none" }}
        className={clsx("description", styles.description)}
        to={featuresUrl4}
      >
        <div>{description4}</div>
      </Link>
    </div>
  );
}

function CoreModules({
  title,
  description,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
  description8,
  description9,
  description10,
  featuresUrl,
  featuresUrl2,
  featuresUrl3,
  featuresUrl4,
  featuresUrl5,
  featuresUrl6,
  featuresUrl7,
  featuresUrl8,
  featuresUrl9,
  featuresUrl10,
}) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <h1>{title}</h1>
      <div className={clsx("flex__content", styles.flex__content)}>
        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl}
        >
          <div>{description}</div>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl2}
        >
          <div>{description2}</div>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl3}
        >
          <div>{description3}</div>
        </Link>
      </div>

      <div className={clsx("flex__content", styles.flex__content)}>
        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl4}
        >
          <div>{description4}</div>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl5}
        >
          <div>{description5}</div>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl6}
        >
          <div>{description6}</div>
        </Link>
      </div>

      <div className={clsx("flex__content", styles.flex__content)}>
        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl7}
        >
          <div>{description7}</div>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl8}
        >
          <div>{description8}</div>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl9}
        >
          <div>{description9}</div>
        </Link>
      </div>
      <Link
        style={{ textDecoration: "none" }}
        className={clsx("description", styles.description)}
        to={featuresUrl10}
      >
        <div>{description10}</div>
      </Link>
    </div>
  );
}

function IndustryModules({
  title,
  description,
  description2,
  description3,
  description4,
  description5,
  featuresUrl,
  featuresUrl2,
  featuresUrl3,
  featuresUrl4,
  featuresUrl5,
}) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <h1>{title}</h1>
      <div className={clsx("flex__content", styles.flex__content)}>
        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl}
        >
          <div>{description}</div>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl2}
        >
          <div>{description2}</div>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl3}
        >
          <div>{description3}</div>
        </Link>
      </div>

      <div className={clsx("flex__content", styles.flex__content)}>
        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl4}
        >
          <div>{description4}</div>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          className={clsx("description", styles.description)}
          to={featuresUrl5}
        >
          <div>{description5}</div>
        </Link>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="CERP"
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          {/* Title */}
          <h1 className="hero__title">{siteConfig.title}</h1>
          {/* Subtitle */}
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          {/* Get started button */}
        </div>
      </header>
      <main>
        {basics && basics.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {basics.map((props, idx) => (
                  <Basics className="content__feature" key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {coreModules && coreModules.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className={clsx("row", styles.row)}>
                {coreModules.map((props, idx) => (
                  <CoreModules
                    className="content__feature2"
                    key={idx}
                    {...props}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
        {industryModules && industryModules.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className={clsx("row", styles.row)}>
                {industryModules.map((props, idx) => (
                  <IndustryModules
                    className="content__feature2"
                    key={idx}
                    {...props}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
