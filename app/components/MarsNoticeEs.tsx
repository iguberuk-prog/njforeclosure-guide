/**
 * REQUIRED DISCLOSURE, SPANISH. Do not remove, reword, or shrink.
 *
 * 12 CFR 1015.4 requires MARS disclosures to be made "in the same language as
 * that used in the commercial communication." The pages under /es are
 * commercial communications in Spanish, so they carry this Spanish rendering
 * of the same two sentences required by 1015.4(a), in addition to the
 * sitewide English notice from the root layout.
 *
 * The translation must stay faithful to the rule's English wording. If it is
 * ever edited, have a bilingual New Jersey attorney confirm the rendering.
 */
export default function MarsNoticeEs() {
  return (
    <aside
      aria-label="Aviso importante"
      lang="es"
      className="bg-slate-100 border-t border-b border-slate-300 px-4 py-6"
    >
      <div className="max-w-4xl mx-auto">
        <p className="font-bold text-slate-900 text-base tracking-wide uppercase mb-2">
          Aviso Importante
        </p>
        {/* Two points larger than the site's base text, same as the English notice. */}
        <p className="text-base text-slate-800 leading-relaxed font-medium">
          NJ Foreclosure Guide no está asociado con el gobierno, y nuestro servicio no está aprobado
          por el gobierno ni por su prestamista. Aunque usted acepte esta oferta y utilice nuestro
          servicio, es posible que su prestamista no acepte cambiar su préstamo.
        </p>
      </div>
    </aside>
  );
}
