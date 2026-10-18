import { ExternalLink, MapPin, MessageCircle, X } from "lucide-react";
import { waLink } from "@/lib/demo/wa";
import type { Branch } from "./branchData";

interface BranchModalProps {
  branch: Branch | null;
  onClose: () => void;
}

const BranchModal = ({ branch, onClose }: BranchModalProps) => {
  if (!branch) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}>
      <div
        className="bg-white rounded-xl max-w-md w-full p-5 shadow-lg border border-stone-200 space-y-4"
        onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between border-b border-stone-100 pb-3">
          <div>
            <span className="text-[10px] font-bold uppercase text-red-700 bg-red-50 px-2 py-0.5 rounded">
              {branch.cityLabel}
            </span>
            <h4 className="font-bold text-lg text-stone-900 mt-1">{branch.name}</h4>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-xs text-stone-700">
          <div>
            <span className="text-[10px] uppercase font-bold text-stone-500 block">Alamat Lengkap</span>
            <p className="mt-0.5 font-medium text-stone-800 leading-relaxed">{branch.address}</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 bg-stone-50 rounded-lg border border-stone-200">
              <span className="text-[10px] text-stone-500 block">Jam Buka</span>
              <span className="font-bold text-stone-900">10.00 - 22.00 WIB</span>
            </div>
            <div className="p-2 bg-stone-50 rounded-lg border border-stone-200">
              <span className="text-[10px] text-stone-500 block">Status Hari Ini</span>
              <span className="font-bold text-emerald-700 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Buka Sekarang
              </span>
            </div>
          </div>

          <div>
            <span className="text-[10px] uppercase font-bold text-stone-500 block mb-1">Fasilitas Cabang</span>
            <div className="flex flex-wrap gap-1">
              {branch.facilities.map((f) => (
                <span key={f} className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded text-[11px] font-medium">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-2 border-t border-stone-100">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              branch.name + " " + branch.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-600">
            <MapPin className="w-3.5 h-3.5 text-stone-600" />
            <span>Google Maps</span>
            <ExternalLink className="w-3 h-3 text-stone-400" />
          </a>
          <a
            href={waLink(`Halo Admin ${branch.name}, saya ingin reservasi tempat / order di cabang ini.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BranchModal;
