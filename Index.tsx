import { LetterGrid } from '@/components/LetterGrid';
import { BookOpen, Cog, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center mb-12">
            {/* Icon Header */}
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-elevated">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-card">
                <Cog className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="w-10 h-10 bg-letter-c rounded-lg flex items-center justify-center shadow-card">
                <Zap className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 font-heading">
              Thermal Engineering
              <span className="block text-primary">Picture Dictionary</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
              Explore the fascinating world of 
              <span className="text-accent font-semibold"> Prime Movers</span>, 
              <span className="text-primary font-semibold"> Hybrid Vehicles</span>, and 
              <span className="text-letter-e font-semibold"> Turbomachinery</span> 
              through our interactive A-Z guide
            </p>
          </div>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              26 Engineering Terms
            </div>
            <div className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20">
              Audio Pronunciation
            </div>
            <div className="bg-letter-o/10 text-letter-o px-4 py-2 rounded-full text-sm font-medium border border-letter-o/20">
              Visual Learning
            </div>
            <div className="bg-letter-r/10 text-letter-r px-4 py-2 rounded-full text-sm font-medium border border-letter-r/20">
              Kid-Friendly Definitions
            </div>
          </div>

          {/* Letter Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-center text-foreground mb-8 font-heading">
              Choose a Letter to Begin Learning
            </h2>
            <LetterGrid />
          </div>

          {/* Bottom Info */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Tap any letter above to discover engineering concepts from 
              <span className="font-semibold">Air Compressor</span> to 
              <span className="font-semibold">Zero Emission Vehicle</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
