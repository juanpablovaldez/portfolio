import { Suspense } from "react";
import CertificationList from "@/components/specific/CertificationList";
import EducationList from "@/components/specific/EducationList";
import EducationSkeleton from "@/components/skeletons/EducationSkeleton";

async function EducationContent() {
  return (
    <>
      <EducationList />
      <CertificationList />
    </>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section__heading">Education</h2>
      <article className="education section__content">
        <Suspense fallback={<EducationSkeleton />}>
          <EducationContent />
        </Suspense>
      </article>
    </section>
  );
}

export default Education;
