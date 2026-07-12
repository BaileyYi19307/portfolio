import CaseShell from "@/app/components/CaseShell";

export default function OCRStatementExtractionPage() {
  return (
    <CaseShell>
      <section className="case-hero">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
          Document Processing Pipeline
        </p>
        <h1 className="text-4xl font-bold mb-4">OCR Statement Extraction</h1>
        <p className="text-lg">Status: In Progress</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>

        <p>
          I am building a document-processing pipeline that extracts
          structured transaction data from bank and credit card statement
          PDFs. The goal is to convert visually formatted financial
          statements into reviewable transaction records that can later be
          cleaned, categorized, and exported.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Problem</h2>

        <p>
          Financial statements are usually distributed as PDFs. Although
          transaction data appears tabular to a human reader, the
          underlying document often stores text as independent words
          positioned on a page rather than as a structured table.
        </p>

        <p className="mt-4">
          Standard text extraction frequently loses layout information,
          making it difficult to determine which dates, descriptions,
          amounts, and balances belong to the same transaction row.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Current Approach
        </h2>

        <p>
          The system extracts OCR text along with word coordinates and
          reconstructs transaction rows using layout-aware heuristics.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <code>
            Raw PDF → OCR Extraction → Word Coordinates → Visual
            Line Grouping → Transaction Row Detection → Structured
            Transactions
          </code>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Technical Challenges
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Grouping OCR words into the correct transaction rows
          </li>
          <li>
            Identifying transaction table regions across different
            statement formats
          </li>
          <li>
            Distinguishing transaction rows from statement metadata
          </li>
          <li>
            Inferring column boundaries using recurring word positions
          </li>
          <li>
            Supporting both bank statements and credit card statements
          </li>
          <li>
            Avoiding assumptions such as every transaction line ending
            with an amount
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Extraction Strategy
        </h2>

        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Extract words and coordinates using OCR
          </li>
          <li>
            Group nearby words into visual lines
          </li>
          <li>
            Score lines based on dates, amounts, and transaction-like
            text
          </li>
          <li>
            Detect likely transaction table headers
          </li>
          <li>
            Infer column boundaries from recurring x-coordinate
            positions
          </li>
          <li>
            Parse structured transaction fields
          </li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Current Progress
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Processed multiple sample financial statements
          </li>
          <li>
            Built OCR extraction using pytesseract and pdf2image
          </li>
          <li>
            Implemented visual line grouping using coordinate
            proximity
          </li>
          <li>
            Developed regex patterns for dates, amounts, and merchant
            text
          </li>
          <li>
            Built transaction row scoring logic
          </li>
          <li>
            Started designing column-bound inference for transaction
            parsing
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Planned User Workflow
        </h2>

        <ol className="list-decimal pl-6 space-y-2">
          <li>User uploads a statement PDF</li>
          <li>Backend extracts text and layout information</li>
          <li>Parser identifies transaction rows</li>
          <li>Structured transaction data is generated</li>
          <li>
            User reviews results in an editable transaction table
          </li>
          <li>
            User corrects extraction or categorization errors
          </li>
          <li>
            Cleaned transactions are exported as CSV
          </li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Future Enhancements
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Merchant categorization and expense classification
          </li>
          <li>
            Unknown transaction prioritization
          </li>
          <li>
            Human-in-the-loop correction workflows
          </li>
          <li>
            Learning from user corrections over time
          </li>
          <li>
            Export to accounting-friendly formats
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Technologies
        </h2>

        <div className="flex flex-wrap gap-2">
          {[
            "Python",
            "Pandas",
            "pytesseract",
            "pdf2image",
            "Regex",
            "OCR",
            "FastAPI",
            "PostgreSQL",
            "React",
            "TypeScript",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </CaseShell>
  );
}